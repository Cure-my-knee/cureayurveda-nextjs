// 'use client'
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import Title from '../components/ui/Title';

// seo meta tag
export const metadata = {
  title: 'Terms of service test- Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  // robots: 'noindex, nofollow',
};

export default function TermsService() {

   const termsBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms' }
  ];

  return (
    <> 
    <BreadCrumbBanner title="Terms Of Service"
    breadcrumbs={termsBreadcrumbs}/>
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
    <Title className='mt-10'>
        Terms Of Service
    </Title>

      

      {/* Main Content */}
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-12">

    {/* Terms of Service Section */}
    <div className="mb-8 md:mb-12">
      

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        Welcome to Cure Ayurvedic. By accessing or using our website, placing an order, or engaging with our services, you agree to be bound by these Terms of Service. Please read them carefully before using our website.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">1. Product Information</span>
        All products listed on our website are described to the best of our ability and based on Ayurvedic knowledge. However, we do not guarantee the accuracy, completeness, or suitability of product descriptions or other content for your specific needs.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">2. Health Disclaimer</span>
        Cure Ayurvedic products are not intended to diagnose, treat, cure, or prevent any disease. Please consult a qualified healthcare professional before using any Ayurvedic product, especially if you are pregnant, nursing, or have a medical condition.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">3. Order Acceptance and Cancellation</span>
        We reserve the right to accept or decline any order placed through our website. Orders can be cancelled before shipment by contacting our customer care team. Once shipped, cancellation is not possible, but you may request a return according to our Return & Refund Policy.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">4. Pricing and Payment</span>
        All prices listed on the website are in Indian Rupees (INR) and are subject to change without prior notice. Payments must be made through our approved payment gateways. Cure Ayurvedic is not responsible for any issues arising from third-party payment providers.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">5. Shipping and Delivery</span>
        We strive to deliver your order within the estimated time. However, delays may occur due to unforeseen circumstances. Detailed information about shipping can be found in our Shipping Policy.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">6. Return and Refund Policy</span>
        Our return and refund terms are outlined in detail in our Return & Refund Policy page. Please review them before initiating a return.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">7. Intellectual Property</span>
        All content on this website, including images, text, logos, and graphics, is the property of Cure Ayurvedic. You may not reproduce, distribute, or use any content without written permission.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">8. Limitation of Liability</span>
        Cure Ayurvedic shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our products or website.
      </p>

      {/* <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">9. Governing Law</span>
        These Terms of Service shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts located in [Your City, India].
      </p> */}

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">9. Contact Us</span>
        If you have any questions about these Terms, please contact us at:
        <br /><br />
        Customer Care: [Phone Number]<br />
        Email: [Email Address]<br />
         
      </p>
    </div>

  </div>
</div>


       
       
    </div>
    </>
  );
}