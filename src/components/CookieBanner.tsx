import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    hideBanner();
  };

  const handleDeny = () => {
    localStorage.setItem('cookieConsent', 'denied');
    hideBanner();
  };

  const hideBanner = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-forest text-white p-4 lg:p-6 shadow-2xl">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Cookie Icon and Message */}
            <div className="flex items-start space-x-3 lg:space-x-4 flex-1">
              {/* Cookie Icon with Bite */}
              <div className="flex-shrink-0 mt-1">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9"/>
                  <circle cx="16" cy="8" r="3" fill="#014900"/>
                  <circle cx="9" cy="10" r="1" fill="#014900"/>
                  <circle cx="15" cy="14" r="1" fill="#014900"/>
                  <circle cx="10" cy="16" r="1" fill="#014900"/>
                  <circle cx="7" cy="14" r="0.5" fill="#014900"/>
                  <circle cx="13" cy="11" r="0.5" fill="#014900"/>
                </svg>
              </div>
              
              <div className="flex-1">
                <p className="text-sm lg:text-base text-white leading-relaxed">
                  We use cookies to enhance your browsing experience and provide personalized content. 
                  By continuing to use our site, you consent to our use of cookies.
                </p>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex items-center justify-center sm:justify-start space-x-3 lg:space-x-4 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={handleDeny}
                className="px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-semibold text-white border-2 border-white/30 rounded-sm hover:border-white/50 transition-colors duration-300"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-semibold bg-white text-forest rounded-sm hover:bg-white/90 transition-colors duration-300"
              >
                I Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}