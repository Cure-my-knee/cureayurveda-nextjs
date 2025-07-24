'use client'
import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function TopHeader() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#586e20] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm font-medium">
        {/* Left Text */}
        <div className="text-white mb-1 sm:mb-0">
          Grab 10% OFF – Limited Time Only!
        </div>

        {/* Right Social Icons */}
        <div className="flex space-x-3 sm:space-x-4">
          <a
            href="https://www.facebook.com/cureayurvedicproducts"
            className="text-gray-100 hover:text-gray-300 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffff]" />
          </a>

          <a
            href="https://www.instagram.com/cureayurvedic/"
            className="text-gray-100 hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffff]" />
          </a>

          <a
            href="https://www.linkedin.com/company/cureayurvedic/"
            className="text-gray-100 hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffff]" />
          </a>

          <a
            href="https://wa.me/918800023120"
            className="text-gray-100 hover:text-gray-300 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffff]" />
          </a>
        </div>
      </div>
    </div>
  );
}


// 'use client'
// import React, { useState } from 'react';
// import { Facebook, Instagram, Linkedin } from 'lucide-react';
// import { FaWhatsapp } from 'react-icons/fa';

// export default function TopHeader() {
//   const [isVisible, setIsVisible] = useState(true);

//   if (!isVisible) return null;

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 bg-[#586e20] text-white py-2 px-4 text-sm">
//       <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
//         {/* Left Text */}
//         <div className="text-white font-medium text-center sm:text-left">
//           Grab 10% OFF – Limited Time Only!
//         </div>

//         {/* Right Social Links */}
//         <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
          
//           <div className="flex space-x-3 sm:space-x-4">
//             <a
//               href="https://www.facebook.com/cureayurvedicproducts"
//               className="text-gray-100 hover:text-gray-300 transition-colors"
//               aria-label="Facebook"
//             >
//               <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#0165E1]" />
//             </a>

//             <a
//               href="https://www.instagram.com/cureayurvedic/"
//               className="text-gray-100 hover:text-gray-300 transition-colors"
//               aria-label="Instagram"
//             >
//               <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1306C]" />
//             </a>

//             <a
//               href="https://www.linkedin.com/company/cureayurvedic/"
//               className="text-gray-100 hover:text-gray-300 transition-colors"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
//             </a>

//             <a
//               href="https://wa.me/918800023120"
//               className="text-gray-100 hover:text-gray-300 transition-colors"
//               aria-label="WhatsApp"
//             >
//               <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

