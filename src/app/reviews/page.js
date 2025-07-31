import React from 'react';
import ClientReviewSlider from '../components/review/ClientReviewSlider';
import GoogleReviewsComponent from '../components/review/GoogleReviews';
 

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
    <GoogleReviewsComponent />
    
    </>
  );
}