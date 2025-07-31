import React from 'react';
import CheckOutPage from '../components/checkoutpage/CheckOutPage';

 
  // seo meta tag
  
  // export const metadata = {
  //   title: 'Checkout  - Cure Ayurvedic',
  //   description: 'Checkout your order at Cure Ayurvedic.',
  //   robots: 'noindex, nofollow',
  // };

  // ✅ SEO meta tags
export const metadata = {
  title: 'Checkout - Cure Ayurvedic',
  description: 'Checkout your order at Cure Ayurvedic.',
  robots: 'noindex, nofollow',
};

// ✅ Viewport meta tag (moved here to fix warning)
// export const viewport = {
//   width: 'device-width',
//   initialScale: 1,
// };
 
  const CheckOut = () => {
    
    return (
  
      <> 
       
       <CheckOutPage />
  
      </>
    );
  };
  
  export default CheckOut;