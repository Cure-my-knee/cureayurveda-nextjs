 
import React from 'react';
import ProductDetailsPage from '@/app/components/shop/AllProductDetails';

// seo meta tag
export const metadata = {
  title: 'Shop Details- Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  robots: 'noindex, nofollow',
};

export default function ShopPage() {
  return (
    <> 
     <ProductDetailsPage />
    </>
  );
}


