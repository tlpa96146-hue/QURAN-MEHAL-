
export interface Product {
  id: string;
  name: string;
  arabicName?: string;
  price: number;
  description: string;
  category: 'Tajweed' | 'Translation' | 'Rainbow' | 'Digital' | 'Gift Sets';
  image: string;
  rating: number;
  reviews: number;
  isFlashSale?: boolean;
  discountPrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
