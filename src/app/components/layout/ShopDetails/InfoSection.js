// components/InfoSection.js
'use client';
import React, { useState } from 'react';

const InfoSection = ({ 
  sections = [
    {
      title: "OUR GUARANTEE",
      content: "We stand behind our product with a satisfaction guarantee. If you're not completely satisfied with the results, we offer a full refund within 30 days of purchase.",
      isExpanded: false
    },
    {
      title: "BENEFITS", 
      content: "Experience natural pain relief with our CBD-rich formula that targets inflammation at its source, providing both immediate and long-lasting relief.",
      isExpanded: false
    },
    {
      title: "HOW & WHEN TO USE",
      content: "Apply 2-3 drops to the affected area and gently massage until absorbed. Use 2-3 times daily or as needed. For best results, use consistently for at least 2 weeks.",
      isExpanded: false
    },
    {
      title: "WHO CAN USE",
      content: "Suitable for individuals with chronic or long-term pain conditions seeking a natural and effective solution.",
      isExpanded: true
    }
  ]
}) => {
  const [expandedSections, setExpandedSections] = useState(
    sections.reduce((acc, section, index) => {
      acc[index] = section.isExpanded;
      return acc;
    }, {})
  );

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto overflow-hidden">
      {sections.map((section, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => toggleSection(index)}
            className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-800 text-sm sm:text-base pr-2">{section.title}</span>
            <span className="text-gray-500 text-lg flex-shrink-0">
              {expandedSections[index] ? '−' : '+'}
            </span>
          </button>
          {expandedSections[index] && (
            <div className="px-4 pb-4">
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InfoSection;