CREATE OR REPLACE FUNCTION public.award_points(p_user_id uuid, p_points integer, p_event_type text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  -- Authorization: caller must be the same user
  IF auth.uid() IS NULL OR auth.uid() <> p_user_id THEN
    RAISE EXCEPTION 'Unauthorized: can only award points to yourself';
  END IF;

  -- Input validation
  IF p_points IS NULL OR p_points < 0 OR p_points > 1000 THEN
    RAISE EXCEPTION 'Invalid points value: must be between 0 and 1000';
  END IF;

  INSERT INTO public.user_gamification (user_id, total_points, last_activity_date)
  VALUES (p_user_id, p_points, CURRENT_DATE)
  ON CONFLICT (user_id)
  DO UPDATE SET
    total_points = user_gamification.total_points + p_points,
    current_level = FLOOR((user_gamification.total_points + p_points) / 100) + 1,
    last_activity_date = CURRENT_DATE;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_streak(p_user_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_last_activity DATE;
  v_current_streak INTEGER;
BEGIN
  -- Authorization: caller must be the same user
  IF auth.uid() IS NULL OR auth.uid() <> p_user_id THEN
    RAISE EXCEPTION 'Unauthorized: can only update your own streak';
  END IF;

  SELECT last_activity_date, current_streak
  INTO v_last_activity, v_current_streak
  FROM public.user_gamification
  WHERE user_id = p_user_id;

  IF v_last_activity IS NULL OR v_last_activity < CURRENT_DATE - INTERVAL '1 day' THEN
    UPDATE public.user_gamification
    SET current_streak = 1,
        last_activity_date = CURRENT_DATE
    WHERE user_id = p_user_id;
  ELSIF v_last_activity = CURRENT_DATE - INTERVAL '1 day' THEN
    UPDATE public.user_gamification
    SET current_streak = current_streak + 1,
        longest_streak = GREATEST(longest_streak, current_streak + 1),
        last_activity_date = CURRENT_DATE
    WHERE user_id = p_user_id;
  END IF;
END;
$function$;