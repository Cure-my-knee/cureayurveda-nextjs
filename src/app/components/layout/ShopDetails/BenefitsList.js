// components/BenefitsList.js
'use client';
import React from 'react';

const BenefitsList = ({ 
  title = "WHY CHOOSE ORTHODEXIL OVER OTHERS?",
  benefits = [
    'Potent cannabinoid-based pain relief as opposed to superficial numbing of the skin',
    'Natural and safe for long-term use',
    'Formulated specifically to relieve joint pain and inflammation',
    'Addresses underlying inflammation, not just symptoms',
    'Fast-acting and long-lasting relief'
  ]
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-md mx-auto">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsList;