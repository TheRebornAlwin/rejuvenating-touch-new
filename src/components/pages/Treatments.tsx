import React, { useState, useEffect } from 'react';
import { Clock, Star, Sparkles, Leaf, Heart, Zap, Waves, Scissors, Search } from 'lucide-react';
import type { Treatment } from '../../types';

export function Treatments() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const treatments: Treatment[] = [
    // Facials
    {
      id: '1',
      name: 'Basic Facial',
      price: '£35',
      duration: '45 minutes',
      description: 'Essential cleansing and hydrating facial treatment perfect for maintaining healthy skin. Includes deep cleanse, exfoliation, and nourishing mask. Leaves your skin softer, smoother, and glowing with renewed vitality.',
      benefits: [
        'Deep pore cleansing and purification',
        'Gentle exfoliation for smoother texture',
        'Hydrating mask for instant glow',
      ],
      image: '',
      category: 'facials'
    },
    {
      id: '2',
      name: 'Luxury Facial',
      price: '£60',
      duration: '1 hour',
      description: 'Premium facial experience with advanced techniques and premium products. Includes everything in Basic Facial plus specialized treatments.',
      benefits: [
        'Advanced anti-aging techniques',
        'Premium skincare products',
        'Relaxing facial massage included',
      ],
      image: '',
      category: 'facials'
    },
    {
      id: '3',
      name: 'Lymphatic Drainage Facial',
      price: '£30',
      duration: '30 minutes',
      description: 'Specialized massage technique to reduce puffiness and promote natural detoxification. Perfect for reducing under-eye bags and facial swelling.',
      benefits: [
        'Reduces facial puffiness and swelling',
        'Promotes natural detoxification',
        'Improves circulation and skin tone',
      ],
      image: '/assets/lymphaticdrainagefacial.jpeg',
      category: 'facials'
    },
    {
      id: '4',
      name: 'Back Facial',
      price: '£40',
      duration: '1 hour',
      description: 'A complete and luxury facial treatment for your back. Deep cleansing, exfoliation, and hydration for hard-to-reach areas.',
      benefits: [
        'Deep cleansing of back area',
        'Helps prevent back acne',
        'Smooth, hydrated skin',
      ],
      image: '',
      category: 'facials'
    },
    {
      id: '5',
      name: 'Glutes Facial',
      price: '£40',
      duration: '1 hour',
      description: 'Specialized treatment for smooth, clear skin. Includes deep cleansing, gentle exfoliation, and targeted hydration.',
      benefits: [
        'Smooths and softens skin',
        'Prevents ingrown hairs',
        'Improves skin texture and tone',
      ],
      image: '',
      category: 'facials'
    },

    // Peels
    {
      id: '6',
      name: 'Pro Power Peel (30 min)',
      price: 'from £80',
      duration: '30 minutes',
      description: 'Professional chemical peel targeting specific skin concerns. Customized formulation based on your skin analysis.',
      benefits: [
        'Dramatically reduces fine lines and wrinkles',
        'Significantly improves skin texture and tone',
        'Minimizes acne scars and dark spots effectively',
      ],
      image: '/assets/propowerpeell.jpeg',
      category: 'peels'
    },
    {
      id: '7',
      name: 'Pro Power Peel (60 min)',
      price: 'from £120',
      duration: '60 minutes',
      description: 'Extended professional peel treatment with aftercare. Includes preparation and post-peel soothing mask.',
      benefits: [
        'Maximum skin transformation results',
        'Comprehensive pre and post care',
        'Customized to your skin needs',
      ],
      image: '/assets/propowerpeel60mins.jpg',
      category: 'peels'
    },

    // Combinations
    {
      id: '8',
      name: 'Luxury Facial + Lymphatic Drainage Facial',
      price: '£70',
      description: 'Perfect combination of our premium facial with specialized lymphatic drainage. Best of both treatments in one session.',
      benefits: [
        'Complete facial rejuvenation',
        'Reduces puffiness while nourishing',
        'Maximum relaxation and results',
      ],
      image: '',
      category: 'combinations'
    },
    {
      id: '9',
      name: 'Basic Facial + Lymphatic Drainage Facial',
      price: '£60',
      description: 'Essential facial care combined with puffiness-reducing lymphatic drainage. Great value combination treatment.',
      benefits: [
        'Complete cleansing and detox',
        'Gentle yet effective treatment',
        'Perfect introduction to our services',
      ],
      image: '',
      category: 'combinations'
    },
    {
      id: '10',
      name: 'Basic Facial + Back Massage',
      price: '£55',
      duration: '1 hour',
      description: 'Relaxing combination of facial treatment with therapeutic back massage. Perfect for stress relief and skin care.',
      benefits: [
        'Complete relaxation experience',
        'Stress relief and skin benefits',
        'Great value combination',
      ],
      image: '',
      category: 'combinations'
    },
    {
      id: '11',
      name: 'Luxury Facial + Back Massage',
      price: '£75',
      duration: '1 hour',
      description: 'Premium facial treatment combined with relaxing back massage. Ultimate self-care experience.',
      benefits: [
        'Ultimate luxury experience',
        'Complete stress relief',
        'Premium skin and body care',
      ],
      image: '',
      category: 'combinations'
    },
    {
      id: '12',
      name: 'Back Facial + Back Massage',
      price: '£60',
      duration: '1 hour',
      description: 'Complete back care treatment combining deep cleansing with therapeutic massage. Perfect for back acne and tension.',
      benefits: [
        'Complete back area treatment',
        'Combines cleansing with relaxation',
        'Addresses skin and muscle concerns',
      ],
      image: '',
      category: 'combinations'
    },

    // Massages
    {
      id: '13',
      name: 'Swedish Full Body Massage',
      price: '£50',
      duration: '1 hour',
      description: 'Classic Swedish massage technique for full body relaxation. Uses long strokes and kneading to relieve tension.',
      benefits: [
        'Complete body relaxation',
        'Improves circulation',
        'Reduces muscle tension',
      ],
      image: '',
      category: 'massages'
    },
    {
      id: '14',
      name: 'Swedish Back Only Massage',
      price: '£30',
      duration: '30 minutes',
      description: 'Focused Swedish massage targeting back, shoulders, and neck. Perfect for desk workers and stress relief.',
      benefits: [
        'Targets tension areas',
        'Quick stress relief',
        'Improves posture comfort',
      ],
      image: '',
      category: 'massages'
    },
    {
      id: '15',
      name: 'Pre-blended Aromatherapy Full Body Massage',
      price: '£50',
      duration: '1 hour',
      description: 'Full body massage using carefully selected aromatherapy oils. Combines physical relaxation with aromatherapy benefits.',
      benefits: [
        'Aromatherapy stress relief',
        'Customized oil blends',
        'Mental and physical wellness',
      ],
      image: '',
      category: 'massages'
    },
    {
      id: '16',
      name: 'Pre-blended Aromatherapy Back Massage',
      price: '£30',
      duration: '30 minutes',
      description: 'Focused aromatherapy massage for back, shoulders, and neck. Perfect for targeted stress relief.',
      benefits: [
        'Targeted aromatherapy benefits',
        'Stress relief in key areas',
        'Natural mood enhancement',
      ],
      image: '/assets/swedishbackonlymassage.jpg',
      category: 'massages'
    },
    {
      id: '17',
      name: 'Hot Stone Full Body Massage',
      price: '£60',
      duration: '1 hour',
      description: 'Luxurious massage using heated stones to penetrate deep into muscles. Ultimate relaxation experience.',
      benefits: [
        'Deep muscle penetration',
        'Ultimate relaxation experience',
        'Improves circulation dramatically',
      ],
      image: '',
      category: 'massages'
    },
    {
      id: '18',
      name: 'Hot Stone Back Only Massage',
      price: '£40',
      duration: '30 minutes',
      description: 'Focused hot stone massage for back and shoulders. Intense heat therapy for deep muscle relief.',
      benefits: [
        'Deep muscle relief',
        'Intensive heat therapy',
        'Perfect for chronic tension',
      ],
      image: '/assets/hotstonebackonlymassage.jpeg',
      category: 'massages'
    },
    {
      id: '19',
      name: 'Foot Massage',
      price: '£30',
      duration: '30 minutes',
      description: 'Therapeutic foot massage focusing on pressure points. Perfect after long days or combined with other treatments.',
      benefits: [
        'Pressure point therapy',
        'Relieves tired feet',
        'Improves overall circulation',
      ],
      image: '',
      category: 'massages'
    },

    // Waxing
    {
      id: '20',
      name: 'Full Leg Waxing',
      price: '£25',
      description: 'Complete leg waxing from hip to toe. Professional technique for smooth, long-lasting results.',
      benefits: [
        'Smooth legs for weeks',
        'Professional technique',
        'Reduces hair regrowth over time',
      ],
      image: '',
      category: 'waxing'
    },
    {
      id: '21',
      name: 'Half Leg Waxing',
      price: '£18',
      description: 'Lower leg waxing from knee to ankle. Perfect for maintaining smooth legs with regular treatments.',
      benefits: [
        'Quick and efficient',
        'Perfect for maintenance',
        'Professional results',
      ],
      image: '',
      category: 'waxing'
    },
    {
      id: '22',
      name: 'Underarm Waxing',
      price: '£15',
      description: 'Quick and comfortable underarm waxing. Leaves skin smooth and hair-free for weeks.',
      benefits: [
        'Quick 15-minute treatment',
        'Smooth underarms for weeks',
        'Reduces ingrown hairs',
      ],
      image: '',
      category: 'waxing'
    },
    {
      id: '23',
      name: 'Lip, Chin & Eyebrows (Wax Combo)',
      price: '£13',
      description: 'Complete facial waxing package. Perfect value for maintaining facial hair removal.',
      benefits: [
        'Complete facial hair removal',
        'Great value combination',
        'Precise eyebrow shaping',
      ],
      image: '',
      category: 'waxing'
    },
    {
      id: '24',
      name: 'Lip Waxing',
      price: '£5',
      description: 'Quick and gentle upper lip hair removal. Professional technique for sensitive facial skin.',
      benefits: [
        'Quick 5-minute treatment',
        'Gentle on sensitive skin',
        'Precise hair removal',
      ],
      image: '',
      category: 'waxing'
    },
    {
      id: '25',
      name: 'Chin Waxing',
      price: '£5',
      description: 'Professional chin hair removal. Quick, comfortable, and precise.',
      benefits: [
        'Professional precision',
        'Quick and comfortable',
        'Long-lasting smoothness',
      ],
      image: '',
      category: 'waxing'
    },
    {
      id: '26',
      name: 'Eyebrows Waxing',
      price: '£5',
      description: 'Expert eyebrow shaping and hair removal. Creates perfectly defined brows.',
      benefits: [
        'Expert brow shaping',
        'Perfectly defined shape',
        'Professional precision',
      ],
      image: '',
      category: 'waxing'
    },

    // Beauty
    {
      id: '27',
      name: 'Classic Eyelashes',
      price: '£25',
      description: 'Beautiful classic eyelash treatment for natural-looking enhancement. Perfect for everyday elegance.',
      benefits: [
        'Natural-looking enhancement',
        'Long-lasting results',
        'Professional application',
      ],
      image: '/assets/classiceyelashes.jpeg',
      category: 'beauty'
    },

    // Add-ons
    {
      id: '28',
      name: 'Chest, Face & Scalp Add-on',
      price: '£15',
      description: 'Enhancement add-on for any massage treatment. Extends your relaxation experience.',
      benefits: [
        'Extends massage benefits',
        'Complete upper body care',
        'Enhanced relaxation',
      ],
      image: '',
      category: 'add-ons'
    },
    {
      id: '29',
      name: 'Candle Wax Oil Add-on',
      price: '£10',
      description: 'Luxurious warm candle wax oil treatment. Adds aromatherapy and deep moisturizing to any service.',
      benefits: [
        'Deep moisturizing treatment',
        'Aromatherapy benefits',
        'Luxury enhancement',
      ],
      image: '',
      category: 'add-ons'
    },
    {
      id: '30',
      name: 'Body Brushing Add-on',
      price: '£5',
      description: 'Dry body brushing to stimulate circulation and exfoliate skin. Perfect preparation for treatments.',
      benefits: [
        'Stimulates circulation',
        'Natural exfoliation',
        'Prepares skin for treatments',
      ],
      image: '',
      category: 'add-ons'
    },
    {
      id: '31',
      name: 'Cold Stone Mask Add-on',
      price: '£2',
      description: 'Cooling stone mask treatment for puffy eyes and stressed skin. Perfect finishing touch.',
      benefits: [
        'Reduces puffiness',
        'Cooling and soothing',
        'Perfect treatment finish',
      ],
      image: '/assets/coldstonemask.jpeg',
      category: 'add-ons'
    },
    {
      id: '32',
      name: 'Cold Globes',
      price: '£8',
      description: 'Cooling facial globes treatment to reduce puffiness and soothe skin. Perfect finishing touch for any facial treatment.',
      benefits: [
        'Reduces facial puffiness instantly',
        'Soothes and calms irritated skin',
        'Enhances product absorption',
      ],
      image: '/assets/coldglobes.jpeg',
      category: 'add-ons'
    },
    {
      id: '33',
      name: 'Jelly Mask',
      price: '£7',
      description: 'Hydrating jelly mask treatment that provides intense moisture and cooling relief. Leaves skin plump and refreshed.',
      benefits: [
        'Intense hydration boost',
        'Cooling and refreshing sensation',
        'Leaves skin plump and glowing',
      ],
      image: '/assets/jellymask.jpeg',
      category: 'add-ons'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'facials', name: 'Facials', icon: Heart },
    { id: 'peels', name: 'Chemical Peels', icon: Star },
    { id: 'combinations', name: 'Combination Packages', icon: Zap },
    { id: 'massages', name: 'Massage Therapy', icon: Leaf },
    { id: 'waxing', name: 'Waxing Services', icon: Scissors },
    { id: 'beauty', name: 'Beauty Treatments', icon: Sparkles },
    { id: 'add-ons', name: 'Enhancement Add-ons', icon: Waves }
  ];

  const filteredTreatments = treatments.filter(treatment => {
    const matchesSearch = treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // If there's a search term, search across all treatments regardless of category
    if (searchTerm.trim()) {
      return matchesSearch;
    }
    
    // If no search term, filter by category as usual
    const matchesCategory = activeCategory === 'all' || treatment.category === activeCategory;
    return matchesCategory;
  });

  const handleBookNow = () => {
    window.open('https://fresha.com', '_blank');
  };

  return (
    <div className="min-h-screen pt-24 page-transition-enter page-transition-enter-active">
      {/* Hero Section */}
      <section className="py-12 lg:py-32 spacious-luxury-gradient">
        <div className="container-custom text-center">
          <div className="max-w-5xl mx-auto space-y-6 lg:space-y-8 px-4">
            <div className="flex items-center justify-center space-x-2 lg:space-x-3 mb-4 lg:mb-6">
              <span className="text-forest uppercase tracking-wider font-semibold text-sm lg:text-base">Complete Service Menu</span>
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-serif text-forest leading-tight">
              <span className="text-center block">Professional Treatments.</span>
              <span className="block text-forest text-center">Tailored for You.</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-forest leading-relaxed max-w-3xl mx-auto">
              From relaxing facials to transformative peels, therapeutic massages to precision waxing
              <span className="text-forest font-bold"> every service designed with your comfort in mind.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 lg:py-16 ethereal-creme-gradient border-y border-gold/20">
        <div className="container-custom">
          <div className="space-y-4 lg:space-y-6">
            {/* Search Bar */}
            <div className="max-w-md mx-auto px-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-forest/60" />
                <input
                  type="text"
                  placeholder="Search treatments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-forest/20 rounded-full focus:border-gold focus:outline-none transition-colors text-forest placeholder-forest/60"
                />
              </div>
            </div>
            
            {/* Category Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-2 lg:gap-3 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center justify-center space-x-1 lg:space-x-2 px-2 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-xs lg:text-sm transition-all duration-500 shadow-md hover:shadow-lg border-2 ${
                  activeCategory === category.id
                    ? 'bg-forest text-gold border-gold shadow-2xl'
                    : 'bg-white text-forest hover:bg-forest hover:text-gold border-forest/30 hover:border-gold/70'
                }`}
              >
                <category.icon className="w-3 lg:w-4 h-3 lg:h-4" />
                <span className="text-center leading-tight">{category.name}</span>
              </button>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-32 tranquil-gradient">
        <div className="container-custom">
          {filteredTreatments.length === 0 ? (
            <div className="text-center py-16 lg:py-24 px-4">
              <div className="max-w-md mx-auto">
                <Search className="w-16 h-16 text-forest/40 mx-auto mb-4" />
                <h3 className="text-xl lg:text-2xl font-serif text-forest mb-4">
                  No treatments found
                </h3>
                <p className="text-forest/70 mb-6">
                  {searchTerm 
                    ? `No treatments match "${searchTerm}". Try a different search term.`
                    : "No treatments found in this category."
                  }
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="text-forest font-semibold hover:text-gold transition-colors"
                >
                  Clear search and show all treatments
                </button>
              </div>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 lg:px-0">
            {/* Free Consultation Service - First in Grid */}
            <div className="luxury-card rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-gold">
              {/* Consultation Image Placeholder */}
              <div className="aspect-[4/3] soft-creme-gradient flex items-center justify-center border-b border-gold/20">
                <div className="text-center space-y-2 lg:space-y-3 p-6 lg:p-8">
                  <Heart className="w-16 lg:w-20 h-16 lg:h-20 text-gold mx-auto animate-float" />
                  <p className="text-forest font-serif text-base lg:text-lg">Free Skin Analysis & Consultation</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8 space-y-4 lg:space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-forest mb-2">
                    Free First Time Skin Consultation
                    </h3>
                    <div className="flex items-center space-x-3 lg:space-x-4 text-forest">
                      <span className="text-xl lg:text-2xl font-bold">FREE</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">45 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-forest leading-relaxed text-base lg:text-lg">
                  Comprehensive skin analysis and personalized treatment planning. Discover what your skin truly needs 
                  with thorough consultation, professional assessment, and expert recommendations.
                </p>
                
                <p className="text-forest leading-relaxed text-sm lg:text-base">
                  Each session is carefully planned to build upon previous treatments, ensuring optimal results and long-term skin health.
                </p>
                
                <div className="space-y-2 lg:space-y-3">
                  {[
                    'Complete skin health assessment',
                    'Comprehensive before and after consultation', 
                    'Professional skincare recommendations'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-gold fill-current mt-0.5 flex-shrink-0" />
                      <span className="text-forest text-sm lg:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={handleBookNow}
                  className="luxury-shimmer w-full bg-forest text-white px-6 lg:px-8 py-3 lg:py-4 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300"
                >
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          
            {filteredTreatments.map((treatment) => (
              <div key={treatment.id} className="luxury-card rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Treatment Image Placeholder */}
                {treatment.image ? (
                  <div className="aspect-[4/3] border-b border-gold/20">
                    <img 
                      src={treatment.image} 
                      alt={treatment.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-sage/20 via-gold/15 to-forest/15 flex items-center justify-center border-b border-gold/20">
                    <div className="text-center space-y-2 lg:space-y-3 p-6 lg:p-8">
                      <Sparkles className="w-12 lg:w-16 h-12 lg:h-16 text-gold mx-auto" />
                      <p className="text-forest font-serif text-base lg:text-lg">{treatment.name}</p>
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6 lg:p-8 space-y-4 lg:space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl lg:text-2xl font-bold text-forest mb-2">
                        {treatment.name}
                      </h3>
                      <div className="flex items-center space-x-3 lg:space-x-4 text-forest">
                        <span className="text-xl lg:text-2xl font-bold">{treatment.price}</span>
                        {treatment.duration && (
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{treatment.duration}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-forest leading-relaxed text-base lg:text-lg">
                    {treatment.description}
                  </p>
                  
                  <p className="text-forest leading-relaxed text-sm lg:text-base">
                    Each session is carefully planned to build upon previous treatments, ensuring optimal results and long-term skin health.
                  </p>
                  
                  <div className="space-y-2 lg:space-y-3">
                    {treatment.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Star className="w-5 h-5 text-gold fill-current mt-0.5 flex-shrink-0" />
                        <span className="text-forest text-sm lg:text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={handleBookNow}
                    className="luxury-shimmer w-full bg-forest text-white px-6 lg:px-8 py-3 lg:py-4 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300"
                  >
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-32 text-white" style={{ backgroundColor: '#014900' }}>
        <div className="container-custom text-center">
          <div className="px-4">
          <h2 className="text-3xl lg:text-5xl font-serif text-gold mb-4 lg:mb-6">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-lg lg:text-xl text-white mb-6 lg:mb-8 max-w-2xl mx-auto">
            Choose from our complete range of professional treatments. 
            Every service includes a consultation to ensure the perfect fit for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <button 
              onClick={handleBookNow}
              className="luxury-shimmer bg-cream text-forest px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300"
            >
              <span>Book Your Treatment Now</span>
            </button>
            <button 
              onClick={() => window.open('https://wa.me/07809259269', '_blank')}
              className="luxury-shimmer bg-cream text-forest px-6 lg:px-10 py-4 lg:py-5 rounded-sm uppercase font-bold tracking-wider text-base lg:text-lg transition-all duration-300"
            >
              <span>Ask About Services</span>
            </button>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}