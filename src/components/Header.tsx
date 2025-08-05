import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, Phone, Mail } from 'lucide-react'; // Added Phone and Mail icons

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };
  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1 md:flex-initial">
            <Link to="/" className="flex-shrink-0">
              <img src="/unnamed.png" alt="Blazing IT Limited logo - Yorkshire IT support cybersecurity and cloud solutions" className="h-16 w-16 hover:opacity-80 transition-opacity" />
            </Link>
            
            {/* Mobile contact info - next to logo */}
            <div className="md:hidden flex-1 flex justify-between items-center ml-4 mr-4">
            <div className="md:hidden ml-4 mr-4">
              <a href="mailto:info@blazingit.co.uk" className="flex items-center text-xs text-gray-600 hover:text-blue-600 mb-1">
                <Mail className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="truncate">info@blazingit.co.uk</span>
              </a>
              <a href="tel:01918202449" className="flex items-center text-xs text-gray-600 hover:text-blue-600">
                <Phone className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>01918 202 449</span>
              </a>
            </div>
            </div>
            
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
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="relative"
                  >
                    <Link
                      to="/services"
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                    >
                      Services
                    </Link>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <div className="py-2">
                          <Link
                            to="/services/cybersecurity"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Cybersecurity
                          </Link>
                          <Link
                            to="/services/cloud-solutions"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Cloud Solutions
                          </Link>
                          <Link
                            to="/services/data-backup"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Data Backup
                          </Link>
                          <Link
                            to="/services/it-support"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            IT Support
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  to="/blog"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {/* Contact info - desktop and mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-gray-600 mr-2" />
              <a href="mailto:info@blazingit.co.uk" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                info@blazingit.co.uk
              </a>
            </div>
            <div className="flex items-center">
            <Phone className="h-4 w-4 text-gray-600 mr-2" />
            <a href="tel:01918202449" className="text-sm font-medium text-gray-700 hover:text-blue-600">
              01918 202 449
            </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
                  to="/blog"
                  className={`block px-3 py-2 text-base font-medium w-full text-left ${
                    isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Blog
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
                      onClick={() => handleServiceClick('/services/data-backup')}
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
              <Link
                to="/articles"
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  isActive('/articles') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;