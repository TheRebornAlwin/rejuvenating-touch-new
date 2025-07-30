import React from 'react';
import { useEffect } from 'react';
import { Award, Shield, Heart, Star, CheckCircle, Leaf, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const credentials = [
    {
      icon: Shield,
      title: "Thorough Consultation Process",
      description: "Comprehensive skin consultations before and after treatments with continuous client communication and education"
    },
    {
      icon: Award,
      title: "Clinical Excellence Standards", 
      description: "Maintaining the highest levels of sterilization, safety protocols, and professional hygiene"
    },
    {
      icon: CheckCircle,
      title: "Continuous Education & Client Priority",
      description: "Always furthering education to understand skin better, prioritizing clients above all else, even working overtime when needed"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Personalized Attention",
      description: "Complete one-on-one focus tailored exclusively to your unique skin journey and individual needs"
    },
    {
      icon: Shield,
      title: "Safety-First Philosophy",
      description: "Conservative, thoughtful approach with your skin's long-term health as the absolute priority"
    },
    {
      icon: Star,
      title: "Results-Driven Care",
      description: "Evidence-based treatments designed to deliver visible, lasting improvements you can trust"
    }
  ];

  const handleBookNow = () => {
    window.open('https://fresha.com', '_blank');
  };

  return (
    <div className="min-h-screen pt-24 spacious-luxury-gradient page-transition-enter page-transition-enter-active">
      {/* Hero Section */}
      <section className="py-12 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 animate-slide-in-left px-4 lg:px-0">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-2 lg:space-x-3 mb-4 lg:mb-6">
                  <Sparkles className="w-6 lg:w-8 h-6 lg:h-8 text-gold animate-float" />
                  <span className="text-forest uppercase tracking-wider font-semibold text-sm lg:text-base">Meet Your Aesthetician</span>
                </div>
                
                <h1 className="text-3xl lg:text-7xl font-serif text-forest leading-tight">
                  <span className="text-center lg:text-left block">Val – Your Personal</span>
                  <span className="block text-forest">Skin Specialist</span>
                </h1>
                
                <p className="text-lg lg:text-2xl text-forest leading-relaxed">
                  Dedicated to transforming skin through science, genuine care,
                  and completely personalized expertise.
                </p>
                <p className="text-forest text-base lg:text-xl leading-relaxed font-medium tracking-wide mt-4 lg:mt-6">
                  Experience the difference that comes from working with someone who truly 
                  understands your skin and is committed to your transformation journey.
                </p>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="aspect-[4/5] lg:aspect-[4/3] relative overflow-hidden rounded-2xl elegant-shadow">
                <img 
                  src="/assets/aboutvalheroimg.jpg" 
                  alt="Val - Your Personal Skin Specialist in her Cardiff clinic" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Val's Story */}
      <section className="py-12 lg:py-16 ethereal-creme-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-2 space-y-6 lg:space-y-8 px-4 lg:px-0">
              <h2 className="text-3xl lg:text-6xl font-serif text-forest mb-6 lg:mb-12 text-center lg:text-left">
                My Journey in Aesthetics
              </h2>
              
              <div className="space-y-6 lg:space-y-8 text-base lg:text-lg leading-relaxed">
                <p className="text-base lg:text-lg text-forest leading-relaxed font-medium tracking-wide">
                  My path into aesthetic care began over a decade ago when I experienced my own challenging 
                  skin journey. Like so many women, I felt frustrated by generic treatments that promised 
                  everything but delivered disappointingly little. That deeply personal experience became 
                  the foundation of my passion for understanding skin at its most fundamental level.
                </p>
                
                <p className="text-base lg:text-lg text-forest leading-relaxed font-medium tracking-wide">
                  After years of intensive training in clinical skin health, advanced dermatology, and 
                  specialized aesthetic procedures, I founded Rejuvenating Touch with one unwavering mission: 
                  to provide honest, effective, completely personalized skin care that creates real, 
                  lasting transformation. No marketing gimmicks, no unrealistic promises—just 
                  science-backed treatments tailored precisely to your unique needs.
                </p>
                
                <p className="text-base lg:text-lg text-forest leading-relaxed font-medium tracking-wide">
                  Today, I combine my clinical expertise with genuine, heartfelt care to help clients 
                  achieve the healthy, confident skin they truly deserve. Every treatment journey begins 
                  with deeply understanding your skin's unique story, your specific concerns, and your 
                  personal goals. Because when it comes to your skin, one size absolutely never fits all.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 lg:space-y-8 px-4 lg:px-0">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl elegant-shadow">
                <div className="w-full h-full bg-gradient-to-br from-sage/20 via-gold/15 to-forest/15 flex items-center justify-center">
                  <div className="text-center space-y-3 lg:space-y-4">
                    <Leaf className="w-16 lg:w-20 h-16 lg:h-20 text-forest/40 mx-auto" />
                    <p className="text-olive/60 font-serif text-base lg:text-lg">Working with Client</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 lg:p-8 rounded-2xl elegant-shadow">
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-forest mb-4 lg:mb-6">
                  Professional Credentials
                </h3>
                <ul className="space-y-2 lg:space-y-3 text-black">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-forest mr-3" />
                    <span className="text-sm lg:text-base text-forest font-medium">500+ Successful Transformations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-forest mr-3" />
                    <span className="text-sm lg:text-base text-forest font-medium">Dermalogica certified professional</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-forest mr-3" />
                    <span className="text-sm lg:text-base text-forest font-medium">Advanced chemical peel specialist</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-forest mr-3" />
                    <span className="text-sm lg:text-base text-forest font-medium">500+ successful transformations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-forest mr-3" />
                    <span className="text-sm lg:text-base text-forest font-medium">Cardiff-based private practice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Safety */}
      <section className="py-12 lg:py-16 tranquil-gradient">
        <div className="container-custom">
          <div className="text-center mb-8 lg:mb-12 px-4">
            <h2 className="text-3xl lg:text-6xl font-serif text-forest mb-4 lg:mb-6">
              Credentials & Safety Protocol
            </h2>
            <p className="text-lg lg:text-2xl text-olive max-w-3xl mx-auto">
              Your safety, comfort, and exceptional results are my absolute top priorities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 px-4 lg:px-0">
            {credentials.map((credential, index) => (
              <div key={index} className="bg-white p-6 lg:p-10 rounded-2xl text-center space-y-4 lg:space-y-6 elegant-shadow hover:shadow-2xl transition-shadow duration-500">
                <div className="w-16 lg:w-20 h-16 lg:h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto soft-glow">
                  <credential.icon className="w-8 lg:w-10 h-8 lg:h-10 text-forest" />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-forest">
                  {credential.title}
                </h3>
                <p className="text-forest leading-relaxed text-base lg:text-lg">
                  {credential.description}
                </p>
                <p className="text-forest leading-relaxed font-medium tracking-wide text-center mt-2 lg:mt-3 text-sm lg:text-base">
                  Your peace of mind and exceptional results are our absolute priorities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 lg:py-20 harmony-gradient text-center lg:text-left">
        <div className="container-custom">
          <div className="mb-8 lg:mb-12 px-4">
            <h2 className="text-3xl lg:text-6xl font-serif text-forest mb-4 lg:mb-6">
              My Core Values
            </h2>
            <p className="text-base lg:text-xl text-forest max-w-5xl mx-auto">
              The guiding principles behind every treatment and client interaction :)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 px-4 lg:px-0">
            {values.map((value, index) => (
              <div key={index} className="space-y-2 lg:space-y-6 group bg-white md:bg-transparent p-4 lg:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none">
                <div className="w-12 lg:w-24 h-12 lg:h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-gold/30 transition-colors duration-500 soft-glow">
                  <value.icon className="w-6 lg:w-12 h-6 lg:h-12 text-gold" />
                </div>
                <h3 className="font-serif text-sm lg:text-3xl font-semibold text-forest leading-tight">
                  {value.title}
                </h3>
                <p className="text-xs lg:text-lg text-forest leading-relaxed max-w-md mx-auto">
                  {value.description}
                </p>
                <p className="text-forest leading-relaxed font-medium tracking-wide text-center max-w-md mx-auto mt-2 lg:mt-3 text-sm lg:text-base">
                  
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 lg:py-32 bg-forest text-white">
        <div className="container-custom text-center">
          <div className="py-8 lg:py-16">
          <h2 className="text-3xl lg:text-6xl font-serif text-gold mb-8 lg:mb-16 px-4 text-center">
            Awards & Professional Recognition
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 px-4 lg:px-0">
            {/* Mobile: 2x2 boxes with white backgrounds and borders */}
            <div className="space-y-3 lg:space-y-4 group">
              <div className="bg-white md:bg-transparent border md:border-0 border-gold/30 rounded-lg p-4 md:p-0 shadow-lg md:shadow-none">
                <div className="w-12 lg:w-20 h-12 lg:h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-gold/30 transition-colors duration-500">
                <Star className="w-6 lg:w-10 h-6 lg:h-10 text-gold" />
                </div>
                <h3 className="font-serif text-xs lg:text-xl font-semibold text-gold md:text-gold leading-tight text-forest md:text-gold">5-Star Excellence</h3>
                <p className="text-forest md:text-white/80 text-xs lg:text-base leading-tight">Consistently rated on Fresha Platform</p>
              </div>
            </div>
            
            <div className="space-y-3 lg:space-y-4 group">
              <div className="bg-white md:bg-transparent border md:border-0 border-gold/30 rounded-lg p-4 md:p-0 shadow-lg md:shadow-none">
                <div className="w-12 lg:w-20 h-12 lg:h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-gold/30 transition-colors duration-500">
                <Award className="w-6 lg:w-10 h-6 lg:h-10 text-gold" />
                </div>
                <h3 className="font-serif text-xs lg:text-xl font-semibold text-gold md:text-gold leading-tight text-forest md:text-gold">Certified Professional</h3>
                <p className="text-forest md:text-white/80 text-xs lg:text-base leading-tight">Dermalogica Partnership</p>
              </div>
            </div>
            
            <div className="space-y-3 lg:space-y-4 group">
              <div className="bg-white md:bg-transparent border md:border-0 border-gold/30 rounded-lg p-4 md:p-0 shadow-lg md:shadow-none">
                <div className="w-12 lg:w-20 h-12 lg:h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-gold/30 transition-colors duration-500">
                <CheckCircle className="w-6 lg:w-10 h-6 lg:h-10 text-gold" />
                </div>
                <h3 className="font-serif text-xs lg:text-xl font-semibold text-gold md:text-gold leading-tight text-forest md:text-gold">Advanced Training</h3>
                <p className="text-forest md:text-white/80 text-xs lg:text-base leading-tight">Chemical Peel Specialization</p>
              </div>
            </div>
            
            <div className="space-y-3 lg:space-y-4 group">
              <div className="bg-white md:bg-transparent border md:border-0 border-gold/30 rounded-lg p-4 md:p-0 shadow-lg md:shadow-none">
                <div className="w-12 lg:w-20 h-12 lg:h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-gold/30 transition-colors duration-500">
                <Heart className="w-6 lg:w-10 h-6 lg:h-10 text-gold" />
                </div>
                <h3 className="font-serif text-xs lg:text-xl font-semibold text-gold md:text-gold leading-tight text-forest md:text-gold">Client Choice Award</h3>
                <p className="text-forest md:text-white/80 text-xs lg:text-base leading-tight">Cardiff Aesthetics Excellence</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-12 lg:pt-20 pb-4 lg:pb-8 serenity-gradient">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8 px-4">
            <h2 className="text-3xl lg:text-6xl font-serif text-forest mb-6 lg:mb-8">
              Ready to Begin Your Skin Journey?
            </h2>
            <p className="text-lg lg:text-2xl text-forest leading-relaxed">
              Let's work together to create a completely personalized treatment plan that 
              addresses your unique skin concerns and helps you achieve your goals.
            </p>
            <p className="text-forest text-base lg:text-lg leading-relaxed font-medium tracking-wide max-w-3xl mx-auto mt-4 lg:mt-6">
              Your skin transformation journey begins with understanding, continues with expertise, 
              and results in the confidence that comes with truly healthy, radiant skin.
            </p>
            <button 
              onClick={handleBookNow}
              className="luxury-shimmer mt-6 lg:mt-8 bg-forest text-white px-8 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300"
            >
              <span>Book Your Free Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}