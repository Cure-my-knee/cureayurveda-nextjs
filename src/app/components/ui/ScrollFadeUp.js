// src/components/ui/ScrollFadeUp.js
'use client'

import { useEffect, useRef, useState } from 'react';

export default function ScrollFadeUp({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 animate-fade-up' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}
