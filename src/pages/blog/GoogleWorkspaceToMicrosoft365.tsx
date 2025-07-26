import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, MessageCircle, Send } from 'lucide-react';

export default function GoogleWorkspaceToMicrosoft365() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      comment: "This was incredibly helpful! We're planning a migration for our 200-user company and this guide answered many of our questions.",
      date: "January 16, 2025",
      time: "2:30 PM"
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@techcorp.com",
      comment: "Great breakdown of the 3-2-1 backup strategy. The case study really shows the value of professional migration services.",
      date: "January 16, 2025",
      time: "4:15 PM"
    }
  ]);

  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.email && newComment.comment) {
      const comment = {
        id: comments.length + 1,
        ...newComment,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        time: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        })
      };
      setComments([...comments, comment]);
      setNewComment({ name: '', email: '', comment: '' });
    }
  };

  const post = {
    title: "Google Workspace to Microsoft 365 Migration",
    excerpt: "A comprehensive guide to successfully migrating from Google Workspace to Microsoft 365, including best practices, common challenges, and step-by-step implementation strategies.",
    author: "Blazing IT Team",
    date: "January 15, 2025",
    readTime: "8 min read",
    tags: ["Migration", "Microsoft 365", "Google Workspace", "Cloud Solutions"],
    content: `
      <h2>Why Migrate from Google Workspace to Microsoft 365?</h2>
      <p>Many organizations are making the strategic decision to migrate from Google Workspace to Microsoft 365 for various compelling reasons. Microsoft 365 offers deeper integration with existing Windows infrastructure, advanced security features, and comprehensive productivity tools that align better with enterprise requirements.</p>
      
      <h2>Key Benefits of Microsoft 365</h2>
      <ul>
        <li><strong>Enhanced Security:</strong> Advanced threat protection, data loss prevention, and comprehensive compliance tools</li>
        <li><strong>Better Integration:</strong> Seamless integration with Windows environments and Active Directory</li>
        <li><strong>Advanced Analytics:</strong> Power BI integration and advanced reporting capabilities</li>
        <li><strong>Comprehensive Productivity Suite:</strong> Full Office applications with advanced features</li>
        <li><strong>Enterprise-Grade Compliance:</strong> Meeting regulatory requirements across various industries</li>
      </ul>

      <h2>Migration Planning Phase</h2>
      <p>Successful migration requires thorough planning and assessment. Our team begins with a comprehensive audit of your current Google Workspace environment, including:</p>
      <ul>
        <li>User account analysis and mapping</li>
        <li>Data volume assessment across Gmail, Drive, and other services</li>
        <li>Application dependencies and third-party integrations</li>
        <li>Security and compliance requirements evaluation</li>
        <li>Timeline and resource allocation planning</li>
      </ul>

      <h2>Data Migration Strategy</h2>
      <p>The migration process involves several critical components that must be handled with precision:</p>
      
      <h3>Email Migration</h3>
      <p>Gmail to Outlook migration requires careful handling of folder structures, labels, and email formatting. We use enterprise-grade migration tools to ensure data integrity and minimize downtime.</p>
      
      <h3>File and Document Migration</h3>
      <p>Google Drive to OneDrive migration involves converting Google Docs, Sheets, and Slides to their Microsoft equivalents while preserving formatting and collaboration history.</p>
      
      <h3>Calendar and Contacts</h3>
      <p>Google Calendar events and contacts are migrated to Outlook with full preservation of recurring events, meeting invitations, and contact groups.</p>

      <h2>User Training and Adoption</h2>
      <p>Change management is crucial for successful migration. Our comprehensive training program includes:</p>
      <ul>
        <li>Pre-migration awareness sessions</li>
        <li>Hands-on training for Microsoft 365 applications</li>
        <li>Quick reference guides and documentation</li>
        <li>Post-migration support and troubleshooting</li>
        <li>Power user training for advanced features</li>
      </ul>

      <h2>Common Challenges and Solutions</h2>
      <p>Based on our experience with numerous migrations, we've identified and developed solutions for common challenges:</p>
      
      <h3>Data Loss Prevention</h3>
      <p>We implement multiple backup strategies and verification processes to ensure zero data loss during migration.</p>
      
      <h3>Downtime Minimization</h3>
      <p>Our phased migration approach allows for minimal business disruption, often completing migrations during off-hours.</p>
      
      <h3>Integration Complexities</h3>
      <p>Third-party application integrations are carefully mapped and reconfigured to work with Microsoft 365 services.</p>

      <h2>Post-Migration Optimization</h2>
      <p>After successful migration, we focus on optimizing your Microsoft 365 environment:</p>
      <ul>
        <li>Security policy configuration and enforcement</li>
        <li>Collaboration workflow optimization</li>
        <li>Advanced feature implementation (Teams, SharePoint, Power Platform)</li>
        <li>Performance monitoring and optimization</li>
        <li>Ongoing support and maintenance</li>
      </ul>

      <h2>Case Study: 500-User Enterprise Migration</h2>
      <p>Recently, we successfully migrated a 500-user organization from Google Workspace to Microsoft 365. The project involved:</p>
      <ul>
        <li><strong>Timeline:</strong> 6-week migration with minimal disruption</li>
        <li><strong>Data Volume:</strong> 2.5TB of emails and 5TB of files</li>
        <li><strong>Success Rate:</strong> 99.9% data integrity with zero business-critical data loss</li>
        <li><strong>User Satisfaction:</strong> 95% user satisfaction rate post-migration</li>
        <li><strong>ROI:</strong> 30% cost savings within the first year</li>
      </ul>

      <h2>Getting Started with Your Migration</h2>
      <p>If you're considering migrating from Google Workspace to Microsoft 365, our team of certified migration specialists is here to help. We offer:</p>
      <ul>
        <li>Free migration assessment and planning consultation</li>
        <li>Detailed migration roadmap and timeline</li>
        <li>Risk assessment and mitigation strategies</li>
        <li>Comprehensive project management and support</li>
        <li>Post-migration optimization and training</li>
      </ul>

      <p>Contact us today to schedule your free consultation and take the first step toward a successful Microsoft 365 migration.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
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
            <span>{post.readTime}</span>
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
              Get Migration Consultation
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
                      <p className="text-sm text-gray-500">{comment.date} at {comment.time}</p>
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
                className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                <Send className="h-4 w-4 mr-2" />
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}