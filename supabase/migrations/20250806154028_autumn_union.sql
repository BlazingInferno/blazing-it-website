/*
  # Fix storage bucket and policies for blog images

  1. Storage Setup
    - Create blog-images bucket if not exists
    - Set up proper storage policies for authenticated users
    - Allow public read access for images

  2. Security
    - Enable proper RLS policies for storage
    - Allow authenticated users to upload/delete
    - Allow public read access to images
*/

-- Create the storage bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images', 
  'blog-images', 
  true, 
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Anyone can view images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update images" ON storage.objects;

-- Create storage policies for the blog-images bucket
CREATE POLICY "Anyone can view images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can upload images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can delete images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can update images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'blog-images')
  WITH CHECK (bucket_id = 'blog-images');

-- Ensure the storage schema has proper permissions
GRANT USAGE ON SCHEMA storage TO authenticated;
GRANT ALL ON storage.objects TO authenticated;
GRANT ALL ON storage.buckets TO authenticated;