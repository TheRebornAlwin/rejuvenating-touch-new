import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About Val', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Results', path: '/results' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleBookNow = () => {
    window.open('https://www.fresha.com/a/rejuvenating-touch-cardiff-94-woodville-road-w5mmt0z3');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-forest premium-shadow">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group cursor-pointer">
            <div className="w-14 h-14 rounded-full overflow-hidden group-hover:opacity-90 transition-all duration-300 soft-glow">
              <img 
                src="/assets/logo.jpg" 
                alt="Rejuvenating Touch Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="ml-4 font-serif text-2xl font-semibold text-white hidden sm:block">
              Rejuvenating Touch
            </span>
          </Link>

          {/* Desktop Navigation & Phone */}
          <div className="hidden lg:flex items-center space-x-6">
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 h-24 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base xl:text-lg font-medium transition-all duration-300 hover:text-gold relative whitespace-nowrap flex items-center justify-center h-full ${
                  location.pathname === item.path ? 'text-gold border-gold' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

            {/* Phone Number */}
            <a 
              href="tel:07809259269" 
              className="flex items-center space-x-2 text-white hover:text-gold transition-colors bg-white/10 px-2 xl:px-3 py-2 rounded-lg whitespace-nowrap text-xs xl:text-sm"
            >
              <Phone className="w-4 xl:w-5 h-4 xl:h-5" />
              <span className="font-semibold">07809 259269</span>
            </a>

            {/* Book Now Button */}
            <button
              onClick={handleBookNow}
              className="luxury-shimmer bg-white text-forest border-2 border-white whitespace-nowrap text-base xl:text-lg px-4 xl:px-6 py-2 xl:py-3 rounded-sm uppercase font-bold tracking-wider transition-all duration-300"
            >
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-full hover:bg-gold/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full premium-forest-gradient border-t border-gold/20 premium-shadow">
            <nav className="py-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-8 py-4 text-xl font-medium transition-colors hover:bg-gold/10 hover:text-gold ${
                    location.pathname === item.path ? 'text-gold bg-gold/10' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Phone */}
              <a 
                href="tel:07809259269" 
                className="flex items-center space-x-3 px-8 py-4 text-white hover:text-gold transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span className="text-xl font-semibold">07809 259269</span>
              </a>
              
              <div className="px-8 py-6">
                <button
                  onClick={handleBookNow}
                  className="w-full px-4 py-3 rounded-sm uppercase font-bold tracking-wider transition-all duration-300 hover:transform hover:scale-105 bg-white text-forest border-2 border-white"
                >
                  Book Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}