
export interface ProductCardType {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  rating?: {
    rate?: number | undefined;
    count?: number | undefined;
  }
}