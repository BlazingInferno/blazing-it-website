import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Shield, Zap, Users, HardDrive, Network } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="IT Services - Comprehensive Technology Solutions"
        description="Explore our comprehensive IT services including cybersecurity, cloud solutions, data backup, and IT consulting. Professional technology solutions for businesses of all sizes."
        keywords="IT services, cybersecurity services, cloud migration, data backup solutions, IT consulting, managed IT services, technology solutions"
        url="https://blazingit.co.uk/services"
      />
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to transform your business and drive growth through cutting-edge technology.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to cybersecurity, we provide end-to-end technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/cybersecurity" className="block">
              <img
                src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Cybersecurity protection software with shield icon for business data security and threat monitoring"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive security solutions to protect your business from cyber threats and ensure data integrity.
              </p>
              <div className="mt-6">
                <span className="text-orange-600 font-medium hover:text-orange-700">Learn More →</span>
              </div>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/cloud-solutions" className="block">
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Cloud computing network infrastructure visualization showing scalable IT solutions and data migration"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Scalable cloud infrastructure and migration services to enhance your business agility and reduce costs.
              </p>
              <div className="mt-6">
                <span className="text-green-600 font-medium hover:text-green-700">Learn More →</span>
              </div>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/data-backup" className="block">
              <img
                src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Server room ethernet cables and data backup infrastructure for business continuity and disaster recovery"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <HardDrive className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Backup & Recovery</h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable data backup and recovery solutions to ensure your critical business data is always protected.
              </p>
              <div className="mt-6">
                <span className="text-red-600 font-medium hover:text-red-700">Learn More →</span>
              </div>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/it-support" className="block">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="IT support technician providing 24/7 remote assistance and helpdesk services for business technology"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Support</h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 technical support and helpdesk services to keep your business running smoothly with expert assistance.
              </p>
              <div className="mt-6">
                <span className="text-purple-600 font-medium hover:text-purple-700">Learn More →</span>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can drive your business forward.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
          />
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
