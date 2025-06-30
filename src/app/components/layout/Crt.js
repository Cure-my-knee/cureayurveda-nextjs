 'use client';
import React from 'react';
import { Thermometer, Flower2, HeartPulse } from 'lucide-react';
import ScrollFadeUp from '../ui/ScrollFadeUp';
import Title from '../ui/Title';

export default function Crt() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ScrollFadeUp>
             
            <Title>
               Our Natural Solutions
            </Title>
          </ScrollFadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pain Relief */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 shadow-sm hover:shadow-md transition group">
              <Thermometer className="mx-auto mb-4 h-10 w-10 text-gray-900 transition-colors duration-300 group-hover:text-[#a3d9c7]" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Pain Relief</h3>
              <p className="text-gray-600">
                Natural topical solutions for targeted pain relief and muscle recovery.
              </p>
            </div>
          </ScrollFadeUp>

          {/* Skin Care */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 shadow-sm hover:shadow-md transition group">
              <Flower2 className="mx-auto mb-4 h-10 w-10 text-gray-900 transition-colors duration-300 group-hover:text-[#a3d9c7]" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Skin Care</h3>
              <p className="text-gray-600">
                Herbal formulations for healthy, radiant skin with natural ingredients.
              </p>
            </div>
          </ScrollFadeUp>

          {/* Wellness */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 shadow-sm hover:shadow-md transition group">
              <HeartPulse className="mx-auto mb-4 h-10 w-10 text-gray-900 transition-colors duration-300 group-hover:text-[#a3d9c7]" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Wellness</h3>
              <p className="text-gray-600">
                Comprehensive wellness solutions for mind and body balance.
              </p>
            </div>
          </ScrollFadeUp>
        </div>
      </div>
    </section>
  );
}
