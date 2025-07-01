'use client'
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import Title from '../components/ui/Title';

export default function TermsService() {

   const termsBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms and Conditions' }
  ];

  return (
    <> 
    <BreadCrumbBanner title="Terms and Conditions"
    breadcrumbs={termsBreadcrumbs}/>
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
    <Title className='mt-10'>
       Terms and Conditions
    </Title>

      

      {/* Main Content */}
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-12">

    {/* Terms of Use Section */}
    <div className="mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-semibold text-black mb-4 md:mb-6">Terms of Use</h2>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        By accessing or using Cure Ayurvedic's website, products, or services, you agree to comply with and be bound by the following Terms of Use. Please review these terms carefully before using our website.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">1. Use of Website</span>
        The content of this website is for your general information and personal use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">2. Intellectual Property Rights</span>
        All content on this website, including text, graphics, logos, images, and software, is the property of Cure Ayurvedic. You may not reproduce, distribute, or exploit any content without prior written permission.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">3. User Responsibilities</span>
        You agree not to use the website for any unlawful purpose or in a way that could harm, disable, or impair the site. Misuse of the website is strictly prohibited.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">4. Accuracy of Information</span>
        While we strive for accuracy, we do not guarantee that all information on the website is complete, accurate, or current. Any reliance on the material on this site is at your own risk.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">5. External Links</span>
        This website may contain links to other websites for your convenience. These links do not signify our endorsement, and we have no responsibility for the content of linked websites.
      </p>

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">6. Limitation of Liability</span>
        Cure Ayurvedic shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or products.
      </p>

      

      <p className="text-gray-700 text-base text-justify leading-relaxed mb-6">
        <span className="font-semibold text-black block mb-2">7. Contact Information</span>
        If you have any questions regarding these Terms of Use, please contact us at:
        <br /><br />
        Customer Care: +91 8800023120<br />
        Email: Contact@cureayurvedic.com <br />
         
      </p>
    </div>

  </div>
</div>


       
       
    </div>
    </>
  );
}