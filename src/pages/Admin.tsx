import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Plus, Edit, Trash2, Eye, Calendar, User, Tag, Lock, LogOut, Upload, Image, X, MessageCircle, Check, Ban } from 'lucide-react';
import { 
  getBlogPosts, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost,
  getImages,
  uploadImage,
  deleteImage,
  getAllComments,
  updateCommentApproval,
  deleteComment,
  BlogPost,
  UploadedImage,
  BlogComment
} from '../lib/supabase';

export default function Admin() {
  const { user, logout } = useAuth0();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showImageManager, setShowImageManager] = useState(false);
  const [showCommentManager, setShowCommentManager] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Blazing IT Team',
    tags: '',
    published: false
  });
  const [contentMode, setContentMode] = useState<'text' | 'html'>('text');

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Load posts from Supabase
  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBlogPosts();
      setPosts(data || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load posts';
      setError(`Unable to load posts: ${errorMessage}`);
      console.error('Error loading posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load images from Supabase
  const loadImages = async () => {
    try {
      setError(null);
      const data = await getImages();
      setUploadedImages(data || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load images';
      setError(`Unable to load images: ${errorMessage}`);
      console.error('Error loading images:', err);
    }
  };

  // Load comments from Supabase
  const loadComments = async () => {
    try {
      setError(null);
      const data = await getAllComments();
      setComments(data || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load comments';
      setError(`Unable to load comments: ${errorMessage}`);
      console.error('Error loading comments:', err);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const slug = formData.slug || generateSlug(formData.title);
      const tags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      
      // Convert text content to HTML if in text mode
      let processedContent = formData.content;
      if (contentMode === 'text') {
        processedContent = convertTextToHTML(formData.content);
      }
      
      const postData = {
        title: formData.title,
        slug,
        excerpt: formData.excerpt,
        content: processedContent,
        author: formData.author,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        read_time: `${Math.ceil(formData.content.split(' ').length / 200)} min read`,
        tags,
        published: formData.published
      };

      if (editingPost) {
        await updateBlogPost(editingPost.id, postData, user?.email);
      } else {
        await createBlogPost(postData, user?.email);
      }

      // Reset form
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        author: 'Blazing IT Team',
        tags: '',
        published: false
      });
      setShowForm(false);
      setEditingPost(null);
      
      // Reload posts
      await loadPosts();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save post';
      setError(`Unable to save post: ${errorMessage}`);
      console.error('Error saving post:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle editing a post
  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    // Detect if content is HTML or plain text
    const isHTML = /<[a-z][\s\S]*>/i.test(post.content);
    setContentMode(isHTML ? 'html' : 'text');
    
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: isHTML ? post.content : convertHTMLToText(post.content),
      author: post.author,
      tags: post.tags.join(', '),
      published: post.published
    });
    setShowForm(true);
  };

  // Handle deleting a post
  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        setLoading(true);
        await deleteBlogPost(id);
        await loadPosts();
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to delete post';
        setError(`Unable to delete post: ${errorMessage}`);
        console.error('Error deleting post:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        setLoading(true);
        await uploadImage(file);
        await loadImages();
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to upload image';
        setError(`Unable to upload image: ${errorMessage}`);
        console.error('Error uploading image:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Copy image URL to clipboard
  const copyImageUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('Image URL copied to clipboard!');
  };

  // Delete image
  const handleDeleteImage = async (id: string, url: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      try {
        setLoading(true);
        await deleteImage(id, url);
        await loadImages();
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to delete image';
        setError(`Unable to delete image: ${errorMessage}`);
        console.error('Error deleting image:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle comment approval
  const handleCommentApproval = async (id: string, approved: boolean) => {
    try {
      setLoading(true);
      await updateCommentApproval(id, approved);
      await loadComments();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update comment';
      setError(`Unable to update comment: ${errorMessage}`);
      console.error('Error updating comment:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle deleting a comment
  const handleDeleteComment = async (id: string) => {
    if (confirm('Are you sure you want to delete this comment?')) {
      try {
        setLoading(true);
        await deleteComment(id);
        await loadComments();
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to delete comment';
        setError(`Unable to delete comment: ${errorMessage}`);
        console.error('Error deleting comment:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Convert plain text to HTML
  const convertTextToHTML = (text: string): string => {
    return text
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.trim() === '') return '';
        
        // Handle headings
        if (paragraph.startsWith('# ')) {
          return `<h1>${paragraph.substring(2)}</h1>`;
        }
        if (paragraph.startsWith('## ')) {
          return `<h2>${paragraph.substring(3)}</h2>`;
        }
        if (paragraph.startsWith('### ')) {
          return `<h3>${paragraph.substring(4)}</h3>`;
        }
        
        // Handle lists
        if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
          const items = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
          return `<ul>${items.map(item => item.trim() ? `<li>${item}</li>` : '').join('')}</ul>`;
        }
        
        if (paragraph.includes('\n1. ') || paragraph.match(/^\d+\. /)) {
          const items = paragraph.split(/\n\d+\. /).map(item => item.replace(/^\d+\. /, ''));
          return `<ol>${items.map(item => item.trim() ? `<li>${item}</li>` : '').join('')}</ol>`;
        }
        
        // Handle regular paragraphs with basic formatting
        let formatted = paragraph
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
          .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
          .replace(/__(.*?)__/g, '<u>$1</u>') // Underline
          .replace(/`(.*?)`/g, '<code>$1</code>') // Inline code
          .replace(/\n/g, '<br>'); // Line breaks
        
        return `<p>${formatted}</p>`;
      })
      .filter(p => p !== '')
      .join('\n');
  };

  // Convert HTML back to plain text for editing
  const convertHTMLToText = (html: string): string => {
    return html
      .replace(/<h1>(.*?)<\/h1>/g, '# $1\n\n')
      .replace(/<h2>(.*?)<\/h2>/g, '## $1\n\n')
      .replace(/<h3>(.*?)<\/h3>/g, '### $1\n\n')
      .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
      .replace(/<em>(.*?)<\/em>/g, '*$1*')
      .replace(/<code>(.*?)<\/code>/g, '`$1`')
      .replace(/<ul><li>(.*?)<\/li><\/ul>/g, (match, content) => {
        return content.replace(/<\/li><li>/g, '\n- ').replace(/^/, '- ') + '\n\n';
      })
      .replace(/<ol><li>(.*?)<\/li><\/ol>/g, (match, content) => {
        const items = content.split('<\/li><li>');
        return items.map((item, index) => `${index + 1}. ${item}`).join('\n') + '\n\n';
      })
      .replace(/<[^>]*>/g, '') // Remove any remaining HTML tags
      .trim();
  };

  // Handle mode switching with content conversion
  const handleModeSwitch = (newMode: 'text' | 'html') => {
    if (newMode === contentMode) return;
    
    let convertedContent = formData.content;
    
    if (newMode === 'html' && contentMode === 'text') {
      // Convert text to HTML
      convertedContent = convertTextToHTML(formData.content);
    } else if (newMode === 'text' && contentMode === 'html') {
      // Convert HTML to text
      convertedContent = convertHTMLToText(formData.content);
    }
    
    setContentMode(newMode);
    setFormData({...formData, content: convertedContent});
  };

  // Text formatting functions
  const insertFormatting = (before: string, after: string = '') => {
    const textarea = document.getElementById('content-textarea') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);
    
    const newText = 
      formData.content.substring(0, start) + 
      before + selectedText + after + 
      formData.content.substring(end);
    
    setFormData({...formData, content: newText});
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length, 
        end + before.length
      );
    }, 0);
  };

  const insertHeading = (level: number) => {
    const textarea = document.getElementById('content-textarea') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end) || `Heading ${level}`;
    
    // Find the start of the current line
    const beforeCursor = formData.content.substring(0, start);
    const lineStart = beforeCursor.lastIndexOf('\n') + 1;
    const currentLine = formData.content.substring(lineStart, end);
    
    // Remove existing heading markers if any
    const cleanLine = currentLine.replace(/^#+\s*/, '');
    const prefix = '#'.repeat(level) + ' ';
    
    const newText = 
      formData.content.substring(0, lineStart) + 
      prefix + (selectedText || cleanLine) + 
      formData.content.substring(end);
    
    setFormData({...formData, content: newText});
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      const newPosition = lineStart + prefix.length + (selectedText || cleanLine).length;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  const insertList = (ordered: boolean = false) => {
    const textarea = document.getElementById('content-textarea') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end) || 'List item';
    
    // Check if we're at the start of a line
    const beforeCursor = formData.content.substring(0, start);
    const needsNewline = beforeCursor.length > 0 && !beforeCursor.endsWith('\n');
    
    const prefix = (needsNewline ? '\n' : '') + (ordered ? '1. ' : '- ');
    
    const newText = 
      formData.content.substring(0, start) + 
      prefix + selectedText + 
      formData.content.substring(end);
    
    setFormData({...formData, content: newText});
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      const newPosition = start + prefix.length + selectedText.length;
      textarea.setSelectionRange(newPosition, newPosition);
    }, 0);
  };

  // Load data on component mount
  useEffect(() => {
    loadPosts();
    loadImages();
    loadComments();
  }, []);

  // Check if environment variables are configured
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8 border border-red-200">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-red-900 mb-2">Supabase Configuration Missing</h1>
            <p className="text-red-700 mb-4">
              Please set up your Supabase environment variables:
            </p>
            <div className="text-sm text-red-600 text-left bg-red-50 p-4 rounded mb-4">
              <p className="font-semibold mb-2">Required environment variables:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>VITE_SUPABASE_URL</li>
                <li>VITE_SUPABASE_ANON_KEY</li>
              </ul>
            </div>
            <p className="text-sm text-red-600">
              Add these to your .env file or click "Connect to Supabase" in the top right corner.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main admin dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Blog Admin</h1>
              <p className="text-gray-600">Welcome, {user?.name || user?.email}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                ← Back to Site
              </Link>
              <button
                onClick={() => setShowImageManager(true)}
                View Public Projects
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                disabled={loading}
              >
                <Image className="h-4 w-4 mr-2" />
                Images
              </button>
              <button
                onClick={() => setShowCommentManager(true)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                disabled={loading}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Comments ({comments.length})
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                disabled={loading}
              >
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </button>
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="text-gray-600 hover:text-red-600 transition-colors flex items-center"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <div className="flex items-start">
              <div className="flex-1">
                <strong className="font-medium">Error:</strong> {error}
              </div>
              <button 
                onClick={() => setError(null)}
                className="ml-4 text-red-700 hover:text-red-900 font-bold"
              >
                ×
              </button>
            </div>
            <div className="mt-2 text-sm">
              <p>If this problem persists, please check:</p>
              <ul className="list-disc list-inside mt-1">
                <li>Your internet connection</li>
                <li>Database configuration in environment variables</li>
                <li>Authentication status</li>
              </ul>
            </div>
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Loading...
            </div>
          </div>
        )}

        {/* Image Manager Modal */}
        {showImageManager && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Image Manager</h2>
                <button
                  onClick={() => setShowImageManager(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload New Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={loading}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {uploadedImages.map((image) => (
                  <div key={image.id} className="border rounded-lg p-4">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <p className="text-sm font-medium text-gray-900 truncate">{image.name}</p>
                    <p className="text-xs text-gray-500 mb-2">{image.upload_date}</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => copyImageUrl(image.url)}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                      >
                        Copy URL
                      </button>
                      <button
                        onClick={() => handleDeleteImage(image.id, image.url)}
                        disabled={loading}
                        className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200 disabled:opacity-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Comment Manager Modal */}
        {showCommentManager && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-6xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Comment Manager</h2>
                <button
                  onClick={() => setShowCommentManager(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                          <span className="text-sm text-gray-500">({comment.email})</span>
                          {comment.approved ? (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Approved
                            </span>
                          ) : (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                              Pending
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          On: <Link to={`/blog/${comment.post_slug}`} className="text-blue-600 hover:underline">
                            {comment.post_slug}
                          </Link>
                        </p>
                        <p className="text-gray-700 mb-2">{comment.comment}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(comment.created_at).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        {!comment.approved && (
                          <button
                            onClick={() => handleCommentApproval(comment.id, true)}
                            disabled={loading}
                            className="text-green-600 hover:text-green-800 p-2 disabled:opacity-50"
                            title="Approve Comment"
                          >
                            <Check className="h-4 w-4" />
                          </button>
                        )}
                        {comment.approved && (
                          <button
                            onClick={() => handleCommentApproval(comment.id, false)}
                            disabled={loading}
                            className="text-yellow-600 hover:text-yellow-800 p-2 disabled:opacity-50"
                            title="Unapprove Comment"
                          >
                            <Ban className="h-4 w-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteComment(comment.id)}
                          disabled={loading}
                          className="text-red-600 hover:text-red-800 p-2 disabled:opacity-50"
                          title="Delete Comment"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {comments.length === 0 && (
                  <div className="text-center py-8">
                    <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No comments yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingPost ? 'Edit Post' : 'Create New Post'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter post title"
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug (URL)
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Auto-generated from title"
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of the post"
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <div className="flex items-center mb-2 space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contentMode"
                      value="text"
                      checked={contentMode === 'text'}
                      onChange={(e) => handleModeSwitch(e.target.value as 'text' | 'html')}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Text Mode (Recommended)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contentMode"
                      value="html"
                      checked={contentMode === 'html'}
                      onChange={(e) => handleModeSwitch(e.target.value as 'text' | 'html')}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">HTML Mode</span>
                  </label>
                </div>
                
                {/* Formatting Toolbar for Text Mode */}
                {contentMode === 'text' && (
                  <div className="border border-gray-300 rounded-t-lg p-2 bg-gray-50 flex flex-wrap gap-1">
                    <button
                      type="button"
                      onClick={() => insertFormatting('**', '**')}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 font-bold"
                      title="Bold"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('*', '*')}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 italic"
                      title="Italic"
                    >
                      I
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('__', '__')}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 underline"
                      title="Underline"
                    >
                      U
                    </button>
                    <button
                      type="button"
                      onClick={() => insertFormatting('`', '`')}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100 font-mono"
                      title="Code"
                    >
                      Code
                    </button>
                    <div className="border-l border-gray-300 mx-1"></div>
                    <button
                      type="button"
                      onClick={() => insertHeading(1)}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
                      title="Heading 1"
                    >
                      H1
                    </button>
                    <button
                      type="button"
                      onClick={() => insertHeading(2)}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
                      title="Heading 2"
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      onClick={() => insertHeading(3)}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
                      title="Heading 3"
                    >
                      H3
                    </button>
                    <div className="border-l border-gray-300 mx-1"></div>
                    <button
                      type="button"
                      onClick={() => insertList(false)}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
                      title="Bullet List"
                    >
                      • List
                    </button>
                    <button
                      type="button"
                      onClick={() => insertList(true)}
                      className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-100"
                      title="Numbered List"
                    >
                      1. List
                    </button>
                    <div className="border-l border-gray-300 mx-1"></div>
                    <div className="text-xs text-gray-600 px-2 py-1 flex items-center">
                      💡 Text will be converted to HTML automatically when saved
                    </div>
                  </div>
                )}
                
                <textarea
                  id="content-textarea"
                  required
                  rows={15}
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className={`w-full px-3 py-2 border border-gray-300 ${
                    contentMode === 'text' ? 'rounded-b-lg' : 'rounded-lg'
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
                    contentMode === 'html' ? 'font-mono' : 'font-sans'
                  }`}
                  placeholder={contentMode === 'text' 
                    ? `Write your content naturally. Supported formatting:

# Heading 1
## Heading 2  
### Heading 3

**Bold text**
*Italic text*
\`inline code\`

- Bullet point
- Another point

1. Numbered list
2. Second item

For images, switch to HTML mode and use:
<img src="url" alt="description" />`
                    : "Enter HTML content"
                  }
                  disabled={loading}
                />
                {contentMode === 'text' && (
                  <p className="mt-2 text-sm text-gray-600">
                    💡 <strong>Tip:</strong> Write naturally! Your text will be automatically converted to HTML. 
                    For images, switch to HTML mode and use: <code>&lt;img src="url" alt="description" /&gt;</code>
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={loading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tag1, tag2, tag3"
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({...formData, published: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  disabled={loading}
                />
                <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                  Publish immediately
                </label>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Saving...' : (editingPost ? 'Update Post' : 'Create Post')}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingPost(null);
                    setFormData({
                      title: '',
                      slug: '',
                      excerpt: '',
                      content: '',
                      author: 'Blazing IT Team',
                      tags: '',
                      published: false
                    });
                  }}
                  disabled={loading}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Blog Posts ({posts.length})</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {posts.map((post) => (
              <div key={post.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                      {post.published ? (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Published
                        </span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                          Draft
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-2">{post.excerpt}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span>{post.read_time}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    {post.published && (
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 p-2"
                        title="View Post"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                    )}
                    <button
                      onClick={() => handleEdit(post)}
                      disabled={loading}
                      className="text-gray-600 hover:text-blue-600 p-2 disabled:opacity-50"
                      title="Edit Post"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      disabled={loading}
                      className="text-gray-600 hover:text-red-600 p-2 disabled:opacity-50"
                      title="Delete Post"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {posts.length === 0 && !loading && (
              <div className="p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Plus className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-600 mb-4">Get started by creating your first blog post.</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create First Post
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}