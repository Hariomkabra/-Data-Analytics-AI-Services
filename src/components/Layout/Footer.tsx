import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, ChevronRight } from 'lucide-react';
import { services } from '../../data/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-primary-400">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.27002 6.96002L12 12L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="font-heading font-bold text-lg">DataAI Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses through cutting-edge data analytics and AI solutions.
            </p>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span>123 Innovation Drive, Tech Park, CA 94103</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span>info@dataaisolutions.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-medium text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-medium text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/case-studies" 
                  className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-heading font-medium text-lg mb-6">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get the latest insights and updates on data analytics and AI delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-dark-800 border border-dark-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button 
                type="submit" 
                className="w-full btn btn-primary"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-dark-800 text-gray-500 text-sm text-center">
          <p>&copy; {currentYear} DataAI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;