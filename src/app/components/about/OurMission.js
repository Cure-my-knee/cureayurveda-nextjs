 'use client';

import React from 'react';
import { CheckCircle, Shield, Sparkles, Leaf, Heart, Target } from 'lucide-react';
import Subtitle from '../ui/Subtitle';

const Title = ({ children, className = "" }) => (
  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ${className}`}>
    {children}
  </h2>
);

const OurMission = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <Title>Our Purpose</Title>
          <Subtitle>Healing Through Nature</Subtitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Our Mission */}
          <div className="bg-white rounded-3xl shadow-md p-8 lg:p-10 border border-gray-200 transition hover:shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-[#586e20]" />
              <Title className="text-2xl sm:text-3xl lg:text-4xl">Our Mission</Title>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              At Cure Ayurvedic, we believe in <strong>Care before Cure</strong>. True wellness begins with nature. We provide pure and natural products crafted with authentic herbs to restore balance, boost immunity, and promote holistic wellness. By reviving timeless Ayurvedic principles, we offer safe, pure, and natural products that truly care for you.
            </p>

            <ul className="space-y-3">
              {[
                { icon: CheckCircle, text: 'Pure Herbs', color: 'text-[#586e20]' },
                { icon: CheckCircle, text: 'Natural Balance', color: 'text-[#586e20]' },
                { icon: CheckCircle, text: 'Holistic Wellness', color: 'text-[#586e20]' },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-gray-800">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-3xl shadow-md p-8 lg:p-10 border border-gray-200 transition hover:shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-[#586e20]" />
              <Title className="text-2xl sm:text-3xl lg:text-4xl">Our Vision</Title>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Our vision is to make Ayurvedic healing <strong>accessible, effective, and reliable</strong> for everyone. In today’s fast-paced world, people often suffer from chronic health issues, stress, and lifestyle imbalances. Most solutions offer only short-term relief or come with side effects. We are committed to changing that by offering natural, long-lasting wellness solutions.
            </p>

            <ul className="space-y-3">
              {[
                { icon: Shield, text: 'No Side Effects', color: 'text-[#586e20]' },
                { icon: Sparkles, text: 'Long-lasting Results', color: 'text-[#586e20]' },
                { icon: Leaf, text: 'Natural Solutions', color: 'text-[#586e20]' },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-gray-800">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurMission;
