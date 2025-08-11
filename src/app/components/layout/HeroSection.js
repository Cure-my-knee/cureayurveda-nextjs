// 'use client';
// import React, { useState, useEffect } from 'react';
// import Button from '../ui/Button';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const [isIpadPro, setIsIpadPro] = useState(false);
//   const router = useRouter();
  
//   const banners = [
//     {
//       id: 1,
//       backgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466254/Herobannerdesktop1_t3mhpd.jpg",
//       tabletBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466253/Herobannertab1_el4zao.jpg",
//       mobileBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466253/Herobannermobile1_iiw05u.jpg",  
//       subtitle: "Ayurvedic Joint Care",
//       description: "Enhance the strength of your Bones & Muscles naturally with the blend of Herbal Wisdom.",
//       buttonText: "Explore Products",
//       buttonLink: "shop"
//     },
//     {
//       id: 2,
//       backgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466253/Herobannerdesktop2_oxk5vl.jpg",
//       tabletBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466252/Herobannertab2_mfagvy.jpg",
//       mobileBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466252/Herobannermobile2_mrwdbq.jpg",
//       subtitle: "Ayurvedic and Healthy Sugar Management",
//       description: "Natural way to balance Sugar Level that helps to control your diabetes with Potent Herbs !",
//       buttonText: "Explore Products",
//       buttonLink: "shop"
//     },
//     {
//       id: 3,
//       backgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466253/Herbannerdesktop3_sjrnfg.jpg",
//       tabletBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466252/Herobannertab3_j5mk2w.jpg",
//       mobileBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466252/Herobannermobile3_nmcq7h.jpg",
//       subtitle: "Ayurvedic Shilajit",
//       description: "Cure Ayurvedic's Vedic Shilajit is a concentrated ayurvedic formula that helps to boost power and energy and keeps you strong and focussed.",
//       buttonText: "Explore Products",
//       buttonLink: "shop"
//     }
//   ];

//   // Function to get the appropriate background image based on screen size
//   const getBackgroundImage = (banner) => {
//     if (isMobile) {
//       return banner.mobileBackgroundImage;
//     } else if (isTablet || isIpadPro) {
//       return banner.tabletBackgroundImage;
//     } else {
//       return banner.backgroundImage;
//     }
//   };

//   // Function to get background size based on device
//   const getBackgroundSize = () => {
//     if (isIpadPro) {
//       return 'cover'; // or 'contain' if you want to see the full image
//     }
//     return 'cover';
//   };

//   // Function to get background position based on device
//   const getBackgroundPosition = () => {
//     if (isIpadPro) {
//       return 'center center'; // Adjust this as needed
//     }
//     return 'center center';
//   };

//   useEffect(() => {
//     let timer;

//     // Check device type based on screen width and height
//     const checkDeviceType = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
      
//       // iPad Pro detection (both orientations)
//       const isIpadProPortrait = width === 1024 && height === 1366;
//       const isIpadProLandscape = width === 1366 && height === 1024;
//       const isIpadPro12Portrait = width === 1024 && height === 1366;
//       const isIpadPro12Landscape = width === 1366 && height === 1024;
//       const isIpadPro11Portrait = width === 834 && height === 1194;
//       const isIpadPro11Landscape = width === 1194 && height === 834;
      
//       setIsIpadPro(
//         isIpadProPortrait || 
//         isIpadProLandscape || 
//         isIpadPro12Portrait || 
//         isIpadPro12Landscape ||
//         isIpadPro11Portrait ||
//         isIpadPro11Landscape ||
//         (width >= 1024 && width <= 1366 && height >= 834 && height <= 1366)
//       );
      
//       setIsMobile(width < 768);
//       setIsTablet(width >= 768 && width < 1024 && !isIpadPro);
//     };

//     // Initial check
//     checkDeviceType();

//     // Listen for window resize
//     window.addEventListener('resize', checkDeviceType);

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
//       window.removeEventListener('resize', checkDeviceType);
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
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 will-change-opacity ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{
//               backgroundImage: `url('${getBackgroundImage(banner)}')`,
//               backgroundPosition: getBackgroundPosition(),
//               backgroundSize: getBackgroundSize(),
//               backgroundRepeat: 'no-repeat',
//               // Add specific styles for iPad Pro
//               ...(isIpadPro && {
//                 backgroundAttachment: 'scroll',
//                 minHeight: '100vh',
//               })
//             }}
//           >
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-opacity-40 pointer-events-none z-0" />
            
//             {/* Slide Content */}
//             {/* <div className="relative z-10 flex h-full px-4 sm:px-8 "> */}
//             <div className="relative z-10 flex h-full px-4 sm:px-8 mt-4 pt-6 sm:pt-0">

//               <div
//                 className={`flex flex-col justify-start sm:justify-start text-center max-w-2xl w-full transition-all duration-1000 mx-auto sm:mx-0 sm:ml-0 lg:ml-12 ${
//                   isIpadPro ? 'mt-16 pt-8' : 'mt-8 sm:mt-24 pt-10 sm:pt-0'
//                 }`}
//                 style={{
//                   transform:
//                     isVisible && index === currentSlide
//                       ? `translateY(${isMobile ? '80px' : isIpadPro ? '100px' : '60px'})`
//                       : 'translateY(20px)',
//                   opacity: isVisible && index === currentSlide ? 1 : 0,
//                 }}
//               >
//                 <div className='text-start'>
//                   <div className={`text-start mb-2 text-[#586e20] drop-shadow-lg ${
//                     isIpadPro ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl sm:text-3xl md:text-4xl'
//                   }`}>
//                     {banner.subtitle}
//                   </div>

//                   <div className={`text-start mb-4 leading-relaxed text-black drop-shadow-md ${
//                     isIpadPro ? 'text-base md:text-lg lg:text-xl' : 'text-sm sm:text-lg md:text-xl'
//                   }`}>
//                     {banner.description}
//                   </div>

//                   <Button
//                     onClick={() => router.push('/shop')}
//                     className={`inline-block transform hover:scale-105 hover:shadow-lg bg-[#586e20] text-white ${
//                       isIpadPro ? 'text-sm md:text-base px-5 py-3' : 'text-xs sm:text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3'
//                     }`}
//                   >
//                     {banner.buttonText}
//                   </Button>
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
import Image from 'next/image';

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
      backgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466254/Herobannerdesktop1_t3mhpd.jpg",
      tabletBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466253/Herobannertab1_el4zao.jpg",
      mobileBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466253/Herobannermobile1_iiw05u.jpg",  
      subtitle: "Ayurvedic Joint Care",
      description: "Enhance the strength of your Bones & Muscles naturally with the blend of Herbal Wisdom.",
      buttonText: "Explore Products",
      buttonLink: "shop"
    },
    {
      id: 2,
      backgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466253/Herobannerdesktop2_oxk5vl.jpg",
      tabletBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466252/Herobannertab2_mfagvy.jpg",
      mobileBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466252/Herobannermobile2_mrwdbq.jpg",
      subtitle: "Ayurvedic and Healthy Sugar Management",
      description: "Natural way to balance Sugar Level that helps to control your diabetes with Potent Herbs !",
      buttonText: "Explore Products",
      buttonLink: "shop"
    },
    {
      id: 3,
      backgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466253/Herbannerdesktop3_sjrnfg.jpg",
      tabletBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466252/Herobannertab3_j5mk2w.jpg",
      mobileBackgroundImage: "https://res.cloudinary.com/dzoezcqqc/image/upload/v1754466252/Herobannermobile3_nmcq7h.jpg",
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
            >
           

              <Image
                 src={isMobile ? banner.mobileBackgroundImage : isTablet ? banner.tabletBackgroundImage : banner.backgroundImage}
                alt={banner.subtitle}
                fill
                sizes="100vw"
                priority={index === 0} // Only first slide is priority
                quality={80}
                //  placeholder="blur"
                //  blurDataURL="/placeholder.jpg" 
                className="object-cover"
              />

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
                    className={`inline-block transform hover:scale-105 hover:shadow-lg bg-[#586e20] text-white cursor-pointer ${
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