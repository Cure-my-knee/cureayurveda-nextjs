 "use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductCard = ({ 
  title = "TOPICALS",
  description = "Premium CBD products for wellness",
  buttonText = "VIEW PRODUCTS",
  slug = '',
  defaultImage = "/images/card/card1.jpg",
  hoverImage = "/images/card/card2.jpg",
  onButtonClick = () => {},
  className = ""
}) => {
  const [imageError, setImageError] = useState({
    default: false,
    hover: false
  });

  // Helper function to ensure proper image URL format
  const formatImageUrl = (url) => {
    if (!url) return "";
    // If it's a protocol-relative URL, convert to absolute URL
    if (url.startsWith('//')) {
      return `https:${url}`;
    }
    // If it's already absolute or relative, return as is
    return url;
  };

  const formattedDefaultImage = formatImageUrl(defaultImage);
  const formattedHoverImage = formatImageUrl(hoverImage);

  const handleImageError = (imageType) => {
    setImageError(prev => ({
      ...prev,
      [imageType]: true
    }));
  };

  return (
    <div className={`relative group overflow-hidden rounded-3xl bg-gradient-to-br from-rose-200 to-pink-300 h-96 w-full max-w-md mx-auto cursor-pointer transition-all duration-300 hover:shadow-2xl ${className}`}>
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Default Image */}
        <div className="absolute inset-0 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-0" style={{
          transform: 'scale(1)',
          opacity: 1,
          transition: 'transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)'
        }}>
          {imageError.default ? (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-gray-600 text-sm">Image not available</p>
              </div>
            </div>
          ) : (
            <Image
              src={formattedDefaultImage}
              alt={title}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              priority
              unoptimized={formattedDefaultImage.startsWith('http')}
              onError={() => handleImageError('default')}
            />
          )}
        </div>
        
        {/* Hover Image */}
        <div className="absolute inset-0 opacity-0 scale-110 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100" style={{
          transform: 'scale(1.1)',
          opacity: 0,
          transition: 'transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)'
        }}>
          {imageError.hover ? (
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-gray-600 text-sm">Hover image not available</p>
              </div>
            </div>
          ) : (
            <Image
              src={formattedHoverImage}
              alt={`${title} - Alternative view`}
              fill
              className="object-cover object-center"
              unoptimized={formattedHoverImage.startsWith('http')}
              onError={() => handleImageError('hover')}
            />
          )}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/50" />
      </div>
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-8">
        {/* Text Content */}
        <div className="mb-6 transform transition-all duration-300 group-hover:translate-y-[-4px]">
          <h3 className="text-white text-2xl font-bold tracking-wider mb-2 drop-shadow-lg">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
            {description}
          </p>
        </div>
        
        {/* Button */}
        <button
          onClick={onButtonClick}
          className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transform group-hover:translate-y-[-2px]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// Alternative version using regular img tags with enhanced animations
const ProductCardWithRegularImg = ({ 
  title = "TOPICALS",
  description = "Premium CBD products for wellness",
  buttonText = "VIEW PRODUCTS",
  defaultImage = "/images/card/card1.jpg",
  hoverImage = "/images/card/card2.jpg",
  onButtonClick = () => {},
  className = ""
}) => {
  const [imageError, setImageError] = useState({
    default: false,
    hover: false
  });

  const formatImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith('//')) {
      return `https:${url}`;
    }
    return url;
  };

  const formattedDefaultImage = formatImageUrl(defaultImage);
  const formattedHoverImage = formatImageUrl(hoverImage);

  const handleImageError = (imageType) => {
    setImageError(prev => ({
      ...prev,
      [imageType]: true
    }));
  };

  return (
    <div className={`relative group overflow-hidden rounded-3xl bg-gradient-to-br from-rose-200 to-pink-300 h-96 w-full max-w-md mx-auto cursor-pointer transition-all duration-300 hover:shadow-2xl ${className}`}>
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Default Image */}
        <div className="absolute inset-0" style={{
          transform: 'scale(1)',
          opacity: 1,
          transition: 'transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)'
        }}>
          {imageError.default ? (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-gray-600 text-sm">Image not available</p>
              </div>
            </div>
          ) : (
            <img
              src={formattedDefaultImage}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:opacity-0"
              style={{
                transform: 'scale(1)',
                opacity: 1,
                transition: 'transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)'
              }}
              onError={() => handleImageError('default')}
            />
          )}
        </div>
        
        {/* Hover Image */}
        <div className="absolute inset-0" style={{
          transform: 'scale(1.1)',
          opacity: 0,
          transition: 'transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)'
        }}>
          {imageError.hover ? (
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🖼️</div>
                <p className="text-gray-600 text-sm">Hover image not available</p>
              </div>
            </div>
          ) : (
            <img
              src={formattedHoverImage}
              alt={`${title} - Alternative view`}
              className="w-full h-full object-cover object-center group-hover:scale-100 group-hover:opacity-100"
              style={{
                transform: 'scale(1.1)',
                opacity: 0,
                transition: 'transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)'
              }}
              onError={() => handleImageError('hover')}
            />
          )}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/50" />
      </div>
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-8">
        {/* Text Content */}
        <div className="mb-6 transform transition-all duration-300 group-hover:translate-y-[-4px]">
          <h3 className="text-white text-2xl font-bold tracking-wider mb-2 drop-shadow-lg">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">
            {description}
          </p>
        </div>
        
        {/* Button */}
        <button
          onClick={onButtonClick}
          className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transform group-hover:translate-y-[-2px]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
export { ProductCardWithRegularImg };