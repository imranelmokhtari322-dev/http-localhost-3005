export interface Plan {
  id: string;
  duration: number; // in months
  price: number; // total or monthly? On site €79 total for 24 months, €49 total for 12 months, €39 total for 6 months. That's extremely cheap! Let's display the price clearly.
  pricePerMonth: string;
  previousPrice?: number;
  popular: boolean;
  screens: number;
  bonusText?: string; // e.g. "+3 Maanden Gratis"
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
  verified: boolean;
  avatarSeed: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DeviceBrand {
  name: string;
  logoUrl?: string;
  className?: string;
}
