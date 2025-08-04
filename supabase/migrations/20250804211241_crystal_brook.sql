/*
  # Create comments table for blog posts

  1. New Tables
    - `blog_comments`
      - `id` (uuid, primary key)
      - `post_slug` (text, references blog post)
      - `name` (text)
      - `email` (text)
      - `comment` (text)
      - `created_at` (timestamp)
      - `approved` (boolean, for moderation)

  2. Security
    - Enable RLS on comments table
    - Add policies for public reading and commenting
    - Add policies for authenticated users to manage comments
*/

-- Create blog_comments table
CREATE TABLE IF NOT EXISTS blog_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_slug text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  comment text NOT NULL,
  approved boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_comments ENABLE ROW LEVEL SECURITY;

-- Create policies for comments
CREATE POLICY "Anyone can read approved comments"
  ON blog_comments
  FOR SELECT
  USING (approved = true);

CREATE POLICY "Anyone can create comments"
  ON blog_comments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage all comments"
  ON blog_comments
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_blog_comments_post_slug ON blog_comments(post_slug);
CREATE INDEX IF NOT EXISTS idx_blog_comments_created_at ON blog_comments(created_at DESC);