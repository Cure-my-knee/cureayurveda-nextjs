// components/ProductCard.js
'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ProductCard = ({ 
  title = "ORTHODEXIL - JOINT PAIN OIL", 
  description = "Potent, all-natural relief from aching joints and inflammation.",
  price = "549", 
  painTypes = ['Arthritis Pain', 'Back Pain', 'Elbow Pain', 'Knee Pain', 'Neck Pain', 'Shoulder Pain'],
  sizes = ['30ml', '50ml'],
  discounts = ['10% off on your 1st order', '15% off on orders worth ₹1000+ | Use code WL15']
}) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-100 to-green-50 p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>

      {/* Pain Types */}
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
          {painTypes.map((pain, index) => (
            <div key={index} className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-xs sm:text-sm text-gray-700 font-medium truncate">{pain}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mb-4 sm:mb-6">
          <span className="text-2xl sm:text-3xl font-bold text-gray-800">₹{price}</span>
          <span className="text-gray-500 ml-2 text-sm sm:text-base">MRP</span>
        </div>

        {/* Size Selection */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Size:</label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedSize === size
                    ? 'bg-green-200 text-green-800 border-2 border-green-300'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-4 sm:mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
          <div className="flex items-center border border-gray-300 rounded-md w-28 sm:w-32">
            <button
              onClick={decrementQuantity}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="flex-1 text-center py-2 border-x border-gray-300 text-sm sm:text-base">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="p-2 hover:bg-gray-100 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button className="w-full py-2 sm:py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors text-sm sm:text-base">
            ADD TO CART
          </button>
          <button className="w-full py-2 sm:py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors text-sm sm:text-base">
            BUY IT NOW
          </button>
        </div>

        {/* Discounts */}
        {discounts.length > 0 && (
          <div className="mt-4 p-3 bg-green-50 rounded-md">
            {discounts.map((discount, index) => (
              <div key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-green-700 mb-1 last:mb-0">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded flex-shrink-0 mt-0.5"></div>
                <span className="leading-tight">{discount}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
