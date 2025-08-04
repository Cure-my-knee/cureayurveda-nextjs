
//  'use client';
import React from 'react';
import BlogDetailPage from '@/app/components/layout/Blogs/BlogDetailPage';
import SidebarBanner from '@/app/components/layout/Blogs/SidebarBanner';
import BreadCrumbBanner from '@/app/components/layout/BreadCrumbBanner';
 


export const metadata = {
  title: 'Blog Details - Cure Ayurvedic',
  description: 'Get our latest blog updates and insights on Ayurvedic practices.',
  // robots: 'noindex, nofollow',
};
 
 

const BlogDetailSingle = () => {
  const blogBreadcrumbs = [
    { label: 'Home', href: '/' },
     { label: 'Blog', href: '/blogs' },
    { label: 'Blog Details' }
  ];

  return (
    <>
      {/* <BreadCrumbBanner
        title="Blog"
        breadcrumbs={blogBreadcrumbs}
      />        */}
      <BlogDetailPage />     
    </>
  );
};

export default BlogDetailSingle;