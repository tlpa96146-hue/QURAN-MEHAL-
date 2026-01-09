
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '9',
    name: 'Kaaba Edition Velvet Mushaf',
    arabicName: 'مصحف مخملي طبعة الكعبة',
    price: 55.00,
    description: 'A luxurious black velvet-bound Quran featuring a magnificent gold-plated metallic emblem inspired by the Kaaba door. Premium thick pages with gold-gilded edges.',
    category: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop', // High quality representation
    rating: 5.0,
    reviews: 85,
    isFlashSale: true,
    discountPrice: 48.00
  },
  {
    id: '10',
    name: 'Royal Ottoman Gift Box Set',
    arabicName: 'طقم الصندوق العثماني الملكي',
    price: 150.00,
    description: 'The pinnacle of luxury. Includes a black velvet Mushaf housed in a stunning laser-cut yellow base box with a clear glass lid and ornate corner details.',
    category: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=800&auto=format&fit=crop', // High quality representation
    rating: 4.9,
    reviews: 42
  },
  {
    id: '11',
    name: 'Premium Gold Floral Mushaf Set',
    arabicName: 'مصحف الزهور الذهبية',
    price: 40.00,
    description: 'Exquisite 25.4cm x 19.5cm (10" x 7.5") yellow floral patterned Mushaf with matching protective hard-shell box. Perfect for daily recitation or as a wedding gift.',
    category: 'Rainbow',
    image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=800&auto=format&fit=crop', // High quality representation
    rating: 4.8,
    reviews: 120
  },
  {
    id: '1',
    name: '15 Lines Mushaf - Madina Script',
    arabicName: 'مصحف المدينة المنورة',
    price: 25.00,
    description: 'Beautifully printed 15 lines per page Quran in the classic Madina script. High quality cream paper with gold gilding.',
    category: 'Translation',
    image: 'https://picsum.photos/seed/quran1/400/500',
    rating: 4.9,
    reviews: 1250,
    isFlashSale: true,
    discountPrice: 20.00
  },
  {
    id: '2',
    name: 'Color Coded Tajweed Quran',
    arabicName: 'مصحف التجويد الملون',
    price: 35.00,
    description: 'Master your recitation with color-coded Tajweed rules. Includes clear instructions on the margin.',
    category: 'Tajweed',
    image: 'https://picsum.photos/seed/quran2/400/500',
    rating: 4.8,
    reviews: 840
  },
  {
    id: '3',
    name: 'Premium Rainbow Quran',
    arabicName: 'مصحف ملون',
    price: 45.00,
    description: 'Each Juz is color-coded with high-quality floral covers. Perfect for gifting and students.',
    category: 'Rainbow',
    image: 'https://picsum.photos/seed/quran3/400/500',
    rating: 4.7,
    reviews: 620
  },
  {
    id: '4',
    name: 'Digital Quran Pen Reader',
    arabicName: 'القلم القارئ الرقمي',
    price: 75.00,
    description: 'Electronic pen that recites any verse upon touching. Multiple reciters and translations included.',
    category: 'Digital',
    image: 'https://picsum.photos/seed/quran4/400/500',
    rating: 4.9,
    reviews: 310,
    isFlashSale: true,
    discountPrice: 65.00
  },
  {
    id: '5',
    name: 'English Translation - The Clear Quran',
    arabicName: 'القرآن الواضح',
    price: 18.00,
    description: 'The world-renowned Clear Quran translation by Dr. Mustafa Khattab. Easy to understand English.',
    category: 'Translation',
    image: 'https://picsum.photos/seed/quran5/400/500',
    rating: 5.0,
    reviews: 2100
  },
  {
    id: '6',
    name: 'Luxury Eid Gift Box Set',
    arabicName: 'طقم هدية فاخر',
    price: 120.00,
    description: 'Complete gift set including a premium leather-bound Quran, prayer mat, tasbih, and attar.',
    category: 'Gift Sets',
    image: 'https://picsum.photos/seed/quran6/400/500',
    rating: 4.9,
    reviews: 150
  }
];

export const CATEGORIES = ['All', 'Tajweed', 'Translation', 'Rainbow', 'Digital', 'Gift Sets'];
