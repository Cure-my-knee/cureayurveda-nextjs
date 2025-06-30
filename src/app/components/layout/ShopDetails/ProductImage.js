// components/ProductImage.js
'use client';
import React from 'react';

const ProductImage = ({ 
  productName = "Orthodexil JOINT PAIN OIL",
  brandName = "WHOLELEAF"
}) => {
  return (
    <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 sm:p-8 w-full max-w-md mx-auto">
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Product bottle */}
          <div className="w-24 h-32 sm:w-32 sm:h-40 bg-gradient-to-b from-amber-900 to-amber-800 rounded-t-lg rounded-b-sm shadow-lg">
            {/* Pump */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-sm mx-auto mb-2"></div>
            {/* Label */}
            <div className="bg-white rounded p-1 sm:p-2 mx-1 sm:mx-2 mt-4 sm:mt-8">
              <div className="text-xs font-medium text-gray-800 text-center">{brandName}</div>
              <div className="text-xs text-center text-gray-600 mt-1 leading-tight">{productName}</div>
              <div className="w-full h-12 sm:h-16 bg-gradient-to-r from-pink-300 to-pink-400 rounded mt-2 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 text-white font-bold text-lg">♂</div>
              </div>
            </div>
          </div>
          
          {/* Product box */}
          <div className="w-16 h-24 sm:w-24 sm:h-32 bg-white rounded shadow-lg ml-4 sm:ml-8 -mt-24 sm:-mt-32 relative">
            <div className="p-1 sm:p-2 text-xs">
              <div className="font-medium text-center">{brandName}</div>
              <div className="text-gray-600 mt-1 text-center leading-tight">{productName}</div>
              <div className="w-full h-10 sm:h-16 bg-gradient-to-r from-pink-300 to-pink-400 rounded mt-1 sm:mt-2 flex items-center justify-center">
                <div className="w-4 h-4 sm:w-6 sm:h-6 text-white font-bold text-sm sm:text-base">♂</div>
              </div>
              <div className="text-xs text-gray-500 mt-1 sm:mt-2 text-center leading-tight">CONTAINS NATURAL CBD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;