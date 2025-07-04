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
    question: "What is Cure Ayurvedic?",
    answer: "Cure Ayurvedic is an online platform offering authentic Ayurvedic products based on traditional Indian knowledge and natural ingredients. We aim to bring holistic wellness to your doorstep."
  },
  {
    question: "Are Cure Ayurvedic products safe to use?",
    answer: "Yes, all our products are made from natural ingredients and are formulated under strict quality control. However, if you have any medical condition or are pregnant, please consult your doctor before use."
  },
  {
    question: "Do you offer consultation before buying a product?",
    answer: "Yes, Cure Ayurvedic offers online consultations where our Ayurveda experts can suggest products based on your health needs and symptoms."
  },
  {
    question: "What is your return and refund policy?",
    answer: "We accept returns if the product received is damaged, defective, wrong, or expired. The product must be unused, unopened, and reported within 7 days of delivery. Full details are available in our Return & Refund Policy section."
  },
  {
    question: "How long does delivery take?",
    answer: "Orders are usually dispatched within 2-3 business days. Delivery time varies based on location, but generally takes 3-15 business days across India."
  },
  {
    question: "Do you provide tracking for orders?",
    answer: "Yes, once your order is shipped, we will send you a tracking link via SMS or email. You can also check your order status in the 'My Orders' section on our website."
  },
  {
    question: "Can I cancel my order after placing it?",
    answer: "Yes, you can cancel your order if it hasn’t been shipped yet. Please contact our support team by phone or email. Once shipped, the order cannot be cancelled, but you may return it as per our return policy."
  },
  {
    question: "Do Cure Ayurvedic products cure diseases?",
    answer: "No, our products are not intended to diagnose, treat, cure, or prevent any disease. They are Ayurvedic wellness products meant to support your health naturally."
  },
  {
    question: "Is my personal data safe with Cure Ayurvedic?",
    answer: "Yes, we take your privacy seriously. Your data is used only for processing your order and improving your experience. We never share your personal details with third parties except for delivery and payment purposes."
  },
  {
    question: "How can I contact Cure Ayurvedic customer support?",
    answer: "You can reach us through phone, email, or website chat. Visit our Contact Us page for more details."
  }
];

  return (
    <div className="pt-16 pb-8 bg-gradient-to-br px-4 sm:px-6 lg:px-8 bg-gray-50 ">
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
