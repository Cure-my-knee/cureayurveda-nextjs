 
// import React from 'react';
// import ProductDetailsPage from '@/app/components/shop/AllProductDetails';
// import BreadCrumbBanner from '@/app/components/layout/BreadCrumbBanner';

// // seo meta tag
// export const metadata = {
//   title: 'Shop Details- Cure Ayurvedic',
//   description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
//   // robots: 'noindex, nofollow',
// };



// export default function ShopPage() {

//   // Breadcrumbs
//   const breadcrumbs = [
//     { label: 'Home', href: '/' },
//     { label: 'Shop', href: '/shop' },
//     { label: 'Product Details' }
//   ];
  
//   return (
//     <> 
//      {/* <BreadCrumbBanner  breadcrumbs={breadcrumbs} /> */}
//      <ProductDetailsPage />
//     </>
//   );
// }

 
// app/shop/[slug]/page.js
 
 import React from 'react';
import ProductDetailsPage from '@/app/components/shop/AllProductDetails';

// Manual metadata based on slug
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Manual metadata mapping for specific products
  const metadataMap = {
     'vediccal': {
      title: 'Buy Online Vedic Cal Ayurvedic Capsule for Bone Health',
      description: 'Cure Ayurvedic offer online bone health ayurvedic capsule for men & women at best price in India. Useful for bone joint, fracture healing, bone strength.',
      keywords: 'vediccal, calcium supplement, bone health, ayurvedic calcium',
    },
    'vedicflx': {
      title: 'VedicFlx Joint Pain Reliefes | Cure Ayurvedic',
      description: 'VedicFlx ayurvedic supplement for joint pain relief and mobility improvement. Natural herbal formula.',
      keywords: 'vedicflx, joint pain, ayurvedic supplement, mobility, arthritis relief',
    },
    
    // Add more products as needed
     'vedicflx-oil': {
      title: 'Vedicflx Oil Joint Pain Relief | Cure Ayurvedic',
      description: 'VedicFlx ayurvedic supplement for joint pain relief and mobility improvement. Natural herbal formula.',
      keywords: 'vedicflx, joint pain, ayurvedic supplement, mobility, arthritis relief',
    },
    'd-vedic-syrup': {
      title: 'D Vedic Syrup for Diabetes Management',
      description: 'Cure Ayurvedic offer online natural ayurvedic formula to support healthy blood sugar levels and manage diabetes effectively. Helps improve metabolism and energy.',
      keywords: 'vediccal, calcium supplement, bone health, ayurvedic calcium',
    },
     'd-vedic': {
      title: 'D-Vedic for Diabetes Management | Cure Ayurvedic',
      description: 'Cure Ayurvedic offer online natural ayurvedic formula to support healthy blood sugar levels and manage diabetes effectively. Helps improve metabolism and energy.',
      keywords: 'vedicflx, joint pain, ayurvedic supplement, mobility, arthritis relief',
    },
    'vedic-shilajit': {
      title: 'Buy Online Vedic Shilajit Capsule | Cure Ayurvedic',
      description: '100% pure himalayan shilajit capsule for men & women which enhance vitality, stamina, improves energy level and help in reducing stress, anxiety. Buy now!',
      keywords: 'shilajit, vediccal, calcium supplement, bone health, ayurvedic calcium, ',
    },
  };
  
  // Get specific metadata or use default
  const productMeta = metadataMap[slug] || {
    title: 'Product Details | Cure Ayurvedic',
    description: 'Premium ayurvedic products for better health and wellness.',
    keywords: 'ayurvedic products, natural remedies, herbal medicine',
  };
  
  return {
    title: productMeta.title,
    description: productMeta.description,
    // keywords: productMeta.keywords,
    
    // Open Graph metadata
    // openGraph: {
    //   title: productMeta.title,
    //   description: productMeta.description,
    //   images: ['/images/defaultproduct/productimage1.jpeg'],
    //   type: 'website',
    //   siteName: 'Cure Ayurvedic',
    // },
    
    // Twitter Card metadata
    // twitter: {
    //   card: 'summary_large_image',
    //   title: productMeta.title,
    //   description: productMeta.description,
    //   images: ['/images/defaultproduct/productimage1.jpeg'],
    // },
    
    // Additional SEO metadata
    robots: 'index, follow',
    canonical: `https://www.cureayurvedic.com/shop/${slug}`,
    
    // Product-specific metadata
    other: {
      'product:brand': 'Cure Ayurvedic',
      'product:category': 'Ayurvedic Products',
    },
  };
}

// Main component
export default async function ShopPage({ params }) {
  const { slug } = await params;
  
  return <ProductDetailsPage slug={slug} />;
}