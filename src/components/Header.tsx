import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleServiceClick = (servicePath: string) => {
    navigate(servicePath);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src="/unnamed.png" alt="Blazing IT Logo" className="h-16 w-16 hover:opacity-80 transition-opacity" />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Home
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    Services
                  </button>
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="py-2">
                        <Link
                          to="/services"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          All Services
                        </Link>
                        <hr className="my-2" />
                        <button
                          onClick={() => handleServiceClick('/services/cybersecurity')}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Cybersecurity
                        </button>
                        <button
                          onClick={() => handleServiceClick('/services/cloud-solutions')}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Cloud Solutions
                        </button>
                        <button
                          onClick={() => handleServiceClick('/services/it-consulting')}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Data Backup
                        </button>
                        <button
                          onClick={() => handleServiceClick('/services/it-support')}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          IT Support
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  to="/contact"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left ${
                    isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Services
                </button>
                {isServicesOpen && (
                  <div className="pl-6 space-y-1">
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => { setIsServicesOpen(false); setIsMenuOpen(false); }}
                    >
                      All Services
                    </Link>
                    <button
                      onClick={() => handleServiceClick('/services/cybersecurity')}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Cybersecurity
                    </button>
                    <button
                      onClick={() => handleServiceClick('/services/cloud-solutions')}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Cloud Solutions
                    </button>
                    <button
                      onClick={() => handleServiceClick('/services/it-consulting')}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      Data Backup
                    </button>
                    <button
                      onClick={() => handleServiceClick('/services/it-support')}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                    >
                      IT Support
                    </button>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
