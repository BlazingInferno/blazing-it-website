import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, HardDrive, Clock, RefreshCw, CheckCircle, AlertTriangle, X } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

function DataBackup() {
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
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you! We will contact you within 24 hours to schedule your free backup assessment.');
      setShowConsultationModal(false);
      setConsultationForm({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        preferredCallTime: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Data Backup & Recovery - Protect Your Critical Data"
        description="Reliable data backup and recovery solutions using the 3-2-1 strategy. Local, cloud, and hybrid backup options with disaster recovery planning for business continuity."
        keywords="data backup, disaster recovery, cloud backup, data protection, business continuity, backup solutions, data recovery services"
        url="https://blazingit.co.uk/services/data-backup"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Data Backup
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Reliable data backup and recovery solutions to ensure your critical business data is always 
                protected, accessible, and recoverable in any situation or disaster scenario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowConsultationModal(true)}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Backup Assessment
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Data backup server room infrastructure with disaster recovery systems and business continuity solutions"
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
              <h2 className="text-2xl font-bold text-gray-900">Free Backup Assessment</h2>
              <button
                onClick={() => setShowConsultationModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">
              Get a comprehensive backup assessment for your business. Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
                  className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Free Assessment'}
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

      {/* Backup Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Backup Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data protection strategies for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <HardDrive className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Backup</h3>
              <p className="text-gray-600 leading-relaxed">
                On-site backup solutions with high-speed recovery for immediate access to your critical data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Shield className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Backup</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure off-site cloud backup with encryption and global accessibility for ultimate data protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <RefreshCw className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hybrid Backup</h3>
              <p className="text-gray-600 leading-relaxed">
                Best of both worlds - combining local speed with cloud security for comprehensive protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Clock className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Backup</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous data protection with real-time synchronization to minimize data loss risk.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <CheckCircle className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Backup</h3>
              <p className="text-gray-600 leading-relaxed">
                Set-and-forget automated backup schedules that ensure consistent data protection without manual intervention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <AlertTriangle className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Disaster Recovery</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete disaster recovery planning and testing to ensure business continuity in any scenario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backup Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3-2-1 Backup Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry best practice for comprehensive data protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Copies of Data</h3>
              <p className="text-gray-600">
                Maintain at least 3 copies of your important data to ensure redundancy and availability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Different Media Types</h3>
              <p className="text-gray-600">
                Store copies on 2 different types of media to protect against media-specific failures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Off-site Copy</h3>
              <p className="text-gray-600">
                Keep 1 copy off-site to protect against local disasters and physical threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Loss Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Data Backup is Critical
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The reality of data loss and its impact on businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
              <div className="text-gray-600">Of companies that lose data shut down within 6 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">93%</div>
              <div className="text-gray-600">Of companies without data recovery go out of business within a year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">£1.25M</div>
              <div className="text-gray-600">Average cost of a data breach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">12 hours</div>
              <div className="text-gray-600">Average downtime after data loss</div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Backup Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach to data protection and recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Analyze your data and identify critical assets' },
              { step: '02', title: 'Strategy', description: 'Design custom backup strategy and schedule' },
              { step: '03', title: 'Implementation', description: 'Deploy backup solutions and configure automation' },
              { step: '04', title: 'Monitoring', description: 'Continuous monitoring and regular recovery testing' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Risk Losing Your Data
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Protect your business with reliable backup solutions. Get started with a free backup assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataBackup;
