
'use client'
import React, { useState, useEffect } from 'react';
import Crt from "../components/layout/Crt";
import HeroSection from "../components/layout/HeroSection";
import WholeLeafProducts from "../components/layout/Shop/ProductCradHome";
import WhyChoose from "../components/layout/WhyChoose";
import CBDProductLanding from "../components/layout/Shop/CBDProductLanding";
import ScrollBanner from "../components/layout/Banner/ScrollBanner";
 
import TopRatedProducts from "../components/layout/Shop/TopRatedProduct";
import SpotlightCarousel from "../components/layout/Home/SpotlightCarousel";
import BestSellerProduct from "../components/layout/Shop/BestSellerProduct";
import BlogSection from "../components/layout/Blog/BlogSection";
import BlogSectionLanding from '../components/layout/Blog/BlogSectionLanding';
import WhyChooseTwo from '../components/layout/WhyChooseTwo';
import Guarantee from '../components/layout/Guarantee';
 

 
 

 

export default function HomePage() {

 
  
  return (
    <div className="bg-white">
      <HeroSection />
      {/* <Crt /> */}
      <TopRatedProducts />
      {/* <BestSellerProduct /> */}
      <WhyChoose />
       {/* <ProductCard />   */}
      {/* <WholeLeafProducts /> */}
      <WhyChooseTwo />
      <CBDProductLanding />
      <ScrollBanner 
      backgroundImage="/images/banner/herobannernew3.png"
        icon="/images/leaf/treatment.png"
        title="AYURVEDA HEALING"
        description="Harness the power of ancient herbs and holistic practices to restore balance and promote natural wellness."/>
      
       
      <SpotlightCarousel/>
      {/* <ScrollBanner backgroundImage="https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-a-photo-showcasing-ayurvedic-oils-and-herbs-used-in-treatments-image_16198387.jpg"
        icon="https://cdn-icons-png.flaticon.com/512/10319/10319961.png "
        title="Ayurvedic"
        description="Back pain can be a crippling ailment that interferes with day-to-day functioning and general health."
      /> */}
      <Guarantee />
      <BlogSection />  
      {/*the hydration error due to swiper use in */}
      {/* <BlogSectionLanding /> */}
      
       
       
    </div>
  );
}