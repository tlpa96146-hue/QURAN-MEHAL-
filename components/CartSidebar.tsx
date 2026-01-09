
import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  total: number;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty, total }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between bg-emerald-50/50">
          <h2 className="text-xl font-bold text-emerald-900 flex items-center">
            <i className="fas fa-shopping-bag mr-3"></i>
            My Shopping Bag
            <span className="ml-3 text-sm font-medium bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">
              {items.length} items
            </span>
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2 transition-colors">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Items */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center">
                <i className="fas fa-shopping-cart text-gray-300 text-4xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-700">Your bag is empty</h3>
              <p className="text-gray-500 text-sm max-w-[200px]">Start exploring our collection and find something beautiful.</p>
              <button 
                onClick={onClose}
                className="bg-emerald-700 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-800 transition-colors shadow-lg"
              >
                Shop Now
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex space-x-4 animate-fadeIn">
                <div className="w-24 h-28 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-gray-900 text-sm line-clamp-2 leading-tight">
                      {item.name}
                    </h4>
                    <button onClick={() => onRemove(item.id)} className="text-gray-300 hover:text-red-500 ml-2 transition-colors">
                      <i className="fas fa-trash-alt text-sm"></i>
                    </button>
                  </div>
                  <p className="text-xs text-emerald-600 font-medium mt-1">{item.category}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                      <button 
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-all text-emerald-800"
                      >
                        <i className="fas fa-minus text-[10px]"></i>
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-gray-700">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-white rounded transition-all text-emerald-800"
                      >
                        <i className="fas fa-plus text-[10px]"></i>
                      </button>
                    </div>
                    <span className="font-extrabold text-emerald-800">
                      ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t space-y-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">FREE</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-emerald-900 pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-emerald-700 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all shadow-lg transform active:scale-95 flex items-center justify-center">
              Secure Checkout
              <i className="fas fa-arrow-right ml-3"></i>
            </button>
            <p className="text-[10px] text-center text-gray-400">
              Tax included. Shipping and discount codes calculated at checkout.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
