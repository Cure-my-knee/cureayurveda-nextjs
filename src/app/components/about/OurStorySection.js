 'use client';
import React from 'react';
import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';

const OurStorySection = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
        {/* Title Section */}
        <div className="text-center mb-10">
          <Title>Our Story</Title>
          <Subtitle>
            Discover the journey behind our brand and how ancient Ayurvedic wisdom shapes our philosophy.
          </Subtitle>
        </div>

        {/* First Section - Brand Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Left Content */}
          <div className="bg-gray-100 p-6 flex items-center">
            <div className="max-w-md">
              <div className="group cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4 leading-tight transform transition-transform duration-500 group-hover:-translate-y-1">
                  A NEW BRAND,
                  <br />
                  WITH AN OLD
                  <br />
                  STORY
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  The story of <span className="font-semibold">CURE AYURVEDIC</span> began when its founder <span className="font-semibold"></span> rediscovered medicinal preparations from Vedic books with the guidance of an Ayurvedic guru in Kerala—the cradle of Ayurveda—back in <span className="font-semibold">2002</span>. Since then, he became an avid proponent of this ancestral wisdom.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Vivek Sahni with Ayurvedic products"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Second Section - Beauty in Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Image */}
          <div className="relative overflow-hidden order-2 md:order-1 h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Serene woman in natural lighting"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div className="bg-white p-6 flex items-center order-1 md:order-2">
            <div className="max-w-md">
              <div className="group cursor-pointer">
                <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                  CURE AYURVEDIC
                  <br />
                  PROMOTES
                </h2>
                <div className="text-2xl md:text-3xl font-light text-gray-600 italic mb-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                  'Beauty <span className="text-gray-800 not-italic">in</span> Balance'
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  Our guiding philosophy is that the key to preserving and enhancing beauty lies in maintaining the perfect balance between mind, body, and consciousness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStorySection;
