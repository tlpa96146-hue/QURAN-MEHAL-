
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onView: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onView }) => {
  const originalPrice = product.price;
  const currentPrice = product.discountPrice || product.price;
  const discountPercent = product.discountPrice 
    ? Math.round(((originalPrice - product.discountPrice) / originalPrice) * 100) 
    : 0;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isFlashSale && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
              Flash Sale
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-yellow-400 text-emerald-900 text-[10px] font-bold px-2 py-1 rounded-md">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button 
            onClick={onView}
            className="w-10 h-10 bg-white text-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all transform hover:scale-110"
          >
            <i className="fas fa-eye"></i>
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
            className="w-10 h-10 bg-white text-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all transform hover:scale-110"
          >
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-emerald-600 text-xs font-semibold mb-1 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-gray-900 font-bold mb-1 line-clamp-2 leading-tight group-hover:text-emerald-700 transition-colors">
          {product.name}
        </h3>
        {product.arabicName && (
          <p className="font-arabic text-emerald-800 text-sm mb-2">{product.arabicName}</p>
        )}
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 text-xs">
            {[...Array(5)].map((_, i) => (
              <i key={i} className={`${i < Math.floor(product.rating) ? 'fas' : 'far'} fa-star`}></i>
            ))}
          </div>
          <span className="text-gray-400 text-[10px] ml-2">({product.reviews})</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {product.discountPrice && (
              <span className="text-gray-400 text-xs line-through">${originalPrice.toFixed(2)}</span>
            )}
            <span className="text-lg font-extrabold text-emerald-800">${currentPrice.toFixed(2)}</span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
            className="bg-emerald-50 text-emerald-700 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
