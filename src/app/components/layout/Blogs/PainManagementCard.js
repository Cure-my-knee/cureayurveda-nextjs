 'use client';
import React, { useState } from 'react';
import Link from 'next/link';


const PainManagementCard = ({
  image,
  title,
  description,
  readMoreLink = "#",
  className = "",
  category = "",
  readTime = "",
  onClick // Added missing onClick prop
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Handle card click while preventing link click propagation
  const handleCardClick = (e) => {
    // If clicking on the "Read more" link, don't trigger card onClick
    if (e.target.closest('a')) {
      return;
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group cursor-pointer ${className}`}
      onClick={handleCardClick}
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
                
        {!imageError ? (
          <img 
            src={image}
            alt={title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Image unavailable</span>
            </div>
          </div>
        )}

        {category && (
          <div className="absolute top-3 left-3">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              {category}
            </span>
          </div>
        )}

        {readTime && (
          <div className="absolute top-3 right-3">
            <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
              {readTime}
            </span>
          </div>
        )}
      </div>
            
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-200">
          {title}
        </h3>
                
        <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow overflow-hidden line-clamp-3">
          {description}
        </p>
                
        <Link
          href={readMoreLink}
          className="inline-flex items-center text-black hover:text-[#82a133] font-medium text-sm sm:text-base transition-all duration-200 mt-auto group/link"
          aria-label={`Read more about ${title}`}
          onClick={(e) => e.stopPropagation()} // Prevent card click when clicking the link
        >
          Read more
          <svg 
            className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PainManagementCard;