import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Val', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Results', path: '/results' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Book Now', path: '/book' },
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: '#014900' }}>
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full overflow-hidden soft-glow">
                <img 
                  src="/assets/logooo.jpg" 
                  alt="Rejuvenating Touch Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-semibold text-white">Rejuvenating Touch</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Professional aesthetic treatments meticulously tailored for your skin's unique journey
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl font-semibold mb-6 text-white">Quick Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white text-center md:text-left">Contact Information</h4>
            <ul className="space-y-4 text-center md:text-left">
              <li className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-white/60" />
                <a href="tel:07809259269" className="text-white hover:text-gold transition-colors">07809 259269</a>
              </li>
              <li className="flex items-start space-x-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-white/60" />
                <a 
                  href="mailto:rejuvenatingtouchacbpm@gmail.com"
                  className="text-white hover:text-gold transition-colors duration-300 break-all"
                >
                  rejuvenatingtouchacbpm@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-white/60 mt-1" />
                <span className="text-white">Cardiff City Centre<br />Cardiff, Wales</span>
              </li>
              <li className="flex items-start space-x-3 justify-center md:justify-start">
                <Clock className="w-5 h-5 text-white/60 mt-1" />
                <span className="text-white">Mon-Fri: 9AM-7PM<br />Sat: 9AM-5PM</span>
              </li>
            </ul>
          </div>

          {/* Social & Visual */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-white text-center md:text-left">Connect With Us</h4>
            <div className="flex space-x-4 mb-8 justify-center md:justify-start">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors soft-glow"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-white/70 text-center md:text-left">
            © 2025 Rejuvenating Touch. All rights reserved.
          </p>
          <div className="flex space-x-8 text-center md:text-left">
            <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-white/80 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Branding Footer */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-white text-base">
              <a 
                href="mailto:alwin@tripletendigits.com"
                className="font-semibold text-white underline hover:text-gold/90 transition-colors duration-500"
              >
                Triple Ten Digits
              </a>
              <span className="mx-3 text-white">|</span>
              Precision-built websites. Delivered in a week or less. Designed to convert.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}