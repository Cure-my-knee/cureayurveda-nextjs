'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { authAPI } from '@/lib/api/endpoints';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Tag,
  Share2, 
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Copy,
  Check } from 'lucide-react';
 
import SidebarBanner from '@/app/components/layout/Blogs/SidebarBanner';
 

const BlogDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   const router = useRouter();
  // const params = useParams();
  // const productId = params.id;
    const { slug } = params;

   const blogDetailBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog Details' }
  ];

 useEffect(() => {
  const fetchBlogDetail = async () => {
    try {
      setLoading(true);
      const blogData = await authAPI.getBlogDetails(params.slug);
      setBlog(blogData.data);
      
      console.log('blog details response =============>:', blogData);
      setError(null);
    } catch (err) {
      console.error('Error fetching blog detail:', err);
      setError('Failed to load blog details');
    } finally {
      setLoading(false);
    }
  };

  if (params.slug) {
    fetchBlogDetail();
  }
}, [params.slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };


const renderHTMLContent = (htmlString) => {
  // Clean and process the HTML string
  let cleanHTML = htmlString
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Remove wrapping span with Google Docs ID if it exists
  cleanHTML = cleanHTML.replace(/^<span[^>]*id="docs-internal-guid[^>]*>/, '');
  cleanHTML = cleanHTML.replace(/<\/span>$/, '');
  
  // Clean up any remaining empty spans or divs
  cleanHTML = cleanHTML.replace(/<span[^>]*><\/span>/g, '');
  cleanHTML = cleanHTML.replace(/<div[^>]*><span[^>]*><br[^>]*><\/span><\/div>/g, '<br>');

  return { __html: cleanHTML };
};

  const shareOnSocial = (platform) => {
    const url = window.location.href;
    const title = blog?.title || 'Check out this blog post';
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      default:
        break;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Blog</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => router.push('/blogs')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">The blog you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/blogs')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <> 
     
      <div className="min-h-screen bg-gray-50">
        {/* Main container with responsive grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main content - 70% on large screens, full width on mobile */}
            <div className="lg:col-span-8 mt-20">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Featured image */}
                {blog.pictures && blog.pictures[0] && (
                  <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                    <Image
                      src={blog.pictures[0]}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Meta information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    {/* <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(blog.createdAt)}
                    </div> */}
                    
                    {/* {blog.subject && (
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {blog.subject}
                      </div>
                    )} */}
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {blog.title}
                  </h1>

                  {/* Subtitle */}
                  {/* {blog.subTitle && (
                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                      {blog.subTitle}
                    </p>
                  )} */}

                   {/* {blog.subject && (
                      <div className="flex items-center text-black">
                        
                        {blog.subject}
                      </div>
                    )} */}

                {/* HTML Content - Rendered with proper formatting */}
               {Array.isArray(blog.description) && blog.description.length > 0 && (
                <div className="prose prose-lg max-w-none mb-8" style={{ color: '#374151', lineHeight: '1.75' }}>
                  {blog.description.map((block, index) => (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={renderHTMLContent(block)}
                      className="mb-6"
                    />
                  ))}
                </div>
              )}


                  {/* Additional images */}
                  {blog.pictures && blog.pictures.length > 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {blog.pictures.slice(1).map((image, index) => (
                        <div key={index} className="relative h-32 md:h-40 rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`${blog.title} - Image ${index + 2}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Content placeholder */}
                  {/* <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      
                       {blog.description}

                    </p>
                    
                    
                  </div> */}

                  {/* Share buttons */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      {/* <p className="text-sm text-gray-500">
                        Published on {formatDate(blog.createdAt)}
                      </p> */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => shareOnSocial('facebook')}
                          className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                        >
                          <Facebook className="w-4 h-4 text-white" />
                        </button>
                        <button
                          onClick={() => shareOnSocial('twitter')}
                          className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                        >
                          <Twitter className="w-4 h-4 text-white" />
                        </button>
                        <button
                          onClick={() => shareOnSocial('linkedin')}
                          className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar - 30% on large screens, full width on mobile */}
            <div className="lg:col-span-4">
              <div className="sticky top-4">
                <SidebarBanner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;