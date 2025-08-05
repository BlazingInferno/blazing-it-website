import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, MessageCircle, Send } from 'lucide-react';
import { getBlogPostBySlug, getCommentsBySlug, createComment, BlogPost, BlogComment } from '../../lib/supabase';
import SEOHead from '../../components/SEOHead';

export default function DynamicBlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [submittingComment, setSubmittingComment] = useState(false);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    comment: ''
  });

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        setError(null);
        const postData = await getBlogPostBySlug(slug);
        
        if (postData) {
          setPost(postData);
          const commentsData = await getCommentsBySlug(slug);
          setComments(commentsData);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load post';
        setError(errorMessage);
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slug || !newComment.name || !newComment.email || !newComment.comment) return;
    
    try {
      setSubmittingComment(true);
      const commentData = {
        post_slug: slug,
        name: newComment.name,
        email: newComment.email,
        comment: newComment.comment
      };
      
      const createdComment = await createComment(commentData);
      if (createdComment) {
        setComments([...comments, createdComment]);
        setNewComment({ name: '', email: '', comment: '' });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit comment';
      console.error('Error submitting comment:', err);
      alert(`Unable to submit comment: ${errorMessage}. Please try again.`);
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }
  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-8 rounded-lg">
            <h1 className="text-2xl font-bold text-red-900 mb-4">
              {error === 'Post not found' ? 'Post Not Found' : 'Error Loading Post'}
            </h1>
            <div className="mb-6">
              <p className="mb-3">
                {error === 'Post not found' 
                  ? "The blog post you're looking for doesn't exist or hasn't been published yet."
                  : `There was an error loading the post: ${error}`
                }
              </p>
              {error !== 'Post not found' && (
                <div className="text-sm">
                  <p>This might be due to:</p>
                  <ul className="list-disc list-inside mt-1 text-left">
                    <li>Network connectivity issues</li>
                    <li>Database configuration problems</li>
                    <li>Temporary service unavailability</li>
                  </ul>
                </div>
              )}
            </div>
            <Link
              to="/articles"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Back to Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, IT solutions, technology consulting, digital transformation`}
        url={`https://blazingit.co.uk/blog/${post.slug}`}
        type="article"
        article={{
          author: post.author,
          publishedTime: new Date(post.date).toISOString(),
          tags: post.tags
        }}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <User className="h-4 w-4 mr-2" />
            <span className="mr-4">{post.author}</span>
            <Calendar className="h-4 w-4 mr-2" />
            <span className="mr-4">{post.date}</span>
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.read_time}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="border-t border-gray-200 pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <MessageCircle className="h-6 w-6 text-gray-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">
              Comments ({comments.length})
            </h3>
          </div>

          {/* Existing Comments */}
          <div className="space-y-6 mb-12">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold text-sm">
                        {comment.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                      <p className="text-sm text-gray-500">
                        {new Date(comment.created_at).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{comment.comment}</p>
              </div>
            ))}
          </div>

          {/* Add Comment Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Leave a Comment</h4>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={newComment.name}
                    onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={newComment.email}
                    onChange={(e) => setNewComment({...newComment, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Comment *
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  required
                  value={newComment.comment}
                  onChange={(e) => setNewComment({...newComment, comment: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submittingComment}
                className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                <Send className="h-4 w-4 mr-2" />
                {submittingComment ? 'Posting...' : 'Post Comment'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}