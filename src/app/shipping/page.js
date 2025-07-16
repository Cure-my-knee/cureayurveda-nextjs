// 'use client'
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import Title from '../components/ui/Title';


// seo meta tag
export const metadata = {
  title: 'Shipping Policy - Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  robots: 'noindex, nofollow',
};

export default function ShippingPolicy() {
   const shippingBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shipping' }
  ];

  return (
    <> 
    <BreadCrumbBanner title="Shipping Policy"
    breadcrumbs={shippingBreadcrumbs} />
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
    <Title className='mt-10'>
        Shipping Policy
    </Title>

      

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-12">
    
    {/* General Shipping Info */}
    <div className="mb-8 md:mb-12">
      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        Cure Ayurvedic currently delivers PAN India.
        Our goal is to ensure that anyone seeking natural healing can access our trusted ayurvedic products no matter where they live in India.
        Once you place an order with Cure Ayurvedic, our team begins processing it immediately.
        Orders are usually dispatched within 2 to 3 business days depending on availability of the product.
        If your order is placed during weekends or holidays, processing will begin on the next working day.
        We make sure every product is carefully packed and checked before it is shipped out, ensuring you receive only the highest quality.
        Delivery time may vary depending on your location.
      </p>

      <div className="text-gray-700 text-base text-justify leading-relaxed mb-6 mt-6">
        <ul className="list-disc pl-6">
          <li>Please note that these are estimated delivery times. Delays due to weather, courier partner issues, or government restrictions may occasionally happen, but we will keep you informed in such cases.</li>
          <li>Once your order is shipped, you will receive a tracking link via SMS or email. This will allow you to track the status of your order in real-time.</li>
          <li>You can also log into your Cure Ayurvedic account and check the "My Orders" section to view the tracking details and shipping status.</li>
          <li>We strive to deliver all products on time. If your order seems delayed or hasn't arrived within the estimated time, please contact our customer support.</li>
          <li>We will immediately get in touch with our courier partners and resolve the issue as quickly as possible.</li>
          <li>For missing packages or if the order shows delivered but you haven't received it, please contact us within 48 hours of the marked delivery date so we can assist you properly.</li>
          <li>We follow strict safety measures during packing and shipping to ensure no contamination or damage occurs during transit.</li>
          <li>If you change your mind after placing an order, you can cancel it as long as it hasn't been shipped.</li>
        </ul>
      </div>

      <div className="text-gray-700 text-base text-justify leading-relaxed mb-6 mt-6">
        <ul className="list-disc pl-6">
          <li>To cancel, simply contact our support team via phone or email. Once shipped, the order cannot be cancelled but you can still return it following our return policy.</li>
          <li>If you have any questions about your shipment or need help with an order, feel free to reach out. We're always here to help you on your ayurvedic journey.</li>
          <li>The estimated delivery dates are provided for reference only and may vary from the actual delivery dates. Any delay in delivery shall not constitute grounds for any claim or legal action against us.</li>
        </ul>
      </div>
    </div>

  </div>
</div>


       
       
    </div>
    </>
  );
}