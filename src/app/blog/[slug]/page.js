 
 import React from 'react';
import { blogPosts } from '@/app/lib/blogPosts';
import Button from '../../components/ui/Button';
import BreadCrumbBanner from '../../components/layout/BreadCrumbBanner';
import Link from 'next/link';


// This generates static paths for each blog slug at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// The actual blog detail page
const BlogDetailPage = async ({ params }) => {
  const { slug } = params;

  // Find blog post by slug
  const blogData = blogPosts.find((post) => post.slug === slug);

  // If not found, show a 404-style fallback UI
  if (!blogData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
         <Link href="/blog">
  <Button>Back to Blog</Button>
</Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: blogData.title },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Banner */}
      <BreadCrumbBanner title={blogData.title} breadcrumbs={breadcrumbs} />

      {/* Main Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Blog Image */}
        <div className="mb-8">
          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Blog Meta */}
        <div className="mb-8 text-sm text-gray-600 flex flex-wrap gap-4">
          <span>By {blogData.author}</span>
          <span>•</span>
          <span>{blogData.publishDate}</span>
          <span>•</span>
          <span>{blogData.readTime}</span>
        </div>

        {/* Blog Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {blogData.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Blog Description & Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {blogData.description}
          </p>

          <div className="text-gray-800 leading-relaxed space-y-4">
            {blogData.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
           <Link href="/blog">
  <Button>Back to Blog</Button>
</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
