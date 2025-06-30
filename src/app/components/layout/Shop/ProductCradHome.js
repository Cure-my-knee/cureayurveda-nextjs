 "use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../../ui/Button';
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';

const ProductCardHome = ({
  title,
  subtitle,
  bgColor,
  bgGradient,
  backgroundImage,
  productImage,
  boxImage,
  textColor = "text-white",
  delay = 0
}) => {
  return (
    <div className={`relative overflow-hidden ${bgColor} ${bgGradient} h-96 md:h-[500px] group cursor-pointer`}>
      {/* Product image with auto zoom-out effect */}
      {productImage && (
        <Image
          src={productImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-[12000ms] ease-in-out scale-125 group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 lg:p-10 h-full flex flex-col justify-end">
        
        {/* Bottom section with title and button */}
        <div>
          <div className="mb-6">
            <h2 style={{ color: '#ffffff' }} className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] mb-2 drop-shadow-lg text-white" >
                {title}
                </h2>

                {subtitle && (
                <p style={{ color: '#ffffff' }} className="text-sm md:text-base font-light opacity-80 tracking-wide drop-shadow-md text-white">
                    {subtitle}
                </p>
                )}

          </div>
          
          {/* View Products Button */}
          <div className="flex justify-start">
            <Button>
               VIEW PRODUCTS
            </Button>
            {/* <button className="group/btn bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 px-6 py-3 md:px-8 md:py-4 transition-all duration-300 hover:bg-opacity-30 hover:scale-105 active:scale-95 shadow-lg">
              <span className={`${textColor} text-sm md:text-base font-medium tracking-wider transition-all duration-300 group-hover/btn:tracking-widest drop-shadow-sm`}>
                VIEW PRODUCTS
              </span>
            </button> */}
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default function WholeLeafProducts() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Title>
          OUR THERAPIES
          </Title>
        {/* <Subtitle style="color: grey">
           Premium CBD Products for Modern Wellness
        </Subtitle> */}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Topical Products Card */}
          <ProductCardHome 
            title="TOPICALS"
            subtitle="Muscle & Joint Pain Relief"
            bgColor="bg-rose-300"
            bgGradient="bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400"
            productImage="/images/card/card1.jpg"
            textColor="text-white"
            delay={0}
          />
          
          {/* Oral Tinctures Card */}
          <ProductCardHome
            title="ORAL TINCTURES"
            subtitle="Fennel and Mint Flavors"
            bgColor="bg-emerald-300"
            bgGradient="bg-gradient-to-br from-emerald-200 via-emerald-300 to-teal-400"
            productImage="/images/card/card1.jpg"
            textColor="text-white"
            delay={1000}
          />
        </div>
      </div>
    </div>
  );
}