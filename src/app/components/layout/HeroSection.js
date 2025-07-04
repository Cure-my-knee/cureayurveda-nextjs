//  'use client'
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Button from '../ui/Button';

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   const banners = [
//     {
//       id: 1,
//       backgroundImage: "/images/banner/banner5.jpg",
//       title: "Authentic Ayurvedic Wellness",
//       subtitle: "Rooted in Nature, Powered by Tradition",
//       description: "Revitalize your body and mind with our carefully curated Ayurvedic medicines made from 100% natural herbs.",
//       buttonText: "Browse Remedies",
//       buttonLink: "#products"
//     },
//     {
//       id: 2,
//       backgroundImage: "/images/banner/banner3.jpg",
//       title: "Pure Herbal Formulations",
//       subtitle: "Inspired by Ancient Healing",
//       description: "Our products are crafted to balance your doshas and restore holistic health—naturally and safely.",
//       buttonText: "Explore Products",
//       buttonLink: "#collection"
//     },
//     {
//       id: 3,
//       backgroundImage: "https://keralaayurveda.biz/cdn/shop/files/Carousel-_Desktop_Banner-_Legacy_Banner_converted.webp?v=1741770831&width=1500",
//       title: "Authentic Ayurvedic Wellness",
//       subtitle: "Rooted in Nature, Powered by Tradition",
//       description: "Revitalize your body and mind with our carefully curated Ayurvedic medicines made from 100% natural herbs.",
//       buttonText: "Browse Remedies",
//       buttonLink: "#products"
//     }
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % banners.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section className="relative h-[90vh] sm:h-screen overflow-hidden">
//       <div className="relative w-full h-full">
//         {banners.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{
//               backgroundImage: `url('${banner.backgroundImage}')`
//             }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0   bg-opacity-40 z-0" />

//             {/* Content */}
//             <div className="relative z-10 flex items-center h-full">
//               <div className="container mx-auto px-4 lg:px-8">
//                 <div className="max-w-xl text-white">
//                   <div className={`transform transition-all duration-1000 ${
//                     isVisible && index === currentSlide 
//                       ? 'translate-x-0 opacity-100' 
//                       : '-translate-x-10 opacity-0'
//                   }`}>
//                     <h3 className="text-base sm:text-lg font-medium mb-2 text-green-300">
//                       {banner.subtitle}
//                     </h3>
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
//                       {banner.title}
//                     </h1>
//                     <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90">
//                       {banner.description}
//                     </p>
//                      <Button href={banner.buttonLink} className="font-semibold transform hover:scale-105 hover:shadow-lg text-sm">
//                 {banner.buttonText}
//               </Button>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="flex space-x-3">
//           {banners.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide 
//                   ? 'bg-white scale-110' 
//                   : 'bg-white bg-opacity-50 hover:bg-opacity-75'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  

  const banners = [
    {
      id: 1,
      backgroundImage: "/images/banner/herobannernew4.png",
      
      subtitle: "Ayurvedic Joint Care",
      description: "Enhance the strength of your Bones & Muscles naturally with the blend of Herbal Wisdom.",
      buttonText: "Browse Remedies",
      buttonLink: "shop"
    },
    {
      id: 2,
      backgroundImage: "/images/banner/banner3.jpg",
      
      subtitle: "Ayurvedic and Healthy Sugar Management",
      description: "Natural way to balance Sugar Level that helps to control your diabetes with Potent Herbs!",
      buttonText: "Explore Products",
      buttonLink: "shop"
    },
    {
      id: 3,
      backgroundImage: "/images/banner/herobannernew3.png",
      
      subtitle: "Ayurvedic Shilajit",
      description: "Enhances your Energy Level with Anti-oxidant Properties !",
      buttonText: "Browse Remedies",
      buttonLink: "shop"
    }
  ];

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      clearInterval(timer);
    };

    setIsVisible(true);
    timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="hero-section" className="relative h-[90vh] sm:h-screen overflow-hidden">

      {/* Slides */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 will-change-opacity ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${banner.backgroundImage}')`
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-opacity-40 pointer-events-none z-0" />

            {/* Slide Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-xl text-white">
                  <div className={`transform transition-all duration-1000 ${
                    isVisible && index === currentSlide 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-10 opacity-0'
                  }`}>
                    <h3 className="text-base sm:text-lg font-medium mb-2 text-green-300">
                      {banner.subtitle}
                    </h3>
                    
                    <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90">
                      {banner.description}
                    </p>
                    <Button onClick={() => router.push('/shop')} className="font-semibold transform hover:scale-105 hover:shadow-lg text-sm">
                      {banner.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
