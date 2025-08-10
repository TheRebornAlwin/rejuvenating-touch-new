import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Shield, Heart, ArrowRight, Quote, Sparkles, Leaf, CheckCircle, Users, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whyUsFeatures = [
    {
      icon: Users,
      title: "500+ Cardiff Women Transformed",
      description: "Real women, real results, real confidence restored."
    },
    {
      icon: Award,
      title: "10+ Years Clinical Expertise",
      description: "Advanced aesthetic training with Dermalogica partnership."
    },
    {
      icon: Shield,
      title: "Thorough Consultation Process",
      description: "Comprehensive skin consultations before and after every treatment with personalized guidance."
    }
  ];

  const treatments = [
    {
      name: "Luxury Facial",
      description: "Premium facial experience with advanced techniques and luxury products for ultimate skin rejuvenation.",
      category: "Facial Treatments"
    },
    {
      name: "Pro Power Peel",
      description: "Professional chemical peels from £80 - customized to target your specific skin concerns.",
      category: "Chemical Peels"
    },
    {
      name: "Swedish Full Body Massage",
      description: "Classic full body massage for complete relaxation and muscle tension relief.",
      category: "Massage Therapy"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "I booked a Pro Power Peel after watching Val's treatments on Insta for a week or so. She explained every step, and made it very clear what NOT to expect (which nobody does nowadays for some reason). It's now week 3 and my skin pigmentation is lighter and texture is smoother, very satisfied with the results!",
      rating: 5,
      treatment: "Pro Power Peel Series"
    },
    {
      name: "Emma L.",
      text: "I went in for a luxury facial and came out looking like I slept 10 hours, and my skin felt the best it has in the past 10 years. She has a clean clinic and a relaxing room, and after the treatment, she sent me home with simple aftercare and it actually worked.",
      rating: 5,
      treatment: "Deep Cleansing Protocol"
    },
    {
      name: "Kate R.",
      text: "My skin has never looked this good. Every session feels like self-care that actually works.",
      rating: 5,
      treatment: "Anti-Aging Facial Series"
    },
    {
      name: "Jessica T.",
      text: "Val understood my acne scars when no one else could. Six months later, I don't recognize my own skin—in the best way.",
      rating: 5,
      treatment: "Scar Reduction Series"
    },
    {
      name: "Rachel K.",
      text: "The personalized approach is everything. Val doesn't just treat symptoms—she transforms your entire relationship with your skin.",
      rating: 5,
      treatment: "Complete Transformation Package"
    },
    {
      name: "Sophie W.",
      text: "I used to avoid mirrors. Now I can't stop looking at my skin. Val gave me back my confidence.",
      rating: 5,
      treatment: "Pigmentation Correction"
    },
    {
      name: "Charlotte B.",
      text: "Worth every penny. The results speak louder than any review ever could. My skin tells my success story now.",
      rating: 5,
      treatment: "Premium Facial Series"
    }
  ];

  const beforeAfterResults = [
    { 
      before: '/assets/hp1tb.jpg', 
      after: '/assets/hp1ta.jpg', 
      caption: "Acne scarring improvement", 
      sessions: "4 sessions" 
    },
    { 
      before: '/assets/hp2tb.jpg', 
      after: '/assets/hp2ta.jpg', 
      caption: "Pigmentation correction", 
      sessions: "6 sessions" 
    },
    { 
      before: '/assets/hp3tb.jpg', 
      after: '/assets/hp3ta.jpg', 
      caption: "Fine line reduction", 
      sessions: "5 sessions" 
    },
    { 
      before: '/assets/hp4tb.jpg', 
      after: '/assets/hp4ta.jpg', 
      caption: "Texture refinement", 
      sessions: "3 sessions" 
    }
  ];

  const handleBookNow = () => {
    window.open('https://fresha.com', '_blank');
  };

  return (
    <div className="min-h-screen page-transition-enter page-transition-enter-active">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-0 spacious-luxury-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-10 animate-fade-up">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl lg:text-5xl font-serif text-forest leading-tight mt-6 lg:mt-12 text-center lg:text-left">
                  Cardiff's Choice for
                  <span className="block font-bold text-forest">Radiant, Personalized</span>
                  <span className="block text-forest">Skin Transformation</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-forest leading-relaxed font-medium">
                  <span className="text-center lg:text-left block">Where Cardiff women discover the confidence that comes with truly personalized, 
                  expert skin care designed exclusively for their unique beauty journey.</span>
                </p>
                
                <p className="text-base lg:text-lg text-forest leading-relaxed text-center lg:text-left">
                  Join 500+ women who've transformed not just their skin, but their confidence, 
                  with treatments that actually understand you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <Button
                  onClick={handleBookNow}
                  href="#"
                  className="luxury-shimmer bg-white text-white px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-sm lg:text-lg transition-all duration-300"
                >
                  Book Your Free Consultation
                </Button>
              </div>
              
            </div>
            
            {/* Right - Hero Visual */}
            <div className="relative animate-scale-in">
              {/* Treatment Space Image Placeholder */}
              <div className="aspect-[3/4] lg:aspect-[4/3] relative overflow-hidden rounded-2xl elegant-shadow">
                <img 
                  src="/assets/herosectionimage.jpg" 
                  alt="Val's Premium Treatment Space - Serene, private clinic environment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Gallery */}
      <section className="pt-12 lg:pt-20 pb-12 lg:pb-20 spacious-luxury-gradient">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-2xl lg:text-5xl font-serif text-forest mb-4 lg:mb-6 whitespace-nowrap mx-auto leading-tight">
              Cardiff Women, Real Results
            </h2>
            <p className="text-lg lg:text-xl text-forest max-w-3xl mx-auto px-4">
              No filters, no false promises. Just the confidence that comes with 
              <span className="text-forest font-bold"> truly transformed skin.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {beforeAfterResults.map((result, index) => (
              <div key={index} className="premium-card rounded-lg overflow-hidden border border-gold/20">
                {/* Before/After Images */}
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    {result.before ? (
                      <img 
                        src={result.before} 
                        alt={`Before - ${result.caption}`}
                        className="w-full aspect-square object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-gradient-to-br from-charcoal/10 via-olive/10 to-forest/15 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <Star className="w-8 lg:w-12 h-8 lg:h-12 text-charcoal/40 mx-auto" />
                          <p className="text-charcoal/60 font-serif text-xs lg:text-sm">Before Photo</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 left-2 bg-charcoal/80 text-white px-2 py-1 rounded text-xs">
                      Before
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative">
                    {result.after ? (
                      <img 
                        src={result.after} 
                        alt={`After - ${result.caption}`}
                        className="w-full aspect-square object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-gradient-to-br from-gold/15 via-sage/10 to-forest/15 flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <Star className="w-8 lg:w-12 h-8 lg:h-12 text-forest/40 mx-auto fill-current" />
                          <p className="text-forest/60 font-serif text-xs lg:text-sm">After Photo</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-2 left-2 bg-forest/90 text-gold px-2 py-1 rounded text-xs">
                      After
                    </div>
                  </div>
                </div>
                
                {/* Caption and Sessions */}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              className="luxury-shimmer bg-white text-forest px-8 lg:px-12 py-4 lg:py-6 rounded-sm uppercase font-bold tracking-wider text-lg lg:text-xl transition-all duration-300"
              className="inline-flex items-center text-forest font-semibold text-base lg:text-lg hover:text-gold transition-colors group"
            >
              View Complete Gallery
              <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 ml-2 lg:ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      {/* Why Us Section */}
      <section className="pt-12 lg:pt-20 pb-12 lg:pb-20 spacious-luxury-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Client Image Placeholder */}
            <div className="space-y-4 lg:space-y-6 animate-scale-in">
              <div className="aspect-[3/4] lg:aspect-[4/3] premium-card rounded-xl flex items-center justify-center border border-gold/20">
                <img 
                  src="/assets/whycardiffwomenchooseus.jpg" 
                  alt="Cardiff women who choose our aesthetic treatments" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6 lg:space-y-10 px-4 lg:px-0 animate-fade-up">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-serif text-forest mb-4 lg:mb-6">
                Why Cardiff Women Choose Us
                </h2>
                <p className="text-lg lg:text-xl text-forest max-w-2xl lg:max-w-none">
                Because your skin deserves more than one-size-fits-all solutions
                </p>
              </div>
          
              <div className="space-y-6 lg:space-y-8">
                {whyUsFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 lg:space-x-6 group">
                  <div className="w-12 lg:w-16 h-12 lg:h-16 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-forest mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base lg:text-lg text-forest leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Val Teaser */}
      <section className="pt-12 lg:pt-20 pb-16 lg:pb-32 spacious-luxury-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Val's Images */}
            <div className="animate-scale-in">
              {/* Val's Portrait */}
              <div className="aspect-[4/5] lg:aspect-[2/3] relative overflow-hidden rounded-2xl elegant-shadow">
                <img 
                  src="/assets/aboutvalheroimg.jpg" 
                  alt="Val - Your Personal Skin Specialist in her Cardiff clinic" 
                  className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6 lg:space-y-8 animate-fade-up px-4 lg:px-0">
              <h2 className="text-3xl lg:text-5xl font-serif text-forest text-center lg:text-left">
                Meet Val, Your Skin Specialist
              </h2>
              <p className="text-lg lg:text-xl text-forest leading-relaxed text-center lg:text-left">
                The woman behind Cardiff's most trusted aesthetic treatments. 
                <span className="text-forest font-bold"> Over 500 transformations</span> and counting.
              </p>
              <p className="text-base lg:text-lg text-forest leading-relaxed text-center lg:text-left">
                "I believe every woman deserves to feel confident in her own skin. That's why I created 
                a space where science meets genuine care, where your story matters as much as your skin."
              </p>
              
              {/* Credentials */}
              <div className="space-y-2 lg:space-y-3 text-center lg:text-left">
                <div className="flex items-center space-x-2 lg:space-x-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-forest" />
                  <span className="text-sm lg:text-base text-forest font-medium">10+ Years Clinical Experience</span>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-forest" />
                  <span className="text-sm lg:text-base text-forest font-medium">500+ Successful Transformations</span>
                </div>
                <div className="flex items-center space-x-2 lg:space-x-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-forest" />
                  <span className="text-sm lg:text-base text-forest font-medium">Dermalogica Certified Professional</span>
                </div>
              </div>
              
              <p className="text-base lg:text-lg text-forest text-center lg:text-left">
                <span className="text-forest font-bold">Your free consultation</span> includes comprehensive skin analysis, 
                personalized treatment planning, and the beginning of your transformation journey.
              </p>
              
              <div className="text-center lg:text-left">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-forest font-semibold text-base lg:text-lg hover:text-gold transition-colors group"
                >
                  Discover Val's Story
                  <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 ml-2 lg:ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Reviews Carousel */}
      <section className="pt-16 lg:pt-32 pb-12 lg:pb-20 text-white" style={{ backgroundColor: '#014900' }}>
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-20 pt-8 lg:pt-16">
            <h2 className="text-3xl lg:text-5xl font-serif text-gold mb-4 lg:mb-6">
              What Cardiff Women Are Saying
            </h2>
            <p className="text-lg lg:text-xl text-white max-w-3xl mx-auto px-4">
              Real stories from real women who found their confidence
            </p>
          </div>
          
          {/* Featured Testimonials - Offset Layout */}
          <div className="space-y-8 lg:space-y-12 mb-8 lg:mb-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{
                  transform: window.innerWidth >= 1024 ? (index % 2 === 1 ? 'translateX(2rem)' : 'translateX(-2rem)') : 'none',
                }}
              >
                {/* Portrait Placeholder */}
                <div className={`${index % 2 === 1 ? 'lg:order-3' : ''}`}>
                  <div className="aspect-square premium-card rounded-xl flex items-center justify-center border border-gold/20 max-w-xs lg:max-w-sm mx-auto">
                    {index === 0 && (
                      <img 
                        src="/assets/hpsarahtesti.jpg" 
                        alt="Sarah M. - Cardiff client testimonial" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="/assets/hpemmatesti.jpg" 
                        alt="Emma L. - Cardiff client testimonial" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}
                    {index === 2 && (
                      <img 
                        src="/assets/hpkatetesti.jpg" 
                        alt="Kate R. - Cardiff client testimonial" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-2xl premium-shadow relative">
                <Quote className="w-8 lg:w-12 h-8 lg:h-12 text-gold/40 absolute top-4 lg:top-6 left-4 lg:left-6" />
                <div className="pt-6 lg:pt-8">
                  <div className="flex items-center space-x-1 mb-4 lg:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 lg:w-6 h-5 lg:h-6 text-gold fill-gold" />
                    ))}
                  </div>
                      <p className="text-base lg:text-lg text-white mb-4 lg:mb-6 italic leading-relaxed font-medium">
                    "{testimonial.text}"
                  </p>
                  <div>
                        <p className="font-serif font-bold text-gold text-base lg:text-lg">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Remaining Testimonials - Scrollable Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {testimonials.slice(3).map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 lg:p-6 rounded-xl premium-shadow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-xs lg:text-sm text-white mb-4 italic">"{testimonial.text}"</p>
                <div className="text-xs">
                  <p className="font-semibold text-gold">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-16 lg:pt-32 pb-16 lg:pb-32 text-white" style={{ backgroundColor: '#014900' }}>
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8 pt-8 lg:pt-16 px-4">
            <h2 className="text-3xl lg:text-5xl font-serif text-gold mb-6 lg:mb-8">
              <span className="lg:hidden">Your Skin Glow-Up Starts Here</span>
              <span className="hidden lg:block">Your Skin Transformation Starts Here</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              Join the 500+ Cardiff women who've discovered what personalized, 
              expert skin care can do for their confidence.
            </p>
            <div className="flex justify-center pt-6 lg:pt-8 pb-6 lg:pb-8">
              <Button
                href="#"
                className="luxury-shimmer bg-cream text-forest px-8 lg:px-12 py-4 lg:py-6 rounded-sm uppercase font-bold tracking-wider text-lg lg:text-xl transition-all duration-300"
                className="luxury-shimmer bg-white text-white px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-sm lg:text-lg transition-all duration-300"
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}