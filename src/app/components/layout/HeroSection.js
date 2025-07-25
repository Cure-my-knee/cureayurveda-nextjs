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

// 'use client';
// import React, { useState, useEffect } from 'react';
// import Button from '../ui/Button';
// import { useRouter } from 'next/navigation';

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const router = useRouter();
  

//   const banners = [
//     {
//       id: 1,
//       // backgroundImage: "/images/banner/herobannernew4.png",
//        backgroundImage: "/images/banner/herobanner1.jpg",
      
//       subtitle: "Ayurvedic Joint Care",
//       description: "Enhance the strength of your Bones & Muscles naturally with the blend of Herbal Wisdom.",
//       buttonText: "Browse Remedies",
//       buttonLink: "shop"
//     },
//     {
//       id: 2,
//       // backgroundImage: "/images/banner/banner3.jpg",
//        backgroundImage: "/images/banner/herobanner2.jpg",
//       subtitle: "Ayurvedic and Healthy Sugar Management",
//       description: "Natural way to balance Sugar Level that helps to control your diabetes with Potent Herbs!",
//       buttonText: "Explore Products",
//       buttonLink: "shop"
//     },
//     {
//       id: 3,
//       backgroundImage: "/images/banner/herobanner3.jpg",
      
//       subtitle: "Ayurvedic Shilajit",
//       description: "Enhances your Energy Level with Anti-oxidant Properties !",
//       buttonText: "Browse Remedies",
//       buttonLink: "shop"
//     }
//   ];

//   useEffect(() => {
//     let timer;

//     const handleScroll = () => {
//       clearInterval(timer);
//     };

//     setIsVisible(true);
//     timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % banners.length);
//     }, 5000);

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       clearInterval(timer);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section id="hero-section" className="relative h-[90vh] sm:h-screen overflow-hidden">

//       {/* Slides */}
//       <div className="relative w-full h-full">
//         {banners.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 will-change-opacity ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{
//               backgroundImage: `url('${banner.backgroundImage}')`
//             }}
//           >
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-opacity-40 pointer-events-none z-0" />

//             {/* Slide Content */}
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
                    
//                     <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90">
//                       {banner.description}
//                     </p>
//                     <Button onClick={() => router.push('/shop')} className="font-semibold transform hover:scale-105 hover:shadow-lg text-sm">
//                       {banner.buttonText}
//                     </Button>
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


// 'use client';
// import React, { useState, useEffect } from 'react';
// import Button from '../ui/Button';
// import { useRouter } from 'next/navigation';

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const router = useRouter();
  
//   const banners = [
//     {
//       id: 1,
//       backgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753185541/d_Vedic_Flx_bhybok.jpg",
//       mobileBackgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753251081/d_Vedic_Flx_2_ecv3ew.jpg",  
//       subtitle: "Ayurvedic Joint Care",
//       description: "Enhance the strength of your Bones & Muscles naturally with the blend of Herbal Wisdom.",
//       buttonText: "Explore Products",
//       buttonLink: "shop"
//     },
//     {
//       id: 2,
//       backgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753188799/sdgvdf_euoghr.jpg",
//       mobileBackgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753175819/Banner-Web-2_fw4cd4.jpg", // Add mobile version
//       subtitle: "Ayurvedic and Healthy Sugar Management",
//       description: "Natural way to balance Sugar Level that helps to control your diabetes with Potent Herbs !",
//       buttonText: "Explore Products",
//       buttonLink: "shop"
//     },
//     {
//       id: 3,
//       backgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753194937/Shilajit_rrkzyw.jpg",
//       mobileBackgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753207131/Shilajit_mobile_jchadu.jpg", // Add mobile version
//       subtitle: "Ayurvedic Shilajit",
//       description: "Cure Ayurvedic’s Vedic Shilajit is a concentrated ayurvedic formula that helps to boost power and energy and keeps you strong and focussed.",
//       buttonText: "Explore Products",
//       buttonLink: "shop"
//     }
//   ];

//   useEffect(() => {
//     let timer;

//     // Check if device is mobile
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <  1024);  
//     };

//     // Initial check
//     checkMobile();

//     // Listen for window resize
//     window.addEventListener('resize', checkMobile);

//     const handleScroll = () => {
//       clearInterval(timer);
//     };

//     setIsVisible(true);
//     timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % banners.length);
//     }, 5000);

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       clearInterval(timer);
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', checkMobile);
//     };
//   }, []);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section id="hero-section" className="relative h-[90vh] sm:h-screen overflow-hidden mt-12">
//       {/* Slides */}
//       <div className="relative w-full h-full">
//         {banners.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 will-change-opacity ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{
//               backgroundImage: `url('${isMobile ? banner.mobileBackgroundImage : banner.backgroundImage}')`,
//               backgroundPosition: 'center center',
//               backgroundSize: 'cover',
//               backgroundRepeat: 'no-repeat'
//             }}
//           >
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-opacity-40 pointer-events-none z-0" />
            
//             {/* Slide Content */}
//             {/* <div className="relative z-10 flex items-center h-full">
//               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-xl text-white">
//                   <div className={`transform transition-all text-center duration-1000 ${
//                     isVisible && index === currentSlide
//                       ? 'translate-x-0 opacity-100'
//                       : '-translate-x-10 opacity-0'
//                   }`}>
//                   <div className="hidden sm:block text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 text-[#586e20] drop-shadow-lg">
//                   {banner.subtitle}
//                 </div>


                

                    
                    

//                     <div className="hidden sm:block text-center sm:text-lg md:text-xl lg:text-2xl mb-6 opacity-90 leading-relaxed text-black drop-shadow-md">
//                     {banner.description}
//                   </div>

                    
//                     <Button 
//                       onClick={() => router.push('/shop')} 
//                       className="hidden sm:inline-block  font-semibold transform hover:scale-105 hover:shadow-lg text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3"
//                     >
//                       {banner.buttonText}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//         <div className="relative z-10 flex h-full px-4 sm:px-8">
          
//           <div
//             className="flex flex-col justify-start sm:justify-start text-center max-w-2xl w-full transition-all duration-1000 mt-8 sm:mt-24 pt-10 sm:pt-0 mx-auto sm:mx-0 sm:ml-0 lg:ml-12"
//             style={{
//               transform:
//                 isVisible && index === currentSlide
//                   ? `translateY(${isMobile ? '80px' : '60px'})`
//                   : 'translateY(20px)',
//               opacity: isVisible && index === currentSlide ? 1 : 0,
//             }}
//           >
//             <div className='text-start'>
//               <div className="text-start text-xl sm:text-3xl md:text-4xl   mb-2 text-[#586e20] drop-shadow-lg">
//                 {banner.subtitle}
//               </div>

//               <div className="text-start text-sm sm:text-lg md:text-xl mb-4 leading-relaxed text-black drop-shadow-md">
//                 {banner.description}
//               </div>

//               <Button
//                 onClick={() => router.push('/shop')}
//                 className="inline-block  transform hover:scale-105 hover:shadow-lg text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3 bg-[#586e20] text-white"
//               >
//                 {banner.buttonText}
//               </Button>
//             </div>
//           </div>
//         </div>



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


// old code 23/07  
 


'use client';
import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isIpadPro, setIsIpadPro] = useState(false);
  const router = useRouter();
  
  const banners = [
    {
      id: 1,
      backgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753185541/d_Vedic_Flx_bhybok.jpg",
      tabletBackgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753256606/ipad_swbho7.jpg",
      mobileBackgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753364792/d_Vedic_Flx_4_clbgpb.jpg",  
      subtitle: "Ayurvedic Joint Care",
      description: "Enhance the strength of your Bones & Muscles naturally with the blend of Herbal Wisdom.",
      buttonText: "Explore Products",
      buttonLink: "shop"
    },
    {
      id: 2,
      backgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753188799/sdgvdf_euoghr.jpg",
      tabletBackgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753256606/ipad_3_lb6ybf.jpg",
      mobileBackgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753175819/Banner-Web-2_fw4cd4.jpg",
      subtitle: "Ayurvedic and Healthy Sugar Management",
      description: "Natural way to balance Sugar Level that helps to control your diabetes with Potent Herbs !",
      buttonText: "Explore Products",
      buttonLink: "shop"
    },
    {
      id: 3,
      backgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753437396/jbgjj3_szougp.jpg",
      tabletBackgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753437313/Shilajit_tab_qlsv3s.jpg",
      mobileBackgroundImage: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753437299/Shilajit_mobile_j5xhrv.jpg",
      subtitle: "Ayurvedic Shilajit",
      description: "Cure Ayurvedic's Vedic Shilajit is a concentrated ayurvedic formula that helps to boost power and energy and keeps you strong and focussed.",
      buttonText: "Explore Products",
      buttonLink: "shop"
    }
  ];

  // Function to get the appropriate background image based on screen size
  const getBackgroundImage = (banner) => {
    if (isMobile) {
      return banner.mobileBackgroundImage;
    } else if (isTablet || isIpadPro) {
      return banner.tabletBackgroundImage;
    } else {
      return banner.backgroundImage;
    }
  };

  // Function to get background size based on device
  const getBackgroundSize = () => {
    if (isIpadPro) {
      return 'cover'; // or 'contain' if you want to see the full image
    }
    return 'cover';
  };

  // Function to get background position based on device
  const getBackgroundPosition = () => {
    if (isIpadPro) {
      return 'center center'; // Adjust this as needed
    }
    return 'center center';
  };

  useEffect(() => {
    let timer;

    // Check device type based on screen width and height
    const checkDeviceType = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // iPad Pro detection (both orientations)
      const isIpadProPortrait = width === 1024 && height === 1366;
      const isIpadProLandscape = width === 1366 && height === 1024;
      const isIpadPro12Portrait = width === 1024 && height === 1366;
      const isIpadPro12Landscape = width === 1366 && height === 1024;
      const isIpadPro11Portrait = width === 834 && height === 1194;
      const isIpadPro11Landscape = width === 1194 && height === 834;
      
      setIsIpadPro(
        isIpadProPortrait || 
        isIpadProLandscape || 
        isIpadPro12Portrait || 
        isIpadPro12Landscape ||
        isIpadPro11Portrait ||
        isIpadPro11Landscape ||
        (width >= 1024 && width <= 1366 && height >= 834 && height <= 1366)
      );
      
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024 && !isIpadPro);
    };

    // Initial check
    checkDeviceType();

    // Listen for window resize
    window.addEventListener('resize', checkDeviceType);

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
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="hero-section" className="relative h-[90vh] sm:h-screen overflow-hidden mt-12">
      {/* Slides */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 will-change-opacity ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${getBackgroundImage(banner)}')`,
              backgroundPosition: getBackgroundPosition(),
              backgroundSize: getBackgroundSize(),
              backgroundRepeat: 'no-repeat',
              // Add specific styles for iPad Pro
              ...(isIpadPro && {
                backgroundAttachment: 'scroll',
                minHeight: '100vh',
              })
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-opacity-40 pointer-events-none z-0" />
            
            {/* Slide Content */}
            {/* <div className="relative z-10 flex h-full px-4 sm:px-8 "> */}
            <div className="relative z-10 flex h-full px-4 sm:px-8 mt-4 pt-6 sm:pt-0">

              <div
                className={`flex flex-col justify-start sm:justify-start text-center max-w-2xl w-full transition-all duration-1000 mx-auto sm:mx-0 sm:ml-0 lg:ml-12 ${
                  isIpadPro ? 'mt-16 pt-8' : 'mt-8 sm:mt-24 pt-10 sm:pt-0'
                }`}
                style={{
                  transform:
                    isVisible && index === currentSlide
                      ? `translateY(${isMobile ? '80px' : isIpadPro ? '100px' : '60px'})`
                      : 'translateY(20px)',
                  opacity: isVisible && index === currentSlide ? 1 : 0,
                }}
              >
                <div className='text-start'>
                  <div className={`text-start mb-2 text-[#586e20] drop-shadow-lg ${
                    isIpadPro ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl sm:text-3xl md:text-4xl'
                  }`}>
                    {banner.subtitle}
                  </div>

                  <div className={`text-start mb-4 leading-relaxed text-black drop-shadow-md ${
                    isIpadPro ? 'text-base md:text-lg lg:text-xl' : 'text-sm sm:text-lg md:text-xl'
                  }`}>
                    {banner.description}
                  </div>

                  <Button
                    onClick={() => router.push('/shop')}
                    className={`inline-block transform hover:scale-105 hover:shadow-lg bg-[#586e20] text-white ${
                      isIpadPro ? 'text-sm md:text-base px-5 py-3' : 'text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3'
                    }`}
                  >
                    {banner.buttonText}
                  </Button>
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