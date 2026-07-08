
CREATE OR REPLACE FUNCTION public.blogs_lock_moderation_status()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- If moderation_status is being changed, require moderator/admin
  IF NEW.moderation_status IS DISTINCT FROM OLD.moderation_status THEN
    IF NOT public.can_moderate(auth.uid()) THEN
      NEW.moderation_status := OLD.moderation_status;
    END IF;
  END IF;
  -- Also prevent authors from flipping status to 'published' without approval
  IF NEW.status = 'published' AND OLD.status <> 'published' AND NEW.moderation_status <> 'approved' THEN
    IF NOT public.can_moderate(auth.uid()) THEN
      NEW.status := OLD.status;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS blogs_lock_moderation_status_trg ON public.blogs;
CREATE TRIGGER blogs_lock_moderation_status_trg
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.blogs_lock_moderation_status();

-- Ensure new inserts start as pending (except by moderators)
CREATE OR REPLACE FUNCTION public.blogs_force_pending_on_insert()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.can_moderate(auth.uid()) THEN
    NEW.moderation_status := 'pending';
    IF NEW.status = 'published' THEN
      NEW.status := 'draft';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS blogs_force_pending_on_insert_trg ON public.blogs;
CREATE TRIGGER blogs_force_pending_on_insert_trg
  BEFORE INSERT ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.blogs_force_pending_on_insert();
