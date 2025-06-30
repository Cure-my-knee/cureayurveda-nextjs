 'use client'
import React, { useState, useEffect } from 'react';

export default function Button({ children, href = '#', className = '', ...props }) {
  return (
    <a
      href={href}
      className={`relative inline-block overflow-hidden bg-[#82a133] text-white font-medium py-3 px-6 rounded-md text-sm group transition-all duration-300 border border-transparent hover:border-[#83BCA9] ${className}`}
      {...props}
    >
      {/* Text layer */}
      <span className="relative z-10 group-hover:text-[#82a133] transition-colors duration-300 whitespace-nowrap text-xs sm:text-sm md:text-base">
        {children}
      </span>

      {/* Hover fill background */}
      <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
    </a>
  );
}

