 "use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Title from '../ui/Title';
import Subtitle from '../ui/Subtitle';
// import FAQSection from './FaqContact';

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
    question: "How do I sign up for a Cure Ayurvedic account?",
    answer: "To sign up for a cure ayurvedic, at first you have to visit the website and navigate the registration or sign-up page. You need to put your basic information like name, email, and address."
  },
  {
    question: "How to login into my account?",
    answer: "To sign into your account, you generally need to go to the login page of the service you want to access and enter your username (or email address) and password."
  },
  {
    question: "How do I place my order with Cure Ayurvedic?",
    answer: "To place your order with Cure Ayurvedic, visit their website with your product details and delivery address. Choose your payment method (online or COD) and confirm the order."
  },
  {
    question: "Where is my order? How can I track my order?",
    answer: "To track your Cure Ayurvedic order, check the SMS you received after placing the order, it usually contains a tracking link or order ID. If not, contact their customer support directly with your order number for an update."
  },
  {
    question: "Can I buy multiple products in single order?",
    answer: "Yes, you can! Just add multiple items to your cart, whether you're ordering via their website or WhatsApp, and then place a single combined order with all your chosen products."
  },
  // {
  //   question: "Do you provide tracking for orders?",
  //   answer: "Yes, once your order is shipped, we will send you a tracking link via SMS or email. You can also check your order status in the 'My Orders' section on our website."
  // },
  {
    question: "Can I make multiple accounts at the same address?",
    answer: "Generally, yes, you can create multiple Cure Ayurvedic accounts using the same delivery address as long as each account has a unique email or mobile number. Many platforms allow this to enable separate profiles even if they deliver to the same location. If you're unsure or run into any issues, it's best to check with their customer support for confirmation."
  },
  {
    question: "Can I leave items in my cart for future purchase?",
    answer: "Yes! You can definitely leave items in your cart for future purchase on Cure Ayurvedic , most e-commerce platforms save your cart across sessions as long as you're logged in. Simply add the products you want, log out, and when you return later (or on another device), your cart should still hold them. If you're not logged in or they don’t support that feature, your cart might clear after a certain time or when cookies reset, so staying signed in is your best bet!"
  },
  {
    question: "What are the modes of payment? ",
    answer: "Cure Ayurvedic accepts UPI, credit/debit cards, net banking, wallets, and cash on delivery. Choose your preferred option at checkout for a smooth payment experience."
  },
  {
    question: "What should I do if my payment fails?",
    answer: "If your payment fails, retry using a stable internet connection or switch to another payment method. If the issue persists, contact Cure Ayurvedic’s support team for assistance."
  },
  {
    question: "I am unable to make the payment. What should I do?",
    answer: "If you're unable to make the payment, try a different method like UPI or card and ensure your internet is stable. If it still doesn’t work, contact Cure Ayurvedic’s support for help."
  },
  {
    question: "How do I get billing details?",
    answer: "You can get your billing details via the confirmation email  sent after your order. If not received, contact Cure Ayurvedic’s support with your order ID."
  },
  {
    question: "Can I place an order over the phone?",
    answer: "Yes, you can place an order over the phone, just call Cure Ayurvedic’s customer support and provide your product choices, delivery address, and payment preference. They’ll process your order and confirm everything via a callback or message. "
  },
  // update
  {
    question: " How to change my address on a website? ",
    answer: "To change your address on the website, go to your account/profile section and click on “Edit” or “Manage Address.” Update the details and save the changes before placing your order.  "
  },
  {
    question: " Can I change my phone number on a website? ",
    answer: " Yes, go to your account settings or profile section on the website and click “Edit” next to your phone number. Enter the new number and save the changes. "
  },
  {
    question: " Is COD available on Cure Ayurvedic? ",
    answer: "  Yes , Cure Ayurvedic offers Cash on Delivery (COD) for orders in supported areas, so you can conveniently pay in cash when your products arrive. Just select COD at checkout or mention it if you’re ordering by phone."
  },
  {
    question: " Is COD available for delivery to all locations in India? ",
    answer: "Cash on Delivery (COD) with Cure Ayurvedic is available across major metros, Tier‑II, and Tier‑III cities nationwide, with no extra charges, delivered via courier services like Blue Dart or FedEx.If your location is remote or outside these zones, COD might not be offered, so please check at checkout or contact customer support to confirm  "
  },
  {
    question: " If my amount is deducted but my order is not confirmed. What should I do? ",
    answer: "If your amount is deducted but the order isn’t confirmed, wait a few minutes and check your email or SMS for updates. If there's still no confirmation, contact Cure Ayurvedic’s support with your payment details.  "
  },
  {
    question: " How can I cancel my order?",
    answer: "To cancel your order, go to your account’s order section and select “Cancel Order” if the option is available. Alternatively, contact Cure Ayurvedic’s support team with your order ID for quick cancellation. "
  },
  {
    question: " How can I return my order? ",
    answer: "Go to the “My Orders” section, select the item you want to return.Click on “Return” and follow the instructions to complete the process.  "
  },
  {
    question: " What is your return and refund policy? ",
    answer: " Our return and refund policy allows returns within 30 days of delivery for full refund if items are unused and in original condition. Refunds are processed within 2-3  business days after we receive and inspect the returned item. "
  },
  {
    question: " How will I get a refund for the cancelled order? ",
    answer: "Refund for a cancelled order is processed automatically to your original payment method. It typically takes 5–7 business days for the amount to reflect in your account.  "
  },
  {
    question: "  My order was returned without any delivery attempt. What should I do?",
    answer: " Please contact customer support with your order ID for assistance.You can also reorder the item if it's still available. "
  },
   {
    question: " Is there a minimum order value for purchases on Cure Ayurvedic? ",
    answer: "  There’s no minimum order value to make a purchase on Cure Ayurvedic, you can order any product on its own."
  },
   {
    question: " What should I do if the delivery of my order is delayed? ",
    answer: "Please check your order status in the “Track Order” section for any updates. If it’s still delayed, contact customer support with your order ID, they’ll help resolve the issue   "
  },
   {
    question: " How much time does it take for order delivery? ",
    answer: " Orders are usually delivered within 3 to 7 business days, depending on your location.You can track your shipment in the “My Orders” section for real-time updates. "
  },
   {
    question: "How to contact your customer care?  ",
    answer: " You can reach our Customer Care team via the “Help” or “Contact Us” section on our website.Alternatively, email us at contact@cureayurvedic.com or call 880023120 for immediate assistance. "
  },
   {
    question: " How to collaborate with Cure Ayurvedic? ",
    answer: " To explore collaboration opportunities with Cure Ayurvedic, please reach out to contact@cureayurvedic.com with your proposal.Our Partnerships Team will review and get back to you within 2 business days. "
  },
];

  return (
    <> 
    <div className="pt-16 pb-8 bg-gradient-to-br px-4 sm:px-6 lg:px-8 bg-[#ffff]">
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
    {/* <FAQSection /> */}
    </>
  );
};

export default FAQAccordion;
