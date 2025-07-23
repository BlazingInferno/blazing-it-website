import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, HardDrive, Clock, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';

function DataBackup() {
  return (
    <div className="min-h-screen bg-white">
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
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors">
                  Backup Assessment
                </button>
                <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-600 hover:text-white transition-colors">
                  Recovery Testing
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Server room with data backup infrastructure"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
  className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition-colors text-center">Backup Assessment
</Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-red-600 transition-colors">
              Test Your Recovery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataBackup;
