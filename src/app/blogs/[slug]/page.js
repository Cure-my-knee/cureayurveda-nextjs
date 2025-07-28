
//  'use client';
import BlogDetailPage from '@/app/components/layout/Blogs/BlogDetailPage';
import SidebarBanner from '@/app/components/layout/Blogs/SidebarBanner';
import BreadCrumbBanner from '@/app/components/layout/BreadCrumbBanner';
import React from 'react';


export const metadata = {
  title: 'Blog Details - Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  robots: 'noindex, nofollow',
};
 
 

const BlogDetailSingle = () => {
  const blogBreadcrumbs = [
    { label: 'Home', href: '/' },
     { label: 'Blog', href: '/blogs' },
    { label: 'Blog Details' }
  ];

  return (
    <>
      <BreadCrumbBanner
        title="Blog"
        breadcrumbs={blogBreadcrumbs}
      />       
      <BlogDetailPage />     
    </>
  );
};

export default BlogDetailSingle;