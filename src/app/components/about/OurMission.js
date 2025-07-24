 'use client';

// import React from 'react';
 import React, { useEffect } from 'react';
import { CheckCircle, Shield, Sparkles, Leaf, Heart, Target } from 'lucide-react';
import Subtitle from '../ui/Subtitle';

const Title = ({ children, className = "" }) => (
  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ${className}`}>
    {children}
  </h2>
);



const OurMission = () => {

  
  // scroll up
  // const sectionRef = useRef(null);
  // useEffect(() => {
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, []);

  return (
    <section   className="py-16 sm:py-20 lg:py-24 bg-[#EDF1E1] ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

        {/* Header */}
        <div className="text-center mb-12">
          {/* <Title>Our Purpose</Title>
          <Subtitle>Healing Through Nature</Subtitle> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Our Mission */}
          <div className="bg-white   shadow-md p-8 lg:p-10 border border-gray-200 transition hover:shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-[#586e20]" />
              <Title className="text-2xl sm:text-3xl lg:text-4xl">Our Mission</Title>
            </div>

            <p className="text-gray-700 text-base text-justify sm:text-lg leading-relaxed mb-4">
              At Cure Ayurvedic, we believe in Care before Cure. As true wellness begins with nature, we provide pure and natural products crafted with pure herbs to restore balance, boost immunity and promote holistic wellness.  By reviving timeless ayurvedic principles, we aim to provide safe, pure and natural products which will take care of your well being before getting cured.
            </p>

            
          </div>

          {/* Our Vision */}
          {/* <div className="bg-white   shadow-md p-8 lg:p-10 border border-gray-200 transition hover:shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-[#586e20]" />
              <Title className="text-2xl sm:text-3xl lg:text-4xl">Our Vision</Title>
            </div>

            <p className="text-gray-700 text-base text-justify sm:text-lg leading-relaxed mb-4">
              Our vision is to make Ayurvedic healing accessible, effective and reliable for everyone. In today’s fast-paced world, people often suffer from chronic health issues, stress and lifestyle imbalances. Most solutions provide short-term relief or come with side effects. We wanted to change that.
            </p>

             
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default OurMission;
