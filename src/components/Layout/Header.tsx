import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../../data/services';
import NavDropdown from './NavDropdown';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    isActive ? 'nav-link-active' : 'nav-link';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-dark-900/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary-700">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.27002 6.96002L12 12L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="font-heading font-bold text-xl text-white"> Pranalika Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>

          <div className="relative group">
            <button className="nav-link flex items-center text-white">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <NavDropdown items={services.map(service => ({
              id: service.id,
              title: service.title,
              path: `/services/${service.id}`
            }))} />
          </div>

          <NavLink to="/case-studies" className={navLinkClasses}>
            Case Studies
          </NavLink>

          <NavLink to="/about" className={navLinkClasses}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        {/* CTA Button */}
        <Link to="/contact" className="hidden md:block btn btn-primary">
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white hover:text-primary-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-dark-900/95 backdrop-blur-sm shadow-lg py-5 px-4 animate-slideDown">
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>

            <div className="flex flex-col space-y-2">
              <span className="font-medium text-white">Services</span>
              <div className="pl-4 flex flex-col space-y-2">
                {services.map((service) => (
                  <NavLink
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={navLinkClasses}
                  >
                    {service.title}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/case-studies" className={navLinkClasses}>
              Case Studies
            </NavLink>

            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>

            <Link to="/contact" className="btn btn-primary w-full text-center">
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;