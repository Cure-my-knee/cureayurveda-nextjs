 
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
     'vediccal-calcium-capsules-for-muscle-bone-health': {
      title: 'Buy VedicCal Ayurvedic Capsules for Bone Health & Muscle',
      description: 'Cure Ayurvedic offers VedicCal bone health ayurvedic calcium capsules for men, women at the best price. Best ayurvedic calcium supplement for strong bones.',
      keywords: 'vediccal, calcium supplement, bone health, ayurvedic calcium',
    },
    'vedicflx-capsules-for-joint-muscle-pain-relief': {
      title: 'Buy Best Ayurvedic Capsules for Joint Pain Relief, Muscle Pain',
      description: 'Cure Ayurvedic offers online VedicFlx bone health capsules at the best price in India. Best natural and ayurvedic capsules for joint care health. Order now.',
      keywords: 'vedicflx, joint pain, ayurvedic supplement, mobility, arthritis relief',
    },
    
    // Add more products as needed
     'vedicflx-oil-for-joint-muscle-pain-relief': {
      title: 'Buy Best Ayurvedic Joint Pain Relief Oil and Muscle Pain Oil',
      description: 'Cure Ayurvedic offers VedicFlx ayurvedic oil for joint pain relief, muscle pain at the best price in India. Buy the best joint pain relief oil online for men, women.',
      keywords: 'vedicflx, joint pain, ayurvedic supplement, mobility, arthritis relief',
    },
    'd-vedic-syrup-for-diabetic-care-patients-sugar-control-management': {
      title: 'Best D Vedic Ayurvedic Syrup for Diabetic Care, Sugar Control Patient',
      description: ' Buy D Vedic diabetes syrup to help manage your blood sugar levels and improve metabolism. Best diabetes care syrup, made of 100% nature herbs.',
      keywords: 'vediccal, calcium supplement, bone health, ayurvedic calcium',
    },
     'd-vedic-tablets-medicine-for-diabetic-care-patients-sugar-control-management': {
      title: 'Buy D Vedic Ayurvedic Tablets for Sugar Control and Diabetes',
      description: 'Best ayurvedic medicine for sugar control and diabetic patients. D Vedic tablets help maintain normal sugar levels & support normal lipid metabolism.',
      keywords: 'vedicflx, joint pain, ayurvedic supplement, mobility, arthritis relief',
    },
    'vedic-shilajit-capsules-for-energy-boost-vitality-support': {
      title: 'Buy Best Shilajit Capsules for Energy Boost, Vitality Support',
      description: 'Pure himalayan Vedic shilajit capsules online for men, women, which enhance immunity, vigour, strength, stamina, reduce stress, and anxiety. Safe for daily use.',
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