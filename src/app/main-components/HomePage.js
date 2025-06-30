
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
      <CBDProductLanding />
      <ScrollBanner 
      backgroundImage="https://thumbs.dreamstime.com/b/high-quality-illustration-ayurveda-concept-scattered-herb-leaves-roots-textured-surface-natural-healing-banner-337655998.jpg"
        icon="https://cdn-icons-png.flaticon.com/512/10319/10319961.png"
        title="CBD EXPLAINED"
        description="Back pain can be a crippling ailment that interferes with day-to-day functioning and general health."/>
      
       
      <SpotlightCarousel/>
      {/* <ScrollBanner backgroundImage="https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-a-photo-showcasing-ayurvedic-oils-and-herbs-used-in-treatments-image_16198387.jpg"
        icon="https://cdn-icons-png.flaticon.com/512/10319/10319961.png "
        title="Ayurvedic"
        description="Back pain can be a crippling ailment that interferes with day-to-day functioning and general health."
      /> */}
      <BlogSection />  
      {/*the hydration error due to swiper use in */}
      {/* <BlogSectionLanding /> */}
      
       
    </div>
  );
}