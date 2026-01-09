
import React, { useState, useMemo, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS, CATEGORIES } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import ProductModal from './components/ProductModal';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Cart Logic
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((acc, item) => acc + (item.discountPrice || item.price) * item.quantity, 0), [cart]);

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onSearch={setSearchQuery}
      />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Flash Sale Bar */}
        <section className="bg-emerald-900 text-white py-3 overflow-hidden">
          <div className="flex whitespace-nowrap animate-pulse">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 font-bold uppercase tracking-widest text-sm">
                <i className="fas fa-bolt mr-2 text-yellow-400"></i>
                Flash Sale: Up to 25% Off Premium Mushafs
              </span>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === cat 
                  ? 'bg-emerald-700 text-white shadow-lg' 
                  : 'bg-white text-emerald-800 hover:bg-emerald-50 border border-emerald-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={() => addToCart(product)}
                onView={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <i className="fas fa-search text-gray-300 text-6xl mb-4"></i>
              <h3 className="text-2xl font-semibold text-gray-500">No results found</h3>
              <p className="text-gray-400">Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-emerald-950 text-emerald-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-2xl font-bold text-white mb-6 font-arabic italic">Al-Noor</h4>
            <p className="text-emerald-300 mb-6">Premium Islamic bookstore dedicated to providing the most beautiful Mushafs and Islamic literature to the global Ummah.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center hover:bg-white hover:text-emerald-900 transition-all"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center hover:bg-white hover:text-emerald-900 transition-all"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/1234567890" className="w-10 h-10 bg-emerald-900 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Contact Us</h5>
            <ul className="space-y-4 text-emerald-300">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-emerald-500"></i>
                <span>123 Islamic Center St,<br />Medina District, 56789</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-emerald-500"></i>
                <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-3 text-emerald-500"></i>
                <a href="https://wa.me/1234567890" target="_blank" className="hover:text-white">WhatsApp Inquiry</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-emerald-500"></i>
                <a href="mailto:support@alnoorquran.com" className="hover:text-white">support@alnoorquran.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Customer Care</h5>
            <ul className="space-y-3 text-emerald-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-6">Newsletter</h5>
            <p className="text-emerald-300 mb-4 text-sm">Get updates on new stock and special offers.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-emerald-900 border-none rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-emerald-400 outline-none text-sm" />
              <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-r-md transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-emerald-900 text-center text-emerald-400 text-sm">
          &copy; {new Date().getFullYear()} Al-Noor Quran Shop. All rights reserved.
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-[90] w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us!
        </span>
      </a>

      {/* Overlays */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
        total={cartTotal}
      />
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={() => {
            addToCart(selectedProduct);
            setSelectedProduct(null);
          }}
        />
      )}

      {/* AI Assistant */}
      <AIChatBot />
    </div>
  );
};

export default App;
