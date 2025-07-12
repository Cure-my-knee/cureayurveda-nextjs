 import React from 'react';
import FAQAccordion from '../components/faq/FAQAccordion';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import GallerySection from '../components/layout/Gallery/gallery';
 

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