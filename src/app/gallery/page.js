 import React from 'react';
import FAQAccordion from '../components/faq/FAQAccordion';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import GallerySection from '../components/layout/Gallery/gallery';

// seo meta tag
export const metadata = {
  title: 'Gallery - Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  robots: 'noindex, nofollow',
};
 

const Gallery = () => {
  const galleryBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Gallery' }
  ];
    
  return (

    <> 
    <BreadCrumbBanner 
    title="Gallery"
    breadcrumbs={galleryBreadcrumbs} />
    <GallerySection />
    
    </>
  );
};

export default Gallery;