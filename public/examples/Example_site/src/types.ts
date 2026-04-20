export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceFrom: string;
  duration: string;
  categories: string[];
}

export interface Case {
  id: string;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string[];
  imageUrl?: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
}
