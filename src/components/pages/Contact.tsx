import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, MessageCircle, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
          }
        ]);

      if (error) {
        throw error;
      }

      // Success - reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/442921234567', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/rejuvenatingtouch', '_blank');
  };

  return (
    <div className="min-h-screen pt-20 bg-cream page-transition-enter page-transition-enter-active">
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-cream">
        <div className="container-custom text-center">
          <div className="py-6 lg:py-8 px-4">
          <h1 className="text-3xl lg:text-6xl font-serif text-forest mb-4 lg:mb-6 text-center">
            Get In Touch
          </h1>
          <p className="text-lg lg:text-xl text-forest leading-relaxed max-w-2xl mx-auto text-center lg:text-left">
            <span className="text-forest">
              We'd love to hear from you. Whether you have questions about treatments, 
              need skincare advice, or want to book a consultation, we're here to help.
            </span>
          </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="py-6 lg:py-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 lg:px-0">
            {/* Contact Form */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-2xl lg:text-4xl font-serif text-forest mb-4 text-center lg:text-left">
                  Send Us a Message
                </h2>
                <p className="text-base lg:text-lg text-black text-center lg:text-left">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-forest font-semibold mb-2 text-sm lg:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors text-sm lg:text-base"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-forest font-semibold mb-2 text-sm lg:text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors text-sm lg:text-base"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-forest font-semibold mb-2 text-sm lg:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none text-sm lg:text-base"
                    placeholder="Tell us about your skin concerns, questions, or what you'd like to know more about..."
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`luxury-shimmer w-full flex items-center justify-center px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-forest/50 text-white/70 cursor-not-allowed' 
                      : 'bg-forest text-white hover:bg-forest/90'
                  }`}
                >
                  <Send className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">Thank you for your message. We'll get back to you within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <p className="font-semibold">Error sending message</p>
                    <p className="text-sm">Please try again or contact us directly at <a href="mailto:rejuvenatingtouchacbpm@gmail.com" className="hover:text-gold transition-colors duration-300">rejuvenatingtouchacbpm@gmail.com</a></p>
                  </div>
                )}
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-2xl lg:text-4xl font-serif text-forest mb-4 text-center lg:text-left">
                  Contact Information
                </h2>
                <p className="text-base lg:text-lg text-black text-center lg:text-left">
                  Prefer to contact us directly? Here are all the ways to reach us.
                </p>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 bg-cream rounded-lg">
                  <Phone className="w-6 h-6 text-forest mt-1" />
                  <div>
                    <h3 className="font-semibold text-forest mb-1 text-base lg:text-lg">Phone</h3>
                    <p className="text-black text-base lg:text-lg">07809 259269</p>
                    <p className="text-sm text-black/70">Mon-Fri: 9AM-7PM, Sat: 9AM-5PM</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 bg-cream rounded-lg">
                  <Mail className="w-6 h-6 text-forest mt-1" />
                  <div>
                    <h3 className="font-semibold text-forest mb-1 text-base lg:text-lg">Email</h3>
                    <a 
                      href="mailto:rejuvenatingtouchacbpm@gmail.com"
                      className="text-black text-base lg:text-lg break-all hover:text-gold transition-colors duration-300"
                    >
                      rejuvenatingtouchacbpm@gmail.com
                    </a>
                    <p className="text-sm text-black/70">We respond within 24 hours</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 bg-cream rounded-lg">
                  <MapPin className="w-6 h-6 text-forest mt-1" />
                  <div>
                    <h3 className="font-semibold text-forest mb-1 text-base lg:text-lg">Location</h3>
                    <p className="text-black text-base lg:text-lg">Cardiff City Centre</p>
                    <p className="text-black text-base lg:text-lg">Cardiff, Wales</p>
                    <p className="text-sm text-black/70">Exact address provided upon booking</p>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 bg-cream rounded-lg">
                  <Clock className="w-6 h-6 text-forest mt-1" />
                  <div>
                    <h3 className="font-semibold text-forest mb-1 text-base lg:text-lg">Business Hours</h3>
                    <div className="space-y-1 text-black text-sm lg:text-base">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="ml-8">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="ml-8">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between opacity-60">
                        <span>Sunday</span>
                        <span className="ml-8">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 lg:py-8"></div>
        </div>
      </section>

      {/* Social Media & Quick Contact */}
      <section className="py-16 lg:py-32 bg-forest text-white">
        <div className="container-custom">
          <div className="py-8 lg:py-16">
          <div className="text-center mb-8 lg:mb-12 px-4">
            <h2 className="text-2xl lg:text-4xl font-serif text-gold mb-4 text-center">
              Connect With Us
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Follow us on social media for skincare tips, before & after results, 
              and special offers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto px-4 lg:px-0">
            {/* WhatsApp */}
            <div className="bg-white/10 rounded-lg p-6 lg:p-8 text-center">
              <MessageCircle className="w-10 lg:w-12 h-10 lg:h-12 text-gold mx-auto mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-serif text-gold mb-3">
                WhatsApp
              </h3>
              <p className="text-white/90 mb-4 lg:mb-6 text-sm lg:text-base">
                Get instant answers to your questions. Message anytime for 
                quick skincare advice or booking help.
              </p>
              <Button
                onClick={handleWhatsApp}
                href="#"
                className="luxury-shimmer px-4 lg:px-6 py-3 rounded-sm uppercase font-bold tracking-wider text-sm lg:text-base transition-all duration-300 bg-cream text-forest border-2 border-cream"
              >
                Message on WhatsApp
              </Button>
            </div>
            
            {/* Instagram */}
            <div className="bg-white/10 rounded-lg p-6 lg:p-8 text-center">
              <Instagram className="w-10 lg:w-12 h-10 lg:h-12 text-gold mx-auto mb-3 lg:mb-4" />
              <h3 className="text-lg lg:text-xl font-serif text-gold mb-3">
                Instagram
              </h3>
              <p className="text-white/90 mb-4 lg:mb-6 text-sm lg:text-base">
                Follow us for daily skincare tips, client transformations, 
                and behind-the-scenes content.
              </p>
              <button 
                onClick={handleInstagram}
                className="luxury-shimmer px-4 lg:px-6 py-3 rounded-sm uppercase font-bold tracking-wider text-sm lg:text-base transition-all duration-300 bg-cream text-forest border-2 border-cream"
              >
                <span>Follow on Instagram</span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="py-8 lg:py-16">
          <div className="text-center mb-8 lg:mb-12 px-4">
            <h2 className="text-2xl lg:text-4xl font-serif text-forest mb-4 text-center">
              Find Us
            </h2>
            <p className="text-base lg:text-lg text-olive max-w-2xl mx-auto">
              Conveniently located in Cardiff City Centre with easy access to public transport 
              and parking nearby.
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="max-w-4xl mx-auto px-4 lg:px-0">
            <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.098129771257!2d-3.1777762999999997!3d51.4930667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1d000703d4e7%3A0xed564bef46d03346!2sRejuvenating%20touch!5e0!3m2!1sen!2sus!4v1754077720670!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Rejuvenating Touch Location - Cardiff"
              />
            </div>
            
            {/* Directions */}
            <div className="mt-6 lg:mt-8 bg-cream p-4 lg:p-6 rounded-lg">
              <h3 className="font-serif text-lg lg:text-xl font-semibold text-forest mb-3 lg:mb-4 text-center">
                Getting Here
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <h4 className="font-semibold text-forest mb-2 text-base lg:text-lg">By Public Transport</h4>
                  <p className="text-black text-xs lg:text-sm">
                    Cardiff Central Station is just 10 minutes walk away. 
                    Multiple bus routes stop nearby.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-forest mb-2 text-base lg:text-lg">By Car</h4>
                  <p className="text-black text-xs lg:text-sm">
                    Several public car parks within walking distance. 
                    Street parking available (charges apply).
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 lg:py-12 bg-cream">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-lg lg:text-xl font-serif text-forest mb-4 text-center">
              Experiencing a Skin Reaction?
            </h3>
            <p className="text-black mb-4 lg:mb-6 text-sm lg:text-base">
              If you're experiencing any unusual reactions after a treatment, 
              please contact us immediately. Your safety is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button 
                onClick={() => window.open('tel:07809259269')}
                className="luxury-shimmer px-4 lg:px-6 py-3 rounded-sm uppercase font-bold tracking-wider text-sm lg:text-base transition-all duration-300 bg-cream text-forest border-2 border-cream"
              >
                <span>Call Now: 07809 259269</span>
              </button>
              <button 
                onClick={handleWhatsApp}
                className="luxury-shimmer px-4 lg:px-6 py-3 rounded-sm uppercase font-bold tracking-wider text-sm lg:text-base transition-all duration-300 bg-cream text-forest border-2 border-cream"
              >
                <span>WhatsApp Support</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}