 'use client';
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import BlogSectionLanding from '../components/layout/Blogs/BlogSectionLanding';
// import BlogSection from '../components/layout/Blogs/BlogSection';
import BlogSectionGrid from '../components/layout/Blogs/BlogSectionGrid';

const BlogPage = () => {
  const blogBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog' }
  ];

  return (
    <>

      <BreadCrumbBanner
        title="Blog"
        breadcrumbs={blogBreadcrumbs}
      />
      <div className='bg-white'> 
      {/* <BlogSectionLanding /> */}
      <BlogSectionGrid />
      </div>
    </>
  );
};

export default BlogPage;