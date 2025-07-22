 // components/TopBanner.js
'use client'
import React, { useState, useEffect } from 'react';
 

export default function TopHeader() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#586e20] text-white py-2 px-4 text-center">
      <p className="text-sm font-medium text-white" >
       Grab 10% OFF – Limited Time Only!
      </p>
      
    </div>
  );
}
