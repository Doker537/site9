export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  priceFrom: number;
  duration: string;
  slug: string;
  faq?: { question: string; answer: string }[];
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioWork {
  id: string;
  title: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  category: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  text: string;
  date: string;
  avatarUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export interface BookingRequest {
  name: string;
  phone: string;
  serviceId: string;
  carBrand: string;
  message?: string;
  preferredTime?: string;
}
