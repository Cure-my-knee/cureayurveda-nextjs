 'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin, Youtube, Twitter,  } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import Button from '../ui/Button';
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { authAPI } from '@/lib/api/endpoints';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
   
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [captchaInput, setCaptchaInput] = useState('');

  useEffect(() => {
  generateCaptcha();
}, []);

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  setCaptcha({
    question: `What is ${num1} + ${num2}?`,
    answer: (num1 + num2).toString()
  });
};

   

  // post api for newsletter subscription

//  const handleSubscribe = async (e) => {
//     e.preventDefault();
    
//     // Reset previous states
//     setError('');
//     setIsSubscribed(false);
    
//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.trim()) {
//       setError('Please enter an email address');
//       return;
//     }
    
//     if (!emailRegex.test(email.trim())) {
//       setError('Please enter a valid email address');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const subscribeData = {
//         email: email.trim(),
//         timestamp: new Date().toISOString(),
//         source: 'newsletter_form'
//       };

//       const response = await authAPI.postSubscribe(subscribeData);
      
//       // Check if the response indicates success
//       if (response && (response.success || response.status === 'success' || response.message)) {
//         setIsSubscribed(true);
//         setEmail('');
        
//         // Reset success state after 3 seconds
//         setTimeout(() => {
//           setIsSubscribed(false);
//         }, 3000);
//       } else {
//         throw new Error('Subscription failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Newsletter subscription error:', error);
      
//       // Handle different error types
//       if (error.response?.data?.message) {
//         setError(error.response.data.message);
//       } else if (error.message) {
//         setError(error.message);
//       } else if (typeof error === 'string') {
//         setError(error);
//       } else {
//         setError('Subscription failed. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

const handleSubscribe = async (e) => {
  e.preventDefault();

  // Reset states
  setError('');
  setIsSubscribed(false);

  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  // Basic email checks
  if (!email.trim()) {
    setError('Please enter an email address');
    return;
  }

  if (!emailRegex.test(email.trim())) {
    setError('Please enter a valid email address');
    return;
  }

  // Captcha check
  if (captchaInput.trim() !== captcha.answer) {
    setError('Incorrect CAPTCHA. Please try again.');
    generateCaptcha(); // regenerate on failure
    return;
  }

  setIsLoading(true);

  try {
    const subscribeData = {
      email: email.trim(),
      timestamp: new Date().toISOString(),
      source: 'newsletter_form'
    };

    const response = await authAPI.postSubscribe(subscribeData);

    if (response && (response.success || response.status === 'success' || response.message)) {
      setIsSubscribed(true);
      setEmail('');
      setCaptchaInput('');
      generateCaptcha(); // regenerate on success

      // Reset subscription state after 3s
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } else {
      throw new Error('Subscription failed. Please try again.');
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error);

    if (error.response?.data?.message) {
      setError(error.response.data.message);
    } else if (error.message) {
      setError(error.message);
    } else if (typeof error === 'string') {
      setError(error);
    } else {
      setError('Subscription failed. Please try again.');
    }

    generateCaptcha(); // regenerate on error

  } finally {
    setIsLoading(false);
  }
};


  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Mobile: 2x2 Grid, Tablet: 2x2 Grid, Desktop: 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          {/* About Cure Ayurvedic Section */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
             {/* Logo */}
            <div className="mb-4">
            <Image
              src="/images/logo/cmklogo2.png"
              alt="Cure Ayurvedic Logo"
              width={120}
              height={40}
              className="
                w-28 h-auto              // Default mobile
                sm:w-32 sm:h-auto        // Small screens (sm)
                md:w-40 md:h-auto        // Medium screens (md)
                lg:w-32 lg:h-auto        // Large desktop (lg)
              "
            />
          </div>


            {/* <h3 className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3 sm:mb-4">
              About Cure Ayurvedic
            </h3> */}
            {/* <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              We offer natural, herbal solutions to everyday challenges !
             
               
            </p> */}
            
            
          </div>
 
           

          {/* Our Products Section */}
          <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3 sm:mb-4">
              Shop
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/shop/vediccal-calcium-capsules-for-muscle-bone-health"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  VedicCal
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/vedicflx-capsules-for-joint-muscle-pain-relief"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  VedicFlx
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/vedicflx-oil-for-joint-muscle-pain-relief"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  VedicFlx Oil
                </Link>
              </li>

               <li>
                <Link
                  href="/shop/d-vedic-syrup-for-diabetic-care-patients-sugar-control-management"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  D Vedic Syrup
                </Link>
              </li>

               <li>
                <Link
                  href="/shop/d-vedic-tablets-medicine-for-diabetic-care-patients-sugar-control-management"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  D Vedic 
                </Link>
              </li>

               <li>
                <Link
                  href="/shop/vedic-shilajit-capsules-for-energy-boost-vitality-support"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Vedic Shilajit
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/terms-of-service"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </Link>
              </li> */}
              

               {/* <li>
                <Link
                  href="/gallery"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Gallery
                </Link>
              </li> */}
            </ul>
          </div>



        {/* information */}

        <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3 sm:mb-4">
             INFORMATION
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
               {/* <li>
                <Link
                  href="/blogs"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blogs
                </Link>
              </li> */}
              <li>
                <Link
                  href="/faq"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              
              <li>
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
                <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>

               <li>
                <Link
                  href="/refund-policy"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>


          {/* quick link */}
           {/* <div className="col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              
               <li>
                <Link
                  href="/blogs"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blogs
                </Link>
              </li>

               <li>
                <Link
                  href="/gallery"
                  className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              
              
              
              
                
            </ul>
          </div> */}

          {/* Newsletter Section */}
         <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 tracking-wider uppercase mb-3 sm:mb-4">
              Newsletter
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            
             

            <form onSubmit={handleSubscribe} className="space-y-2 sm:space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs text-black sm:text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                  required
                  disabled={isLoading}
                />
              </div>

              
              <div>
                <label className="block mb-1 text-xs text-gray-600">{captcha.question}</label>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Your answer"
                  disabled={isLoading}
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs text-black sm:text-sm border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || isSubscribed}
                className={`
                  group relative inline-block w-full overflow-hidden
                  bg-[#82a133] text-white font-medium py-3 px-6 rounded-md
                  text-sm transition-all duration-300 border border-transparent
                  hover:border-[#83BCA9] tracking-wider uppercase text-xs sm:text-sm
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                <span className="relative z-10 group-hover:text-[#82a133] transition-colors duration-300 whitespace-nowrap text-xs sm:text-sm md:text-base">
                  {isLoading ? 'Subscribing...' : isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </span>
                <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
              </button>
            </form>

            
           
            {isSubscribed && (
              <p className="text-xs sm:text-sm text-green-600 mt-2">
                Thank you for subscribing!
              </p>
            )}
            
            
            {error && (
              <p className="text-xs sm:text-sm text-red-600 mt-2">
                {error}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} Cure Ayurvedic. All rights reserved.
            </p>
            
            {/* Social Media Section */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <p className="text-xs sm:text-sm text-gray-600">Follow us on</p>
          <div className="flex space-x-3 sm:space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/cureayurvedicproducts"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-[#0165E1] sm:w-5 sm:h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/cureayurvedic/"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-[#E1306C] sm:w-5 sm:h-5" />
            </a>

            {/* X / Twitter */}
            <a
              href="https://www.linkedin.com/company/cureayurvedic/"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Twitter / X"
            >
              {/* <Twitter className="w-4 h-4 sm:w-5 sm:h-5" /> */}
              <Linkedin className="w-4 h-4 text-blue-500 sm:w-5 sm:h-5" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918800023120" // Replace with your real WhatsApp number
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4 text-green-500 sm:w-5 sm:h-5" />
            </a>


            {/* YouTube */}
            {/* <a
              href="https://www.youtube.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
            </a> */}
          </div>
           </div>
          </div>
        </div>
      </div>
    </footer>
  );
}