import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://aozwunncglcsfqwfjwkj.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvendubm5jZ2xjc2Zxd2Zqd2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NzI4NzQsImV4cCI6MjA1MjU0ODg3NH0.sb_publishable_k1ILCBPWwC2GZVLYkLq-bw_DYhBwswN';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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