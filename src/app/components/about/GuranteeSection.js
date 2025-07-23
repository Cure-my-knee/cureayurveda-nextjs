 import React from 'react';
import Title from '../ui/Title';

const GuaranteeSection = () => {
 const guarantees = [

    {
    image: "/images/whychoose/whychoose12.png",
    title: "GMP CERTIFIED",
    description: "GMP certified standards guide manufacturing for safe, pure, and effective products."
  },
  {
    image: "/images/whychoose/whychoose15.png",
    title: "ISO CERTIFIED",
    description: "ISO certified manufacturing processes for consistent quality control."
  },
  {
    image: "/images/whychoose/driving-licence.png",
    title: "LICENSED",
     description: "Licensed to manufacture and sell approved product formulations."
  },
  {
    image: "/images/whychoose/whychoose6.png",
    title: "GLUTEN FREE",
    description: "Made from natural hemp/cannabis without gluten-containing ingredients."
  },
  {
    image: "/images/whychoose/whychoose3.png",
    title: "SUGAR FREE",
    description: "Third party tested with advanced equipment for safety and quality verification."
  },
  {
    image: "/images/whychoose/whychoose7.png",
    title: "NATURAL ACTIVE",
    description: "Quality control processes focus on delivering products combining natural ingredients with scientific research."
  },
  {
    image: "/images/whychoose/whychoose1.png",
    title: "CRUELTY FREE",
    description: "Not tested on animals, following ethical production practices."
  },
 
  {
    image: "/images/whychoose/whychoose4.png",
    title: "PLANT BASE",
    description: "Products focus on plant-based ingredients with emphasis on quality and continuous improvement."
  }
];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Title>
           QUALITY YOU CAN TRUST
          </Title>
        </div>

        {/* Grid - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="group text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg bg-white rounded-lg p-4 sm:p-6"
            >
              {/* Image Container */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#586e20] flex items-center justify-center border-2 border-transparent transition-all duration-300 group-hover:bg-white group-hover:border-[#586e20] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain transition-all duration-300 filter brightness-0 invert group-hover:filter-none"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;