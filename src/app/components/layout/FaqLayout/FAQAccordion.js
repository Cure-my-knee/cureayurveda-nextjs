'use client'; // Needed for state in Next.js app router

import { useState } from 'react';

const FAQAccordion = ({ faqList }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Ingredients</h3>
      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-900  text-lg hover:bg-gray-50 transition"
            >
              <span>{faq.title}</span>
              <span className="text-xl transform transition-transform duration-300">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${
                openIndex === index ? 'max-h-[300px] py-2' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700 text-justify text-base leading-relaxed">{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
