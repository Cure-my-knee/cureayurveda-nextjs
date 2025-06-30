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

// ✅ Keep metadata export only in server file (NO "use client" above)
// export const metadata = {
//   title: 'WholeLeaf - Natural Wellness Products',
//   description: 'Premium CBD and Ayurvedic products for natural wellness',
//   viewport: 'width=device-width, initial-scale=1',
// };

// ✅ Root layout must remain a Server Component
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-white text-gray-900" suppressHydrationWarning={true}>
        <TopHeader />
        <Header />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
