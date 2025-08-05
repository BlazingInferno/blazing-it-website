import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Clock, Phone, Monitor, Wrench, Shield } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

function ITSupport() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="24/7 IT Support - Professional Technical Assistance"
        description="Comprehensive 24/7 IT support services including helpdesk support, remote assistance, system maintenance, and emergency response for business continuity."
        keywords="24/7 IT support, helpdesk services, remote IT support, technical assistance, system maintenance, IT emergency response, managed IT services"
        url="https://blazingit.co.uk/services/it-support"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  IT Support
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive 24/7 IT support services to keep your business running smoothly. 
                From helpdesk support to system maintenance, we're here when you need us most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors">
                  Get Support Now
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors">
                  Call: +44 113 123 4567
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="IT support technician providing 24/7 remote assistance and helpdesk services for business technology"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical support to keep your business operations running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Headphones className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Helpdesk Support</h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 helpdesk support for all your technical questions and issues via phone, email, and chat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Monitor className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Remote Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant remote assistance to diagnose and resolve technical issues without on-site visits.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Wrench className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">System Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Proactive system maintenance and updates to prevent issues before they impact your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Shield className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous security monitoring and threat detection to protect your systems and data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Clock className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Response</h3>
              <p className="text-gray-600 leading-relaxed">
                Rapid emergency response for critical system failures and urgent technical issues.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Phone className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">On-Site Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional on-site technical support when remote assistance isn't sufficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Service Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support level that best fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">Basic</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Support</h3>
              <p className="text-gray-600 mb-6">
                Essential support for small businesses with standard response times and email support.
              </p>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li>• Email support</li>
                <li>• 8-hour response time</li>
                <li>• Business hours coverage</li>
                <li>• Remote assistance</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Contact for Pricing
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-indigo-600">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">Pro</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Support</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive support for growing businesses with faster response times and phone support.
              </p>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li>• Phone & email support</li>
                <li>• 2-hour response time</li>
                <li>• Extended hours coverage</li>
                <li>• Priority remote assistance</li>
                <li>• Monthly system reviews</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-center"
              >
                Get Pro Support
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">Enterprise</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Support</h3>
              <p className="text-gray-600 mb-6">
                Premium 24/7 support for large organizations with dedicated account management.
              </p>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li>• 24/7 phone & email support</li>
                <li>• 30-minute response time</li>
                <li>• Dedicated account manager</li>
                <li>• On-site support included</li>
                <li>• Proactive monitoring</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center"
              >
                Contact for Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Response Times
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, reliable response times to minimize business disruption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{"< 30 min"}</div>
              <div className="text-gray-600">Critical issues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{"< 2 hours"}</div>
              <div className="text-gray-600">High priority</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{"< 8 hours"}</div>
              <div className="text-gray-600">Standard issues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need IT Support Right Now?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Our expert technicians are standing by to help resolve your technical issues quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Live Chat
            </Link>
            <a
              href="tel:01918202449"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Call: 01918 202 449
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ITSupport;