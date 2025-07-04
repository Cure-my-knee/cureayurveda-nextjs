  // Updated app/page.js

import HomePage from "./main-components/HomePage";



export default function Home() {
  
  return (
    <div className="bg-white">
      
      <HomePage />
       
    </div>
  );
}

// src/app/page.js
// 'use client';

// import dynamic from 'next/dynamic';

// // ✅ Dynamically import HomePage with SSR disabled
// const HomePage = dynamic(() => import('./main-components/HomePage'), { ssr: false });

// export default function Home() {
//   return (
//     <div className="bg-white">
//       <HomePage />
//     </div>
//   );
// }


 