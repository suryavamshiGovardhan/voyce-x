
-- Sessions table
CREATE TABLE public.iit_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_code TEXT NOT NULL UNIQUE,
  partner_a_label TEXT,
  partner_b_label TEXT,
  partner_a_completed_at TIMESTAMPTZ,
  partner_b_completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE ON public.iit_sessions TO anon;
GRANT SELECT, INSERT, UPDATE ON public.iit_sessions TO authenticated;
GRANT ALL ON public.iit_sessions TO service_role;

ALTER TABLE public.iit_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create a session"
  ON public.iit_sessions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read sessions"
  ON public.iit_sessions FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update completion timestamps"
  ON public.iit_sessions FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE TRIGGER iit_sessions_updated_at
  BEFORE UPDATE ON public.iit_sessions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX idx_iit_sessions_code ON public.iit_sessions(session_code);

-- Responses table
CREATE TABLE public.iit_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES public.iit_sessions(id) ON DELETE CASCADE,
  partner TEXT NOT NULL CHECK (partner IN ('a','b')),
  dimension TEXT NOT NULL,
  question_id TEXT NOT NULL,
  answer_value INTEGER NOT NULL,
  answer_text TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (session_id, partner, question_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.iit_responses TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.iit_responses TO authenticated;
GRANT ALL ON public.iit_responses TO service_role;

ALTER TABLE public.iit_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read responses"
  ON public.iit_responses FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert responses"
  ON public.iit_responses FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update responses"
  ON public.iit_responses FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX idx_iit_responses_session ON public.iit_responses(session_id, partner);
