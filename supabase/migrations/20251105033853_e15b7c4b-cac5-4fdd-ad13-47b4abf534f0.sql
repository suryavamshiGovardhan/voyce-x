-- Gamification System Tables

-- User points and levels
CREATE TABLE public.user_gamification (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  total_points INTEGER NOT NULL DEFAULT 0,
  current_level INTEGER NOT NULL DEFAULT 1,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_activity_date DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Badges and achievements
CREATE TABLE public.badges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  points_required INTEGER NOT NULL DEFAULT 0,
  category TEXT NOT NULL DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- User earned badges
CREATE TABLE public.user_badges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_id UUID NOT NULL REFERENCES public.badges(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, badge_id)
);

-- Quizzes
CREATE TABLE public.quizzes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'beginner',
  questions JSONB NOT NULL,
  points_reward INTEGER NOT NULL DEFAULT 15,
  time_limit_seconds INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Quiz attempts
CREATE TABLE public.quiz_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_id UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  time_spent_seconds INTEGER,
  answers JSONB,
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Referral system
CREATE TABLE public.referral_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  code TEXT NOT NULL UNIQUE,
  uses INTEGER NOT NULL DEFAULT 0,
  max_uses INTEGER DEFAULT 50,
  points_reward INTEGER NOT NULL DEFAULT 100,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE public.referrals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  referred_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  referral_code TEXT NOT NULL,
  points_awarded INTEGER NOT NULL DEFAULT 100,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(referred_id)
);

-- Onboarding
CREATE TABLE public.user_onboarding (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  interests TEXT[],
  learning_goals TEXT[],
  experience_level TEXT,
  completed_at TIMESTAMP WITH TIME ZONE,
  current_step INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Daily challenges
CREATE TABLE public.daily_challenges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL UNIQUE,
  challenge_type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  points_reward INTEGER NOT NULL DEFAULT 20,
  target_content_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.user_daily_challenges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  challenge_id UUID NOT NULL REFERENCES public.daily_challenges(id) ON DELETE CASCADE,
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, challenge_id)
);

-- Analytics events
CREATE TABLE public.analytics_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  event_name TEXT NOT NULL,
  event_properties JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Content recommendations
CREATE TABLE public.content_interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content_id UUID NOT NULL,
  content_type TEXT NOT NULL,
  interaction_type TEXT NOT NULL,
  interaction_value NUMERIC DEFAULT 1.0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.user_gamification ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referral_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_onboarding ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_daily_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_interactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_gamification
CREATE POLICY "Users can view their own gamification data"
  ON public.user_gamification FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own gamification data"
  ON public.user_gamification FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own gamification data"
  ON public.user_gamification FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for badges
CREATE POLICY "Anyone can view badges"
  ON public.badges FOR SELECT
  USING (true);

-- RLS Policies for user_badges
CREATE POLICY "Users can view their own badges"
  ON public.user_badges FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can earn badges"
  ON public.user_badges FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for quizzes
CREATE POLICY "Anyone can view active quizzes"
  ON public.quizzes FOR SELECT
  USING (is_active = true);

-- RLS Policies for quiz_attempts
CREATE POLICY "Users can view their own quiz attempts"
  ON public.quiz_attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create quiz attempts"
  ON public.quiz_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for referral_codes
CREATE POLICY "Users can view their own referral codes"
  ON public.referral_codes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create referral codes"
  ON public.referral_codes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anyone can view referral codes for validation"
  ON public.referral_codes FOR SELECT
  USING (true);

-- RLS Policies for referrals
CREATE POLICY "Users can view referrals they made"
  ON public.referrals FOR SELECT
  USING (auth.uid() = referrer_id OR auth.uid() = referred_id);

CREATE POLICY "System can create referrals"
  ON public.referrals FOR INSERT
  WITH CHECK (auth.uid() = referred_id);

-- RLS Policies for user_onboarding
CREATE POLICY "Users can view their own onboarding"
  ON public.user_onboarding FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own onboarding"
  ON public.user_onboarding FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own onboarding"
  ON public.user_onboarding FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for daily_challenges
CREATE POLICY "Anyone can view daily challenges"
  ON public.daily_challenges FOR SELECT
  USING (true);

-- RLS Policies for user_daily_challenges
CREATE POLICY "Users can view their own daily challenges"
  ON public.user_daily_challenges FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can complete daily challenges"
  ON public.user_daily_challenges FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for analytics_events
CREATE POLICY "Users can create analytics events"
  ON public.analytics_events FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Admins can view analytics"
  ON public.analytics_events FOR SELECT
  USING (is_admin(auth.uid()));

-- RLS Policies for content_interactions
CREATE POLICY "Users can view their own interactions"
  ON public.content_interactions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create interactions"
  ON public.content_interactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Functions for gamification
CREATE OR REPLACE FUNCTION public.award_points(
  p_user_id UUID,
  p_points INTEGER,
  p_event_type TEXT
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_gamification (user_id, total_points, last_activity_date)
  VALUES (p_user_id, p_points, CURRENT_DATE)
  ON CONFLICT (user_id)
  DO UPDATE SET
    total_points = user_gamification.total_points + p_points,
    current_level = FLOOR((user_gamification.total_points + p_points) / 100) + 1,
    last_activity_date = CURRENT_DATE;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_streak(p_user_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_last_activity DATE;
  v_current_streak INTEGER;
BEGIN
  SELECT last_activity_date, current_streak
  INTO v_last_activity, v_current_streak
  FROM public.user_gamification
  WHERE user_id = p_user_id;

  IF v_last_activity IS NULL OR v_last_activity < CURRENT_DATE - INTERVAL '1 day' THEN
    -- Reset streak if more than 1 day gap
    UPDATE public.user_gamification
    SET current_streak = 1,
        last_activity_date = CURRENT_DATE
    WHERE user_id = p_user_id;
  ELSIF v_last_activity = CURRENT_DATE - INTERVAL '1 day' THEN
    -- Increment streak
    UPDATE public.user_gamification
    SET current_streak = current_streak + 1,
        longest_streak = GREATEST(longest_streak, current_streak + 1),
        last_activity_date = CURRENT_DATE
    WHERE user_id = p_user_id;
  END IF;
END;
$$;

-- Triggers
CREATE TRIGGER update_user_gamification_updated_at
  BEFORE UPDATE ON public.user_gamification
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial badges
INSERT INTO public.badges (name, description, icon, points_required, category) VALUES
  ('First Steps', 'Complete your first lesson', '🎯', 0, 'beginner'),
  ('Quick Learner', 'Complete 5 lessons', '⚡', 50, 'progress'),
  ('Dedicated Student', 'Complete 10 lessons', '📚', 100, 'progress'),
  ('Mental Health Champion', 'Complete 25 lessons', '🏆', 250, 'progress'),
  ('Week Warrior', 'Maintain a 7-day streak', '🔥', 70, 'streak'),
  ('Consistency King', 'Maintain a 30-day streak', '👑', 300, 'streak'),
  ('Quiz Master', 'Complete 10 quizzes with 80%+ score', '🎓', 150, 'quiz'),
  ('Community Builder', 'Refer 5 friends', '🤝', 500, 'social'),
  ('Daily Champion', 'Complete 30 daily challenges', '⭐', 600, 'challenge'),
  ('Knowledge Seeker', 'Read 20 articles', '📖', 200, 'content');