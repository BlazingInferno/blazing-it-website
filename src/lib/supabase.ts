import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

// Validate that we're using the anon key, not the secret key
if (supabaseAnonKey && supabaseAnonKey.includes('service_role') && !supabaseServiceKey) {
  throw new Error('🚨 SECURITY WARNING: You are using the service_role key in the browser! Please use the anon key instead.');
}

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables are missing. Database features will be disabled.');
}

// Create regular client for public operations
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    })
  : null;

// Create admin client for authenticated operations (only use server-side or in secure contexts)
export const supabaseAdmin = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;

// Function to create a temporary auth session for admin operations
export const createAdminSession = async (userEmail: string) => {
  if (!supabase) return null;
  
  try {
    // Sign in anonymously but with a custom user identifier
    const { data, error } = await supabase.auth.signInAnonymously({
      options: {
        data: {
          email: userEmail,
          role: 'admin'
        }
      }
    });
    
    if (error) {
      console.error('Error creating admin session:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Error in createAdminSession:', error);
    return null;
  }
};
// Error types for better error handling
export enum DatabaseError {
  CONNECTION_FAILED = 'CONNECTION_FAILED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  NOT_FOUND = 'NOT_FOUND',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

// Enhanced error handling utility
export const handleDatabaseError = (error: any): { type: DatabaseError; message: string } => {
  if (!error) {
    return { type: DatabaseError.UNKNOWN_ERROR, message: 'An unknown error occurred' };
  }

  // Network/connection errors
  if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
    return { 
      type: DatabaseError.CONNECTION_FAILED, 
      message: 'Unable to connect to the database. Please check your internet connection.' 
    };
  }

  // Authentication errors
  if (error.code === 'PGRST301' || error.message?.includes('JWT') || error.message?.includes('Authentication required') || error.status === 401) {
    return { 
      type: DatabaseError.UNAUTHORIZED, 
      message: 'Authentication failed. Please log in again.' 
    };
  }

  // Not found errors
  if (error.code === 'PGRST116' || error.message?.includes('not found')) {
    return { 
      type: DatabaseError.NOT_FOUND, 
      message: 'The requested content was not found.' 
    };
  }

  // Validation errors
  if (error.code?.startsWith('23') || error.message?.includes('violates') || error.message?.includes('Missing required fields') || error.code === '42703') {
    return { 
      type: DatabaseError.VALIDATION_ERROR, 
      message: error.message?.includes('Missing required fields') ? error.message : 'Invalid data provided. Please check your input.' 
    };
  }

  // Default error
  return { 
    type: DatabaseError.UNKNOWN_ERROR, 
    message: error.message || 'An unexpected error occurred' 
  };
};

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
}

export interface UploadedImage {
  id: string;
  name: string;
  url: string;
  upload_date: string;
}

export interface BlogComment {
  id: string;
  post_slug: string;
  name: string;
  email: string;
  comment: string;
  approved: boolean;
  created_at: string;
}

// Get published blog posts only (for public display)
export const getPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  if (!supabase) return [];
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      throw new Error(message);
    }
    
    return data || [];
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error loading published blog posts:', message);
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
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      throw new Error(message);
    }
    
    return data || [];
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error loading blog posts:', message);
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
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      if (type === DatabaseError.NOT_FOUND) {
        return null; // This is expected for non-existent posts
      }
      console.error(`Database error (${type}):`, message);
      throw new Error(message);
    }
    
    return data;
  } catch (error) {
    const { type } = handleDatabaseError(error);
    if (type === DatabaseError.NOT_FOUND) {
      return null;
    }
    console.error('Error loading blog post:', error);
    return null;
  }
};

// Create blog post
export const createBlogPost = async (postData: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>, userEmail?: string): Promise<BlogPost | null> => {
  if (!supabase) return null;
  
  try {
    // Try to create an admin session if user email is provided
    if (userEmail) {
      const adminSession = await createAdminSession(userEmail);
      console.log('Admin session created:', adminSession ? 'Success' : 'Failed');
    }
    
    // Clean and validate the post data
    const cleanPostData = {
      title: postData.title?.trim() || '',
      slug: postData.slug?.trim() || '',
      excerpt: postData.excerpt?.trim() || '',
      content: postData.content?.trim() || '',
      author: postData.author?.trim() || 'Blazing IT Team',
      date: postData.date || new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      read_time: postData.read_time || '5 min read',
      tags: Array.isArray(postData.tags) ? postData.tags : [],
      published: Boolean(postData.published)
    };

    // Validate required fields
    if (!cleanPostData.title || !cleanPostData.slug || !cleanPostData.excerpt || !cleanPostData.content) {
      throw new Error('Missing required fields: title, slug, excerpt, and content are required.');
    }

    console.log('Attempting to create blog post with data:', cleanPostData);
    
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([cleanPostData])
      .select()
      .single();
    
    console.log('Supabase response:', { data, error });
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      console.error('Full Supabase error details:', error);
      throw new Error(message);
    }
    
    return data;
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error creating blog post:', message);
    console.error('Full error details:', error);
    throw error;
  }
};

// Update blog post
export const updateBlogPost = async (id: string, postData: Partial<BlogPost>, userEmail?: string): Promise<BlogPost | null> => {
  if (!supabase) return null;
  
  try {
    // Try to create an admin session if user email is provided
    if (userEmail) {
      const adminSession = await createAdminSession(userEmail);
      console.log('Admin session created for update:', adminSession ? 'Success' : 'Failed');
    }
    
    // Clean the update data
    const cleanUpdateData: any = {};
    
    if (postData.title !== undefined) cleanUpdateData.title = postData.title?.trim() || '';
    if (postData.slug !== undefined) cleanUpdateData.slug = postData.slug?.trim() || '';
    if (postData.excerpt !== undefined) cleanUpdateData.excerpt = postData.excerpt?.trim() || '';
    if (postData.content !== undefined) cleanUpdateData.content = postData.content?.trim() || '';
    if (postData.author !== undefined) cleanUpdateData.author = postData.author?.trim() || 'Blazing IT Team';
    if (postData.date !== undefined) cleanUpdateData.date = postData.date;
    if (postData.read_time !== undefined) cleanUpdateData.read_time = postData.read_time;
    if (postData.tags !== undefined) cleanUpdateData.tags = Array.isArray(postData.tags) ? postData.tags : [];
    if (postData.published !== undefined) cleanUpdateData.published = Boolean(postData.published);

    const { data, error } = await supabase
      .from('blog_posts')
      .update(cleanUpdateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      console.error('Full error details:', error);
      throw new Error(message);
    }
    
    return data;
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error updating blog post:', message);
    console.error('Full error details:', error);
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
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      throw new Error(message);
    }
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error deleting blog post:', message);
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
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      throw new Error(message);
    }
    
    return data || [];
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error loading images:', message);
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
    
    if (uploadError) {
      const { type, message } = handleDatabaseError(uploadError);
      console.error(`Storage upload error (${type}):`, message);
      throw new Error(`Failed to upload image: ${message}`);
    }
    
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
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      throw new Error(`Failed to save image metadata: ${message}`);
    }
    
    return data;
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error uploading image:', message);
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
      
      if (storageError) {
        const { type, message } = handleDatabaseError(storageError);
        console.error(`Storage deletion error (${type}):`, message);
        // Continue with database deletion even if storage fails
      }
    }
    
    // Delete from database
    const { error } = await supabase
      .from('uploaded_images')
      .delete()
      .eq('id', id);
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      throw new Error(message);
    }
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error deleting image:', message);
    throw error;
  }
};

// Get comments for a blog post
export const getCommentsBySlug = async (slug: string): Promise<BlogComment[]> => {
  if (!supabase) return [];
  
  try {
    const { data, error } = await supabase
      .from('blog_comments')
      .select('*')
      .eq('post_slug', slug)
      .eq('approved', true)
      .order('created_at', { ascending: true });
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      return []; // Return empty array for comments to not break the UI
    }
    
    return data || [];
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error loading comments:', message);
    return [];
  }
};

// Create a new comment
export const createComment = async (commentData: Omit<BlogComment, 'id' | 'created_at' | 'approved'>): Promise<BlogComment | null> => {
  if (!supabase) return null;
  
  try {
    const { data, error } = await supabase
      .from('blog_comments')
      .insert([{ ...commentData, approved: true }])
      .select()
      .single();
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      throw new Error(message);
    }
    
    return data;
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error creating comment:', message);
    throw error;
  }
};

// Get all comments (for admin)
export const getAllComments = async (): Promise<BlogComment[]> => {
  if (!supabase) return [];
  
  try {
    const { data, error } = await supabase
      .from('blog_comments')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      return []; // Return empty array to not break admin UI
    }
    
    return data || [];
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error loading all comments:', message);
    return [];
  }
};

// Update comment approval status
export const updateCommentApproval = async (id: string, approved: boolean): Promise<void> => {
  if (!supabase) return;
  
  try {
    const { error } = await supabase
      .from('blog_comments')
      .update({ approved })
      .eq('id', id);
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      throw new Error(message);
    }
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error updating comment approval:', message);
    throw error;
  }
};

// Delete comment
export const deleteComment = async (id: string): Promise<void> => {
  if (!supabase) return;
  
  try {
    const { error } = await supabase
      .from('blog_comments')
      .delete()
      .eq('id', id);
    
    if (error) {
      const { type, message } = handleDatabaseError(error);
      console.error(`Database error (${type}):`, message);
      throw new Error(message);
    }
  } catch (error) {
    const { message } = handleDatabaseError(error);
    console.error('Error deleting comment:', message);
    throw error;
  }
};