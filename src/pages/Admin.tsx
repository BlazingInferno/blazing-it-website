import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, Calendar, User, Tag, Lock, LogOut } from 'lucide-react';

interface BlogPost {
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

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Blazing IT Team',
    tags: '',
    published: false
  });

  // Check authentication on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with the existing migration post
      const initialPosts: BlogPost[] = [
        {
          id: '1',
          title: 'Google Workspace to Microsoft 365 Migration',
          slug: 'google-workspace-to-microsoft-365',
          excerpt: 'A comprehensive guide to successfully migrating from Google Workspace to Microsoft 365, including best practices, common challenges, and step-by-step implementation strategies.',
          author: 'Blazing IT Team',
          date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          readTime: '8 min read',
          tags: ['Migration', 'Microsoft 365', 'Google Workspace', 'Cloud Solutions'],
          content: 'Full migration guide content...',
          published: true
        }
      ];
      setPosts(initialPosts);
      localStorage.setItem('blogPosts', JSON.stringify(initialPosts));
    }
  }, []);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in production, this should be more secure
    if (loginForm.username === '@Blazing!!99' && loginForm.password === 'ThatName(01)') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    setLoginForm({ username: '', password: '' });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const slug = formData.slug || generateSlug(formData.title);
    const readTime = calculateReadTime(formData.content);
    
    if (editingPost) {
      // Update existing post
      const updatedPosts = posts.map(post => 
        post.id === editingPost.id 
          ? {
              ...post,
              ...formData,
              slug,
              tags: tagsArray,
              readTime
            }
          : post
      );
      setPosts(updatedPosts);
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...formData,
        slug,
        tags: tagsArray,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        readTime
      };
      setPosts([newPost, ...posts]);
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
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      tags: post.tags.join(', '),
      published: post.published
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const togglePublished = (id: string) => {
    const updatedPosts = posts.map(post => 
      post.id === id ? { ...post, published: !post.published } : post
    );
    setPosts(updatedPosts);
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
              <p className="text-gray-600">Enter your credentials to access the blog admin</p>
            </div>
            
            {loginError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {loginError}
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  required
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter username"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter password"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Blog Admin</h1>
              <p className="text-gray-600">Manage your blog posts and content</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                ← Back to Site
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-colors flex items-center"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
              <button
                onClick={() => {
                  setShowForm(true);
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
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm ? (
          /* Blog Post Form */
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {editingPost ? 'Edit Post' : 'Create New Post'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter post title"
                  />
                </div>
                
                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Auto-generated from title"
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave empty to auto-generate from title</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                    Author *
                  </label>
                  <input
                    type="text"
                    id="author"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tag1, Tag2, Tag3"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                </div>
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt *
                </label>
                <textarea
                  id="excerpt"
                  rows={3}
                  required
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of the post"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  id="content"
                  rows={15}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                  placeholder="Write your post content here. You can use HTML tags for formatting."
                />
                <p className="text-xs text-gray-500 mt-1">HTML formatting is supported</p>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
                  Publish immediately
                </label>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingPost ? 'Update Post' : 'Create Post'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingPost(null);
                  }}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Posts List */
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">All Posts ({posts.length})</h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {posts.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-500 mb-4">No blog posts yet</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Your First Post
                  </button>
                </div>
              ) : (
                posts.map((post) => (
                  <div key={post.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            post.published 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{post.excerpt}</p>
                        
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        {post.published && (
                          <Link
                            to={`/blog/${post.slug}`}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            title="View Post"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                        )}
                        <button
                          onClick={() => handleEdit(post)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Edit Post"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => togglePublished(post.id)}
                          className={`px-3 py-1 text-xs rounded-full transition-colors ${
                            post.published
                              ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                              : 'bg-green-100 text-green-800 hover:bg-green-200'
                          }`}
                          title={post.published ? 'Unpublish' : 'Publish'}
                        >
                          {post.published ? 'Unpublish' : 'Publish'}
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                          title="Delete Post"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}