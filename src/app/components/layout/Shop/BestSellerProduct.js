   // shop/page.js
'use client'
 import React, { useState } from 'react';
 
import Image from 'next/image';
 
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';
import Button from '../../ui/Button';
import ProductCardShop from './ProductCardShop';
 
  // Adjust path as needed

const BestSellerProduct = () => {
  
  const products = [
    {
      productImage: "/images/defaultproduct/productimage1.jpeg",
      hoverImage: "/images/defaultproduct/productimage4.jpeg",  // Example hover image
      productName: "ORTHODEXIL - JOINT PAIN OIL",
      price: "549",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      productImage: "/images/defaultproduct/productimage2.jpeg",
      hoverImage: "/images/defaultproduct/productimage4.jpeg",  // Example hover image
      productName: "WHOLELEAF - PAIN RELIEF SPRAY",
      price: "399",
      currency: "₹",
      mrpText: "MRP"
    },
    {
      productImage: "/images/defaultproduct/productimage1.jpeg",
      hoverImage: "/images/defaultproduct/productimage5.jpeg",  // Example hover image
      productName: "NATURAL - HERBAL BALM",
      price: "299",
      currency: "₹",
      mrpText: "MRP"
    },
    
  ];

  return (
    <> 
    
    <section> 
    <div className="min-h-screen bg-gray-50 pt-16">
       
      <Title>
        Best Seller Products
      </Title>

      <Subtitle>
        Discover our premium collection of natural pain relief solutions
      </Subtitle>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <ProductCardShop 
              key={index}
              productImage={product.productImage}
              productName={product.productName}
               hoverImage={product.hoverImage}
              price={product.price}
              currency={product.currency}
              mrpText={product.mrpText}
            />
          ))}
        </div>
      </div>

      {/* Optional: Load More Button */}
      <div className="text-center pb-12">
         
        <Button>
          LOAD MORE PRODUCTS
        </Button>
      </div>
    </div>
    </section>
    </>
  );
};

export default BestSellerProduct;