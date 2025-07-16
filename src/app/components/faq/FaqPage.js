
'use client';

import React from 'react';
import BreadCrumbBanner from '../layout/BreadCrumbBanner';
import FAQAccordion from './FAQAccordion';
import FaqContact from './FaqContact';
 

// seo meta tag
export const metadata = {
  title: 'FAQ - Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  robots: 'noindex, nofollow',
};

const FaqPage = () => {
  const faqBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'FAQ' }
  ];

  return (
    <div className='bg-[#ffff]'>
      <BreadCrumbBanner
        title="FAQ"
        breadcrumbs={faqBreadcrumbs}
      />

      {/* Main content section with max width and 60/40 layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* FAQ Content - 60% width */}
          <div className="lg:col-span-3">
            <FAQAccordion />
          </div>
          
          {/* Right Banner - 40% width */}
          <div className="lg:col-span-2 mt-8 lg:mt-24">
            <div className="sticky top-32 space-y-6">
              
              {/* Main Banner */}
              <div className="bg-[#ffff] text-white rounded-xl shadow-lg">
               
                <FaqContact />
              </div>

              {/* Secondary Banner */}
              <div className="bg-gradient-to-r from-[#82a133] to-[#ffff] text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2">
                    📚 Knowledge Base
                  </h4>
                  <p className="text-orange-100 mb-4 text-sm">
                    Explore our comprehensive guides and tutorials
                  </p>
                  <button className="bg-white/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors">
                    Browse Articles
                  </button>
                </div>
              </div>

              {/* New Banner Image */}
              <div>
                <img
                  src="https://img.freepik.com/premium-photo/faq-banner_818056-1711.jpg" // 🔁 Change this to your image path
                  alt="FAQ Support Banner"
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FaqPage;
