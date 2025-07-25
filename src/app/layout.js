 // src/app/layout.js

import './globals.css';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

// Load Montserrat font as CSS variable
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-sans',
});

// Import components (Server-compatible)
import TopHeader from './components/layout/TopHeader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import { GoogleTagManager } from '@next/third-parties/google';

 

// Root layout must remain a Server Component

export const metadata = {
  title: 'Buy Best Ayurvedic Products Online in India | Cure Ayurvedic',
  description: 'Cure Ayurvedic is the top ayurvedic & wellness product company in India. Shop trusted ayurvedic medicine online today at the best price.',
  viewport: 'width=device-width, initial-scale=1.0',
   other: {
    'google-site-verification': '491akEx-CPBtJVwJokQrfA0_7iDMJldPSHKc7YglHs4',
  },
};
export default function RootLayout({ children }) {
  return (

    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
           
      <body className="antialiased font-sans bg-white text-gray-900" suppressHydrationWarning={true}>
        <TopHeader />
        <Header />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        
         <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <Footer />
        {/* Vercel Analytics added here */}
         <Analytics /> 
         {/* google analytics */}
         <GoogleTagManager gtmId="491akEx-CPBtJVwJokQrfA0_7iDMJldPSHKc7YglHs4" /> 
      </body>
    </html>
  );
}


//  old code



// // src/app/layout.js
// import './globals.css';
// import { Montserrat } from 'next/font/google';

// // Load Montserrat font as CSS variable
// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['500'],
//   variable: '--font-sans',
// });

// // Import components (Server-compatible)
// // import TopHeader from './components/layout/TopHeader';
// // import Header from './components/layout/Header';
// // import Footer from './components/layout/Footer';
// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // Coming Soon Component
// function ComingSoon() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
//       <div className="text-center px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md mx-auto">
//           {/* Logo/Brand */}
//           <div className="mb-8">
//             <h1 className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-2">
//               Cure Ayurvedic
//             </h1>
//             <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
//           </div>
          
//           {/* Coming Soon Message */}
//           <div className="mb-8">
//             <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
//               Coming Soon
//             </h2>
//             <p className="text-gray-600 text-lg mb-6">
//               We're working hard to bring you the best Ayurvedic products and natural wellness solutions.
//             </p>
//             <p className="text-gray-500">
//               Premium Ayurvedic products for natural wellness
//             </p>
//           </div>
          
//           {/* Launch Indicator */}
//           <div className="mb-8">
//             <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
//               <svg className="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Website Under Development
//             </div>
//           </div>
          
//           {/* Contact Info */}
//           <div className="text-sm text-gray-500">
//             <p>For inquiries, please contact us at:</p>
//             <p className="font-medium text-emerald-600">Contact@cureayurvedic.com</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// //  Keep metadata export only in server file (NO "use client" above)
// // export const metadata = {
// //   title: 'Cure Ayurvedic - Natural Wellness Products',
// //   description: 'Premium  Ayurvedic products for natural wellness',
// //   viewport: 'width=device-width, initial-scale=1',
// // };

// // Root layout must remain a Server Component
// export const metadata = {
//   title: 'Coming Soon - Cure Ayurvedic | Best Ayurvedic Products Online in India',
//   description: 'Cure Ayurvedic is launching soon! We\'re the top ayurvedic & wellness product company in India. Stay tuned for trusted ayurvedic medicine online at the best price.',
//   viewport: 'width=device-width, initial-scale=1.0',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
//       <body className="antialiased font-sans bg-white text-gray-900" suppressHydrationWarning={true}>
//         {/* Commented out the main layout components */}
//         {/* <TopHeader /> */}
//         {/* <Header /> */}
        
//         {/* Coming Soon Page instead of main content */}
//         <ComingSoon />
        
//         {/* Commented out main content area */}
//         {/* <main className="min-h-screen flex flex-col">
//           {children}
//         </main> */}
        
//         {/* Commented out Toast Container */}
//         {/* <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         /> */}
        
//         {/* <Footer /> */}
//       </body>
//     </html>
//   );
// }