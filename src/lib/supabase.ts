import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug Supabase configuration
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key (first 20 chars):', supabaseAnonKey?.substring(0, 20) + '...');

// Validate that we're using the anon key, not the secret key
if (supabaseAnonKey && supabaseAnonKey.includes('service_role')) {
  console.error('🚨 SECURITY WARNING: You are using the service_role key in the browser!');
  console.error('Please use the anon key instead. The service_role key should never be exposed to browsers.');
}

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

// Get published blog posts only (for public display)
export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  if (!supabase) return [];
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching published blog posts:', error);
    return [];
  }
};

// Get all blog posts (for admin)
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  if (!supabase) return [];
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

// Get blog post by slug
export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  if (!supabase) return null;
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
};

// Create blog post
export const createBlogPost = async (postData: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost | null> => {
  if (!supabase) return null;
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([postData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

// Update blog post
export const updateBlogPost = async (id: string, postData: Partial<BlogPost>): Promise<BlogPost | null> => {
  if (!supabase) return null;
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(postData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
};

// Delete blog post
export const deleteBlogPost = async (id: string): Promise<void> => {
  if (!supabase) return;
  
  try {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

// Get uploaded images
export const getImages = async (): Promise<UploadedImage[]> => {
  if (!supabase) return [];
  
  try {
    const { data, error } = await supabase
      .from('uploaded_images')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

// Upload image
export const uploadImage = async (file: File): Promise<UploadedImage | null> => {
  if (!supabase) return null;
  
  try {
    const fileName = `${Date.now()}-${file.name}`;
    
    // Upload to storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(fileName, file);
    
    if (uploadError) throw uploadError;
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('blog-images')
      .getPublicUrl(fileName);
    
    // Save to database
    const imageData = {
      name: file.name,
      url: publicUrl,
      upload_date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
    
    const { data, error } = await supabase
      .from('uploaded_images')
      .insert([imageData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// Delete image
export const deleteImage = async (id: string, url: string): Promise<void> => {
  if (!supabase) return;
  
  try {
    // Extract filename from URL
    const fileName = url.split('/').pop();
    
    if (fileName) {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('blog-images')
        .remove([fileName]);
      
      if (storageError) console.error('Error deleting from storage:', storageError);
    }
    
    // Delete from database
    const { error } = await supabase
      .from('uploaded_images')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};