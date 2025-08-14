
//  'use client';
// import React from 'react';
// import BlogDetailPage from '@/app/components/layout/Blogs/BlogDetailPage';
// import SidebarBanner from '@/app/components/layout/Blogs/SidebarBanner';
// import BreadCrumbBanner from '@/app/components/layout/BreadCrumbBanner';
 


// export const metadata = {
//   title: 'Blog Details - Cure Ayurvedic',
//   description: 'Get our latest blog updates and insights on Ayurvedic practices.',
//   // robots: 'noindex, nofollow',
// };
 
 

// const BlogDetailSingle = () => {
//   const blogBreadcrumbs = [
//     { label: 'Home', href: '/' },
//      { label: 'Blog', href: '/blogs' },
//     { label: 'Blog Details' }
//   ];

//   return (
//     <>
//       <BreadCrumbBanner
//         title="Blog"
//         breadcrumbs={blogBreadcrumbs}
//       />       
//       <BlogDetailPage />     
//     </>
//   );
// };

// export default BlogDetailSingle;

 

//  'use client';
import React from 'react';
import BlogDetailPage from '@/app/components/layout/Blogs/BlogDetailPage';
import BreadCrumbBannerBlog from '@/app/components/layout/BreadCrmbBannerBlog';
 
 
 
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Manual metadata mapping for specific products
  const metadataMap = {
     'beyond-strength-mental-health-benefits-of-shilajit': {
      title: 'Beyond Strength: Mental Health Benefits of Shilajit',
      description: 'Shilajit has been utilized for centuries to support mental health in ways that can help decrease stress levels, enhance cognitive performance, and improve emotional balance.',
       
    },
    'dvedic-natural-ayurvedic-support-for-healthy-sugar-management': {
      title: 'D Vedic: Natural Ayurvedic Support for Healthy Sugar Management',
      description: 'D Vedic works wonders for anyone who may have wanted regulated blood sugar levels, boosted energy, and absolute wellness as per the Ayurveda approach to lifestyle.',
      
    },
    
    // Add more products as needed
     'boost-your-well-being-with-cure-ayurvedics-vedic-shilajit': {
      title: 'Boost Your Well-being with Cure Ayurvedic Vedic Shilajit',
      description: 'Vedic Shilajit is crafted with care, following traditional Ayurvedic methods to retain the natural essence and effectiveness of this ancient remedy.',
       
    },
    'pure-a2-cow-ghee-the-ayurvedic-superfood-for-joints-digestion-and-vitality': {
      title: 'Pure A2 Cow Ghee: The Ayurvedic Superfood for Joints, Digestion & Vitality',
      description: 'D-Vedic works wonders for anyone who may have wanted regulated blood sugar levels, boosted energy, and absolute wellness as per the Ayurveda approach to lifestyle.',
      
    },
 
 
  };
  
  // Get specific metadata or use default
  const productMeta = metadataMap[slug] || {
    title: 'Blog Details | Cure Ayurvedic',
    description: 'Premium ayurvedic products for better health and wellness.',
   
  };
  
  return {
    title: productMeta.title,
    description: productMeta.description,
     
    robots: 'index, follow',
    canonical: `https://www.cureayurvedic.com/blogs/${slug}`,
    
     
    other: {
      'Blog:brand': 'Cure Ayurvedic',
      'Blog:category': 'Ayurvedic Blogs',
    },
  };
}
 
 

// Main component
export default async function BlogDetailSingle({ params }) {
  const { slug } = await params;
  const blogBreadcrumbs = [
    // { label: 'Home', href: '/' },
     { label: 'Blog', href: '/blogs' },
    { label: `${slug}` , href: `/blogs/${slug}` }
  ];

  return (
    <>
      {/* <BreadCrumbBannerBlog
        title="Blog"
        breadcrumbs={blogBreadcrumbs}
      /> */}
      <BlogDetailPage slug={slug} />
    </>
  );
}
  