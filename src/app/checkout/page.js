import React from 'react';
import CheckOutPage from '../components/checkoutpage/CheckOutPage';

 
  // seo meta tag
  
  export const metadata = {
    title: 'Checkout  - Cure Ayurvedic',
    description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
    robots: 'noindex, nofollow',
  };
 
  const CheckOut = () => {
    
    return (
  
      <> 
       
       <CheckOutPage />
  
      </>
    );
  };
  
  export default CheckOut;