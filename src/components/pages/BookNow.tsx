import React from 'react';
import { Calendar, Clock, MapPin, Phone, Star, Shield, Award } from 'lucide-react';
import { Button } from '../ui/Button';

export function BookNow() {
  const handleExternalBooking = () => {
    window.open('https://fresha.com', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/442921234567', '_blank');
  };

  const businessHours = [
    { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 7:00 PM' }
  ];

  const quickServices = [
    {
      name: 'Pro Power Peel (60 min)', 
      duration: '60 minutes', 
      price: 'from £120'
    },
    {
      name: 'Swedish Full Body Massage', 
      duration: '1 hour', 
      price: '£50'
    },
    {
      name: 'Hot Stone Full Body Massage', 
      duration: '1 hour', 
      price: '£60'
    }
  ];

  return (
    <div className="min-h-screen pt-20 page-transition-enter page-transition-enter-active">
      {/* Hero Section */}
      <section className="py-12 lg:py-24 bg-cream">
        <div className="container-custom text-center">
          <div className="px-4">
          <h1 className="text-3xl lg:text-6xl font-serif text-forest mb-4 lg:mb-6 text-center">
            Let's Get Your Skin Booked In
          </h1>
          <p className="text-base lg:text-lg text-black mb-4 lg:mb-6">
            Ready to start your skin transformation journey? Book your appointment 
            through our secure online system or get in touch directly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Button
              href="#"
              className="luxury-shimmer px-4 lg:px-6 py-3 rounded-sm uppercase font-bold tracking-wider text-sm lg:text-base transition-all duration-300 bg-cream text-forest border-2 border-cream"
              onClick={handleBookNow}
            >
              Book Your Treatment Now
            </Button>
            <Button
              href="#"
              className="luxury-shimmer px-4 lg:px-6 py-3 rounded-sm uppercase font-bold tracking-wider text-sm lg:text-base transition-all duration-300 bg-cream text-forest border-2 border-cream"
              onClick={() => window.open('https://wa.me/07809259269', '_blank')}
            >
              Ask About Services
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto px-4 lg:px-0">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-4xl font-serif text-forest mb-4 text-center">
                Book Your Appointment
              </h2>
              <p className="text-base lg:text-lg text-black">
                Select your preferred treatment and available time slot
              </p>
            </div>
            
            {/* Fresha Widget Placeholder */}
            <div className="bg-cream rounded-lg p-8 lg:p-12 text-center border-2 border-dashed border-gold/30">
              <Calendar className="w-12 lg:w-16 h-12 lg:h-16 text-gold mx-auto mb-4 lg:mb-6" />
              <h3 className="text-xl lg:text-2xl font-serif text-forest mb-4">
                Fresha Booking System
              </h3>
              <p className="text-base lg:text-lg text-black mb-6 lg:mb-8 max-w-2xl mx-auto">
                Our secure booking system powered by Fresha will load here. 
                You'll be able to view real-time availability, select your preferred 
                treatment, and book instantly.
              </p>
              <Button
                onClick={handleExternalBooking}
                href="#"
                className="luxury-shimmer px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300 bg-forest text-white"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-12 lg:py-24 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-12 px-4">
            <h2 className="text-2xl lg:text-4xl font-serif text-forest mb-4 text-center">
              Popular Services
            </h2>
            <p className="text-base lg:text-lg text-black">
              Quick access to our most requested treatments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto px-4 lg:px-0">
            {quickServices.map((service, index) => (
              <div key={index} className="bg-white p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3 lg:mb-4">
                  <h3 className="font-serif text-lg lg:text-xl font-semibold text-forest">
                    {service.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-gold font-bold text-base lg:text-lg">{service.price}</div>
                    <div className="flex items-center text-olive text-xs lg:text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleExternalBooking}
                  href="#"
                  className="luxury-shimmer w-full px-4 lg:px-6 py-3 rounded-sm uppercase font-bold tracking-wider text-sm lg:text-base transition-all duration-300 bg-forest text-white"
                >
                  Book Your Free Consultation
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 lg:px-0">
            {/* Contact Details */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-2xl lg:text-4xl font-serif text-forest mb-4 lg:mb-6 text-center lg:text-left">
                  Contact Us
                </h2>
                <p className="text-base lg:text-lg text-black leading-relaxed">
                  Prefer to speak directly? We'd love to hear from you and help 
                  you choose the perfect treatment for your skin.
                </p>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <Phone className="w-6 h-6 text-forest mt-1" />
                  <div>
                    <h3 className="font-semibold text-forest mb-1 text-base lg:text-lg">Phone</h3>
                    <p className="text-black text-base lg:text-lg">07809 259269</p>
                    <p className="text-sm text-black/70">Available during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <MapPin className="w-6 h-6 text-forest mt-1" />
                  <div>
                    <h3 className="font-semibold text-forest mb-1 text-base lg:text-lg">Location</h3>
                    <p className="text-black text-base lg:text-lg">Cardiff City Centre</p>
                    <p className="text-black text-base lg:text-lg">Cardiff, Wales</p>
                    <p className="text-sm text-black/70">Exact address provided upon booking</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <Clock className="w-6 h-6 text-forest mt-1" />
                  <div>
                    <h3 className="font-semibold text-forest mb-1 text-base lg:text-lg">Business Hours</h3>
                    <div className="space-y-1 text-sm lg:text-base">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className={`text-black ${schedule.day === 'Sunday' ? 'opacity-60' : ''}`}>
                            {schedule.day}
                          </span>
                          <span className={`text-black ${schedule.day === 'Sunday' ? 'opacity-60' : ''}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-cream rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-gold/20 to-forest/20 flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="w-12 lg:w-16 h-12 lg:h-16 text-gold mx-auto mb-3 lg:mb-4" />
                  <h3 className="text-lg lg:text-xl font-serif text-forest mb-2">
                    Cardiff City Centre
                  </h3>
                  <p className="text-black text-sm lg:text-base">
                    Interactive map will load here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 lg:py-24 bg-forest text-white">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-12 px-4">
            <h2 className="text-2xl lg:text-4xl font-serif text-gold mb-4 text-center">
              Special Offers
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Take advantage of these exclusive offers for new and returning clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto px-4 lg:px-0">
            <div className="bg-white/10 rounded-lg p-6 lg:p-8 text-center">
              <Star className="w-10 lg:w-12 h-10 lg:h-12 text-gold mx-auto mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-serif text-gold mb-3">
                New Client Special
              </h3>
              <p className="text-white/90 mb-3 lg:mb-4 text-sm lg:text-base">
                15% off your first treatment when you book the New Client Discovery Package
              </p>
              <p className="text-gold font-semibold text-sm lg:text-base">
                Save £22.50 on your first visit
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 lg:p-8 text-center">
              <Award className="w-10 lg:w-12 h-10 lg:h-12 text-gold mx-auto mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-serif text-gold mb-3">
                Student Discount
              </h3>
              <p className="text-white/90 mb-3 lg:mb-4 text-sm lg:text-base">
                Valid student ID gets you 10% off all treatments
              </p>
              <p className="text-gold font-semibold text-sm lg:text-base">
                Present your student ID at appointment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 lg:py-24 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-12 px-4">
            <h2 className="text-2xl lg:text-4xl font-serif text-forest mb-4 text-center">
              Why Book With Us?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto px-4 lg:px-0">
            <div className="text-center">
              <Shield className="w-10 lg:w-12 h-10 lg:h-12 text-forest mx-auto mb-3 lg:mb-4" />
              <h3 className="font-serif text-base lg:text-lg font-semibold text-forest mb-2">
                Safe & Secure
              </h3>
              <p className="text-olive text-sm lg:text-base">
                All bookings are secure and your data is protected
              </p>
            </div>
            
            <div className="text-center">
              <Star className="w-10 lg:w-12 h-10 lg:h-12 text-forest mx-auto mb-3 lg:mb-4" />
              <h3 className="font-serif text-base lg:text-lg font-semibold text-forest mb-2">
                5-Star Rated
              </h3>
              <p className="text-olive text-sm lg:text-base">
                Consistently rated 5 stars by our clients
              </p>
            </div>
            
            <div className="text-center">
              <Award className="w-10 lg:w-12 h-10 lg:h-12 text-forest mx-auto mb-3 lg:mb-4" />
              <h3 className="font-serif text-base lg:text-lg font-semibold text-forest mb-2">
                Professional Care
              </h3>
              <p className="text-olive text-sm lg:text-base">
                Qualified aesthetician with 10+ years experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}