import React from 'react';
import { Cloud, Server, Zap, Shield, TrendingUp, Globe } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

function CloudSolutions() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Cloud Solutions - Scalable Infrastructure & Migration"
        description="Expert cloud migration and infrastructure services. AWS, Azure, and Google Cloud solutions to enhance business agility and reduce costs with enterprise-grade reliability."
        keywords="cloud solutions, cloud migration, AWS services, Microsoft Azure, Google Cloud Platform, cloud infrastructure, scalable hosting"
        url="https://blazingit.co.uk/services/cloud-solutions"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Cloud Solutions
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Scalable cloud infrastructure and migration services to enhance your business agility, 
                reduce costs, and enable global reach with enterprise-grade reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors">
                  Cloud Assessment
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-green-600 hover:text-white transition-colors">
                  Migration Guide
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cloud computing infrastructure showing AWS Azure Google Cloud migration and scalable hosting solutions"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Server className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless migration of your existing infrastructure to the cloud with minimal downtime and maximum efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <img src="/unnamed-removebg-preview copy.png" alt="Blazing IT Logo" className="h-12 w-12 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto Scaling</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically scale your resources up or down based on demand to optimize performance and costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Shield className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security measures including encryption, access controls, and compliance management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <TrendingUp className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize your cloud spending with intelligent resource allocation and cost monitoring tools.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Globe className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Cloud Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage multiple cloud providers to avoid vendor lock-in and optimize for different workloads.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Cloud className="h-12 w-12 text-red-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Disaster Recovery</h3>
              <p className="text-gray-600 leading-relaxed">
                Robust backup and disaster recovery solutions to ensure business continuity in any situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Platforms We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified expertise across major cloud platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Amazon Web Services</h3>
              <p className="text-gray-600">
                Comprehensive AWS solutions including EC2, S3, RDS, Lambda, and more for scalable applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Microsoft Azure</h3>
              <p className="text-gray-600">
                Azure cloud services for enterprise applications, AI/ML workloads, and hybrid cloud solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Google Cloud Platform</h3>
              <p className="text-gray-600">
                GCP services for data analytics, machine learning, and modern application development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why businesses are moving to the cloud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30-50%</div>
              <div className="text-gray-600">Cost reduction on average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
              <div className="text-gray-600">Faster deployment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Global availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Let us help you migrate to the cloud and unlock the benefits of scalable, secure, and cost-effective infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
              Free Cloud Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-green-600 transition-colors">
              Migration Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CloudSolutions;