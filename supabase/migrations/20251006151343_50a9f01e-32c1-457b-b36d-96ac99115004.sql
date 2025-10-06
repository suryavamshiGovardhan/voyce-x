-- Fix database function security (add search_path)
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.validate_blog_required()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
    IF COALESCE(NEW.title, '') = '' THEN
      RAISE EXCEPTION 'title is required';
    END IF;
    IF COALESCE(NEW.content, '') = '' THEN
      RAISE EXCEPTION 'content is required';
    END IF;
    IF COALESCE(NEW.author, '') = '' THEN
      RAISE EXCEPTION 'author is required';
    END IF;
    -- normalize slug
    IF NEW.slug IS NULL OR NEW.slug = '' THEN
      NEW.slug := LOWER(REGEXP_REPLACE(NEW.title, '[^a-zA-Z0-9]+', '-', 'g'));
    END IF;
  END IF;
  RETURN NEW;
END;
$function$;

-- Drop legacy blog_1 table (no RLS policies, appears unused)
DROP TABLE IF EXISTS public.blog_1 CASCADE;

-- Add moderation fields to blogs for future RBAC implementation
ALTER TABLE public.blogs 
ADD COLUMN IF NOT EXISTS moderation_status TEXT DEFAULT 'approved',
ADD COLUMN IF NOT EXISTS moderated_by UUID REFERENCES auth.users(id),
ADD COLUMN IF NOT EXISTS moderated_at TIMESTAMPTZ;

-- Update public blog policy to check moderation status
DROP POLICY IF EXISTS "Public can read published blogs" ON public.blogs;
CREATE POLICY "Public can read approved blogs" ON public.blogs
FOR SELECT USING (status = 'published' AND moderation_status = 'approved');