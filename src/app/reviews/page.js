import React from 'react';
import ClientReviewSlider from '../components/review/ClientReviewSlider';
 

// seo meta tag
export const metadata = {
  title: 'Review - Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  robots: 'noindex, nofollow',
};

export default function Review() {
   
  return (
    <> 
    <ClientReviewSlider />
    
    </>
  );
}