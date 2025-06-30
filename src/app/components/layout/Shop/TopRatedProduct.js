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
    {
      id: "ayurvedic-muscle-relief-oil",
      productImage: "/images/defaultproduct/productimage2.jpeg",
      hoverImage: "/images/defaultproduct/productimage6.jpeg",
      productName: "AYURVEDIC - MUSCLE RELIEF OIL",
      price: "449",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "organic-joint-care-cream",
      productImage: "/images/defaultproduct/productimage1.jpeg",
      hoverImage: "/images/defaultproduct/productimage6.jpeg",
      productName: "ORGANIC - JOINT CARE CREAM",
      price: "599",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      id: "herbal-pain-relief-patches",
      productImage: "https://www.wholeleaf.in/cdn/shop/products/strong_600x.png?v=1741249580",
      hoverImage: "https://www.wholeleaf.in/cdn/shop/files/Relixi_Balm_3_copy_600x.jpg?v=1741166294",
      productName: "HERBAL - PAIN RELIEF PATCHES",
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