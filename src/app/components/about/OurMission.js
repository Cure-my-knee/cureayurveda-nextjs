 'use client';

import React from 'react';
import OurVision from './OurVision';

const Title = ({ children, className = "" }) => (
  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ${className}`}>
    {children}
  </h2>
);

const OurMission = () => {
  return (
    <section className="py-2 sm:py-4 lg:py-4 bg-[#EDF1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section Header (optional) */}
        {/* <div className="text-center mb-12">
          <Title>Our Purpose</Title>
          <Subtitle>Healing Through Nature</Subtitle>
        </div> */}

        {/* Vision Section */}
        <OurVision />

        {/* Mission Card */}
       <div className="mt-10 w-full ">
      <div className="bg-[#82a133] rounded-2xl shadow-md p-8 lg:p-10 border  transition hover:shadow-lg w-full">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-white text-xl sm:text-2xl lg:text-3xl" style={{color: 'white'}}>Our Mission</h2>
        </div>

        <p className="text-white text-lg text-justify " style={{color: 'white'}}>
          At Cure Ayurvedic, we believe in Care before Cure. As true wellness begins with nature, we provide pure and natural products crafted with pure herbs to restore balance, boost immunity and promote holistic wellness.
        </p>

        <p className="text-white text-lg  text-justify "style={{color: 'white'}} >
          By reviving timeless Ayurvedic principles, we aim to provide safe, pure and natural products which will take care of your well-being before getting cured.
        </p>
      </div>
    </div>

      </div>
    </section>
  );
};

export default OurMission;

