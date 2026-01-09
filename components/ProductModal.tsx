
import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-emerald-950/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-scaleUp">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white text-gray-500 rounded-full flex items-center justify-center shadow-md transition-all"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 bg-gray-50">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
          <span className="text-emerald-600 text-sm font-bold tracking-widest uppercase mb-2">
            {product.category}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
            {product.name}
          </h2>
          {product.arabicName && (
            <p className="font-arabic text-2xl text-emerald-800 mb-6">{product.arabicName}</p>
          )}

          <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
            <div className="flex flex-col">
              {product.discountPrice && (
                <span className="text-gray-400 text-sm line-through">${product.price.toFixed(2)}</span>
              )}
              <span className="text-4xl font-extrabold text-emerald-800">
                ${(product.discountPrice || product.price).toFixed(2)}
              </span>
            </div>
            {product.discountPrice && (
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Special Offer
              </span>
            )}
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="font-bold text-gray-900">Description</h4>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
                In Stock
              </div>
              <div className="flex items-center">
                <i className="fas fa-undo text-emerald-500 mr-2"></i>
                30-Day Returns
              </div>
            </div>
            <button 
              onClick={onAddToCart}
              className="w-full bg-emerald-700 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg transform active:scale-[0.98] flex items-center justify-center text-lg"
            >
              <i className="fas fa-cart-plus mr-3"></i>
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
