'use client'
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import Title from '../components/ui/Title';

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
          
          {/* General Shipping Info */}
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

          {/* Domestic Shipment Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
              Domestic Shipment
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Shipping charges will be calculated based on the location and weight of the products. Even 
              though we try our best to make this page as accurate as possible, we can make certain conditions under which the
            </p>
          </div>

          {/* Additional Information Cards */}
           
          

        </div>
      </div>

       
       
    </div>
    </>
  );
}