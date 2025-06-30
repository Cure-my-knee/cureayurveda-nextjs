import React from 'react';
import FAQAccordion from '../components/faq/FAQAccordion';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
 

const FAQPage = () => {
  const faqBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'FAQ' }
  ];
    
  return (

    <> 
    <BreadCrumbBanner 
    title="FAQ"
    breadcrumbs={faqBreadcrumbs} />
    <FAQAccordion />
    
    </>
  );
};

export default FAQPage;