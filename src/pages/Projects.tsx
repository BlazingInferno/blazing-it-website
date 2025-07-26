import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag, MessageCircle } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

export default function Projects() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      const allPosts = JSON.parse(savedPosts);
      // Only show published posts
      setBlogPosts(allPosts.filter((post: BlogPost) => post.published));
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Insights, case studies, and technical articles from our IT experts. Learn about our latest projects, 
            best practices, and industry trends that drive successful digital transformation.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                          Read Full Article
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Recent Posts */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Projects</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="border-l-4 border-blue-600 pl-4">
                        <Link to={`/blog/${post.slug}`} className="block hover:bg-gray-50 -m-2 p-2 rounded transition-colors">
                          <h4 className="font-medium text-gray-900 hover:text-blue-600">{post.title}</h4>
                          <p className="text-sm text-gray-600">{post.date}</p>
                        </Link>
                      </div>
                    ))}
                    {blogPosts.length === 0 && (
                      <p className="text-gray-500 text-sm">No published posts yet.</p>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Migration Projects</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {blogPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('migration'))).length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Cloud Solutions</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {blogPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('cloud'))).length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Cybersecurity</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {blogPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('security') || tag.toLowerCase().includes('cyber'))).length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">IT Consulting</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {blogPosts.filter(post => post.tags.some(tag => tag.toLowerCase().includes('consulting'))).length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-blue-700 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Need Similar Solutions?</h3>
                  <p className="text-blue-100 mb-4">
                    Get expert consultation for your IT projects and digital transformation needs.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-white text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}