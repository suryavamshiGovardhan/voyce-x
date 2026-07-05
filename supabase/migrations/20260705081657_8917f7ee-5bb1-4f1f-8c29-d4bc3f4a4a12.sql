
CREATE TABLE IF NOT EXISTS public.user_stage_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stage_level text NOT NULL,
  started_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, stage_level)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_stage_progress TO authenticated;
GRANT ALL ON public.user_stage_progress TO service_role;

ALTER TABLE public.user_stage_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own stage progress" ON public.user_stage_progress
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users insert own stage progress" ON public.user_stage_progress
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users update own stage progress" ON public.user_stage_progress
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users delete own stage progress" ON public.user_stage_progress
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE TRIGGER trg_user_stage_progress_updated_at
  BEFORE UPDATE ON public.user_stage_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
