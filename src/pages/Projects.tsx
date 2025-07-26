import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

export default function Projects() {
  const blogPosts = [
    {
      id: 1,
      title: "Google Workspace to Microsoft 365 Migration",
      excerpt: "A comprehensive guide to successfully migrating from Google Workspace to Microsoft 365, including best practices, common challenges, and step-by-step implementation strategies.",
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
      `,
      author: "Blazing IT Team",
      date: "January 15, 2025",
      readTime: "8 min read",
      tags: ["Migration", "Microsoft 365", "Google Workspace", "Cloud Solutions"],
    },
    {
      id: 2,
      title: "Microsoft Exchange Server to Microsoft 365 Migration",
      excerpt: "Complete guide to migrating from on-premises Exchange Server to Microsoft 365, covering hybrid deployments, mailbox migration strategies, and ensuring zero downtime during the transition.",
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
      `,
      author: "Blazing IT Team",
      date: "January 10, 2025",
      readTime: "10 min read",
      tags: ["Migration", "Microsoft 365", "Exchange Server", "Hybrid Deployment"]
    }
  ];

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
              {blogPosts.map((post) => (
                <article key={post.id} className="mb-12">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-8">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{post.date}</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {post.title}
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
                      
                      <div 
                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                      
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link
                          to="/contact"
                          className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                        >
                          Get Migration Consultation
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Recent Posts */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Projects</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-medium text-gray-900">Google Workspace to Microsoft 365 Migration</h4>
                      <p className="text-sm text-gray-600">January 15, 2025</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-medium text-gray-900">Microsoft Exchange Server to Microsoft 365 Migration</h4>
                      <p className="text-sm text-gray-600">January 10, 2025</p>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Migration Projects</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Cloud Solutions</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Cybersecurity</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">IT Consulting</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">0</span>
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