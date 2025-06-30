 "use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "What is Next.js and why should I use it?",
      answer: "Next.js is a React framework that provides features like server-side rendering, static site generation, and automatic code splitting. It's perfect for building fast, SEO-friendly web applications with minimal configuration.",
    },
    {
      question: "How do I get started with Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework. You can install it via npm, configure it in your project, and start using utility classes like 'bg-blue-500', 'text-white', and 'p-4' to style your components quickly and efficiently.",
    },
    {
      question: "What are the benefits of using React hooks?",
      answer: "React hooks allow you to use state and other React features in functional components. They make code more reusable, easier to test, and help you avoid the complexities of class components while maintaining clean, readable code.",
    },
    {
      question: "How can I make my website mobile responsive?",
      answer: "Use responsive design principles with CSS Grid, Flexbox, and media queries. Tailwind CSS makes this easier with responsive prefixes like 'sm:', 'md:', 'lg:', and 'xl:' that apply styles at different screen sizes.",
    },
    {
      question: "What's the difference between SSR and SSG?",
      answer: "Server-Side Rendering (SSR) generates pages on each request, while Static Site Generation (SSG) pre-builds pages at build time. SSG is faster for static content, while SSR is better for dynamic content that changes frequently.",
    },
  ];

  return (
    <div className="pt-16 pb-8 bg-gradient-to-br from-slate-50 to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto  pt-8">

        {/* Title & Subtitle */}
        <div className="text-center mb-10 ">
          <Title>FAQ</Title>
          <Subtitle>Frequently Asked Questions</Subtitle>
           
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm transition duration-300 overflow-hidden border"
              style={{ borderColor: "#83BCA9" }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 py-4 sm:px-6 sm:py-5 text-left focus:outline-none hover:bg-gray-50 transition duration-200"
                aria-expanded={openItems[index] ? "true" : "false"}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                 <p className="fontFamily: 'Montserrat, sans-serif',
                  fontSize: '20px',
                  fontWeight: 500,
                  lineHeight: '33px',
                  color: 'rgb(28, 27, 27)',">
                  {item.question}
                </p>

                  {openItems[index] ? (
                    <ChevronUp className="w-5 h-5 text-[#83BCA9]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openItems[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 sm:px-6 sm:pb-5">
                  <div
                    className="border-t pt-3 text-gray-700 text-sm sm:text-base leading-relaxed"
                    style={{ borderColor: "#83BCA9", borderTopWidth: "1px" }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm sm:text-base">
            Still have questions? Feel free to reach out to our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
