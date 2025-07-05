//  'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { Menu, X, User, ShoppingCart, Search, ChevronDown } from 'lucide-react';
// import Image from 'next/image';

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInfoOpen, setIsInfoOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
  
//   const infoDropdownTimeoutRef = useRef(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const onScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // Clean up timeout on unmount
//   useEffect(() => {
//     return () => {
//       if (infoDropdownTimeoutRef.current) {
//         clearTimeout(infoDropdownTimeoutRef.current);
//       }
//     };
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//     // Close info dropdown when mobile menu toggles
//     setIsInfoOpen(false);
//   };

//   const toggleInfoDropdown = () => {
//     setIsInfoOpen((prev) => !prev);
//   };

//   const handleMouseEnter = () => {
//     if (infoDropdownTimeoutRef.current) {
//       clearTimeout(infoDropdownTimeoutRef.current);
//     }
//     setIsInfoOpen(true);
//   };

//   const handleMouseLeave = () => {
//     infoDropdownTimeoutRef.current = setTimeout(() => {
//       setIsInfoOpen(false);
//     }, 150); // Quick close delay
//   };

//   const handleLinkClick = (label) => {
//     setActiveLink(label);
//     setTimeout(() => setActiveLink(''), 300); // Reset after animation
//   };

//   return (
//     <header
//       className={`fixed top-9 left-0 w-full z-40 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white shadow-md border-b border-gray-200'
//           : 'bg-white shadow-md border-b border-gray-200'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center group">
//             <div className="w-20 h-20 relative transition-transform duration-200 group-hover:scale-105">
//               <Image
//                 src="/images/logo/cmklogo2.png"
//                 alt="Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <span className="ml-2 text-xl lg:text-2xl font-semibold text-gray-800 tracking-wide group-hover:text-green-600 transition-colors duration-200">
//               CURE AYURVEDIC
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8 relative">
//             {[
//               { href: "/about", label: "About" },
//               { href: "/shop", label: "Shop Now" },
//               { href: "#", label: "Information Centre", isDropdown: true },
//               { href: "/contact", label: "Contact Us" },
//             ].map(({ href, label, isDropdown }) =>
//               isDropdown ? (
//                 <div
//                   key={label}
//                   className="relative"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   ref={dropdownRef}
//                 >
//                   <button 
//                     className={`flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium text-sm tracking-wider uppercase cursor-pointer transition-all duration-200 relative group ${
//                       activeLink === label ? 'text-green-600' : ''
//                     }`}
//                     onClick={() => handleLinkClick(label)}
//                   >
//                     {label}
//                     <ChevronDown 
//                       size={16} 
//                       className={`transition-transform duration-200 ${
//                         isInfoOpen ? 'rotate-180' : ''
//                       }`} 
//                     />
//                     {/* Animated underline */}
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//                     {/* Click animation */}
//                     {activeLink === label && (
//                       <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 animate-pulse"></span>
//                     )}
//                   </button>

//                   {/* Dropdown with improved animation */}
//                   <div
//                     className={`absolute top-full left-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-150 origin-top ${
//                       isInfoOpen 
//                         ? 'opacity-100 scale-100 translate-y-0' 
//                         : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
//                     }`}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     {/* <Link
//                       href="/blog"
//                       className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
//                       onClick={() => handleLinkClick('Blog')}
//                     >
//                       Blog
//                     </Link> */}
//                     <Link
//                       href="/faq"
//                       className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
//                       onClick={() => handleLinkClick('FAQ')}
//                     >
//                       FAQ
//                     </Link>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={href}
//                   href={href}
//                   className={`text-gray-700 hover:text-green-600 font-medium text-sm tracking-wider uppercase transition-all duration-200 relative group ${
//                     activeLink === label ? 'text-green-600' : ''
//                   }`}
//                   onClick={() => handleLinkClick(label)}
//                 >
//                   {label}
//                   {/* Animated underline */}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//                   {/* Click animation */}
//                   {activeLink === label && (
//                     <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 animate-pulse"></span>
//                   )}
//                 </Link>
//               )
//             )}
//           </nav>

//           {/* Right Side Actions (Desktop) */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <Link 
//               href="/search" 
//               className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110"
//             >
//               <Search size={20} />
//             </Link>
//             <Link 
//               href="/login" 
//               className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110"
//             >
//               <User size={20} />
//             </Link>
//             <Link 
//               href="/checkout" 
//               className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full relative transition-all duration-200 hover:scale-110 group"
//             >
//               <ShoppingCart size={20} />
//               {/* <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
//                 0
//               </span> */}
//             </Link>
//           </div>

//           {/* Mobile Icons */}
//           <div className="lg:hidden flex items-center space-x-2">
//             <button className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200">
//               <Search size={18} />
//             </button>
//             <Link 
//               href="/cart" 
//               className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full relative transition-all duration-200 group"
//             >
//               <ShoppingCart size={18} />
//               <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px] transition-transform duration-200 group-hover:scale-110">
//                 0
//               </span>
//             </Link>
//             <button
//               onClick={toggleMobileMenu}
//               className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110"
//             >
//               <Menu size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
//           isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="p-4 flex justify-end pt-12">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-gray-700 hover:text-green-600 p-2 rounded-full hover:bg-green-50 transition-all duration-200 hover:rotate-90"
//           >
//             <X size={24} />
//           </button>
//         </div>
//         <div className="px-6 py-4 space-y-2">
//           <Link
//             href="/"
//             onClick={toggleMobileMenu}
//             className="block text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 hover:translate-x-1"
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             onClick={toggleMobileMenu}
//             className="block text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 hover:translate-x-1"
//           >
//             About
//           </Link>
//           <Link
//             href="/shop"
//             onClick={toggleMobileMenu}
//             className="block text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 hover:translate-x-1"
//           >
//             Shop Now
//           </Link>
//           <div>
//             <button
//               onClick={toggleInfoDropdown}
//               className="w-full flex items-center justify-between text-left text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200"
//             >
//               Information Centre
//               <ChevronDown 
//                 size={16} 
//                 className={`transition-transform duration-200 ${
//                   isInfoOpen ? 'rotate-180' : ''
//                 }`} 
//               />
//             </button>
//             <div 
//               className={`overflow-hidden transition-all duration-300 ${
//                 isInfoOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
//               }`}
//             >
//               <div className="pl-6 space-y-1 pt-2">
//                 {/* <Link
//                   href="/blog"
//                   onClick={toggleMobileMenu}
//                   className="block text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-2 text-sm tracking-wide transition-all duration-200 hover:translate-x-1"
//                 >
//                   Blog
//                 </Link> */}
//                 <Link
//                   href="/faq"
//                   onClick={toggleMobileMenu}
//                   className="block text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-2 text-sm tracking-wide transition-all duration-200 hover:translate-x-1"
//                 >
//                   FAQ
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <Link
//             href="/contact"
//             onClick={toggleMobileMenu}
//             className="block text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 hover:translate-x-1"
//           >
//             Contact Us
//           </Link>
//           <div className="pt-4 border-t border-gray-200">
//             <Link
//               href="/login"
//               onClick={toggleMobileMenu}
//               className="block text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium transition-all duration-200 hover:translate-x-1"
//             >
//               My Account
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
//           onClick={toggleMobileMenu}
//         />
//       )}
//     </header>
//   );
// }

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { Menu, X, User, ShoppingCart, Search, ChevronDown } from 'lucide-react';
// import Image from 'next/image';
// import { authAPI } from '@/lib/api/endpoints';

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isInfoOpen, setIsInfoOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('');
//   const [hasMounted, setHasMounted] = useState(false);

//   const infoDropdownTimeoutRef = useRef(null);
//   const dropdownRef = useRef(null);

//   // logout part start

//    const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('accessToken');
//     setIsAuthenticated(!!token); // true if token exists
//   }, []);

//  const handleLogout = async () => {
//   try {
//     await authAPI.logoutUser();
//   } catch (error) {
//     console.warn('Logout error (ignored):', error);
//   } finally {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     localStorage.removeItem('user');
//     setIsAuthenticated(false);
//     window.location.href = '/login';
//   }
// };





//   // logout part end




//   // Avoid hydration mismatch by delaying until client mount
//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   useEffect(() => {
//     if (!hasMounted) return;

//     const handleScroll = () => {
//       requestAnimationFrame(() => {
//         setIsScrolled(window.scrollY > 10);
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // initial run

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [hasMounted]);

//   useEffect(() => {
//     return () => {
//       if (infoDropdownTimeoutRef.current) {
//         clearTimeout(infoDropdownTimeoutRef.current);
//       }
//     };
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//     setIsInfoOpen(false);
//   };

//   const toggleInfoDropdown = () => {
//     setIsInfoOpen((prev) => !prev);
//   };

//   const handleMouseEnter = () => {
//     if (infoDropdownTimeoutRef.current) {
//       clearTimeout(infoDropdownTimeoutRef.current);
//     }
//     setIsInfoOpen(true);
//   };

//   const handleMouseLeave = () => {
//     infoDropdownTimeoutRef.current = setTimeout(() => {
//       setIsInfoOpen(false);
//     }, 150);
//   };

//   const handleLinkClick = (label) => {
//     setActiveLink(label);
//     setTimeout(() => setActiveLink(''), 300);
//   };

//   if (!hasMounted) return null; // Prevent SSR mismatch

//   return (
//     <header
//       className={`fixed top-9 left-0 w-full z-40 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white shadow-md border-b border-gray-200'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center group">
//             <div className="w-20 h-20 relative transition-transform duration-200 group-hover:scale-105">
//               <Image
//                 src="/images/logo/cmklogo2.png"
//                 alt="Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <span className="ml-2 text-xl lg:text-2xl font-semibold text-gray-800 tracking-wide group-hover:text-green-600 transition-colors duration-200">
//               CURE AYURVEDIC
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8 relative">
//             {[
//               { href: "/about", label: "About" },
//               { href: "/shop", label: "Shop Now" },
//               { href: "#", label: "Information Centre", isDropdown: true },
//               { href: "/contact", label: "Contact Us" },
//             ].map(({ href, label, isDropdown }) =>
//               isDropdown ? (
//                 <div
//                   key={label}
//                   className="relative"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   ref={dropdownRef}
//                 >
//                   <button
//                     className={`flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium text-sm tracking-wider uppercase cursor-pointer transition-all duration-200 relative group ${
//                       activeLink === label ? 'text-green-600' : ''
//                     }`}
//                     onClick={() => handleLinkClick(label)}
//                   >
//                     {label}
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-200 ${
//                         isInfoOpen ? 'rotate-180' : ''
//                       }`}
//                     />
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//                   </button>

//                   <div
//                     className={`absolute top-full left-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-150 origin-top ${
//                       isInfoOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
//                     }`}
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     <Link
//                       href="/faq"
//                       className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
//                       onClick={() => handleLinkClick('FAQ')}
//                     >
//                       FAQ
//                     </Link>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={href}
//                   href={href}
//                   className={`text-gray-700 hover:text-green-600 font-medium text-sm tracking-wider uppercase transition-all duration-200 relative group ${
//                     activeLink === label ? 'text-green-600' : ''
//                   }`}
//                   onClick={() => handleLinkClick(label)}
//                 >
//                   {label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               )
//             )}
//           </nav>

//           {/* Right Icons (Desktop) */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <Link href="#" className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110">
//               <Search size={20} />
//             </Link>
//             {/* <Link href="/login" className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110">
//               <User size={20} />
//             </Link> */}

//             {isAuthenticated ? (
//             <button
//               onClick={handleLogout}
//               className="p-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200 hover:scale-110"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               href="/login"
//               className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110"
//             >
//               <User size={20} />
//             </Link>
//           )}

//             <Link href="/checkout" className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full relative transition-all duration-200 hover:scale-110 group">
//               <ShoppingCart size={20} />
//             </Link>
//           </div>

//           {/* Mobile Icons */}
//           <div className="lg:hidden flex items-center space-x-2">
//             <button className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200">
//               <Search size={18} />
//             </button>
//             <Link href="/cart" className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full relative transition-all duration-200 group">
//               <ShoppingCart size={18} />
//               <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
//                 0
//               </span>
//             </Link>
//             <button onClick={toggleMobileMenu} className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110">
//               <Menu size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
//         isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//       }`}>
//         <div className="p-4 flex justify-end pt-12">
//           <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-600 p-2 rounded-full hover:bg-green-50 transition-all duration-200 hover:rotate-90">
//             <X size={24} />
//           </button>
//         </div>
//         <div className="px-6 py-4 space-y-2">
//           {['/', '/about', '/shop', '/contact'].map((href, i) => (
//             <Link
//               key={href}
//               href={href}
//               onClick={toggleMobileMenu}
//               className="block text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 hover:translate-x-1"
//             >
//               {['Home', 'About', 'Shop Now', 'Contact Us'][i]}
//             </Link>
//           ))}

//           <div>
//             <button
//               onClick={toggleInfoDropdown}
//               className="w-full flex items-center justify-between text-left text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200"
//             >
//               Information Centre
//               <ChevronDown size={16} className={`transition-transform duration-200 ${isInfoOpen ? 'rotate-180' : ''}`} />
//             </button>
//             <div className={`overflow-hidden transition-all duration-300 ${isInfoOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
//               <div className="pl-6 space-y-1 pt-2">
//                 <Link
//                   href="/faq"
//                   onClick={toggleMobileMenu}
//                   className="block text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-2 text-sm tracking-wide transition-all duration-200 hover:translate-x-1"
//                 >
//                   FAQ
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="pt-4 border-t border-gray-200">
//             <Link
//               href="/login"
//               onClick={toggleMobileMenu}
//               className="block text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium transition-all duration-200 hover:translate-x-1"
//             >
//               My Account
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
//           onClick={toggleMobileMenu}
//         />
//       )}
//     </header>
//   );
// }


 'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, User, ShoppingCart, Search, ChevronDown, LogOut } from 'lucide-react';
import Image from 'next/image';
import { authAPI } from '@/lib/api/endpoints';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [hasMounted, setHasMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const infoDropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  // Check authentication status and listen for changes
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('accessToken');
      setIsAuthenticated(!!token);
    };

    // Initial check
    checkAuthStatus();

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'accessToken') {
        checkAuthStatus();
      }
    };

    // Listen for custom auth events (when user logs in/out in same tab)
    const handleAuthChange = () => {
      checkAuthStatus();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  // Enhanced logout handler with loading state
  const handleLogout = async () => {
    if (isLoggingOut) return; // Prevent multiple logout attempts
    
    setIsLoggingOut(true);
    
    try {
      await authAPI.logoutUser();
    } catch (error) {
      console.warn('Logout error (ignored):', error);
    } finally {
      // Clear all auth-related data
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      setIsAuthenticated(false);
      setIsLoggingOut(false);
      
      // Dispatch custom event to notify other components
      window.dispatchEvent(new Event('authChange'));
      
      // Redirect to login
      window.location.href = '/login';
    }
  };

  // Avoid hydration mismatch by delaying until client mount
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMounted]);

  useEffect(() => {
    return () => {
      if (infoDropdownTimeoutRef.current) {
        clearTimeout(infoDropdownTimeoutRef.current);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setIsInfoOpen(false);
  };

  const toggleInfoDropdown = () => {
    setIsInfoOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (infoDropdownTimeoutRef.current) {
      clearTimeout(infoDropdownTimeoutRef.current);
    }
    setIsInfoOpen(true);
  };

  const handleMouseLeave = () => {
    infoDropdownTimeoutRef.current = setTimeout(() => {
      setIsInfoOpen(false);
    }, 150);
  };

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setTimeout(() => setActiveLink(''), 300);
  };

  if (!hasMounted) return null; // Prevent SSR mismatch

  return (
    <header
      className={`fixed top-9 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white shadow-md border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-20 h-20 relative transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo/cmklogo2.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="ml-2 text-xl lg:text-2xl font-semibold text-gray-800 tracking-wide group-hover:text-green-600 transition-colors duration-200">
              CURE AYURVEDIC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 relative">
            {[
              { href: "/about", label: "About" },
              { href: "/shop", label: "Shop Now" },
              { href: "#", label: "Information Centre", isDropdown: true },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label, isDropdown }) =>
              isDropdown ? (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownRef}
                >
                  <button
                    className={`flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium text-sm tracking-wider uppercase cursor-pointer transition-all duration-200 relative group ${
                      activeLink === label ? 'text-green-600' : ''
                    }`}
                    onClick={() => handleLinkClick(label)}
                  >
                    {label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isInfoOpen ? 'rotate-180' : ''
                      }`}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  <div
                    className={`absolute top-full left-0 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-150 origin-top ${
                      isInfoOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href="/faq"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                      onClick={() => handleLinkClick('FAQ')}
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={`text-gray-700 hover:text-green-600 font-medium text-sm tracking-wider uppercase transition-all duration-200 relative group ${
                    activeLink === label ? 'text-green-600' : ''
                  }`}
                  onClick={() => handleLinkClick(label)}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </nav>

          {/* Right Icons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="#" className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110">
              <Search size={20} />
            </Link>

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoggingOut ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                    <span>Logging out...</span>
                  </>
                ) : (
                  <>
                    <LogOut size={16} />
                    <span>Logout</span>
                  </>
                )}
              </button>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-105"
              >
                <User size={16} />
                <span>Login</span>
              </Link>
            )}

            <Link href="/checkout" className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full relative transition-all duration-200 hover:scale-110 group">
              <ShoppingCart size={20} />
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="lg:hidden flex items-center space-x-2">
            <button className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200">
              <Search size={18} />
            </button>
            <Link href="/checkout" className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full relative transition-all duration-200 group">
              <ShoppingCart size={18} />
               
            </Link>
            <button onClick={toggleMobileMenu} className="p-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200 hover:scale-110">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4 flex justify-end pt-12">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-green-600 p-2 rounded-full hover:bg-green-50 transition-all duration-200 hover:rotate-90">
            <X size={24} />
          </button>
        </div>
        <div className="px-6 py-4 space-y-2">
          {['/', '/about', '/shop', '/contact'].map((href, i) => (
            <Link
              key={href}
              href={href}
              onClick={toggleMobileMenu}
              className="block text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 hover:translate-x-1"
            >
              {['Home', 'About', 'Shop Now', 'Contact Us'][i]}
            </Link>
          ))}

          <div>
            <button
              onClick={toggleInfoDropdown}
              className="w-full flex items-center justify-between text-left text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200"
            >
              Information Centre
              <ChevronDown size={16} className={`transition-transform duration-200 ${isInfoOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isInfoOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-6 space-y-1 pt-2">
                <Link
                  href="/faq"
                  onClick={toggleMobileMenu}
                  className="block text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-2 text-sm tracking-wide transition-all duration-200 hover:translate-x-1"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full flex items-center gap-2 text-left text-gray-800 hover:bg-red-50 hover:text-red-600 rounded-md px-3 py-3 text-sm font-medium transition-all duration-200 hover:translate-x-1 disabled:opacity-50"
              >
                {isLoggingOut ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                    <span>Logging out...</span>
                  </>
                ) : (
                  <>
                    <LogOut size={16} />
                    <span>Logout</span>
                  </>
                )}
              </button>
            ) : (
              <Link
                href="/login"
                onClick={toggleMobileMenu}
                className="block text-gray-800 hover:bg-green-50 hover:text-green-600 rounded-md px-3 py-3 text-sm font-medium transition-all duration-200 hover:translate-x-1"
              >
                My Account
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={toggleMobileMenu}
        />
      )}
    </header>
  );
}
