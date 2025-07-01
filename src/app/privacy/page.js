'use client'
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import Title from '../components/ui/Title';

export default function PrivacyPolicy() {

   const privacyBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Privacy' }
  ];

  return (
    <> 
    <BreadCrumbBanner  title="Privacy Policy"
    breadcrumbs={privacyBreadcrumbs} />
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
    <Title className='mt-10'>
        Privacy Policy
    </Title>

      

      {/* Main Content */}
     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-12">
    
    {/* Privacy Policy Section */}
    <div className="mb-8 md:mb-12">
      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        Your privacy is very important to us. We believe that health is personal, and so is your information.
        Cure Ayurvedic provides products and services based on traditional Ayurvedic knowledge and natural ingredients. However, we do not provide any warranty or guarantee (express or implied) regarding the accuracy, effectiveness, completeness, or suitability of the products for your individual needs.
      </p>

      <div className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        By using our products, you acknowledge and agree that:
        <ul className="list-disc pl-6 mt-2">
          <li>Results may vary from person to person.</li>
          <li>Our products are not a substitute for medical treatment.</li>
          <li>We do not claim to cure any disease.</li>
          <li>Cure Ayurvedic does not offer any warranties related to the performance, results, or outcomes of the product or service.</li>
          <li>All use is at your own discretion and responsibility.</li>
        </ul>
        Whether you are buying a herbal remedy, signing up for our newsletter, or just visiting our website, we are committed to keeping your personal data safe and secure.
        <br />
        We also protect your personal information with the same care. Our privacy policy is designed to give you peace of mind, knowing that your data is secure, private, and handled with transparency.
      </div>

      <div className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        What Information Do We Collect?
        <ul className="list-disc pl-6 mt-2">
          <li>Personal details: Your name, phone number, email address, and address when you place an order or contact us.</li>
          <li>Health information: If you consult us or use our online services, we may collect details related to your health or symptoms to suggest the best ayurvedic solution.</li>
          <li>Payment details: When you make a purchase, your payment information is processed securely through trusted payment gateways.</li>
          <li>Website usage data: We may track your activity on our website (pages you visit, time spent, etc.) using cookies and analytics tools.</li>
        </ul>
        <br /><br />
        Do We Share Information With Anyone?
        <ul className="list-disc pl-6 mt-2">
          <li>With service partners (like delivery companies or payment processors) to fulfill your order.</li>
          <li>With legal authorities, if required by law for safety or legal compliance.</li>
        </ul>
        In all such cases, we ensure these partners also follow strict privacy guidelines.
        <br /><br />
        Cure Ayurvedic may update this privacy policy from time to time as needed. If you have any questions about our privacy practices, feel free to contact us through our website.
      </div>
    </div>

    {/* Domestic Shipment Section (Leave your existing code here unchanged) */}
    
  </div>
</div>



       
       
    </div>
    </>
  );
}