 "use client"
import React, { useState, useEffect } from 'react';
import Button from '../../ui/Button';
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';
import { useRouter } from 'next/navigation';

 

const tabsData = {
  JOINTCARE: {
    title: 'Joint care',
    description:
      'Strengthen your joints naturally with ayurvedic care enriched with calcium, supports joint flexibility, reduces pain and promotes long-term mobility. A holistic solution for joint nourishment, repair and lasting comfort.',
    image:
      '/images/banner/herobanner4.jpg',
  },
  DIABETES: {
    title: 'Diabetes',
    description:
      'Balance your blood sugar naturally with trusted ayurvedic formulations. Enriched with herbs that support insulin function and metabolic health. A gentle long-term solution for effective diabetes management.',
    image:
      '/images/banner/herobanner5.jpg',
  },
   ENERGYBOOSTER: {
    title: 'Energy Booster',
    description:
      'Recharge your body and mind with the power of pure Ayurvedic shilajit which boosts stamina, strength and overall vitality naturally. A daily dose of energy, endurance and rejuvenation from within.',
    image:
      '/images/banner/herobanner7.jpg',
  },
};

const CBDProductLanding = () => {
  const [selectedTab, setSelectedTab] = useState('JOINTCARE');

  const { title, description, image } = tabsData[selectedTab];

  const router = useRouter();


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="text-center py-8 px-4">

        <Title>
           NATURAL REMEDIES FOR MODERN LIFESTYLE CHALLENGES
        </Title>

        <Subtitle>
           Choose nature’s answer to joint pain, fatigue, and blood sugar imbalance
        </Subtitle>
        
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        {/* Right Corner Image - Positioned absolutely with animations */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-10">
          <img
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          style={{ animation: "bounce 3s infinite" }} // Slow bounce (3s duration)
          src="/images/leaf/watermelon2.png"
          alt="Icon"
        />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Product Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden shadow-lg h-96">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0" />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="bg-white p-6 rounded-lg transition-all duration-500">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 tracking-wide">
                {title}
              </h2>
              <p className="text-gray-600 text-justify md:text-lg leading-relaxed mb-8">
                {description}
              </p>
              <Button onClick={() => router.push('/shop')}>
                View Products
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Pills (Tabs) */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          {Object.keys(tabsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-colors duration-200 ${
                selectedTab === tab
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CBDProductLanding;