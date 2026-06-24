ALTER TABLE public.iit_sessions
  ADD COLUMN IF NOT EXISTS partner_a_name text,
  ADD COLUMN IF NOT EXISTS partner_a_email text,
  ADD COLUMN IF NOT EXISTS partner_b_name text,
  ADD COLUMN IF NOT EXISTS partner_b_email text;

CREATE INDEX IF NOT EXISTS iit_sessions_partner_a_email_idx ON public.iit_sessions (partner_a_email);
CREATE INDEX IF NOT EXISTS iit_sessions_partner_b_email_idx ON public.iit_sessions (partner_b_email);