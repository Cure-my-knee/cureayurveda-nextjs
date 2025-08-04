// 'use client'
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import Title from '../components/ui/Title';

// seo meta tag
export const metadata = {
  title: 'Return - Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  // robots: 'noindex, nofollow',
};

export default function ReturnPolicy() {
   const returnBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Return' }
  ];
  return (
    <> 
    <BreadCrumbBanner title="Return Policy"
    breadcrumbs={returnBreadcrumbs}/>
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
    <Title className='mt-10'>
        Return Policy
    </Title>

      

      {/* Main Content */}
      {/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 lg:p-12">
          
          
          <div className="mb-8 md:mb-12">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              We can ship products almost anywhere in India other than a few locations, which our logistic 
              partners do not serve. When you place an order, we will estimate delivery dates based upon the 
              availability of your item(s) and your shipment's destination. The estimated delivery dates may 
              however differ from actual delivery dates and a failure to comply with the estimated delivery 
              date will not give rise to any cause of action against us. We usually get your shipment delivered 
              within 3 - 15 business days of your placing the order on our website depending on the location.
            </p>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              If there is any further delay in shipping the products, one of our customer support executives will 
              contact you regarding the same.
            </p>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We use high quality corrugated shipping box and plain tamper proof courier bags to reduce 
              transit breakage and pilferage. Our courier partner captures non-delivered items information in 
              real time and tries to deliver the next day.
            </p>
          </div>

         
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
              Domestic Shipment
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Shipping charges will be calculated based on the location and weight of the products. Even 
              though we try our best to make this page as accurate as possible, we can make certain conditions under which the
            </p>
          </div>

           
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
         
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Delivery Time</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Standard delivery within 3-15 business days across India
              </p>
            </div>

            
            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Secure Packaging</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                High-quality corrugated boxes and tamper-proof courier bags
              </p>
            </div>

             
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Customer Support</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Proactive communication about any shipping delays
              </p>
            </div>

            
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Real-time Tracking</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Live tracking of non-delivered items with next-day delivery attempts
              </p>
            </div>
          </div>

      
          <div className="mt-8 md:mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-4 md:p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-yellow-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm md:text-base font-medium text-yellow-800">
                  Important Notice
                </h3>
                <p className="mt-1 text-sm md:text-base text-yellow-700">
                  Estimated delivery dates may vary from actual delivery dates. We are not liable for delays beyond our control.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div> */}

       
       
    </div>
    </>
  );
}