
-- 1) Blogs: drop the policy that bypassed moderation
DROP POLICY IF EXISTS "blogs_select_published" ON public.blogs;

-- 2) IIT tables: drop overly permissive (USING true / WITH CHECK true) policies
DROP POLICY IF EXISTS "Anyone can read sessions" ON public.iit_sessions;
DROP POLICY IF EXISTS "Anyone can update completion timestamps" ON public.iit_sessions;
DROP POLICY IF EXISTS "Anyone can create a session" ON public.iit_sessions;
DROP POLICY IF EXISTS "Anyone can read responses" ON public.iit_responses;
DROP POLICY IF EXISTS "Anyone can update responses" ON public.iit_responses;
DROP POLICY IF EXISTS "Anyone can insert responses" ON public.iit_responses;

-- Revoke direct table access; all access is via SECURITY DEFINER RPCs below.
REVOKE ALL ON public.iit_sessions FROM anon, authenticated;
REVOKE ALL ON public.iit_responses FROM anon, authenticated;
GRANT ALL ON public.iit_sessions TO service_role;
GRANT ALL ON public.iit_responses TO service_role;

-- Ensure unique constraint for upsert
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'iit_responses_session_partner_question_key'
  ) THEN
    BEGIN
      ALTER TABLE public.iit_responses
        ADD CONSTRAINT iit_responses_session_partner_question_key
        UNIQUE (session_id, partner, question_id);
    EXCEPTION WHEN duplicate_table THEN NULL;
    END;
  END IF;
END $$;

-- 3) Session-code-scoped RPCs (callers must know the session code)

CREATE OR REPLACE FUNCTION public.iit_create_session(p_code text)
RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF p_code IS NULL OR length(p_code) < 4 OR length(p_code) > 12 THEN
    RAISE EXCEPTION 'invalid session code';
  END IF;
  INSERT INTO public.iit_sessions(session_code) VALUES (upper(p_code))
  ON CONFLICT (session_code) DO NOTHING;
  RETURN TRUE;
END $$;

CREATE OR REPLACE FUNCTION public.iit_session_exists(p_code text)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS(SELECT 1 FROM public.iit_sessions WHERE session_code = upper(p_code));
$$;

CREATE OR REPLACE FUNCTION public.iit_session_status(p_code text)
RETURNS TABLE(id uuid, partner_a_completed_at timestamptz, partner_b_completed_at timestamptz)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT id, partner_a_completed_at, partner_b_completed_at
  FROM public.iit_sessions WHERE session_code = upper(p_code);
$$;

CREATE OR REPLACE FUNCTION public.iit_save_partner_info(
  p_code text, p_partner text, p_name text, p_email text
) RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF p_partner NOT IN ('a','b') THEN RAISE EXCEPTION 'invalid partner'; END IF;
  IF p_email IS NOT NULL AND length(p_email) > 254 THEN RAISE EXCEPTION 'invalid email'; END IF;
  IF p_name IS NOT NULL AND length(p_name) > 200 THEN RAISE EXCEPTION 'invalid name'; END IF;
  IF p_partner = 'a' THEN
    UPDATE public.iit_sessions
      SET partner_a_name = p_name, partner_a_email = p_email, updated_at = now()
      WHERE session_code = upper(p_code);
  ELSE
    UPDATE public.iit_sessions
      SET partner_b_name = p_name, partner_b_email = p_email, updated_at = now()
      WHERE session_code = upper(p_code);
  END IF;
END $$;

CREATE OR REPLACE FUNCTION public.iit_mark_complete(p_code text, p_partner text)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF p_partner NOT IN ('a','b') THEN RAISE EXCEPTION 'invalid partner'; END IF;
  IF p_partner = 'a' THEN
    UPDATE public.iit_sessions
      SET partner_a_completed_at = now(), updated_at = now()
      WHERE session_code = upper(p_code);
  ELSE
    UPDATE public.iit_sessions
      SET partner_b_completed_at = now(), updated_at = now()
      WHERE session_code = upper(p_code);
  END IF;
END $$;

CREATE OR REPLACE FUNCTION public.iit_upsert_response(
  p_code text, p_partner text, p_dimension text, p_question_id text, p_value integer
) RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_session_id uuid;
BEGIN
  IF p_partner NOT IN ('a','b') THEN RAISE EXCEPTION 'invalid partner'; END IF;
  IF p_value IS NULL OR p_value < 0 OR p_value > 10 THEN RAISE EXCEPTION 'invalid value'; END IF;
  IF p_dimension IS NULL OR length(p_dimension) > 64 THEN RAISE EXCEPTION 'invalid dimension'; END IF;
  IF p_question_id IS NULL OR length(p_question_id) > 64 THEN RAISE EXCEPTION 'invalid question'; END IF;

  SELECT id INTO v_session_id FROM public.iit_sessions WHERE session_code = upper(p_code);
  IF v_session_id IS NULL THEN RAISE EXCEPTION 'session not found'; END IF;

  INSERT INTO public.iit_responses(session_id, partner, dimension, question_id, answer_value)
  VALUES (v_session_id, p_partner, p_dimension, p_question_id, p_value)
  ON CONFLICT (session_id, partner, question_id)
  DO UPDATE SET answer_value = EXCLUDED.answer_value;
END $$;

CREATE OR REPLACE FUNCTION public.iit_get_responses(p_code text)
RETURNS TABLE(partner text, question_id text, answer_value integer)
LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public AS $$
DECLARE v_id uuid; v_a timestamptz; v_b timestamptz;
BEGIN
  SELECT s.id, s.partner_a_completed_at, s.partner_b_completed_at
    INTO v_id, v_a, v_b
  FROM public.iit_sessions s WHERE s.session_code = upper(p_code);
  IF v_id IS NULL OR v_a IS NULL OR v_b IS NULL THEN RETURN; END IF;
  RETURN QUERY
    SELECT r.partner, r.question_id, r.answer_value
    FROM public.iit_responses r WHERE r.session_id = v_id;
END $$;

-- 4) Lock down EXECUTE: revoke broadly, then grant only what the app needs.
REVOKE ALL ON FUNCTION public.iit_create_session(text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.iit_session_exists(text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.iit_session_status(text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.iit_save_partner_info(text,text,text,text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.iit_mark_complete(text,text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.iit_upsert_response(text,text,text,text,integer) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.iit_get_responses(text) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.iit_create_session(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.iit_session_exists(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.iit_session_status(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.iit_save_partner_info(text,text,text,text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.iit_mark_complete(text,text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.iit_upsert_response(text,text,text,text,integer) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.iit_get_responses(text) TO anon, authenticated;

-- 5) Internal helper / trigger functions — not meant to be callable from the API.
REVOKE ALL ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.is_admin(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.can_moderate(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.validate_blog_required() FROM PUBLIC, anon, authenticated;

-- These RPCs need to stay callable, but only by authenticated users (no anon).
REVOKE ALL ON FUNCTION public.award_points(uuid, integer, text) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.update_streak(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.redeem_referral_code(text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.award_points(uuid, integer, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.update_streak(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.redeem_referral_code(text) TO authenticated;

-- Referral code validation is fine for anon (used pre-signup flows).
REVOKE ALL ON FUNCTION public.validate_referral_code(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.validate_referral_code(text) TO anon, authenticated;
