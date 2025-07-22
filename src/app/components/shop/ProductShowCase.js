 "use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { authAPI } from '@/lib/api/endpoints';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoSlideRef = useRef(null);
  const router = useRouter();

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }

    if (isAutoPlaying && products.length > 1) {
      autoSlideRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // 4 seconds auto-slide
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isAutoPlaying, products.length, currentIndex]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      
      const data = await authAPI.getProduct();
      const productsArray = data.data?.products || data.products || data || [];
      
      if (productsArray.length === 0) {
        setProducts([]);
        return;
      }
      
      const transformedProducts = productsArray.map((product, index) => ({
        id: product.productDetailId || product._id || product.id || `product-${Date.now()}-${index}`,
        productImage: product.images?.[0] || product.productImage || "/images/defaultproduct/productdefault3.png",
        productName: product.productName || product.name || 'Unnamed Product',
        price: product.price?.toString() || "0",
        currency: product.currency || "₹",
      }));
      
      setProducts(transformedProducts);
      
    } catch (err) {
      console.error('Error fetching products:', err);
      setProducts([]);
      toast.error('Failed to load products', {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (productId) => {
    if (productId) {
      router.push(`/shop/${productId}`);
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handlePrevious = () => {
    if (products.length <= 1) return;
    pauseAutoPlay();
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    if (products.length <= 1) return;
    pauseAutoPlay();
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      pauseAutoPlay();
      setCurrentIndex(index);
    }
  };

  if (loading) {
    return (
      <div className="h-50 bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center rounded-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{borderColor: '#edf1e1'}}></div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="h-50 bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center rounded-lg">
        <p className="text-gray-500 text-sm">No products available</p>
      </div>
    );
  }

  const currentProduct = products[currentIndex];

  return (
    <div className="relative h-50 rounded-lg overflow-hidden shadow-lg" style={{ background: '#cdd8a3' }}

>
      
      {/* Main Product Display */}
      <div 
        className="h-full flex items-center justify-center cursor-pointer group"
        onClick={() => handleProductClick(currentProduct.id)}
      >
        <div className="flex items-center gap-6 max-w-2xl mx-auto px-4">
          
          {/* Product Image - Left Side */}
          <div className="flex-shrink-0">
            <img
              src={currentProduct.productImage}
              alt={currentProduct.productName}
              className="w-24 h-24 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 ring-2 ring-white/20"
              onError={(e) => {
                e.target.src = "/images/defaultproduct/productdefault3.png";
              }}
            />
          </div>

          {/* Product Details - Right Side */}
          <div className="flex-grow text-left">
            {/* Product Name */}
            <div className="text-lg font-semibold text-[#586e20] mb-2 line-clamp-2">
              {currentProduct.productName}
            </div>

            {/* Price - Clean display without offers or discounts */}
            <div className="text-xl font-bold text-[#586e20]">
              ₹ {currentProduct.price}
              {/* {mrpText && (
          <span className="ml-2 line-through text-gray-400">
            {mrpText}
          </span>
          )} */}
            </div>

             {/* <div className="text-gray-600 text-xs sm:text-sm md:text-base tracking-[0.2em]">
      ₹ {price}
        {mrpText && (
          <span className="ml-2 line-through text-gray-400">
            {mrpText}
          </span>
          )}
        </div> */}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {products.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1.5 shadow-lg hover:shadow-xl transition-all duration-200"
            style={{border: '1px solid rgba(255,255,255,0.3)'}}
            aria-label="Previous product"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1.5 shadow-lg hover:shadow-xl transition-all duration-200"
            style={{border: '1px solid rgba(255,255,255,0.3)'}}
            aria-label="Next product"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {products.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-4'
                  : 'hover:bg-white/80'
              }`}
              style={{
                backgroundColor: index === currentIndex ? '#ffffff' : 'rgba(255,255,255,0.5)'
              }}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-slide Progress Bar */}
      {isAutoPlaying && products.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
          <div className="h-full bg-white animate-progress" />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 4s linear infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProductShowcase;