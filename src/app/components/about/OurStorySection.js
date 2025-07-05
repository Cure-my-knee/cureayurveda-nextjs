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
                <p className="text-base text-gray-700  leading-relaxed  ">
  The journey of <span className="font-semibold">CURE AYURVEDIC</span> began when its founder <span className="font-semibold">[Founder’s Name]</span> was inspired by ancient remedies discovered in sacred Vedic texts. Under the mentorship of a respected Ayurvedic scholar, he delved deep into holistic healing practices. Since then, he has been a dedicated advocate of this timeless tradition.
</p>

              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative overflow-hidden h-64 md:h-auto">
            <img
              src="https://www.itoozhiayurveda.in/wp-content/uploads/2023/01/Ayurvedic-medicine-scaled.jpg"
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
              src="https://img.freepik.com/premium-photo/natural-spa-background-illustration-ai-generative_118124-25432.jpg"
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
                 'Radiance <span className="text-gray-800 not-italic">Through Harmony</span>'
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
  Our philosophy is rooted in the Ayurvedic belief that true beauty emerges from inner balance — when the energies of body, mind, and spirit are aligned in harmony with nature.
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
