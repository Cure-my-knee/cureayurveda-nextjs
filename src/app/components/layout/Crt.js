 'use client';

import React from 'react';
import { Thermometer, Flower2, HeartPulse, Droplet, Shield, Leaf } from 'lucide-react';
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
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Shilajit - Energy & Vitality</h3>
              <p className="text-gray-700">
                Natural source of minerals and fulvic acid to boost stamina, strength, and overall vitality.
              </p>
            </div>
          </ScrollFadeUp>

          {/* Diabetes Care */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Droplet className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-orange-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Diabetes Care</h3>
              <p className="text-gray-700">
                Herbal formulations to help manage blood sugar levels and promote metabolic balance.
              </p>
            </div>
          </ScrollFadeUp>

          {/* Pain Relief */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Thermometer className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-red-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Pain Relief</h3>
              <p className="text-gray-700">
                Natural topical and oral solutions for joint pain, back pain, and muscular discomfort.
              </p>
            </div>
          </ScrollFadeUp>

          {/* Calcium Support */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Shield className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-indigo-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Calcium Support</h3>
              <p className="text-gray-700">
                Ayurvedic sources of natural calcium for stronger bones and better joint health.
              </p>
            </div>
          </ScrollFadeUp>

          {/* Immunity Boosters */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <HeartPulse className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-pink-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Immunity Boosters</h3>
              <p className="text-gray-700">
                Powerful herbal blends like Giloy, Ashwagandha, and Tulsi to strengthen your immunity.
              </p>
            </div>
          </ScrollFadeUp>

          {/* Skin Care */}
          <ScrollFadeUp>
            <div className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition group">
              <Flower2 className="mx-auto mb-4 h-10 w-10 text-[#586e20] transition-colors duration-300 group-hover:text-purple-700" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Skin Care</h3>
              <p className="text-gray-700">
                Herbal creams, oils, and powders for glowing, healthy, and nourished skin.
              </p>
            </div>
          </ScrollFadeUp>

        </div>
      </div>
    </section>
  );
}

