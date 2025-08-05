import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Clock, Phone, Monitor, Wrench, Shield, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEOHead from '../../components/SEOHead';

function ITSupport() {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [consultationForm, setConsultationForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    preferredCallTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConsultationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use environment variables for EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: consultationForm.contactName,
        from_email: consultationForm.email,
        phone: consultationForm.phone,
        company_name: consultationForm.companyName,
        preferred_call_time: consultationForm.preferredCallTime,
        service_interest: 'IT Support - Free 30 Minute IT Consultation',
        message: `Company: ${consultationForm.companyName}\nContact: ${consultationForm.contactName}\nPhone: ${consultationForm.phone}\nPreferred Call Time: ${consultationForm.preferredCallTime}\n\nRequesting a free 30-minute IT consultation.`,
        to_name: 'Blazing IT Limited',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      alert('Thank you! We will contact you within 24 hours to schedule your free consultation.');
      setShowConsultationModal(false);
      setConsultationForm({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        preferredCallTime: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Sorry, there was an error sending your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <button 
                  onClick={() => setShowConsultationModal(true)}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Get a Free 30 minute IT Consultation
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

      {/* Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Free 30 Minute IT Consultation</h2>
              <button
                onClick={() => setShowConsultationModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              Get expert advice on your IT challenges. Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
            </p>
            
            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    required
                    value={consultationForm.companyName}
                    onChange={(e) => setConsultationForm({...consultationForm, companyName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    value={consultationForm.contactName}
                    onChange={(e) => setConsultationForm({...consultationForm, contactName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={consultationForm.email}
                    onChange={(e) => setConsultationForm({...consultationForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={consultationForm.phone}
                    onChange={(e) => setConsultationForm({...consultationForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="+44 113 123 4567"
                  />
                </div>
              </div>
              
              <div>
                  <label htmlFor="preferredCallTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Call Time
                  </label>
                  <select
                    id="preferredCallTime"
                    value={consultationForm.preferredCallTime}
                    onChange={(e) => setConsultationForm({...consultationForm, preferredCallTime: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-5PM)</option>
                    <option value="evening">Evening (5PM-7PM)</option>
                  </select>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowConsultationModal(false)}
                  disabled={isSubmitting}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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