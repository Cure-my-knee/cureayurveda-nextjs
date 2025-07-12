// 'use client';
import React from 'react';
import Head from 'next/head';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import BlogSectionGrid from '../components/layout/Blogs/BlogSectionGrid';
import SidebarBanner from '../components/layout/Blogs/SidebarBanner';

const BlogPage = () => {
  const blogBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog' }
  ];

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Blog | Ayurvedic</title>
        <meta
          name="description"
          content="Read the latest blog of ayurvedics"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      {/* Breadcrumb */}
      <BreadCrumbBanner
        title="Blog"
        breadcrumbs={blogBreadcrumbs}
      />

      {/* Main Content */}
      <div className="bg-white min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10">
            
            {/* Blog Grid Section */}
            <div className="w-full lg:w-[70%] flex-shrink-0 mt-6">
              <BlogSectionGrid />
            </div>

            {/* Sticky Sidebar Section */}
            <div className="w-full lg:w-[30%] flex-shrink-0 mt-6">
              <div className="sticky top-8">
                <SidebarBanner />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
