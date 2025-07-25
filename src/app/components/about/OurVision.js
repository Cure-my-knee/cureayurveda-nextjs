//  import React from 'react';

// const VisionScroll = () => {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center p-2 sm:p-4">
//       {/* Main container with background image */}
//       <div 
//         className="relative w-full max-w-3xl mx-auto min-h-[900px] flex items-center justify-center bg-no-repeat bg-center bg-cover"
//         style={{
//           backgroundImage: 'url("https://i.pinimg.com/736x/c9/ec/5a/c9ec5a56041fda07ff2c5e36b8b2ecde.jpg")',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: '100% 100%',
//           backgroundPosition: 'center center'
//         }}
//       >
//         {/* Content container */}
//         <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24">
//           {/* Title */}
//           <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
//             <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-900 mb-2 sm:mb-3 md:mb-4 tracking-wide font-serif">
//               Our Vision
//             </h1>
//             <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-amber-700 mx-auto rounded-full"></div>
//           </div>
          
//           {/* Content */}
//           <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-amber-900/90 leading-relaxed">
//             <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-serif first-letter:text-2xl sm:first-letter:text-3xl md:first-letter:text-4xl first-letter:font-bold first-letter:text-amber-800 first-letter:float-left first-letter:mr-1 sm:first-letter:mr-2 first-letter:mt-0.5 sm:first-letter:mt-1 first-letter:leading-none">
//               Our vision is to make the world recognize the strength of nature, where wellness starts from within, and where Ayurveda becomes a daily practice that is gentle, pure, and proven.
//             </p>
            
//             <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-serif">
//               At Cure Ayurvedic, we believe in "Care before Cure," which means nurturing the body with natural strength, restoring inner balance, and building resilience long before illness can take hold.
//             </p>
            
//             <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-justify font-serif">
//               Our philosophy has encouraged us to research the ancient Ayurvedic ingredients, work with Vaidyas, and find the most potent healing gems in the form of herbs that grow all over the varied terrains of India—from the Himalayan valleys to the forest floors. With this intense study and immersion into these hidden realms, we were able to discover and revive rare, powerful herbs and natural gems long used in traditional practices but, in this fast-paced world, are sometimes forgotten. We bring them back to life in our carefully crafted formulas free from chemicals, preservatives, or artificial ingredients.
//             </p>
//           </div>
          
//           {/* Decorative elements */}
           
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisionScroll;
 

import React from 'react';

const VisionScroll = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2 sm:p-4">
      <style>
        {`
          @media (max-width: 640px) {
            .scroll-bg {
              background-image: url('https://res.cloudinary.com/dztmhmutv/image/upload/v1753428120/c9ec5a56041fda07ff2c5e36b8b2ecde2_hov5hm.jpg') !important;
            }
          }
        `}
      </style>

      <div
        className={`
          relative w-full max-w-3xl mx-auto 
          min-h-[900px] flex items-center justify-center 
          bg-no-repeat bg-center bg-cover 
          rounded-2xl shadow-2xl scroll-bg
          shadow-black
        `}
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dztmhmutv/image/upload/v1753432232/c9ec5a56041fda07ff2c5e36b8b2ecde_1_p06fzt.jpg")',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center center',
           
        }}
      >
        <div className="relative z-10 w-full max-w-4xl mx-auto px-8 sm:px-8 md:px-12 lg:px-20 xl:px-14 py-10 sm:py-14 md:py-20">
          {/* Title */}
          <div className="text-center mb-2 sm:mb-2 md:mb-2">
           <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black mb-2 ">
  Our Vision
</div>

            {/* <div className="w-12 sm:w-16 md:w-20 h-1 bg-amber-700 mx-auto rounded-full"></div> */}
          </div>

          {/* Content */}
          <div className="space-y-4 text-black">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify  ">
             Our vision is to make the world recognize the strength of nature, where wellness starts from within, and where Ayurveda becomes a daily practice that is gentle, pure, and proven.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify ">
             At Cure Ayurvedic, we believe in "Care before Cure," which means nurturing the body with natural strength, restoring inner balance, and building resilience long before illness can take hold.
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify ">
             Our philosophy has encouraged us to research the ancient Ayurvedic ingredients, work with Vaidyas, and find the most potent healing gems in the form of herbs that grow all over the varied terrains of India-from the Himalayan valleys to the forest floors. With this intense study and immersion into these hidden realms, we were able to discover and revive rare, powerful herbs and natural gems long used in traditional practices but, in this fast-paced world, are sometimes forgotten. We bring them back to life in our carefully crafted formulas free from chemicals, preservatives, or artificial ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionScroll;
