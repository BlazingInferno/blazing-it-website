import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import the Auth0 hook
import { Plus, Edit, Trash2, Eye, Calendar, User, Tag, Lock, LogOut, Upload, Image, X } from 'lucide-react';

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

interface UploadedImage {
  id: string;
  name: string;
  url: string;
  uploadDate: string;
}

export default function Admin() {
  // Use the Auth0 hook to manage authentication state
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

  // The rest of your state for managing posts and UI remains the same
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showImageManager, setShowImageManager] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Blazing IT Team',
    tags: '',
    published: false
  });

  // Load posts and images from localStorage (this part remains the same)
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
    const savedImages = localStorage.getItem('uploadedImages');
    if (savedImages) {
      setUploadedImages(JSON.parse(savedImages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages));
  }, [uploadedImages]);

  // All previous login/logout/credential handling logic is now removed.

  // ... (All your functions for managing posts and images like handleSubmit, handleEdit, handleDelete, etc., remain the same)

  // Show a loading screen while the SDK checks the session
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If the user is NOT authenticated, render the login page
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Access Required</h1>
            <p className="text-gray-600 my-4">Please log in to manage your blog posts.</p>
            <button
              onClick={() => loginWithRedirect()}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If the user IS authenticated, render the full admin dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with user info and logout button */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Blog Admin</h1>
              <p className="text-gray-600">Welcome, {user?.name || 'Admin'}!</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/posts" className="text-gray-600 hover:text-blue-600 transition-colors">
                ← Back to Site
              </Link>
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="text-gray-600 hover:text-red-600 transition-colors flex items-center"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
              {/* Your other admin buttons */}
            </div>
          </div>
        </div>
      </div>

      {/* The rest of your admin panel UI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ... your UI for showing the form, image manager, and posts list ... */}
      </div>
    </div>
  );
}