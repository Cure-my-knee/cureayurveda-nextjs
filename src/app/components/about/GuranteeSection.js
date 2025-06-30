 import React from 'react';
import { Award, Beaker, TestTube, Droplet, Heart, Shield } from 'lucide-react';
import Title from '../ui/Title';

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Award,
      title: "LICENSED",
      description: "We are licensed by the Ayush Ministry of India to legally manufacture and sell our approved product formulations pan India."
    },
    {
      icon: Beaker,
      title: "NO HARMFUL CHEMICALS",
      description: "Our products are made from the best hemp/cannabis that grows naturally and does not contain any harmful chemicals."
    },
    {
      icon: TestTube,
      title: "LAB TESTED",
      description: "We are third party tested. We use cutting edge, world class testing equipment to ensure our products are safe and healthy."
    },
    {
      icon: Droplet,
      title: "100% PURE",
      description: "Quality control is central to our quest to bring you the very best products nature and science can offer."
    },
    {
      icon: Heart,
      title: "CRUELTY FREE",
      description: "Our products have not been tested on animals and have caused no harm to living beings at any stage of production."
    },
    {
      icon: Shield,
      title: "GMP QUALITY",
      description: "You can trust that the product you're using is safe, pure, and effective. GMP certified standards ensure emphasis on quality, inspection and continuous improvement."
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wider">
            OUR GUARANTEE
          </h2> */}
          <Title>
            OUR GUARANTEE
          </Title>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="group text-center transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Icon Container */}
               <div className="group flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#586e20] flex items-center justify-center border-2 border-transparent transition-all duration-300 group-hover:bg-white group-hover:border-[#586e20]">
                <item.icon 
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white transition-all duration-300 group-hover:text-[#586e20]"
                />
              </div>
            </div>



              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 tracking-wide">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
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