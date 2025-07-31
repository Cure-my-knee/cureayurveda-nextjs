'use client'
import React from 'react'
import Image from 'next/image'
import Title from '../ui/Title'
 

const Guarantee = () => {

    const features = [

     {
      image: "/images/whychoose/whychoose12.png",
      title: "GMP CERTIFIED",
      description: "Good Manufacturing Practices"
    },
    {
      image: "/images/whychoose/whychoose15.png",
      title: "ISO CERTIFIED",
      description: "Traditional wisdom meets modern science"
    },
    {
      image: "/images/whychoose/whychoose1.png",
      title: "CRUELTY FREE",
      description: "Quality and purity is guaranteed"
    },
    {
      image: "/images/whychoose/whychoose6.png",
      title: "GLUTEN FREE",
      description: "All natural ingredients"
    },
    {
      image: "/images/whychoose/whychoose3.png",
      title: "SUGAR FREE",
      description: "Rigorous quality control"
    },
    {
      image: "/images/whychoose/whychoose7.png",
      title: "NATURAL ACTIVE",
      description: "No additives or fillers"
    },
    {
      image: "/images/whychoose/whychoose4.png",
      title: "PLANT BASE",
      description: "Never tested on animals"
    },
    
    {
      image: "/images/whychoose/medicine.png",
      title: "ANCIENT HEALING",
      description: "Ethically sourced ingredients"
    }
  ];
  return (
    <section
      className="relative bg-[#fdfcf9] py-16 px-4 sm:px-6 lg:px-16 overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/banner/handmade-paper/whitetemplatepaper.jpg')", // replace with your actual image path
      }}
    >
      {/* Decorative Leaves - Bottom Left */}
      {/* <Image
        src="/images/leaf/Leaf.png"
        alt="leaf bottom left"
        width={200}
        height={200}
        className="absolute bottom-0 left-0 z-0"
      /> */}

      {/* Decorative Leaves - Bottom Right */}
      {/* <Image
        src="/images/leaf/Leaf.png"
        alt="leaf bottom right"
        width={200}
        height={200}
        className="absolute bottom-0 right-0 z-0 transform scale-x-[-1]"
      /> */}

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 uppercase">
          Why Choose Us
        </h2> */}
        <Title>
          QUALITY AND PURITY IS GUARANTEED
        </Title>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 lg:gap-4 mb-12">
                    {features.map((feature, index) => {
                      return (
                        <div key={index} className="flex flex-col items-center text-center group">
                          {/* Image Circle */}
                          <div
                            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-3 sm:mb-4 
                                      transition-colors duration-300 group 
                                      bg-[#82a133] hover:bg-white 
                                      border-2 border-transparent hover:border-[#82a133] p-3 sm:p-4"
                          >
                          <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                              <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                              />
                            </div>
                          </div>
        
                          {/* Title */}
                          <div className="text-xs sm:text-sm font-medium text-gray-800 tracking-wider uppercase mb-2 px-1">
                            {feature.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
         
      </div>
    </section>
  )
}

export default Guarantee