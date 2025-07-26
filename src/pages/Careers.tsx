import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Users, Award, TrendingUp } from 'lucide-react';

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build your career with Blazing IT Limited. We're looking for passionate IT professionals 
            who want to make a real impact in the world of technology solutions.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Blazing IT as Your Career?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Growth</h3>
              <p className="text-gray-600">
                We invest in our team's professional development with training, certifications, and clear advancement paths.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work with a supportive team that values collaboration, innovation, and shared success.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cutting-Edge Projects</h3>
              <p className="text-gray-600">
                Work on exciting projects with the latest technologies and make a real impact for our clients.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                We believe in maintaining a healthy work-life balance with flexible working arrangements.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Benefits</h3>
              <p className="text-gray-600">
                Comprehensive benefits package including health insurance, pension, and professional development budget.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Remote Friendly</h3>
              <p className="text-gray-600">
                Flexible remote and hybrid working options to suit your lifestyle and productivity preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our open positions and find your next career opportunity
            </p>
          </div>

          <div className="space-y-6">
            {/* Job Listing 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Senior IT Consultant</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Yorkshire / Remote
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Full-time
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      Senior Level
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Lead client engagements and provide strategic IT consulting services. Requires 5+ years experience 
                    in enterprise IT solutions, cloud platforms, and client management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Azure</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">AWS</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Microsoft 365</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Project Management</span>
                  </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <Link
                    to="/contact"
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Job Listing 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Cybersecurity Specialist</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Yorkshire / Hybrid
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Full-time
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      Mid-Senior Level
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Design and implement comprehensive cybersecurity solutions for our clients. Requires security 
                    certifications and 3+ years experience in enterprise security.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">CISSP</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Penetration Testing</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Risk Assessment</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Compliance</span>
                  </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <Link
                    to="/contact"
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Job Listing 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Cloud Solutions Engineer</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Remote / UK
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Full-time
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      Mid Level
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Design, implement, and manage cloud infrastructure solutions. Experience with major cloud platforms 
                    and infrastructure as code required.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">AWS</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Azure</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Terraform</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">DevOps</span>
                  </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <Link
                    to="/contact"
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed a straightforward process to help us get to know you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application and CV through our contact form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Review</h3>
              <p className="text-gray-600">We'll review your application and get back to you within 48 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Initial interview to discuss your experience and our opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome</h3>
              <p className="text-gray-600">Join our team and start making an impact from day one</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Don't see the perfect role? We're always interested in hearing from talented IT professionals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}