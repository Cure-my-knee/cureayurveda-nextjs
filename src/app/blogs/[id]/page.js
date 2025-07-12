
 'use client';
import BlogDetailPage from '@/app/components/layout/Blogs/BlogDetailPage';
import SidebarBanner from '@/app/components/layout/Blogs/SidebarBanner';
import BreadCrumbBanner from '@/app/components/layout/BreadCrumbBanner';
import React from 'react';
 
 

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