import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export function Results() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterResults = [
    {
      id: '1',
      beforeAfter: '/assets/hp1ta.jpg',
      caption: 'Acne Scarring Treatment',
      sessions: 4,
      treatment: 'Pro Power Peel Series',
      description: 'Significant improvement in acne scarring and skin texture',
      testimonial: "I never thought my acne scars would fade this much. Val's Pro Power Peel series completely transformed my skin and gave me back my confidence.",
      clientName: "Sarah M."
    },
    {
      id: '2',
      beforeAfter: '/assets/hp2ta.jpg',
      caption: 'Pigmentation Correction',
      sessions: 6,
      treatment: 'Targeted Chemical Peels',
      description: 'Dramatic reduction in dark spots and even skin tone',
      testimonial: "The dark spots that bothered me for years are finally gone. Val's expertise with chemical peels is incredible - she knew exactly what my skin needed.",
      clientName: "Emma L."
    },
    {
      id: '3',
      beforeAfter: '/assets/hp3ta.jpg',
      caption: 'Anti-Aging Treatment',
      sessions: 5,
      treatment: 'Hydrating Facials + Peels',
      description: 'Reduced fine lines and improved skin elasticity',
      testimonial: "My skin looks years younger! The combination of facials and peels that Val recommended worked better than any expensive cream I've tried.",
      clientName: "Kate R."
    },
    {
      id: '4',
      beforeAfter: '',
      caption: 'Skin Texture Improvement',
      sessions: 3,
      treatment: 'Deep Cleansing Facials',
      description: 'Smoother, more refined skin texture and pore size',
      testimonial: "My skin feels like silk now. The deep cleansing facials made such a difference to my pore size and overall texture.",
      clientName: "Jessica T."
    },
    {
      id: '5',
      beforeAfter: '',
      caption: 'Overall Skin Health',
      sessions: 8,
      treatment: 'Comprehensive Care Plan',
      description: 'Complete skin transformation and long-term health',
      testimonial: "Val's comprehensive approach changed everything. It's not just about one treatment - it's about understanding your skin's journey.",
      clientName: "Rachel K."
    },
    {
      id: '6',
      beforeAfter: '',
      caption: 'Hydration & Glow',
      sessions: 4,
      treatment: 'Intensive Hydrating Series',
      description: 'Restored moisture balance and natural radiance',
      testimonial: "My skin has never been more hydrated and glowing. People keep asking what I'm using - it's all thanks to Val's treatments!",
      clientName: "Sophie W."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % beforeAfterResults.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [beforeAfterResults.length]);

  const caseStudy = {
    name: 'Keeley',
    before: '',
    during: '',
    after: '',
    quote: "Val completely transformed my skin and my confidence. After years of trying everything, I finally found someone who understood my skin and delivered real results.",
    timeline: [
      { month: 'Month 1', treatment: 'Initial consultation & patch test', result: 'Skin analysis completed' },
      { month: 'Month 2-3', treatment: 'Pro Power Peel series', result: 'Texture improvement visible' },
      { month: 'Month 4-6', treatment: 'Targeted facials & maintenance', result: 'Significant scarring reduction' }
    ]
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterResults.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterResults.length) % beforeAfterResults.length);
  };

  const handleBookNow = () => {
    window.open('https://fresha.com', '_blank');
  };

  return (
    <div className="min-h-screen pt-20 page-transition-enter page-transition-enter-active">
      {/* Hero Section */}
      <section className="py-16 lg:py-32 bg-cream">
        <div className="container-custom text-center">
          <div className="py-8 lg:py-16 px-4">
          <h1 className="text-3xl lg:text-6xl font-serif text-forest mb-4 lg:mb-6 text-center">
            What Our Clients Say
          </h1>
          <p className="text-lg lg:text-xl text-white leading-relaxed max-w-2xl mx-auto">
            <span className="text-forest">
              See the transformations that happen when science meets personalized care. 
              These are real clients with real results.
            </span>
          </p>
          </div>
        </div>
      </section>

      {/* Interactive Before/After Gallery */}
      <section className="py-16 lg:py-32 bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Image Gallery */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative bg-cream rounded-lg overflow-hidden shadow-lg max-w-xl w-full">
                {/* Single Before/After Image */}
                <div className="relative">
                  <div className="w-full aspect-[1.2/1] bg-gradient-to-br from-gold/15 via-sage/10 to-forest/15 flex items-center justify-center">
                      <div className="text-center space-y-2 lg:space-y-3">
                        <Star className="w-12 lg:w-16 h-12 lg:h-16 text-forest/40 mx-auto fill-current" />
                        <p className="text-forest/60 font-serif text-base lg:text-lg">Before & After</p>
                      </div>
                  </div>
                  
                  {/* Before/After Label */}
                  <div className="absolute top-2 lg:top-4 left-2 lg:left-4 bg-forest/90 text-gold px-3 lg:px-4 py-1 lg:py-2 rounded text-sm lg:text-base font-semibold">
                    Before & After
                  </div>
                </div>
                
                {/* Navigation */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 lg:w-6 h-5 lg:h-6 text-charcoal" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 lg:w-6 h-5 lg:h-6 text-charcoal" />
                </button>
              </div>
            </div>
            
            {/* Right Column - Testimonial */}
            <div className="lg:col-span-1">
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-xl lg:text-2xl font-serif text-forest text-center lg:text-left">
                  {beforeAfterResults[currentSlide].caption}
                </h3>
                <p className="text-base lg:text-lg text-forest text-center lg:text-left">
                  {beforeAfterResults[currentSlide].description}
                </p>
                
                {/* Client Testimonial */}
                <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center lg:justify-start mb-3 lg:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 lg:w-5 h-4 lg:h-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-forest italic text-base lg:text-lg leading-relaxed mb-3 lg:mb-4 text-center lg:text-left">
                    "{beforeAfterResults[currentSlide].testimonial}"
                  </p>
                  <div className="text-center lg:text-left">
                    <p className="font-serif font-bold text-forest text-base lg:text-lg">
                      {beforeAfterResults[currentSlide].clientName}
                    </p>
                    <p className="text-forest/70 text-sm">
                      {beforeAfterResults[currentSlide].treatment} • {beforeAfterResults[currentSlide].sessions} sessions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 lg:py-32 bg-cream">
        <div className="container-custom text-center">
          <div className="py-8 lg:py-16 px-4">
          <h2 className="text-3xl lg:text-5xl font-serif text-forest mb-4 lg:mb-6 text-center">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-lg lg:text-xl text-black mb-6 lg:mb-8 max-w-2xl mx-auto">
            Every result you see started with a single consultation. 
            Let's create your personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <button 
              onClick={handleBookNow}
              className="luxury-shimmer px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300 bg-forest text-white"
            >
              <span>Book Your Free Consultation</span>
            </button>
            <button 
              onClick={() => window.open('https://wa.me/07809259269', '_blank')}
              className="luxury-shimmer px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300 bg-forest text-white border-2 border-forest"
            >
              <span>Ask About Results</span>
            </button>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}