export interface Treatment {
  id: string;
  name: string;
  price: string;
  duration?: string;
  description: string;
  benefits: string[];
  image: string;
  category: 'facials' | 'peels' | 'combinations' | 'massages' | 'waxing' | 'beauty' | 'add-ons';
  freshaLink?: string;
  freshaLink?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  treatment: string;
}

export interface BeforeAfter {
  id: string;
  before: string;
  after: string;
  caption: string;
  sessions: number;
}

export interface FAQ {
  id: string;
  category: 'booking' | 'treatment' | 'aftercare';
  question: string;
  answer: string;
}