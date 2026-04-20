export type Category = 'cakes' | 'wedding' | 'kids' | 'cupcakes' | 'macarons' | 'sets';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  image: string;
  features?: string[];
  fillings?: string[];
  minWeight?: number;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  slug: string;
}
