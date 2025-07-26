import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Shield, Zap, Users, CheckCircle, ArrowRight, Headphones, Clock, Phone } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Blazing Fast
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  IT Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
                Transform your business with cutting-edge technology solutions that drive growth, enhance security, and maximize efficiency.
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
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional business team working with technology and digital solutions"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
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
                  Comprehensive security solutions to protect your business from cyber threats and ensure data integrity.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Scalable cloud infrastructure and migration services to enhance your business agility and reduce costs.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/it-consulting" className="block">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Consulting</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Strategic IT consulting to help you make informed technology decisions and optimize your digital transformation.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <Link to="/services/data-backup" className="block">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Backup & Recovery</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Reliable data backup and recovery solutions to ensure your critical business data is always protected.
                </p>
                <div className="flex items-center text-red-600 font-medium">
                  Learn More <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Blazing IT?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over a decade of experience in the IT industry, we've helped hundreds of businesses 
                transform their operations through innovative technology solutions. Our team of certified 
                professionals is committed to delivering excellence in every project.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-600">24/7 technical support and monitoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-600">Enterprise-grade security solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-600">Dedicated team of certified professionals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-600">Cutting-edge technology solutions</span>
                </li>
              </ul>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Get Started Today <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional business team analyzing data and technology solutions"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Cover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing IT solutions across Yorkshire and beyond!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
            'Leeds', 'Hull', 'York', 
            'Scarbrough', 'London' , 'Manchester',
            'Liverpool', 'Newcastle', 'Sheffield',
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-gray-900">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Solutions We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with industry-leading platforms to deliver comprehensive IT solutions
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Technology solutions including AWS, Azure, Microsoft 365, and cloud computing platforms"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Enterprise-Grade Technology Partners
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">AWS</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Amazon Web Services</h4>
                    <p className="text-blue-100">Scalable cloud infrastructure and computing services</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">Azure</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Microsoft Azure</h4>
                    <p className="text-blue-100">Enterprise cloud platform and hybrid solutions</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-sm">M365</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Microsoft 365</h4>
                    <p className="text-blue-100">Productivity suite and collaboration tools</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link
                    to="/services"
                    className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Explore Our Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business? Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+44 113 123 4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="data-backup">Data Backup</option>
                    <option value="it-support">IT Support</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name="message"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your project requirements and how we can help..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can drive your business forward. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-700 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
