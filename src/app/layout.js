 // src/app/layout.js

import './globals.css';
import { Montserrat } from 'next/font/google';

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

//  Keep metadata export only in server file (NO "use client" above)
// export const metadata = {
//   title: 'Cure Ayurvedic - Natural Wellness Products',
//   description: 'Premium  Ayurvedic products for natural wellness',
//   viewport: 'width=device-width, initial-scale=1',
// };

// Root layout must remain a Server Component

export const metadata = {
  title: 'Buy Best Ayurvedic Products Online in India | Cure Ayurvedic',
  description: 'Cure Ayurvedic is the top ayurvedic & wellness product company in India. Shop trusted ayurvedic medicine online today at the best price.',
  robots: 'noindex, nofollow',
  viewport: 'width=device-width, initial-scale=1.0',
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
      </body>
    </html>
  );
}
