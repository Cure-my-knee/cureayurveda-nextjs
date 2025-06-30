 'use client'
import React, { useState, useEffect } from 'react';
import { Award, Beaker, TestTube, Droplet, Heart, Shield } from 'lucide-react';
import Button from '../ui/Button';
import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';
import Image from 'next/image';

 

// ScrollFadeUp Component
const ScrollFadeUp = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`scroll-${Math.random()}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={`scroll-${Math.random()}`}
      className={`transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function WhyChoose() {
  const features = [
    {
      icon: Award,
      title: "LICENSED",
      description: "Quality and purity is guaranteed"
    },
    {
      icon: Beaker,
      title: "NO HARMFUL CHEMICALS",
      description: "All natural ingredients"
    },
    {
      icon: TestTube,
      title: "LAB TESTED",
      description: "Rigorous quality control"
    },
    {
      icon: Droplet,
      title: "100% PURE",
      description: "No additives or fillers"
    },
    {
      icon: Heart,
      title: "CRUELTY FREE",
      description: "Never tested on animals"
    },
    {
      icon: Shield,
      title: "GMP QUALITY",
      description: "Good Manufacturing Practices"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Second Section - Heal Better Live Better */}
     
       <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white ">
  <div className="max-w-5xl mx-auto text-center">
    
    {/* Decorative Face Illustration - Bigger Image */}
    <div className="flex justify-center mb-6">
  <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
    <img
      src="/images/leaf/yellow-flower.png"
      alt="Ayurvedic Leaf"
      fill
      className="object-contain"
    />
  </div>
</div>


    {/* Main Heading */}
    <Title>
     HEAL BETTER. LIVE BETTER
    </Title>


    <Subtitle>
     It gives us great joy to take your experience of healing to the next level. We believe that the best cures exist in nature and our all natural cannabis extract and CBD based products provide you with the road to a healthier, happier life.

    </Subtitle>
    
  </div>
</section>


      {/* First Section - Why WholeLeaf */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-smoke">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Title> 
              <p className="text-sm tracking-wider text-gray-600 uppercase mb-4">
                QUALITY AND PURITY IS GUARANTEED
              </p>
            </Title>
            <Subtitle> 
              <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 tracking-wide">
                WHY CURE AYURVEDIC?
              </p>
            </Subtitle>
          </div>

          {/* Features Grid - Updated for mobile responsiveness */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6 mb-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-3 sm:mb-4 
                              transition-colors duration-300 group 
                              bg-[#82a133] hover:bg-white 
                              border-2 border-transparent hover:border-[#82a133]"
                  >
                    <IconComponent
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white transition-colors duration-300 group-hover:text-[#82a133]"
                    />
                  </div>

                  {/* Title */}
                  <div className="text-xs sm:text-sm font-medium text-gray-800 tracking-wider uppercase mb-2 px-1">
                    {feature.title}
                  </div>
                </div>
              );
            })}
          </div>

           
        </div>
      </section>
    </div>
  );
}