// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Title from '../ui/Title';

// const WhyChooseTwo = () => {
//   return (
//     <section
//       className="relative py-16 px-4 sm:px-6 lg:px-16 overflow-hidden bg-center bg-cover"
//       style={{
//         backgroundImage: "url('/images/banner/handmade-paper/whitetemplatepaper.jpg')", // replace with your actual image path
//       }}
//     >
//       {/* Decorative Leaves - Bottom Left */}
//       <Image
//         src="/images/leaf/yellow-flower-2.png"
//         alt="leaf bottom left"
//         width={200}
//         height={200}
//         className="absolute bottom-0 left-0 z-0 opacity-40"
//       />

//       {/* Decorative Leaves - Bottom Right */}
//       <Image
//         src="/images/leaf/leaf4.png"
//         alt="leaf bottom right"
//         width={200}
//         height={200}
//         className="absolute bottom-0 right-0 z-0 transform scale-x-[-1] opacity-40"
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
//           Be a Part of Cure Ayurvedic Family
//         </h2> */}
//         <Title>
//           Be a Part of Cure Ayurvedic Family 
//         </Title>
//         <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
//           At Cure Ayurvedic, we believe true healing begins with care, not just treatment. Our approach is <strong> Care Before Cure</strong> strengthening the body, boosting natural resistance, and restoring balance so illness stays away and wellness becomes your everyday state.
//         </p>
//         <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
//           Our mission is to nurture long-term wellness by addressing the root cause, not just the symptoms. We perfectly blend ancient Ayurvedic wisdom with pure and natural ingredients that will support your body’s own healing process gently, effectively, and holistically. Crafted with pure, natural ingredients and backed by clinical testing, our products offer healing without any side effects.
//         </p>
        
         
//       </div>
//     </section>
//   );
// }

// export default WhyChooseTwo;


'use client';
import React from 'react';
import Image from 'next/image';
import Title from '../ui/Title';

const WhyChooseTwo = () => {
  return (
    <section
      className="relative py-16 px-4 sm:px-6 lg:px-16 overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/banner/handmade-paper/whitetemplatepaper.jpg')", // replace with your actual image path
      }}
    >
      {/* Decorative Leaves - Bottom Left */}
      <Image
        src="/images/leaf/leaf6.png"
        alt="leaf bottom left"
        width={200}
        height={200}
        className="absolute bottom-[-25px] left-[-25px] z-0 opacity-40 transform -translate-x-1/3 md:translate-x-0"
      />

      {/* Decorative Leaves - Top Right */}
      <Image
        src="/images/leaf/leaf4.png"
        alt="leaf top right"
        width={200}
        height={200}
        className="absolute top-[-25px] right-[-25px] z-0 opacity-40 transform -translate-y-1/3 md:translate-y-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title>
          Be a Part of Cure Ayurvedic Family
        </Title>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          At Cure Ayurvedic, we believe true healing begins with care, not just treatment. Our approach is <strong> Care Before Cure</strong> strengthening the body, boosting natural resistance, and restoring balance so illness stays away and wellness becomes your everyday state.
        </p>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Our mission is to nurture long-term wellness by addressing the root cause, not just the symptoms. We perfectly blend ancient Ayurvedic wisdom with pure and natural ingredients that will support your body’s own healing process gently, effectively, and holistically. Crafted with pure, natural ingredients and backed by clinical testing, our products offer healing without any side effects.
        </p>
      </div>
    </section>
  );
}

export default WhyChooseTwo;



