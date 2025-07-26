import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, MessageCircle, Send } from 'lucide-react';

export default function ExchangeToMicrosoft365() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "David Wilson",
      email: "david@financecorp.com",
      comment: "Excellent guide! We just completed our Exchange 2016 migration using a similar approach. The hybrid deployment was key to our success.",
      date: "January 11, 2025",
      time: "10:45 AM"
    },
    {
      id: 2,
      name: "Lisa Rodriguez",
      email: "lisa@techsolutions.com",
      comment: "The case study section really helped us understand the timeline and costs involved. Great resource for planning our migration.",
      date: "January 12, 2025",
      time: "3:20 PM"
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
    title: "Microsoft Exchange Server to Microsoft 365 Migration",
    excerpt: "Complete guide to migrating from on-premises Exchange Server to Microsoft 365, covering hybrid deployments, mailbox migration strategies, and ensuring zero downtime during the transition.",
    author: "Blazing IT Team",
    date: "January 10, 2025",
    readTime: "10 min read",
    tags: ["Migration", "Microsoft 365", "Exchange Server", "Hybrid Deployment"],
    content: `
      <h2>Why Migrate from Exchange Server to Microsoft 365?</h2>
      <p>Organizations running on-premises Microsoft Exchange Server are increasingly moving to Microsoft 365 to reduce infrastructure costs, improve security, and enable modern collaboration features. This migration offers significant benefits including automatic updates, advanced security features, and global accessibility.</p>
      
      <h2>Key Benefits of Microsoft 365 Over On-Premises Exchange</h2>
      <ul>
        <li><strong>Reduced Infrastructure Costs:</strong> Eliminate server hardware, maintenance, and upgrade costs</li>
        <li><strong>Enhanced Security:</strong> Advanced Threat Protection, Safe Attachments, and Safe Links</li>
        <li><strong>Automatic Updates:</strong> Always up-to-date with latest features and security patches</li>
        <li><strong>Scalability:</strong> Easily add or remove users without hardware constraints</li>
        <li><strong>Global Accessibility:</strong> Access email and collaboration tools from anywhere</li>
        <li><strong>Compliance Features:</strong> Built-in eDiscovery, retention policies, and audit logs</li>
      </ul>

      <h2>Pre-Migration Assessment</h2>
      <p>Before beginning the migration process, we conduct a thorough assessment of your current Exchange environment:</p>
      <ul>
        <li>Exchange Server version and configuration analysis</li>
        <li>Mailbox size and distribution assessment</li>
        <li>Public folder inventory and usage analysis</li>
        <li>Third-party application dependencies evaluation</li>
        <li>Network bandwidth and connectivity requirements</li>
        <li>Security and compliance requirements review</li>
      </ul>

      <h2>Migration Strategies</h2>
      <p>We offer multiple migration approaches based on your organization's specific needs:</p>
      
      <h3>Cutover Migration</h3>
      <p>Best for organizations with fewer than 150 mailboxes. All mailboxes are migrated simultaneously during a planned maintenance window, providing a clean break from on-premises infrastructure.</p>
      
      <h3>Staged Migration</h3>
      <p>Ideal for larger organizations with Exchange 2003 or 2007. Mailboxes are migrated in batches over time, allowing for gradual transition and reduced risk.</p>
      
      <h3>Hybrid Deployment</h3>
      <p>The most flexible approach for large enterprises. Maintains coexistence between on-premises and cloud environments, allowing for gradual migration and testing.</p>
      
      <h3>IMAP Migration</h3>
      <p>Used when other methods aren't suitable, typically for older Exchange versions or complex configurations. Migrates email content while requiring manual configuration of other elements.</p>

      <h2>Hybrid Configuration Benefits</h2>
      <p>For many organizations, implementing a hybrid configuration provides the best migration experience:</p>
      <ul>
        <li><strong>Gradual Migration:</strong> Move users in phases without disrupting operations</li>
        <li><strong>Unified Global Address List:</strong> All users visible regardless of location</li>
        <li><strong>Free/Busy Sharing:</strong> Calendar information shared between environments</li>
        <li><strong>Secure Mail Routing:</strong> Encrypted communication between environments</li>
        <li><strong>Single Sign-On:</strong> Users maintain same credentials across environments</li>
      </ul>

      <h2>Migration Process Overview</h2>
      <p>Our proven migration methodology ensures minimal disruption and maximum success:</p>
      
      <h3>Phase 1: Planning and Preparation</h3>
      <ul>
        <li>Environment assessment and migration strategy development</li>
        <li>Microsoft 365 tenant setup and configuration</li>
        <li>DNS and certificate preparation</li>
        <li>Hybrid configuration implementation (if applicable)</li>
      </ul>
      
      <h3>Phase 2: Pilot Migration</h3>
      <ul>
        <li>Select pilot user group for initial testing</li>
        <li>Migrate pilot mailboxes and validate functionality</li>
        <li>Test all integrations and third-party applications</li>
        <li>Gather feedback and refine migration process</li>
      </ul>
      
      <h3>Phase 3: Production Migration</h3>
      <ul>
        <li>Execute migration in planned batches</li>
        <li>Monitor migration progress and resolve issues</li>
        <li>Validate data integrity and functionality</li>
        <li>Update DNS records and finalize cutover</li>
      </ul>
      
      <h3>Phase 4: Post-Migration Optimization</h3>
      <ul>
        <li>Decommission on-premises Exchange servers</li>
        <li>Optimize Microsoft 365 configuration</li>
        <li>Implement advanced security features</li>
        <li>Provide user training and documentation</li>
      </ul>

      <h2>Common Migration Challenges and Solutions</h2>
      
      <h3>Large Mailbox Sizes</h3>
      <p><strong>Challenge:</strong> Mailboxes over 50GB can take significant time to migrate and may timeout.</p>
      <p><strong>Solution:</strong> We use pre-staging techniques and incremental synchronization to handle large mailboxes efficiently.</p>
      
      <h3>Public Folder Migration</h3>
      <p><strong>Challenge:</strong> Public folders require special handling and may not have direct equivalents in Microsoft 365.</p>
      <p><strong>Solution:</strong> We assess public folder usage and migrate to appropriate Microsoft 365 services like SharePoint or Teams.</p>
      
      <h3>Third-Party Application Integration</h3>
      <p><strong>Challenge:</strong> Applications integrated with Exchange may require reconfiguration or replacement.</p>
      <p><strong>Solution:</strong> We inventory all integrations and provide migration paths or modern alternatives.</p>
      
      <h3>Network Bandwidth Limitations</h3>
      <p><strong>Challenge:</strong> Limited bandwidth can slow migration and impact business operations.</p>
      <p><strong>Solution:</strong> We implement throttling, schedule migrations during off-hours, and use network optimization techniques.</p>

      <h2>Security and Compliance Considerations</h2>
      <p>Migration to Microsoft 365 provides enhanced security capabilities:</p>
      <ul>
        <li><strong>Advanced Threat Protection:</strong> Protection against sophisticated email threats</li>
        <li><strong>Data Loss Prevention:</strong> Prevent sensitive information from leaving the organization</li>
        <li><strong>Multi-Factor Authentication:</strong> Enhanced security for user accounts</li>
        <li><strong>Conditional Access:</strong> Control access based on user, device, and location</li>
        <li><strong>Audit and Compliance:</strong> Comprehensive logging and compliance tools</li>
      </ul>

      <h2>Real-World Migration Case Study</h2>
      <p>We recently completed a complex Exchange Server 2016 to Microsoft 365 migration for a 800-user financial services company:</p>
      <ul>
        <li><strong>Environment:</strong> Exchange Server 2016 with 800 mailboxes and 50GB average size</li>
        <li><strong>Approach:</strong> Hybrid deployment with phased migration over 8 weeks</li>
        <li><strong>Challenges:</strong> Regulatory compliance requirements and large mailboxes</li>
        <li><strong>Results:</strong> Zero data loss, 99.8% uptime during migration, 40% cost reduction</li>
        <li><strong>Timeline:</strong> 12-week project from planning to decommissioning</li>
      </ul>

      <h2>Post-Migration Benefits Realized</h2>
      <p>Organizations typically see immediate benefits after migration:</p>
      <ul>
        <li><strong>Cost Savings:</strong> 30-50% reduction in email infrastructure costs</li>
        <li><strong>Improved Performance:</strong> Faster email delivery and better reliability</li>
        <li><strong>Enhanced Collaboration:</strong> Teams, SharePoint, and OneDrive integration</li>
        <li><strong>Better Security:</strong> Advanced threat protection and compliance features</li>
        <li><strong>Reduced IT Overhead:</strong> Less time spent on maintenance and updates</li>
      </ul>

      <h2>Getting Started with Your Exchange Migration</h2>
      <p>Ready to migrate from Exchange Server to Microsoft 365? Our certified migration specialists provide:</p>
      <ul>
        <li>Comprehensive Exchange environment assessment</li>
        <li>Detailed migration planning and timeline</li>
        <li>Risk assessment and mitigation strategies</li>
        <li>24/7 support during migration process</li>
        <li>Post-migration optimization and training</li>
      </ul>

      <p>Contact us today for a free consultation and take the first step toward modernizing your email infrastructure with Microsoft 365.</p>
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