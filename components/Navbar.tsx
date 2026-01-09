
import React, { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      {/* Top Banner with Contact */}
      <div className="bg-emerald-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-medium space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <a href="tel:+1234567890" className="hover:text-emerald-300 transition-colors flex items-center">
              <i className="fas fa-phone-alt mr-2"></i>
              Call Us: +1 234 567 890
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors flex items-center">
              <i className="fab fa-whatsapp mr-2 text-green-400"></i>
              WhatsApp Inquiry
            </a>
          </div>
          <div className="tracking-widest uppercase">
            ✨ FREE SHIPPING ON ORDERS OVER $100 ✨
          </div>
          <div className="hidden lg:block">
            Track Your Order | Help Center
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-emerald-800 tracking-tight font-arabic italic cursor-pointer" onClick={() => window.location.reload()}>
              Al-Noor
            </h1>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search for Mushaf, Translations, Gifts..."
                className="w-full bg-gray-100 border-none rounded-full py-2.5 pl-5 pr-12 focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all outline-none text-sm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-emerald-700 text-white p-1.5 rounded-full hover:bg-emerald-800 transition-colors"
              >
                <i className="fas fa-search text-xs"></i>
              </button>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-emerald-700 relative group hidden sm:block">
                <i className="far fa-heart text-xl"></i>
              </button>
              <button className="text-gray-600 hover:text-emerald-700 relative">
                <i className="far fa-user text-xl"></i>
              </button>
              <button 
                onClick={onCartClick}
                className="text-gray-600 hover:text-emerald-700 relative group"
              >
                <i className="fas fa-shopping-bag text-xl"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar (Mobile) */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-100 border-none rounded-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-700">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
