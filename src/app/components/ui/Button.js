 'use client';
import React from 'react';

export default function Button({ children, onClick, className = '', ...props }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault(); // 🛑 Stop anchor from navigating
        if (onClick) onClick(e); // ✅ Trigger passed-in click handler
      }}
      className={`relative inline-block overflow-hidden bg-[#82a133] text-white font-medium py-3 px-6 rounded-md text-sm group transition-all duration-300 border border-transparent hover:border-[#83BCA9] ${className}`}
      {...props}
    >
      <span className="relative z-10 group-hover:text-[#82a133] transition-colors duration-300 whitespace-nowrap text-xs sm:text-sm md:text-base">
        {children}
      </span>
      <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
    </a>
  );
}
