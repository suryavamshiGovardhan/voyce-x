-- Remove unused n8n JWT-based policies from blogs table
-- These policies were checking for custom JWT claims that are not in use

DROP POLICY IF EXISTS "blogs_insert_n8n" ON public.blogs;
DROP POLICY IF EXISTS "blogs_update_n8n" ON public.blogs;