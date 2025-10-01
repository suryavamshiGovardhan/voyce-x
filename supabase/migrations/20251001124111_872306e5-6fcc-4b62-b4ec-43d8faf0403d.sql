-- Add author_name column to blogs table if it doesn't exist
ALTER TABLE public.blogs 
ADD COLUMN IF NOT EXISTS author_name text;

-- Update existing rows to use author field as author_name if empty
UPDATE public.blogs 
SET author_name = author 
WHERE author_name IS NULL;