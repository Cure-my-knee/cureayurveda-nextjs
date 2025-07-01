  // shop/page.js
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';
import ProductCardShop from './ProductCardShop';
import Button from '../../ui/Button';
import ScrollFadeUp from '../../ui/ScrollFadeUp';
 

const TopRatedProduct = () => {
  const router = useRouter();

  const products = [
    {
      id: "VedicCal",
      productImage: "/images/defaultproduct/productimage1.jpeg",
      hoverImage: "/images/defaultproduct/productimage4.jpeg",
      productName: "VedicCal",
      price: "549",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "VedicFix",
      productImage: "/images/defaultproduct/productimage2.jpeg",
      hoverImage: "/images/defaultproduct/productimage4.jpeg",
      productName: "VedicFix",
      price: "399",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "VedicFix-Oil",
      productImage: "/images/defaultproduct/productimage1.jpeg",
      hoverImage: "/images/defaultproduct/productimage5.jpeg",
      productName: "VedicFix Oil",
      price: "299",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "D-Vedic",
      productImage: "/images/defaultproduct/productimage2.jpeg",
      hoverImage: "/images/defaultproduct/productimage6.jpeg",
      productName: "D Vedic",
      price: "449",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "D-Vedic-Syrup",
      productImage: "/images/defaultproduct/productimage1.jpeg",
      hoverImage: "/images/defaultproduct/productimage6.jpeg",
      productName: "D Vedic Syrup",
      price: "599",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "Vedic-Shilajit",
      productImage: "/images/defaultproduct/productimage1.jpeg",
      hoverImage: "/images/defaultproduct/productimage6.jpeg",
      productName: "Vedic Shilajit",
      price: "349",
      currency: "₹",
      mrpText: "MRP"
    }
  ];

  // Navigation handlers
  const handleProductClick = (slug) => {
    router.push(`/shop/${slug}`);
  };

  const handleQuickView = (slug) => {
    router.push(`/shop/${slug}?view=quick`);
  };

  const handleAddToCart = (slug) => {
    router.push('/cart');
  };

  const handleLoadMore = () => {
    console.log('Loading more products...');
     
  };

  return (
    <>
      
      <section>
        <div className="min-h-screen bg-gray-50 pt-16">
          <Title>
            Our Products
          </Title>
          
          <Subtitle>
            Discover our premium collection of natural pain relief solutions
          </Subtitle>

          {/* Products Grid */}
          <ScrollFadeUp> 
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
          </ScrollFadeUp>

          {/* Load More Button */}
          <div className="text-center pb-12">
            <Button onClick={handleLoadMore}>
              LOAD MORE PRODUCTS
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopRatedProduct;