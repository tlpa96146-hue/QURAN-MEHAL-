
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] hover:scale-110"
        style={{ backgroundImage: `url('https://picsum.photos/seed/quran-hero/1600/900')` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-transparent flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl text-white">
            <span className="inline-block bg-emerald-600 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-[0.2em]">
              New Arrival
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 font-arabic italic">
              Experience the Beauty <br /> 
              <span className="text-emerald-400">of the Holy Quran</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-emerald-100 mb-8 max-w-lg leading-relaxed">
              Curated collection of high-quality mushafs, tajweed editions, and luxury gift sets for you and your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-emerald-50 transition-all transform hover:-translate-y-1 shadow-lg">
                Shop Collection
              </button>
              <button className="bg-emerald-800/40 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-emerald-900 transition-all transform hover:-translate-y-1">
                Learn Tajweed
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 py-4 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-white text-sm">
          <div className="flex items-center space-x-2">
            <i className="fas fa-truck text-emerald-400"></i>
            <span>Fast Global Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-certificate text-emerald-400"></i>
            <span>Authentic Prints</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-shield-alt text-emerald-400"></i>
            <span>Secure Checkout</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-gift text-emerald-400"></i>
            <span>Gift Wrapping Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
