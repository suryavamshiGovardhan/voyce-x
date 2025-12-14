-- Drop the overly permissive public SELECT policy that exposes user_id
DROP POLICY IF EXISTS "Anyone can view referral codes for validation" ON public.referral_codes;

-- Create a secure function to validate referral codes without exposing user_id
-- This function only returns whether the code is valid, not the user_id
CREATE OR REPLACE FUNCTION public.validate_referral_code(p_code text)
RETURNS TABLE (
  is_valid boolean,
  points_reward integer
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    EXISTS (
      SELECT 1 FROM public.referral_codes rc
      WHERE rc.code = p_code
        AND (rc.expires_at IS NULL OR rc.expires_at > now())
        AND (rc.max_uses IS NULL OR rc.uses < rc.max_uses)
    ) as is_valid,
    COALESCE(
      (SELECT rc.points_reward FROM public.referral_codes rc 
       WHERE rc.code = p_code 
       AND (rc.expires_at IS NULL OR rc.expires_at > now())
       AND (rc.max_uses IS NULL OR rc.uses < rc.max_uses)
       LIMIT 1),
      0
    ) as points_reward;
END;
$$;

-- Create a secure function to redeem a referral code (only for authenticated users)
CREATE OR REPLACE FUNCTION public.redeem_referral_code(p_code text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_referrer_id uuid;
  v_points integer;
  v_referral_id uuid;
BEGIN
  -- Get the referral code details
  SELECT user_id, points_reward INTO v_referrer_id, v_points
  FROM public.referral_codes
  WHERE code = p_code
    AND (expires_at IS NULL OR expires_at > now())
    AND (max_uses IS NULL OR uses < max_uses);
  
  IF v_referrer_id IS NULL THEN
    RETURN jsonb_build_object('success', false, 'error', 'Invalid or expired referral code');
  END IF;
  
  -- Prevent self-referral
  IF v_referrer_id = auth.uid() THEN
    RETURN jsonb_build_object('success', false, 'error', 'Cannot use your own referral code');
  END IF;
  
  -- Check if user already used a referral code
  IF EXISTS (SELECT 1 FROM public.referrals WHERE referred_id = auth.uid()) THEN
    RETURN jsonb_build_object('success', false, 'error', 'You have already used a referral code');
  END IF;
  
  -- Create the referral record
  INSERT INTO public.referrals (referrer_id, referred_id, referral_code, points_awarded)
  VALUES (v_referrer_id, auth.uid(), p_code, v_points)
  RETURNING id INTO v_referral_id;
  
  -- Increment uses count
  UPDATE public.referral_codes
  SET uses = uses + 1
  WHERE code = p_code;
  
  -- Award points to referrer
  PERFORM public.award_points(v_referrer_id, v_points, 'referral');
  
  RETURN jsonb_build_object('success', true, 'points_awarded', v_points);
END;
$$;

-- Grant execute permissions to authenticated users
GRANT EXECUTE ON FUNCTION public.validate_referral_code(text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.redeem_referral_code(text) TO authenticated;