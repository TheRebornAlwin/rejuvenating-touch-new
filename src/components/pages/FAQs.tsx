import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import type { FAQ } from '../../types';

export function FAQs() {
  const [activeCategory, setActiveCategory] = useState<string>('booking');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs: FAQ[] = [
    // Booking FAQs
    {
      id: '1',
      category: 'booking',
      question: 'How do I book an appointment?',
      answer: 'You can book directly through our Fresha booking system by clicking any "Book Now" button on our website, or by messaging us on WhatsApp. We recommend booking at least 1-2 weeks in advance for the best availability.'
    },
    {
      id: '2',
      category: 'booking',
      question: 'What happens if I need to cancel or reschedule?',
      answer: 'We understand life happens! Please give us at least 24 hours notice for cancellations or rescheduling. This allows us to offer your slot to another client. Same-day cancellations may incur a fee.'
    },
    {
      id: '3',
      category: 'booking',
      question: 'Do you offer consultations for new clients?',
      answer: 'Yes! Every new client receives a complimentary skin consultation as part of their first treatment. This includes skin analysis, discussion of your concerns and goals, and treatment recommendations.'
    },
    {
      id: '4',
      category: 'booking',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards, cash, and bank transfers. Payment is due at the time of service. We also offer treatment packages that can be paid in installments.'
    },
    
    // Treatment FAQs
    {
      id: '5',
      category: 'treatment',
      question: 'Will my treatment hurt?',
      answer: 'Most treatments are very comfortable. Pro Power Peels may cause slight tingling or warmth, which is normal. Massages and facials are relaxing experiences. We always explain what to expect and check your comfort level throughout.'
    },
    {
      id: '6',
      category: 'treatment',
      question: 'How often should I have treatments?',
      answer: 'This depends on your chosen treatment. Facials (Basic or Luxury) every 4-6 weeks, Pro Power Peels every 6-8 weeks, and massages as needed for relaxation. We\'ll recommend the perfect schedule for your needs.'
    },
    {
      id: '7',
      category: 'treatment',
      question: 'Can I wear makeup after my treatment?',
      answer: 'For Basic and Luxury Facials, you can apply makeup after 4-6 hours. For Pro Power Peels, we recommend avoiding makeup for 24 hours. Massage treatments have no makeup restrictions.'
    },
    {
      id: '8',
      category: 'treatment',
      question: 'What should I do to prepare for my appointment?',
      answer: 'For facials and peels: arrive with clean skin (no makeup if possible) and avoid sun exposure 48 hours before Pro Power Peels. For massages: comfortable clothing recommended. Let us know about any allergies or skin sensitivities.'
    },
    {
      id: '9',
      category: 'treatment',
      question: 'Are your treatments suitable for sensitive skin?',
      answer: 'Absolutely! We specialize in treating all skin types, including sensitive skin. Every treatment begins with a comprehensive consultation and thorough skin analysis to ensure your complete safety and comfort.'
    },
    
    // Aftercare FAQs
    {
      id: '10',
      category: 'aftercare',
      question: 'What should I expect after a chemical peel?',
      answer: 'After a chemical peel, you may experience mild redness, dryness, or peeling for 3-7 days. This is completely normal and part of the renewal process. We provide detailed aftercare instructions and products to support healing.'
    },
    {
      id: '11',
      category: 'aftercare',
      question: 'Can I exercise after my treatment?',
      answer: 'We recommend avoiding intense exercise for 24 hours after most treatments to prevent excessive sweating and irritation. Light activities like walking are fine. For chemical peels, wait 48 hours before resuming vigorous exercise.'
    },
    {
      id: '12',
      category: 'aftercare',
      question: 'What skincare products should I use after treatment?',
      answer: 'We provide specific aftercare instructions tailored to your treatment. Generally, use gentle, fragrance-free products and always apply SPF 30+ daily. We can recommend professional-grade products that complement your treatments.'
    },
    {
      id: '13',
      category: 'aftercare',
      question: 'When will I see results?',
      answer: 'Results vary by treatment and individual. Facials provide immediate glow with continued improvement over 1-2 weeks. Chemical peels show results after peeling completes (5-7 days), with optimal results after 2-3 sessions.'
    },
    {
      id: '14',
      category: 'aftercare',
      question: 'What if I have a reaction to my treatment?',
      answer: 'While reactions are rare due to our comprehensive consultation process and thorough skin analysis, please contact us immediately if you experience unusual redness, swelling, or discomfort. We\'re here to support you throughout your treatment journey and will do whatever it takes to ensure your comfort.'
    }
  ];

  const categories = [
    { id: 'booking', name: 'Booking', icon: '📅' },
    { id: 'treatment', name: 'Treatment', icon: '✨' },
    { id: 'aftercare', name: 'Aftercare', icon: '🤝' }
  ];

  const filteredFAQs = faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleContactUs = () => {
    window.open('https://wa.me/07809259269', '_blank');
  };

  return (
    <div className="min-h-screen pt-20 spacious-luxury-gradient page-transition-enter page-transition-enter-active">
      {/* Hero Section */}
      <section className="py-16 lg:py-32 spacious-luxury-gradient">
        <div className="container-custom text-center">
          <div className="py-8 lg:py-16 px-4">
          <h1 className="text-3xl lg:text-6xl font-serif text-forest mb-4 lg:mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg lg:text-xl text-forest leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about treatments, booking, and aftercare. 
            Can't find your answer? We're here to help.
          </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 lg:py-16 spacious-luxury-gradient">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 lg:space-x-3 px-4 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-forest text-gold border-2 border-gold'
                    : 'luxury-card text-forest hover:bg-forest hover:text-gold border-2 border-forest/30'
                }`}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 lg:py-24 spacious-luxury-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto px-4 lg:px-0">
            <div className="space-y-3 lg:space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="premium-card rounded-lg overflow-hidden premium-shadow">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className={`w-full px-4 lg:px-6 py-4 lg:py-6 text-left flex items-center justify-between transition-all duration-300 ${
                      openFAQ === faq.id 
                        ? 'bg-forest text-white' 
                        : 'hover:bg-forest/10'
                    }`}
                  >
                    <h3 className={`text-base lg:text-xl font-serif font-semibold pr-3 lg:pr-4 text-left ${
                      openFAQ === faq.id ? 'text-white' : 'text-forest'
                    }`}>
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-5 lg:w-6 h-5 lg:h-6 text-gold" />
                      ) : (
                        <ChevronDown className="w-5 lg:w-6 h-5 lg:h-6 text-forest" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-4 lg:px-6 pb-4 lg:pb-6 accordion-enter accordion-enter-active">
                      <div className="border-t border-gold/30 pt-3 lg:pt-4">
                        <p className="text-forest leading-relaxed text-base lg:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-12 lg:py-16 premium-forest-gradient text-white">
        <div className="container-custom text-center">
          <div className="py-6 lg:py-8">
          <div className="max-w-3xl mx-auto px-4">
            <MessageCircle className="w-12 lg:w-16 h-12 lg:h-16 text-gold mx-auto mb-4 lg:mb-6" />
            <h2 className="text-2xl lg:text-4xl font-serif text-gold mb-4 lg:mb-6 text-center">
              Still Have Questions?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed">
              Our team is here to help! Whether you need clarification about treatments, 
              want to discuss your skin concerns, or need help choosing the right service, 
              we're just a message away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button 
                onClick={handleContactUs}
                className="luxury-shimmer px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300 bg-cream text-forest border-2 border-cream"
              >
                <span>Message Us on WhatsApp</span>
              </button>
              <button
                onClick={() => window.open('mailto:rejuvenatingtouchacbpm@gmail.com')}
                className="luxury-shimmer px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300 bg-cream text-forest border-2 border-cream"
              >
                <span>Send Us an Email</span>
              </button>
            </div>
            
            <div className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gold/20">
              <p className="text-white/70 text-sm lg:text-base">
                📞 Phone: 07809 259269<br />
                📧 Email: <a href="mailto:rejuvenatingtouchacbpm@gmail.com" className="hover:text-gold transition-colors duration-300">rejuvenatingtouchacbpm@gmail.com</a><br />
                📍 Location: Cardiff City Centre, Wales
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

    </div>
  );
}