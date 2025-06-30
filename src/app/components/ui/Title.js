 // components/ui/Title.js
 'use client';

import React, { useState, useEffect } from 'react';
import ScrollFadeUp from './ScrollFadeUp';

export default function Title({ children, className = '' }) {
  return (
     <ScrollFadeUp> 
    <h3
      className={`tracking-wide text-center uppercase ${className}`}
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '33px',
        color: 'rgb(28, 27, 27)',
      }}
    >
      {children}
    </h3>
    </ScrollFadeUp>
  );
}


