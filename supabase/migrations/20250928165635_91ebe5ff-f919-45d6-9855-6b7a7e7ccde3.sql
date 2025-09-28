-- First, update the blogs table to include missing columns
ALTER TABLE public.blogs 
ADD COLUMN IF NOT EXISTS featured_image text,
ADD COLUMN IF NOT EXISTS category text DEFAULT 'General';

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_author_id ON public.blogs(author_id);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON public.blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON public.blogs(category);

-- Update RLS policies for blogs table to be more comprehensive
DROP POLICY IF EXISTS "Public can read published blogs" ON public.blogs;
DROP POLICY IF EXISTS "Authors can manage their own blogs" ON public.blogs;
DROP POLICY IF EXISTS "Authenticated users can create blogs" ON public.blogs;

-- New comprehensive RLS policies for blogs
CREATE POLICY "Public can read published blogs" 
ON public.blogs FOR SELECT 
USING (status = 'published');

CREATE POLICY "Authors can view their own blogs" 
ON public.blogs FOR SELECT 
USING (auth.uid() = author_id);

CREATE POLICY "Authenticated users can create blogs" 
ON public.blogs FOR INSERT 
WITH CHECK (
  auth.uid() IS NOT NULL AND 
  auth.uid() = author_id AND
  status IN ('draft', 'published')
);

CREATE POLICY "Authors can update their own blogs" 
ON public.blogs FOR UPDATE 
USING (auth.uid() = author_id)
WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can delete their own blogs" 
ON public.blogs FOR DELETE 
USING (auth.uid() = author_id);

-- Add RLS policy for profiles table (fixing the linter warning)
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Users can view their own profile" 
ON public.profiles FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);