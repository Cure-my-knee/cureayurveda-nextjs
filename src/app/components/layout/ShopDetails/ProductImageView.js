import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductImageView = ({ product, selectedImage = 0 }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') setIsZoomed(false);
    };

    if (isZoomed) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  const toggleZoom = () => setIsZoomed(true);
  const closeZoom = () => setIsZoomed(false);

  if (!product?.images?.length) {
    return (
      <div className="flex items-center justify-center w-full aspect-square bg-gray-100 rounded-lg">
        <span className="text-gray-500">No image available</span>
      </div>
    );
  }

  const imageIndex = Math.min(selectedImage, product.images.length - 1);
  const currentImage = product.images[imageIndex];

  return (
    <>
      {/* Main Image */}
      <div
        className="relative cursor-zoom-in group mb-5"
        onClick={toggleZoom}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleZoom();
          }
        }}
        aria-label="Click to zoom image"
      >
        <Image
          src={currentImage}
          alt={product.productName || 'Product image'}
          width={600}
          height={600}
          className="object-cover bg-white rounded-lg w-full max-w-xl mx-auto aspect-square shadow-lg transition-transform group-hover:scale-105"
          priority
        />

        {/* Hover Zoom Icon */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      </div>

      {/* Zoomed View */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6"
          onClick={closeZoom}
          role="dialog"
          aria-modal="true"
          aria-label="Zoomed product image"
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeZoom}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full w-9 h-9 flex items-center justify-center z-10"
              aria-label="Close zoomed view"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Zoomed Image */}
            <div className="relative bg-white rounded-lg p-2 max-h-[85vh] overflow-auto">
              <Image
                src={currentImage}
                alt={product.productName || 'Zoomed product image'}
                width={1200}
                height={1200}
                className="object-contain w-full h-auto rounded-lg max-h-[80vh]"
                priority
              />
            </div>

            {/* Optional Caption */}
            {product.productName && (
              <p className="text-white text-center mt-4 text-base sm:text-lg font-medium">
                {product.productName}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductImageView;
