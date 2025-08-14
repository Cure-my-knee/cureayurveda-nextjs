import React from 'react';
import { CheckCircle, Heart, Shield, Users, Target, Award } from 'lucide-react';
import FaqPage from '../components/faq/FaqPage';
 
 
 


// seo meta tag

export const metadata = {
  title: 'Patients Frequently Asked Questions (FAQ) - Cure Ayurvedic ',
  description: 'FAQ related to ayurveda. Find answers to the most frequently asked questions about ayurveda and our natural products. ',
  // robots: 'noindex, nofollow',
};


 

const FAQPage = () => {
 
  return (

    <> 
 
   <FaqPage />
      

    </>
  );
};

export default FAQPage;