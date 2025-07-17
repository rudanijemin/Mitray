export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  benefits: string[];
}

export interface CartItem extends Product {
  quantity: number;
}