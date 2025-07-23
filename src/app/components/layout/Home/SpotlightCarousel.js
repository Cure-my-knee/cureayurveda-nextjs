//  'use client'
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Title from '../../ui/Title';
// import { useRouter } from 'next/navigation';


// const SpotlightCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     setIsMounted(true); // Ensures the component only renders on the client
//   }, []);

//   if (!isMounted) return null; // Prevent SSR rendering mismatch

//   const slides = [
//      {
//       id: 1,
//       video: "https://videos.pexels.com/video-files/6674535/6674535-hd_1920_1080_30fps.mp4",
//       title: "Amla pericarp extract",
//       subtitle: "Ancient Berry, Modern Sugar Support",
//       buttonText: "Explore More"
//     },
//     {
//       id: 2,
//       video: "https://video-previews.elements.envatousercontent.com/56fda08d-a3e2-4d4e-80e8-4109835f2181/watermarked_preview/watermarked_preview.mp4",
//       title: "ShilajitExtract",
//       subtitle: "Unleash Ancient Energy With Shilajit",
//       buttonText: "Shop Now"
//     },
    
//     {
//       id: 3,
//       video: "https://video-previews.elements.envatousercontent.com/files/43a47c22-24ad-4e7a-8948-2d6017a6ede3/video_preview_h264.mp4",
//       title: "Go-ghruta",
//       subtitle: "Revitalize with the Power of Desi Cow Ghee",
//       buttonText: "View Products"
//     },
//     {
//       id: 4,
//       video: "https://video-previews.elements.envatousercontent.com/h264-video-previews/8649d21b-fba0-43cc-8d8b-957772000cd9/1138346.mp4",
//       title: "Jambu fruit",
//       subtitle: "A Herbal Remedy to Support Healthy Sugar Level",
//       buttonText: "View Products"
//     },
//     {
//       id: 5,
//       video: "https://videos.pexels.com/video-files/5480217/5480217-uhd_2560_1440_25fps.mp4",
//       title: "Khatika powder",
//       subtitle: "Naturally Restore Bone Density & Vitality",
//       buttonText: "Shop Now"
//     },
//     {
//       id: 6,
//       video: "https://video-previews.elements.envatousercontent.com/b6e2813c-df87-4976-8666-d0506441eed2/watermarked_preview/watermarked_preview.mp4",
//       title: "Nirgundi oil",
//       subtitle: "Anti-Inflammatory Herbal Support for Long-Term Relief",
//       buttonText: "Shop Now"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const getSlidePosition = (index) => {
//     const diff = index - currentSlide;
//     if (diff === 0) return 'translate-x-0 scale-110 z-30 opacity-100';
//     if (diff === 1 || (diff === -(slides.length - 1))) return 'translate-x-32 md:translate-x-48 lg:translate-x-64 scale-90 z-20 opacity-80';
//     if (diff === -1 || (diff === slides.length - 1)) return '-translate-x-32 md:-translate-x-48 lg:-translate-x-64 scale-90 z-20 opacity-80';
//     if (diff === 2 || (diff === -(slides.length - 2))) return 'translate-x-48 md:translate-x-72 lg:translate-x-96 scale-75 z-10 opacity-60';
//     if (diff === -2 || (diff === slides.length - 2)) return '-translate-x-48 md:-translate-x-72 lg:-translate-x-96 scale-75 z-10 opacity-60';
//     return 'translate-x-96 scale-50 z-0 opacity-0';
//   };

//   return (
    

     
//     <div className="relative py-16 px-4 sm:px-6 lg:px-16 overflow-hidden bg-center bg-cover"
//       >
//       <div className="container mx-auto px-4">
//         {/* Title */}
//         {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center text-gray-800 mb-8 md:mb-16">
//           In the Spotlight
//         </h2> */}
//         <Title>
//           In the Spotlight
//         </Title>

//         {/* Carousel Container */}
//         <div className="relative flex justify-center items-center h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 md:left-8 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
//           >
//             <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-4 md:right-8 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
//           >
//             <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
//           </button>

//           {/* Slides */}
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute transition-all duration-500 ease-in-out ${getSlidePosition(index)}`}
//             >
//               <div className="relative w-48 h-72 md:w-64 md:h-96 lg:w-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
//                 {/* Background Video */}
//                 <video
//                   className="absolute inset-0 w-full h-full object-fill"
//                   src={slide.video}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 lg:p-8">
//                   <div> </div>
//                   <div>
//                     <h3 style={{color: 'white'}} className="text-2xl  md:text-3xl lg:text-4xl font-light mb-1 md:mb-2 drop-shadow-md ">
//                       {slide.title}
//                     </h3>
//                     <p style={{color: 'white'}} className="text-sm  md:text-base lg:text-lg font-light mb-4 md:mb-6 opacity-90 drop-shadow-md">
//                       {slide.subtitle}
//                     </p>
//                     <button   onClick={() => router.push('/shop')} className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full py-2 md:py-3 px-4 md:px-6 text-sm md:text-base font-light transition-all duration-300 hover:scale-105">
//                       {slide.buttonText}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center mt-8 md:mt-12 space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? 'bg-[#586e20] scale-125'
//                   : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
     
//   );
// };

// export default SpotlightCarousel;


//  'use client'
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Title from '../../ui/Title';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';


// const SpotlightCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     setIsMounted(true); // Ensures the component only renders on the client
//   }, []);

//   if (!isMounted) return null; // Prevent SSR rendering mismatch

//   const slides = [
//      {
//       id: 1,
//       image:"https://res.cloudinary.com/dztmhmutv/image/upload/v1752579008/berries-green-gooseberry_oqaid7.jpg",
//       // video: "https://videos.pexels.com/video-files/6674535/6674535-hd_1920_1080_30fps.mp4",
//       title: "Amla Pericarp Extract",
//       subtitle: "Ancient Berry, Modern Sugar Support",
//       buttonText: "Explore More"
//     },
//     {
//       id: 2,
//        image:"https://res.cloudinary.com/dztmhmutv/image/upload/v1752580730/abstract-still-life-with-charcoal-close-up_1_-min_mcomkr.jpg",
//       title: "ShilajitExtract",
//       subtitle: "Unleash Ancient Energy With Shilajit",
//       buttonText: "Shop Now"
//     },
    
//     {
//       id: 3,
//        image:"https://res.cloudinary.com/dztmhmutv/image/upload/v1753105640/high-angle-delicious-food-children-jar_11zon_liv7tu.jpg",
//       title: "Go-Ghruta",
//       subtitle: "Revitalize with the Power of Desi Cow Ghee",
//       buttonText: "View Products"
//     },
//     {
//       id: 4,
//         image:"https://res.cloudinary.com/dztmhmutv/image/upload/v1753092833/vertical-view-black-fresh-grapes-small-pots_bzff9y.jpg",
//       title: "Jambu Fruit",
//       subtitle: "A Herbal Remedy to Support Healthy Sugar Level",
//       buttonText: "View Products"
//     },
//     {
//       id: 5,
//        image:"https://res.cloudinary.com/dztmhmutv/image/upload/v1753105354/freepik__the-style-is-candid-image-photography-with-natural__55725_aehto3.png",
//       title: "Khatika Powder",
//       subtitle: "Naturally Restore Bone Density & Vitality",
//       buttonText: "Shop Now"
//     },
//     {
//       id: 6,
//         image:"https://res.cloudinary.com/dztmhmutv/image/upload/v1753105353/pexels-pnw-prod-8490100_oc4nvb.jpg",
//       title: "Nirgundi Oil",
//       subtitle: "Anti-Inflammatory Herbal Support for Long-Term Relief",
//       buttonText: "Shop Now"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const getSlidePosition = (index) => {
//     const diff = index - currentSlide;
//     if (diff === 0) return 'translate-x-0 scale-110 z-30 opacity-100';
//     if (diff === 1 || (diff === -(slides.length - 1))) return 'translate-x-32 md:translate-x-48 lg:translate-x-64 scale-90 z-20 opacity-80';
//     if (diff === -1 || (diff === slides.length - 1)) return '-translate-x-32 md:-translate-x-48 lg:-translate-x-64 scale-90 z-20 opacity-80';
//     if (diff === 2 || (diff === -(slides.length - 2))) return 'translate-x-48 md:translate-x-72 lg:translate-x-96 scale-75 z-10 opacity-60';
//     if (diff === -2 || (diff === slides.length - 2)) return '-translate-x-48 md:-translate-x-72 lg:-translate-x-96 scale-75 z-10 opacity-60';
//     return 'translate-x-96 scale-50 z-0 opacity-0';
//   };

//   return (
    

     
//     <div className="relative bg-[#EDF1E1] py-16 px-4 sm:px-6 lg:px-16 overflow-hidden bg-center bg-cover"
//       >
//       <div className="container mx-auto px-4">
//         {/* Title */}
//         {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center text-gray-800 mb-8 md:mb-16">
//           In the Spotlight
//         </h2> */}
//         <Title>
//           In the Spotlight
//         </Title>

//         {/* Carousel Container */}
//         <div className="relative flex justify-center items-center h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 md:left-8 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
//           >
//             <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-4 md:right-8 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
//           >
//             <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
//           </button>

//           {/* Slides */}
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute transition-all duration-500 ease-in-out ${getSlidePosition(index)}`}
//             >
//              <div className="relative w-48 h-72 md:w-64 md:h-96 lg:w-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
//               {/* Background Image */}
//               {slide.image && (
//                 <Image
//                   src={slide.image}
//                   alt={slide.title}
//                   fill // this makes the image fill the parent container
//                   className="object-fill"
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                 />
//               )}

//               {/* Gradient Overlay */}
//   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 lg:p-8">
//                   <div> </div>
//                   <div>
//                     <h3 style={{color: 'white'}} className="text-2xl  md:text-3xl lg:text-4xl font-light mb-1 md:mb-2 drop-shadow-md ">
//                       {slide.title}
//                     </h3>
//                     <p style={{color: 'white'}} className="text-sm  md:text-base lg:text-lg font-light mb-4 md:mb-6 opacity-90 drop-shadow-md">
//                       {slide.subtitle}
//                     </p>
//                     <button   onClick={() => router.push('/shop')} className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full py-2 md:py-3 px-4 md:px-6 text-sm md:text-base font-light transition-all duration-300 hover:scale-105">
//                       {slide.buttonText}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center mt-8 md:mt-12 space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? 'bg-[#586e20] scale-125'
//                   : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
     
//   );
// };

// export default SpotlightCarousel;
  


// 'use client'
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useRouter } from 'next/navigation';


// const Title = ({ children }) => (
//   <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800">
//     {children}
//   </h2>
// );

// const SpotlightCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);
//     const router = useRouter(); 

//      useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const handleShopClick = () => {
//     router.push('/shop'); // ← Navigate to /products
//   };

  

//   if (!isMounted) return null;

//   const slides = [
//     {
//       id: 1,
//       image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1752579008/berries-green-gooseberry_oqaid7.jpg",
//       title: "Amla Pericarp Extract",
//       subtitle: "Ancient Berry, Modern Sugar Support",
//       buttonText: "View Products"
//     },
//     {
//       id: 2,
//       image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1752580730/abstract-still-life-with-charcoal-close-up_1_-min_mcomkr.jpg",
//       title: "Shilajit Extract",
//       subtitle: "Unleash Ancient Energy With Shilajit",
//       buttonText: "View Products"
//     },
//     {
//       id: 3,
//       image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1752580943/ghee-clarified-butter-jar-wooden-table-ai-generative-min_1_nqmeia.jpg",
//       title: "Go-Ghruta",
//       subtitle: "Revitalize with the Power of Desi Cow Ghee",
//       buttonText: "View Products"
//     },
//     {
//       id: 4,
//       image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753092833/vertical-view-black-fresh-grapes-small-pots_bzff9y.jpg",
//       title: "Jambu Fruit",
//       subtitle: "A Herbal Remedy to Support Healthy Sugar Level",
//       buttonText: "View Products"
//     },
//     {
//       id: 5,
//       image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753105354/freepik__the-style-is-candid-image-photography-with-natural__55725_aehto3.png",
//       title: "Khatika Powder",
//       subtitle: "Naturally Restore Bone Density & Vitality",
//       buttonText: "View Products"
//     },
//     {
//       id: 6,
//       image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/nirgundi-side-effects.jpg",
//       title: "Nirgundi Oil",
//       subtitle: "Anti-Inflammatory Herbal Support for Long-Term Relief",
//       buttonText: "View Products"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const getSlidePosition = (index) => {
//     const diff = index - currentSlide;
//     if (diff === 0) return 'translate-x-0 scale-100 sm:scale-110 z-30 opacity-100';
//     if (diff === 1 || (diff === -(slides.length - 1))) return 'translate-x-24 sm:translate-x-32 md:translate-x-48 lg:translate-x-64 scale-75 sm:scale-90 z-20 opacity-70 sm:opacity-80';
//     if (diff === -1 || (diff === slides.length - 1)) return '-translate-x-24 sm:-translate-x-32 md:-translate-x-48 lg:-translate-x-64 scale-75 sm:scale-90 z-20 opacity-70 sm:opacity-80';
//     if (diff === 2 || (diff === -(slides.length - 2))) return 'translate-x-36 sm:translate-x-48 md:translate-x-72 lg:translate-x-96 scale-50 sm:scale-75 z-10 opacity-40 sm:opacity-60';
//     if (diff === -2 || (diff === slides.length - 2)) return '-translate-x-36 sm:-translate-x-48 md:-translate-x-72 lg:-translate-x-96 scale-50 sm:scale-75 z-10 opacity-40 sm:opacity-60';
//     return 'translate-x-48 sm:translate-x-96 scale-25 sm:scale-50 z-0 opacity-0';
//   };

//   // const handleShopClick = () => {
//   //   alert('Navigate to /shop');
//   // };

//   return (
//     <div className="relative bg-[#EDF1E1] py-6 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 lg:px-16 overflow-hidden">
//       <div className="container mx-auto px-2 sm:px-4">
//         <Title>
//           In the Spotlight
//         </Title>

//         {/* Carousel Container */}
//         <div className="relative flex justify-center items-center h-[420px] sm:h-96 md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-1 sm:left-2 md:left-4 lg:left-8 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
//           >
//             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-1 sm:right-2 md:right-4 lg:right-8 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
//           >
//             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
//           </button>

//           {/* Slides */}
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`absolute transition-all duration-500 ease-in-out ${getSlidePosition(index)}`}
//             >
//               <div className="relative w-60 h-[380px] sm:w-52 sm:h-80 md:w-64 md:h-96 lg:w-72 lg:h-[420px] xl:w-80 xl:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white">
                
//                 {/* Image Section - 60% */}
//                 <div className="relative h-[63%] overflow-hidden">
//                   {slide.image && (
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                 </div>

//                 {/* Content Section - 40% with Better Background */}
//                 <div className="relative h-[37%] bg-gradient-to-t from-[#586e20] to-[#7a8a3a]">
//                   {/* Content */}
//                   <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-3 md:p-5 lg:p-6 text-start">
//                     <div className="flex-1">
//                       <div className="text-white text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg mb-2 sm:mb-1 md:mb-2 leading-tight">
//                     {slide.title}
//                   </div>

//                   <div className="text-white/95 text-xs sm:text-xs md:text-sm lg:text-sm font-medium mb-2 sm:mb-2 md:mb-4 leading-snug">
//                     {slide.subtitle}
//                   </div>

//                     </div>
//                     <button 
//                       onClick={handleShopClick}
//                       className="w-full bg-white/95 hover:bg-white text-black border border-white/50 rounded-full py-2 sm:py-1.5 md:py-2.5 px-4 sm:px-3 text-sm sm:text-xs md:text-base transition-all duration-300 hover:scale-105 shadow-lg"
//                     >
//                       {slide.buttonText}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center mt-6 md:mt-8 lg:mt-12 space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide
//                   ? 'bg-[#586e20] scale-125'
//                   : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpotlightCarousel;

'use client'
import React, { useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Title = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800">
    {children}
  </h2>
);

// Static slides data outside component to prevent recreation
const SLIDES_DATA = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1752579008/berries-green-gooseberry_oqaid7.jpg",
    title: "Amla Pericarp Extract",
    subtitle: "Ancient Berry, Modern Sugar Support",
    buttonText: "View Products"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1752580730/abstract-still-life-with-charcoal-close-up_1_-min_mcomkr.jpg",
    title: "Shilajit Extract",
    subtitle: "Unleash Ancient Energy With Shilajit",
    buttonText: "View Products"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1752580943/ghee-clarified-butter-jar-wooden-table-ai-generative-min_1_nqmeia.jpg",
    title: "Go-Ghruta",
    subtitle: "Revitalize with the Power of Desi Cow Ghee",
    buttonText: "View Products"
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753092833/vertical-view-black-fresh-grapes-small-pots_bzff9y.jpg",
    title: "Jambu Fruit",
    subtitle: "A Herbal Remedy to Support Healthy Sugar Level",
    buttonText: "View Products"
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dztmhmutv/image/upload/v1753105354/freepik__the-style-is-candid-image-photography-with-natural__55725_aehto3.png",
    title: "Khatika Powder",
    subtitle: "Naturally Restore Bone Density & Vitality",
    buttonText: "View Products"
  },
  {
    id: 6,
    image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/nirgundi-side-effects.jpg",
    title: "Nirgundi Oil",
    subtitle: "Anti-Inflammatory Herbal Support for Long-Term Relief",
    buttonText: "View Products"
  }
];

const SpotlightCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const componentRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  }, []);

  const getSlidePosition = useCallback((index) => {
    const diff = index - currentSlide;
    const totalSlides = SLIDES_DATA.length;
    
    if (diff === 0) return 'translate-x-0 scale-100 sm:scale-110 z-30 opacity-100';
    if (diff === 1 || diff === -(totalSlides - 1)) return 'translate-x-24 sm:translate-x-32 md:translate-x-48 lg:translate-x-64 scale-75 sm:scale-90 z-20 opacity-70 sm:opacity-80';
    if (diff === -1 || diff === totalSlides - 1) return '-translate-x-24 sm:-translate-x-32 md:-translate-x-48 lg:-translate-x-64 scale-75 sm:scale-90 z-20 opacity-70 sm:opacity-80';
    if (diff === 2 || diff === -(totalSlides - 2)) return 'translate-x-36 sm:translate-x-48 md:translate-x-72 lg:translate-x-96 scale-50 sm:scale-75 z-10 opacity-40 sm:opacity-60';
    if (diff === -2 || diff === totalSlides - 2) return '-translate-x-36 sm:-translate-x-48 md:-translate-x-72 lg:-translate-x-96 scale-50 sm:scale-75 z-10 opacity-40 sm:opacity-60';
    return 'translate-x-48 sm:translate-x-96 scale-25 sm:scale-50 z-0 opacity-0';
  }, [currentSlide]);

  const handleShopClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      router.push('/shop');
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback navigation
      window.location.href = '/shop';
    }
  }, [router]);

  const handleDotClick = useCallback((index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide(index);
  }, []);

  const handleNavClick = useCallback((direction, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  return (
    <div 
      ref={componentRef}
      className="relative bg-[#EDF1E1] py-6 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 lg:px-16 overflow-hidden"
      style={{ willChange: 'auto' }}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <Title>In the Spotlight</Title>

        <div className="relative flex justify-center items-center h-[420px] sm:h-96 md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden">
          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={(e) => handleNavClick('prev', e)}
            className="absolute left-1 sm:left-2 md:left-4 lg:left-8 z-30 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          <button
            type="button"
            onClick={(e) => handleNavClick('next', e)}
            className="absolute right-1 sm:right-2 md:right-4 lg:right-8 z-30 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          {/* Slides */}
          {SLIDES_DATA.map((slide, index) => {
            const position = getSlidePosition(index);
            return (
              <div
                key={`slide-${slide.id}`}
                className={`absolute transition-all duration-500 ease-in-out ${position}`}
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform3d: 'translate3d(0,0,0)'
                }}
              >
                <div className="relative w-60 h-[380px] sm:w-52 sm:h-80 md:w-64 md:h-96 lg:w-72 lg:h-[420px] xl:w-80 xl:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white">
                  
                  {/* Image Section */}
                  <div className="relative h-[63%] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      draggable="false"
                      style={{ 
                        userSelect: 'none',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="relative h-[37%] bg-gradient-to-t from-[#586e20] to-[#7a8a3a]">
                    <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-3 md:p-5 lg:p-6 text-start">
                      <div className="flex-1">
                        <div className="text-white text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg mb-2 sm:mb-1 md:mb-2 leading-tight">
                          {slide.title}
                        </div>
                        <div className="text-white/95 text-xs sm:text-xs md:text-sm lg:text-sm font-medium mb-2 sm:mb-2 md:mb-4 leading-snug">
                          {slide.subtitle}
                        </div>
                      </div>
                      
                      <button 
                        type="button"
                        onClick={handleShopClick}
                        className="w-full bg-white/95 hover:bg-white text-black border border-white/50 rounded-full py-2 sm:py-1.5 md:py-2.5 px-4 sm:px-3 text-sm sm:text-xs md:text-base transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 md:mt-8 lg:mt-12 space-x-2">
          {SLIDES_DATA.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={(e) => handleDotClick(index, e)}
              className={`w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#586e20] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Export without memo to prevent SSR issues
export default SpotlightCarousel;