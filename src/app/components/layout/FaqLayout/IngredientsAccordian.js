'use client';
import { useState } from 'react';

const IngredientsAccordion = ({ faqList = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Sample data if none provided
  

  const ingredients = faqList.length > 0 ? faqList : defaultIngredients;

  return (
    <div className="w-full max-w-6xl mx-auto p-0 sm:p-0 lg:p-0">
      {/* Heading */}
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl  text-black text-base mb-2">
          Key Ingredients
        </h2>
        <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-[#586e20] to-[#82a133]  rounded-full"></div>
      </div>

      {/* Accordion */}
      <div className="space-y-2 sm:space-y-3">
        {ingredients.map((ingredient, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-r from-[#586e20] to-[#82a133] rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-black/10 transition-colors duration-200 rounded-xl sm:rounded-2xl"
            >
              <span className="text-white  text-sm sm:text-base lg:text-lg  tracking-wide pr-4">
                {ingredient.title}
              </span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-white transform transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 pb-2 sm:pb-3' : 'max-h-0'
              }`}
            >
              <div className="px-3 sm:px-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    {ingredient.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
       
    </div>
  );
};

export default IngredientsAccordion;