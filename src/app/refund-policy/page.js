'use client'
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import Title from '../components/ui/Title';

export default function RefundPolicy() {
   const refundBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Refund' }
  ];
  return (
    <> 
    <BreadCrumbBanner title="Refund Policy"
    breadcrumbs={refundBreadcrumbs}/>
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
    <Title className='mt-10'>
        Return and Refund Policy
    </Title>

      

      {/* Main Content */}
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-12">
    
    {/* Return and Refund Policy Section */}
    <div className="mb-8 md:mb-12">

      {/* <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">Our Mission</span>
        Our mission is to bring natural, authentic Ayurvedic wellness to your doorstep.
        <br /><br />
        We understand that sometimes, things don't go as planned.
        <br />
        You may receive a damaged item, an incorrect product, or simply change your mind.
        <br />
        That's why we have a simple and transparent Return and Refund Policy designed to make your shopping experience easy, safe, and worry-free.
      </p> */}

      {/* <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">Our Promise to You</span>
        We stand behind the quality of every product we offer. Each item is carefully packed and checked before it reaches you. However, if there is an issue with your order, we promise to handle it quickly and fairly.
        <br />
        Our return and refund policy is guided by honesty, responsibility, and respect for our customers.
      </p> */}

      <div className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">When Can You Request a Return?</span>
        You can request a return if:
        <ul className="list-disc pl-6 mt-2">
          <li>You received a damaged or defective product.</li>
          <li>You received a wrong product that you did not order.</li>
          <li>The item is missing or incomplete in your package.</li>
          <li>The product expires upon delivery.</li>
        </ul>
        <br />
        To be eligible for a return, the product must be unused, unopened, and in the original packaging. Please raise a return request within 7 days of delivery.
      </div>

      <div className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">How to Raise a Return Request</span>
        Returning a product with Cure Ayurvedic is easy:
        <ul className="list-disc pl-6 mt-2">
          <li>Contact our customer care via phone, email, or website chat.</li>
          <li>Share your order number, clear photo and make a video of the item, and reason for return.</li>
          <li>Our team will verify the issue and guide you through the process.</li>
        </ul>
        <br />
        Once approved, we will arrange for the item to be picked up or advise on how to return it.
      </div>

      <div className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">Important Note – Non-Returnable Items</span>
        For health and hygiene reasons, some products are not eligible for return, including:
        <ul className="list-disc pl-6 mt-2">
          <li>Opened or used products</li>
          <li>Products returned after the 7-day return window, means the item was sent back after the allowed period of 7 days had passed.</li>
          <li>Customized Ayurvedic blends or personalized orders</li>
        </ul>
        <br />
        We request customers to check labels and expiry dates carefully before opening any product.
      </div>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">Who Bears the Return Shipping Cost?</span>
        If the return is due to our mistake (damaged, expired, or wrong item), Cure Ayurvedic will cover the return shipping costs.
        <br />
       
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">Exchange Policy</span>
        If you prefer an exchange instead of a refund, we will be happy to send you a replacement item. Exchange is possible only if the item is in stock and the return reason is valid.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">Contact Us Anytime</span>
        We are always ready to help you. If you face any issue with your order or have questions about returns or refunds, don't hesitate to contact our support team.
        <br /><br />
        Customer Care: +91 8800023120
        <br />
        Email: Contact@cureayurvedic.com 
        <br />
        
      </p>

    </div>

    {/* Domestic Shipment Section (Leave your existing code here unchanged) */}
    
  </div>
</div>




       
       
    </div>
    </>
  );
}