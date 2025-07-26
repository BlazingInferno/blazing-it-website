import React from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Phone validation regex (supports international formats)
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;

  const validateEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digit characters except +
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 7;
  };

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};

    // Email validation
    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation (only if phone is provided)
    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_4ei57if';
      const templateId = 'template_n7od9lb';
      const publicKey = 'OEDH1wLe8bNyMtlkd';

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service_interest: formData.service,
        message: formData.message,
        to_name: 'Blazing IT Limited',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setValidationErrors({});
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with blazing-fast IT solutions? Let's discuss your project and create a solution that drives your business forward.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a free consultation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send us a Message</h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Ready to transform your business? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
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
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg ${
                        validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {validationErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg ${
                        validationErrors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="+44 113 123 4567"
                    />
                    {validationErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
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
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message & Get Free Consultation'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prefer to contact us directly? Here are additional ways to get in touch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
              <a href="mailto:info@blazingit.com" className="text-blue-700 font-medium hover:text-blue-800">
                info@blazingit.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team during business hours</p>
              <a href="tel:01918 202 449" className="text-green-700 font-medium hover:text-green-800">
                01918 202 449
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
