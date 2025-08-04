import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Simple file-based storage for blog posts
// This will be replaced with a proper database solution later

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

export interface UploadedImage {
  id: string;
  name: string;
  url: string;
  uploadDate: string;
}

// For now, we'll use a simple approach with localStorage as a temporary solution
// In production, this should be replaced with a proper backend API
export const blogStorage = {
  // Get all blog posts
  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      const posts = localStorage.getItem('blogPosts');
      return posts ? JSON.parse(posts) : [];
    } catch (error) {
      console.error('Error loading blog posts:', error);
      return [];
    }
  },

  // Save blog posts
  async saveBlogPosts(posts: BlogPost[]): Promise<void> {
    try {
      localStorage.setItem('blogPosts', JSON.stringify(posts));
    } catch (error) {
      console.error('Error saving blog posts:', error);
      throw error;
    }
  },

  // Get uploaded images
  async getUploadedImages(): Promise<UploadedImage[]> {
    try {
      const images = localStorage.getItem('uploadedImages');
      return images ? JSON.parse(images) : [];
    } catch (error) {
      console.error('Error loading images:', error);
      return [];
    }
  },

  // Save uploaded images
  async saveUploadedImages(images: UploadedImage[]): Promise<void> {
    try {
      localStorage.setItem('uploadedImages', JSON.stringify(images));
    } catch (error) {
      console.error('Error saving images:', error);
      throw error;
    }
  }
};

// Get published blog posts only
export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  if (!supabase) {
    throw new Error('Supabase not configured');
  }
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching published blog posts:', error);
    return [];
  }
  
  return data || [];
};