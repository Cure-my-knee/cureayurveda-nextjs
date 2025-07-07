 'use client';
import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';
import Image from 'next/image';

// ScrollFadeUp Component
const ScrollFadeUp = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
};

export default function WhyChoose() {
  return (
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Decorative Face Illustration - Bigger Image */}
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
              <Image
                src="/images/leaf/yellow-flower.png"
                alt="Ayurvedic Leaf"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Main Heading */}
          <Title>
            Rediscover ancient healing, with modern trust.
          </Title>

          <Subtitle>
            Cure Ayurvedic brings you the timeless power of Ayurveda, refined for today’s world. Our remedies are rooted in centuries-old traditions, backed by modern quality standards. Each product is crafted to restore balance, enhance well-being, and promote natural care.
          </Subtitle>
          
        </div>
      </section>
     
  );
}
