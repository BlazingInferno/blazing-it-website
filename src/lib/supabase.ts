import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  read_time: string;
  tags: string[];
  published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface UploadedImage {
  id: string;
  name: string;
  url: string;
  upload_date: string;
  created_at?: string;
}

// Blog post functions
export const getBlogPosts = async () => {
  if (!supabase) throw new Error('Supabase not configured');
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const getPublishedBlogPosts = async () => {
  if (!supabase) throw new Error('Supabase not configured');
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const getBlogPostBySlug = async (slug: string) => {
  if (!supabase) throw new Error('Supabase not configured');
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();
  
  if (error) throw error;
  return data;
};

export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) => {
  if (!supabase) throw new Error('Supabase not configured');
  
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateBlogPost = async (id: string, post: Partial<BlogPost>) => {
  if (!supabase) throw new Error('Supabase not configured');
  
  const { data, error } = await supabase
    .from('blog_posts')
    .update(post)
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const deleteBlogPost = async (id: string) => {
  if (!supabase) throw new Error('Supabase not configured');
  
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
};

// Image functions
export const getImages = async () => {
  if (!supabase) throw new Error('Supabase not configured');
  
  const { data, error } = await supabase
    .from('uploaded_images')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

export const uploadImage = async (file: File) => {
  if (!supabase) throw new Error('Supabase not configured');
  
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `images/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filePath);

  const imageRecord = {
    name: file.name,
    url: publicUrl,
    upload_date: new Date().toLocaleDateString()
  };

  const { data, error } = await supabase
    .from('uploaded_images')
    .insert([imageRecord])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteImage = async (id: string, url: string) => {
  if (!supabase) throw new Error('Supabase not configured');
  
  // Extract file path from URL
  const urlParts = url.split('/');
  const filePath = `images/${urlParts[urlParts.length - 1]}`;

  // Delete from storage
  const { error: storageError } = await supabase.storage
    .from('blog-images')
    .remove([filePath]);

  if (storageError) throw storageError;

  // Delete from database
  const { error } = await supabase
    .from('uploaded_images')
    .delete()
    .eq('id', id);

  if (error) throw error;
};