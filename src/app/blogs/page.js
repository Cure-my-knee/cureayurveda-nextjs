// 'use client';
import React from 'react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';
import BlogSectionGrid from '../components/layout/Blogs/BlogSectionGrid';
import SidebarBanner from '../components/layout/Blogs/SidebarBanner';

// seo meta tag

export const metadata = {
  title: 'Blog - Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  robots: 'noindex, nofollow',
};

const BlogPage = () => {
  const blogBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog' }
  ];

   

  return (
    <>
      

      {/* Breadcrumb */}
      <BreadCrumbBanner
        title="Blog"
        breadcrumbs={blogBreadcrumbs}
        backgroundImage = "https://res.cloudinary.com/dztmhmutv/image/upload/v1753870781/Blog_web_pq8qnv.jpg"
        mobileBackgroundImage = "https://res.cloudinary.com/dztmhmutv/image/upload/v1753870781/Blog_mobile_t7ggem.jpg"
        
      />

      {/* Main Content */}
      <div className=" min-h-screen bg-[#edf1e1]">
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
