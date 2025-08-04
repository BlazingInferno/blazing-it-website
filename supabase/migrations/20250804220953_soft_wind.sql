/*
  # Ensure blog_comments table exists

  1. New Tables
    - `blog_comments` (if not exists)
      - `id` (uuid, primary key)
      - `post_slug` (text, references blog post)
      - `name` (text)
      - `email` (text)
      - `comment` (text)
      - `approved` (boolean, for moderation)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on comments table
    - Add policies for public reading and commenting
    - Add policies for authenticated users to manage comments

  3. Indexes
    - Add performance indexes for post_slug and created_at
*/

-- Create blog_comments table if it doesn't exist
CREATE TABLE IF NOT EXISTS blog_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_slug text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  comment text NOT NULL,
  approved boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS if not already enabled
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'blog_comments' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Create policies if they don't exist
DO $$
BEGIN
  -- Policy for reading approved comments
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'blog_comments' 
    AND policyname = 'Anyone can read approved comments'
  ) THEN
    CREATE POLICY "Anyone can read approved comments"
      ON blog_comments
      FOR SELECT
      USING (approved = true);
  END IF;

  -- Policy for creating comments
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'blog_comments' 
    AND policyname = 'Anyone can create comments'
  ) THEN
    CREATE POLICY "Anyone can create comments"
      ON blog_comments
      FOR INSERT
      WITH CHECK (true);
  END IF;

  -- Policy for authenticated users to manage all comments
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'blog_comments' 
    AND policyname = 'Authenticated users can manage all comments'
  ) THEN
    CREATE POLICY "Authenticated users can manage all comments"
      ON blog_comments
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_blog_comments_post_slug ON blog_comments(post_slug);
CREATE INDEX IF NOT EXISTS idx_blog_comments_created_at ON blog_comments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_comments_approved ON blog_comments(approved);