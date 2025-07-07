 'use client';

import React from 'react';
import { Thermometer, Heart, Hand, Bone, Flower2, Shield, Leaf, Accessibility } from 'lucide-react';
import ScrollFadeUp from '../ui/ScrollFadeUp';
import Title from '../ui/Title';

export default function Crt() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ScrollFadeUp>
            <Title>Our Ayurvedic Range</Title>
          </ScrollFadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Shilajit (Energy & Vitality) */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Leaf className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-green-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">SHILAJIT- ENERGY BOOSTER</h3>
              <p className="text-gray-700">
                Pure strength, straight from the mountain
              </p>
            </div>
          </ScrollFadeUp>

          {/* Diabetes Care */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Heart className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-red-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">DIABETES CARE</h3>
              <p className="text-gray-700">
                Ancient seed powder remedy for modern Diabetes
              </p>
            </div>
          </ScrollFadeUp>

          {/* Joint Care */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Hand className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-blue-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">JOINT CARE</h3>
              <p className="text-gray-700">
                Go-ghruta for healthy, pain-free joints
              </p>
            </div>
          </ScrollFadeUp>

          {/* Calcium Support */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Bone className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-indigo-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">CALCIUM SUPPORT</h3>
              <p className="text-gray-700">
                Ayurveda’s trusted bone rejuvenator
              </p>
            </div>
          </ScrollFadeUp>

          {/* Immunity Boosters */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Heart className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-pink-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">SUGAR MANAGEMENT</h3>
              <p className="text-gray-700">
                Gentle on the body, strong on sugar
              </p>
            </div>
          </ScrollFadeUp>

          {/* Joint Pain */}
           
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Accessibility className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-purple-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">JOINT PAIN</h3>
              <p className="text-gray-700">
                Effective in arthritis, sciatica & swollen joints
              </p>
            </div>
          </ScrollFadeUp>

        </div>
      </div>
    </section>
  );
}
