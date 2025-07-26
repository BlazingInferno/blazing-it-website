import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, MessageCircle, Send } from 'lucide-react';

export default function GoogleWorkspaceToMicrosoft365() {
  const [comments, setComments] = useState([]);

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
    date: "July 26, 2025",
    readTime: "4 min read",
    tags: ["Migration", "Microsoft 365", "Google Workspace", "Cloud Solutions"],
    content: `
      <h3><strong>1. [cite_start]Choose a Migration Method</strong> [cite: 1]</h3>
      [cite_start]<p>The first crucial decision is determining how much of the work you will do yourself or if you will use a third-party solution. [cite: 2]</p>
      <ul>
          [cite_start]<li><b>Native/Manual Migration:</b> Microsoft offers its own set of tools for migration. [cite: 3] [cite_start]This approach is cost-effective but can be complex and time-consuming. [cite: 3] [cite_start]Be aware that it may not migrate all data, such as photos. [cite: 3]</li>
          [cite_start]<li><b>Third-Party Solutions:</b> Tools like BitTitan, ShareGate, and CloudM can automate much of the process. [cite: 4] [cite_start]These solutions typically provide more features, enhanced support, and can manage more complex migrations, though they come with a cost and their own pros and cons. [cite: 5]</li>
          [cite_start]<li><b>Hybrid Approach:</b> This method combines native tools with third-party solutions to create a more optimized migration plan. [cite: 7]</li>
      </ul>
  
      <h4><strong>Comparison of Third-Party Tools</strong></h4>
      <table>
          <thead>
              <tr>
                  <th>Tool</th>
                  <th>Strengths</th>
                  <th>Weaknesses</th>
                  <th>Pricing (Approx.)</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><b>BitTitan MigrationWiz</b></td>
                  <td>- Easy to use<br>- Mail, contacts, calendar, Drive, Shared Drives<br>- Delta migration<br>- Pre/post migration reports</td>
                  <td>- Lacks deep Drive permission mapping<br>- Limited customer support on basic plans</td>
                  <td>~$12–$20/user (varies by workload)</td>
              </tr>
              <tr>
                  <td><b>CloudM Migrate</b></td>
                  <td>- Full Google to 365 support incl. Shared Drives<br>- Good UI<br>- Pre-migration analysis<br>- GDPR compliant (UK-based)</td>
                  <td>- Slightly steeper learning curve<br>- Advanced features need higher tier</td>
                  <td>From ~$15/user (volume discounts)</td>
              </tr>
              <tr>
                  <td><b>SkyKick Migration Suite</b></td>
                  <td>- Automation & scheduling<br>- Good calendar/contacts fidelity<br>- White-label options<br>- Partner friendly</td>
                  <td>- Must go through a SkyKick partner<br>- Drive migration not as strong</td>
                  <td>Variable (via partners, ~£20–£40/user)</td>
              </tr>
              <tr>
                  <td><b>AvePoint Fly</b></td>
                  <td>- Strong compliance focus<br>- Full content + permissions migration<br>- Highly scalable<br>- Supports hybrid</td>
                  <td>- More complex setup<br>- Pricing not public</td>
                  <td>Custom quotes only</td>
              </tr>
          </tbody>
      </table>
      [cite_start]<p style="font-size: 0.8em; color: grey;">Table data extracted from source document[cite: 6].</p>
      
      <hr>
  
      <h3><strong>2. Set Up Your Microsoft 365 Tenant</strong></h3>
      [cite_start]<p>Regardless of the migration method you choose, you'll need to set up your Microsoft 365 tenant, starting with purchasing and assigning the correct licenses. [cite: 8] [cite_start]You can find a detailed breakdown of license features at m365maps.com. [cite: 9, 10]</p>
      <ol>
          <li>
              [cite_start]<b>Verify Your Domain:</b> You will need to verify your custom domain with Microsoft 365. [cite: 11] [cite_start]This is a straightforward process where Microsoft prompts you to add a TXT record to your domain registrar. [cite: 12] [cite_start]This verification won't affect your existing services like email. [cite: 12]<br>
              <img src="https://storage.googleapis.com/assistive-vision-prod-public/images/960573e8-db2a-43c3-8839-a86d262b9a10.png" alt="Microsoft 365 domain verification prompt showing detection of AWS as the DNS hosting provider." style="margin-top: 10px; border-radius: 4px; border: 1px solid #ddd; padding: 5px; max-width: 100%;">
          </li>
          <li>
              [cite_start]<b>Create User Accounts:</b> Create the necessary user accounts in Microsoft 365, and the mailboxes will follow. [cite: 13] [cite_start]You can also assign licenses during this step. [cite: 13] [cite_start]For large organizations, you can upload a .csv file to add users in bulk. [cite: 13]<br>
              <img src="https://storage.googleapis.com/assistive-vision-prod-public/images/6df257c2-8418-47e9-a477-96a84c7a5214.png" alt="The 'Add list of users' interface in Microsoft 365." style="margin-top: 10px; border-radius: 4px; border: 1px solid #ddd; padding: 5px; max-width: 100%;">
          </li>
      </ol>
      
      <hr>
  
      <h3><strong>3. Prepare Your Google Workspace Data</strong></h3>
      [cite_start]<p>With your Microsoft 365 tenant ready, you can now prepare your Google Workspace for the migration. [cite: 14]</p>
      <ul>
          [cite_start]<li><b>Data Cleansing:</b> The first step is to delete and archive old and unnecessary user accounts, files, and emails. [cite: 15] [cite_start]It's important to avoid migrating irrelevant data. [cite: 16]</li>
          [cite_start]<li><b>Encourage User Organization:</b> Ask users to organize their data before the migration. [cite: 15]</li>
      </ul>
  
      [cite_start]<p><i>(To Be continued...)</i> [cite: 17]</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
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
