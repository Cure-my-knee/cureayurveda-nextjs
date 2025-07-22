 'use client';

import { useState } from 'react';

const FAQAccordion = ({ faqList }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#cdd8a3] rounded-lg shadow-md p-6 sticky top-4 border border-[#586e20]">
      <h3 className="text-2xl font-bold text-[#586e20] mb-4">Key Ingredients</h3>
      <div className="space-y-4">
        {faqList.map((faq, index) => (
          <div key={index} className="border border-[#cdd8a3]  rounded bg-white">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-[#586e20] text-lg hover:bg-[#eef6dd] transition"
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
              <p className="text-[#4d4d4d] text-justify text-base leading-relaxed">
                {faq.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
