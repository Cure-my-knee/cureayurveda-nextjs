 // components/ui/Subtitle.js
 'use client';

import React, { useState, useEffect } from 'react';
import ScrollFadeUp from './ScrollFadeUp';

export default function Subtitle({ children, className = '' }) {
  return (
     <ScrollFadeUp> 
    <h4
      className={` text-center tracking-wide ${className}`}
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '19.8px',
        color: 'rgb(28, 27, 27)',
      }}
    >
      {children}
    </h4>
    </ScrollFadeUp>
  );
}


