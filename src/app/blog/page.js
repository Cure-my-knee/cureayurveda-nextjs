 'use client';
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import BlogSectionLanding from '../components/layout/Blog/BlogSectionLanding';

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
      <BlogSectionLanding />
    </>
  );
};

export default BlogPage;