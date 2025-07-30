import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export function Results() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const beforeAfterResults = [
    {
      id: '1',
      before: '',
      after: '',
      caption: 'Acne Scarring Treatment',
      sessions: 4,
      treatment: 'Pro Power Peel Series',
      description: 'Significant improvement in acne scarring and skin texture'
    },
    {
      id: '2',
      before: '',
      after: '',
      caption: 'Pigmentation Correction',
      sessions: 6,
      treatment: 'Targeted Chemical Peels',
      description: 'Dramatic reduction in dark spots and even skin tone'
    },
    {
      id: '3',
      before: '',
      after: '',
      caption: 'Anti-Aging Treatment',
      sessions: 5,
      treatment: 'Hydrating Facials + Peels',
      description: 'Reduced fine lines and improved skin elasticity'
    },
    {
      id: '4',
      before: '',
      after: '',
      caption: 'Skin Texture Improvement',
      sessions: 3,
      treatment: 'Deep Cleansing Facials',
      description: 'Smoother, more refined skin texture and pore size'
    },
    {
      id: '5',
      before: '',
      after: '',
      caption: 'Overall Skin Health',
      sessions: 8,
      treatment: 'Comprehensive Care Plan',
      description: 'Complete skin transformation and long-term health'
    },
    {
      id: '6',
      before: '',
      after: '',
      caption: 'Hydration & Glow',
      sessions: 4,
      treatment: 'Intensive Hydrating Series',
      description: 'Restored moisture balance and natural radiance'
    }
  ];

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
        <div className="container-custom">
          <div className="max-w-4xl mx-auto px-4 lg:px-0">
            {/* Main Display */}
            <div className="relative bg-cream rounded-lg overflow-hidden mb-6 lg:mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div className="w-full aspect-square bg-gradient-to-br from-charcoal/10 via-olive/10 to-forest/15 flex items-center justify-center">
                    <div className="text-center space-y-2 lg:space-y-3">
                      <Star className="w-12 lg:w-16 h-12 lg:h-16 text-charcoal/40 mx-auto" />
                      <p className="text-charcoal/60 font-serif text-base lg:text-lg">Before Photo</p>
                    </div>
                  </div>
                  <div className="absolute top-2 lg:top-4 left-2 lg:left-4 bg-charcoal/80 text-white px-2 lg:px-3 py-1 rounded text-sm lg:text-base">
                    Before
                  </div>
                </div>
                
                {/* After */}
                <div className="relative">
                  <div className="w-full aspect-square bg-gradient-to-br from-gold/15 via-sage/10 to-forest/15 flex items-center justify-center">
                    <div className="text-center space-y-2 lg:space-y-3">
                      <Star className="w-12 lg:w-16 h-12 lg:h-16 text-forest/40 mx-auto fill-current" />
                      <p className="text-forest/60 font-serif text-base lg:text-lg">After Photo</p>
                    </div>
                  </div>
                  <div className="absolute top-2 lg:top-4 left-2 lg:left-4 bg-forest/90 text-gold px-2 lg:px-3 py-1 rounded text-sm lg:text-base">
                    After
                  </div>
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
            
            {/* Current Result Info */}
            <div className="text-center space-y-3 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl font-serif text-forest">
                {beforeAfterResults[currentSlide].caption}
              </h3>
              <p className="text-base lg:text-lg text-white">
                {beforeAfterResults[currentSlide].description}
              </p>
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