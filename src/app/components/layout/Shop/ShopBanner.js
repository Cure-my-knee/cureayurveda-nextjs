 import React from 'react';

const ShopBanner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/banner/herobanner4.jpg')",
        }}
      ></div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="block">Natural Healing</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover the ancient wisdom of Ayurveda through our premium collection of 
            natural herbs, supplements, and wellness products for holistic health
          </p>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900 to-transparent"></div>
    </div>
  );
};

export default ShopBanner;
