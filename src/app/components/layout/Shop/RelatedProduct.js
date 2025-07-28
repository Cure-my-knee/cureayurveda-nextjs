"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image';
import { authAPI } from '@/lib/api/endpoints';
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';
import ScrollFadeUp from '../../ui/ScrollFadeUp';
import ProductCardShop from './ProductCardShop';
import Button from '../../ui/Button';

// Skeleton component for product cards
const ProductCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="aspect-square">
      <Skeleton height="100%" />
    </div>
    <div className="p-4">
      <Skeleton height={20} className="mb-2" />
      <div className="flex items-center justify-between">
        <Skeleton width={80} height={24} />
        <Skeleton width={60} height={20} />
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton height={36} />
        <Skeleton height={32} />
      </div>
    </div>
  </div>
);

// Function to get random items from array
const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const RelatedProduct = () => {
  // State management
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const shopBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop' }
  ];

  const router = useRouter();

  // Fallback products data (in case API fails)
  const fallbackProducts = [
    {
      id: "VedicCal",
      productImage: "/images/defaultproduct/productdumy2.jpg",
      hoverImage: "/images/defaultproduct/productimage4.jpeg",
      productName: "VedicCal",
      price: "549",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "VedicFix",
      productImage: "/images/defaultproduct/productdumy2.jpg",
      hoverImage: "/images/defaultproduct/productimage4.jpeg",
      productName: "VedicFix",
      price: "399",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "VedicFix-Oil",
      productImage: "/images/defaultproduct/productdumy2.jpg",
      hoverImage: "/images/defaultproduct/productimage5.jpeg",
      productName: "VedicFix Oil",
      price: "299",
      currency: "₹",
      mrpText: "MRP"
    }
  ];

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
       const data = await authAPI.getProduct();
            console.log('Raw API  list response======>:', data.data.products);
      
      // Handle the API response structure and transform data
      const productsArray = data.data?.products || data.products || data || [];
      console.log("product list data test=======>", data.data);
      
      if (productsArray.length === 0) {
        console.warn('No products found in API response, using fallback data');
        // Get 3 random products from fallback data
        const randomFallbackProducts = getRandomItems(fallbackProducts, 3);
        setProducts(randomFallbackProducts);
        toast.info('Loading default products', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
      
      // const transformedProducts = productsArray.map(product => ({
      //   // Use product._id, product.id, or generate a unique ID
      //   id: product.productDetailId || product._id || product.id || `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      //   productImage: product.images?.[0] || product.productImage || "/images/defaultproduct/productdefault3.png",
      //   hoverImage: product.images?.[1] || product.hoverImage || "/images/defaultproduct/productimage4.jpeg",
      //   productName: product.productName || product.name || 'Unnamed Product',
      //   price: product.price?.toString() || "0",
      //   currency: product.currency || "₹",
      //   mrpText: product.mrpText || "MRP",
      //   quantity: product.quantity || 0,
      //   type: product.type || 'N/A',
      //   category: product.category || 'N/A',
      //   details: product.details || 'No details available',
      //   features: product.features || [],
      //   benefits: product.benefits || [],
      //   status: product.status || 'active',
      //   createdAt: product.createdAt || new Date().toISOString().split('T')[0],
      //   productImages: product.productImages || [product.productImage || "/images/defaultproduct/productdefault3.png"],
      // }));

            const transformedProducts = productsArray.map(product => {
  const slug = product.slug || product.productDetailId?.slug || product.productDetail?.slug || product._id;
  
  return {
    id: slug,
    slug: slug,
    productImage: product.productImages?.[0] || product.images?.[0] || product.productImage || "/images/defaultproduct/productdefault3.png",
    hoverImage: product.productImages?.[1] || product.images?.[1] || product.hoverImage || "/images/defaultproduct/productimage4.jpeg",
    productName: product.productName || product.name || product.productDetailId?.name || 'Unnamed Product',
    price: product.price?.toString() || product.productDetailId?.price?.toString() || "0",
    currency: product.currency || "₹",
    mrpText: product.mrpText || "MRP",
    quantity: product.quantity || 0,
    type: product.type || 'N/A',
    category: product.category || 'N/A',
    details: product.details || 'No details available',
    features: product.features || [],
    benefits: product.benefits || [],
    status: product.status || 'active',
    createdAt: product.createdAt || new Date().toISOString().split('T')[0],
    productImages: product.productImages || product.images || ["/images/defaultproduct/productdefault3.png"],
  };
});
      
      // Get 3 random products from the transformed array
      const randomProducts = getRandomItems(transformedProducts, 3);
      setProducts(randomProducts);
      console.log('Random 3 products selected ============>:', randomProducts);
      
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message || 'Failed to fetch products');
      
      // Use 3 random fallback products on error
      console.log('Using fallback products due to API error');
      const randomFallbackProducts = getRandomItems(fallbackProducts, 3);
      setProducts(randomFallbackProducts);
      
      toast.error('Failed to load products from server. Showing default products.', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
      console.log('Fetch products completed');
    }
  };

  const handleProductClick = (slug) => {
    console.log('Navigating to product details:', slug);
    router.push(`/shop/${slug}`);
  };

  const handleQuickView = (slug) => {
    console.log('Quick view for product:', slug);
    router.push(`/shop/${slug}`);
  };

  const handleAddToCart = (slug) => {
    console.log('Adding to cart:', slug);
    setTimeout(() => {
      router.push(`/shop/${slug}`);  
    }, 500);
  };

  return (
    <>
      <section>
        <div className="min-h-screen bg-[#edf1e1] pt-16">
          <Title>
           You May Also Like
          </Title>
          
          <Subtitle>
            Discover our premium collection of natural pain relief solutions
          </Subtitle>

          {/* Error Message - Only show if there's an error and we're not loading */}
          {error && !loading && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Notice
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>Unable to load latest products from server. Showing default products.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <ScrollFadeUp> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {loading ? (
                // Skeleton Loading State - Show only 3 skeletons
                <SkeletonTheme baseColor="#f3f4f6" highlightColor="#e5e7eb">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[...Array(3)].map((_, index) => (
                      <ProductCardSkeleton key={index} />
                    ))}
                  </div>
                </SkeletonTheme>
              ) : products.length > 0 ? (
                // Products Grid - Will show exactly 3 products
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {products.map((product, index) => (
                    <ProductCardShop
                      key={product.id}
                      productId={product.id}
                      productImage={product.productImages?.[0] || product.productImage || "/images/defaultproduct/productdefault3.png"}
                      productName={product.productName}
                      hoverImage={product.productImages?.[1] || product.hoverImage || product.productImages?.[0] || "/images/defaultproduct/productimage4.jpeg"}
                      price={product.price}
                      currency={product.currency}
                      mrpText={product.mrpText}
                      // Navigation handlers
                      onProductClick={handleProductClick}
                      onQuickView={handleQuickView}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              ) : (
                // Empty State
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <div className="mx-auto h-12 w-12 text-gray-400">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No products available</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      We're working on adding new products. Please check back soon!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </ScrollFadeUp>
        </div>
      </section>
    </>
  );
};

export default RelatedProduct;