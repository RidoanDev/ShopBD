
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: boolean;
  discountPrice?: number;
  category: string;
  subcategory?: string;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  featuredOrder?: number;
  specifications?: Record<string, string>;
}
