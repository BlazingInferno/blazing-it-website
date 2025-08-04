import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Shield, Zap, Users, CheckCircle, ArrowRight, MapPin, Building, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function Leeds() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="IT Services in Leeds - Local Technology Support"
        description="Professional IT services in Leeds and Yorkshire. Local IT support, cybersecurity, cloud solutions, and consulting for businesses across all Leeds districts and surrounding areas."
        keywords="IT services Leeds, Leeds IT support, Yorkshire technology services, local IT company Leeds, IT consulting Leeds, cybersecurity Leeds"
        url="https://blazingit.co.uk/leeds"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <MapPin className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-2xl font-semibold text-blue-400">Leeds, UK</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                IT Solutions in
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Leeds
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
                Serving local businesses with cutting-edge technology solutions. From city center startups to established Yorkshire enterprises, we deliver blazing-fast IT services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/services"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Our Services
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 hover:text-white transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Leeds business district with modern technology solutions"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leeds-Specific Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Services for Local Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored for local companies, from small businesses in Headingley to large enterprises in the city center.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/cybersecurity" className="block">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Protect your business from cyber threats with our comprehensive security solutions and 24/7 monitoring.
                </p>
                <div className="flex items-center text-orange-600 font-medium">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/cloud-solutions" className="block">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Move your business to the cloud with our expert migration services and ongoing support.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/it-support" className="block">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Support</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  24/7 technical support with rapid response times and local expertise.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/it-support" className="block">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Support</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  24/7 technical support with rapid response times and local expertise.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Leeds Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Local Businesses Choose Us
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As a trusted IT partner for local businesses, we understand the unique challenges facing 
                Yorkshire companies. From supporting growing startups in the Innovation District to 
                maintaining enterprise systems for established corporations.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-600">Local support team with rapid response</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-600">Understanding of Yorkshire business culture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-600">Proven track record with local companies</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-600">Competitive pricing for local businesses</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Contact Our Team <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Leeds business professionals working with cybersecurity cloud solutions and IT support technology"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leeds Areas Covered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing IT support across all districts and surrounding areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'City Centre', 'Headingley', 'Chapel Allerton', 'Roundhay',
              'Horsforth', 'Otley', 'Wetherby', 'Garforth',
              'Morley', 'Pudsey', 'Yeadon', 'Guiseley',
              'Bramley', 'Armley', 'Beeston', 'Holbeck'
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-gray-900">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leeds Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Local Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting local businesses with reliable IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">25+</div>
              <div className="text-gray-600">Local Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">&lt; 2hr</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600">Local Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get IT Support
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business? Contact our local team for a free consultation and quote.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Our Team</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our IT specialists</p>
                  <a href="tel:01918202449" className="text-blue-600 font-semibold text-lg hover:text-blue-800">
                    01918 202 449
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
                  <p className="text-gray-600 mb-4">Covering all districts and surrounding areas</p>
                  <span className="text-green-600 font-semibold">LS1 - LS29 Postcodes</span>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  to="/contact"
                  className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Your Free IT Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Business IT?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join the growing number of local businesses that trust us with their technology needs. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Free Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}