  // shop/page.js
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
 
 
import Image from 'next/image';
 
 
import Title from '../../ui/Title';
import ProductCardShop from './ProductCardShop';
import Button from '../../ui/Button';
 

const RelatedProduct = () => {
  const router = useRouter();

  const products = [
    {
      id: "orthodexil-joint-pain-oil",
      productImage: "/images/defaultproduct/productimage1.jpeg",
      hoverImage: "/images/defaultproduct/productimage4.jpeg",
      productName: "ORTHODEXIL - JOINT PAIN OIL",
      price: "549",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "wholeleaf-pain-relief-spray",
      productImage: "/images/defaultproduct/productimage2.jpeg",
      hoverImage: "/images/defaultproduct/productimage4.jpeg",
      productName: "WHOLELEAF - PAIN RELIEF SPRAY",
      price: "399",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "natural-herbal-balm",
      productImage: "/images/defaultproduct/productimage1.jpeg",
      hoverImage: "/images/defaultproduct/productimage5.jpeg",
      productName: "NATURAL - HERBAL BALM",
      price: "299",
      currency: "₹",
      mrpText: "MRP"
    },
     
  ];

  // Navigation handlers
  const handleProductClick = (slug) => {
    // console.log('Navigating to product details:', slug);
    // Navigate to product details page
    router.push(`/shop/${slug}`);
  };

  const handleQuickView = (slug) => {
    // console.log('Quick view for product:', slug);
    // You can open a modal or navigate to quick view
    // For now, navigate to the same details page
    router.push(`/shop/${slug}?view=quick`);
  };

  const handleAddToCart = (slug) => {
    // console.log('Adding to cart:', slug);
    // Add to cart logic here
    // You might want to show a toast notification
    // and/or navigate to cart page
    router.push('/cart');
  };

  const handleLoadMore = () => {
    // console.log('Loading more products...');
    // Implement load more functionality
    // This could fetch more products from an API
  };

  return (
    <>
      
      <section>
        <div className="min-h-screen bg-gray-50 pt-16">
          <Title>
            You may also like
          </Title>
          
           

          {/* Products Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product, index) => (
                <ProductCardShop
                  key={product.id}
                  productId={product.id}
                  productImage={product.productImage}
                  productName={product.productName}
                  hoverImage={product.hoverImage}
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
          </div>

           
           
        </div>
      </section>
    </>
  );
};

export default RelatedProduct;