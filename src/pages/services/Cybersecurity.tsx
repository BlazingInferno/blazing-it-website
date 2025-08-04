import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

function Cybersecurity() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Cybersecurity Services - Protect Your Business"
        description="Comprehensive cybersecurity solutions to protect your business from cyber threats. Network security, threat monitoring, vulnerability assessments, and compliance services."
        keywords="cybersecurity services, network security, threat monitoring, vulnerability assessment, data protection, GDPR compliance, cyber security consulting"
        url="https://blazingit.co.uk/services/cybersecurity"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Cybersecurity
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive security solutions to protect your business from cyber threats, 
                ensure data integrity, and maintain customer trust in an increasingly digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-orange-700 transition-colors">
                  Security Assessment
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cybersecurity protection and digital security"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered security approach to protect your digital assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Lock className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Firewall configuration, intrusion detection, and network monitoring to prevent unauthorized access.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Eye className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Threat Monitoring</h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 security monitoring and threat detection to identify and respond to security incidents quickly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <AlertTriangle className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular security audits and penetration testing to identify and fix security vulnerabilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Users className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Employee Training</h3>
              <p className="text-gray-600 leading-relaxed">
                Security awareness training to educate your team about cybersecurity best practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Shield className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Encryption, backup strategies, and data loss prevention to keep your sensitive information secure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <CheckCircle className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensure compliance with industry standards like GDPR, HIPAA, and PCI DSS requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Cybersecurity Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The cybersecurity landscape and why protection is critical
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">£3.6M</div>
              <div className="text-gray-600">Average cost of a data breach in 2023</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">43%</div>
              <div className="text-gray-600">Of cyber attacks target small businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">277 days</div>
              <div className="text-gray-600">Average time to identify and contain a breach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to cybersecurity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assess', description: 'Evaluate current security posture and identify risks' },
              { step: '02', title: 'Plan', description: 'Develop comprehensive security strategy and policies' },
              { step: '03', title: 'Implement', description: 'Deploy security solutions and controls' },
              { step: '04', title: 'Monitor', description: 'Continuous monitoring and incident response' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Protect Your Business Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Don't wait for a security incident. Get a comprehensive security assessment and protect your business now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
              Free Security Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-orange-600 transition-colors">
              Contact Security Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cybersecurity;