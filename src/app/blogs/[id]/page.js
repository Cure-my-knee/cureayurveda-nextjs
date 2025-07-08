//  'use client';

// import React, { useEffect, useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';
// import { authAPI } from '@/lib/api/endpoints';
 

// const BlogDetailsPage = () => {
//   const params = useParams();
//   const router = useRouter();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const fetchBlogDetails = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // Get the blog ID from params - try different possible parameter names
//         const id = params.id || params._id || params.blogId;
//         console.log('Fetching blog with ID=======>:', id);
//         console.log('All params:', params);
        
//         if (!id) {
//           throw new Error('Blog ID not found in URL parameters');
//         }
        
//         const response = await authAPI.getBlogDetails(id);
//         console.log('Blog details API response:', response);
        
//         setBlog(response.data);
//         console.log('Blog details set:', response.data);
//       } catch (error) {
//         console.error('Error fetching blog details:', error);
//         setError('Failed to load blog details. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Make sure we have the blog ID before making the API call
//     const id = params.id || params._id || params.blogId;
//     if (id) {
//       fetchBlogDetails();
//     } else {
//       console.error('No blog ID found in params:', params);
//       setError('Blog ID not found');
//       setLoading(false);
//     }
//   }, [params.id, params._id, params.blogId]); // Watch for changes in any of these params

//   const formatDate = (dateString) => {
//     if (!dateString) return 'Date not available';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const handleShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: blog.title,
//           text: blog.subTitle,
//           url: window.location.href,
//         });
//       } catch (error) {
//         console.log('Error sharing:', error);
//       }
//     } else {
//       // Fallback: copy to clipboard
//       try {
//         await navigator.clipboard.writeText(window.location.href);
//         alert('Link copied to clipboard!');
//       } catch (error) {
//         console.log('Error copying to clipboard:', error);
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading blog details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-red-500 text-xl mb-4">⚠️</div>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             onClick={() => router.back()}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <p className="text-gray-600">Blog not found</p>
//           <button
//             onClick={() => router.back()}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm sticky top-0 z-10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between py-4">
//             <button
//               onClick={() => router.back()}
//               className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               <ArrowLeft className="h-5 w-5 mr-2" />
//               <span className="hidden sm:inline">Back to Blogs</span>
//             </button>
//             <button
//               onClick={handleShare}
//               className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               <Share2 className="h-5 w-5 mr-2" />
//               <span className="hidden sm:inline">Share</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Blog Header */}
//         <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
//           {/* Featured Image */}
//           {blog.pictures && blog.pictures.length > 0 && (
//             <div className="relative">
//               <div className="aspect-[16/9] relative">
//                 <Image
//                   src={blog.pictures[currentImageIndex]}
//                   alt={blog.title || 'Blog image'}
//                   fill
//                   className="object-cover"
//                   priority
//                   onError={(e) => {
//                     e.target.src = '/images/banner/herobanner2.jpg'; // Fallback image
//                   }}
//                 />
//               </div>
              
//               {/* Image Navigation */}
//               {blog.pictures.length > 1 && (
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                   <div className="flex space-x-2">
//                     {blog.pictures.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setCurrentImageIndex(index)}
//                         className={`w-3 h-3 rounded-full transition-all ${
//                           index === currentImageIndex
//                             ? 'bg-white scale-125'
//                             : 'bg-white/60 hover:bg-white/80'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Blog Content */}
//           <div className="p-6 sm:p-8">
//             {/* Subject Tag */}
//             {blog.subject && (
//               <div className="mb-4">
//                 <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
//                   {blog.subject}
//                 </span>
//               </div>
//             )}

//             {/* Title */}
//             <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
//               {blog.title || 'Blog Title'}
//             </h1>

//             {/* Subtitle */}
//             {blog.subTitle && (
//               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
//                 {blog.subTitle}
//               </p>
//             )}

//             {/* Meta Information */}
//             <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
//               <div className="flex items-center">
//                 <Calendar className="h-4 w-4 mr-2" />
//                 <span>Published on {formatDate(blog.createdAt)}</span>
//               </div>
              
//               <div className="flex items-center">
//                 <User className="h-4 w-4 mr-2" />
//                 <span>By {blog.author?.name || blog.author || 'Admin'}</span>
//               </div>
              
//               {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
//                 <div className="flex items-center">
//                   <Clock className="h-4 w-4 mr-2" />
//                   <span>Updated on {formatDate(blog.updatedAt)}</span>
//                 </div>
//               )}
//             </div>

//             {/* Content Area */}
//             <div className="prose prose-lg max-w-none">
//               {blog.content ? (
//                 <div 
//                   className="text-gray-700 leading-relaxed"
//                   dangerouslySetInnerHTML={{ __html: blog.content }}
//                 />
//               ) : (
//                 <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
//                   <p className="text-gray-700 leading-relaxed">
//                     {blog.description || blog.subTitle || 'Content not available for this blog post.'}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Additional Images Gallery */}
//         {blog.pictures && blog.pictures.length > 1 && (
//           <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
//             <div className="p-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h2>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                 {blog.pictures.map((image, index) => (
//                   <div
//                     key={index}
//                     className={`aspect-square relative rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 ${
//                       index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
//                     }`}
//                     onClick={() => setCurrentImageIndex(index)}
//                   >
//                     <Image
//                       src={image}
//                       alt={`${blog.title} - Image ${index + 1}`}
//                       fill
//                       className="object-cover"
//                       onError={(e) => {
//                         e.target.src = '/images/banner/herobanner2.jpg';
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Navigation */}
//         <div className="flex justify-center">
//           <button
//             onClick={() => router.push('/blogs')}
//             className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             Back to All Blogs
//           </button>
//         </div>
//       </div>

//       {/* Floating Action Button for Mobile */}
//       <div className="fixed bottom-6 right-6 sm:hidden">
//         <button
//           onClick={handleShare}
//           className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
//         >
//           <Share2 className="h-6 w-6" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogDetailsPage;

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
import BreadCrumbBanner from '@/app/components/layout/BreadCrumbBanner';

const BlogDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   const blogDetailBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog Details' }
  ];


  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        // Assuming you have an API endpoint to fetch blog by ID
        const response = await authAPI.getBlogDetails(params.id);
        setBlog(response.data);
        console.log('blog detils response:', response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog detail:', err);
        setError('Failed to load blog details');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchBlogDetail();
    }
  }, [params.id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
    <BreadCrumbBanner title="Blog Details" breadcrumbs={blogDetailBreadcrumbs} />
    <div className="min-h-screen bg-gray-50">
      
      

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Featured image */}
          {blog.pictures && blog.pictures[0] && (
            <div className="relative h-64 md:h-80 lg:h-96">
              <Image
                src={blog.pictures[0]}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(blog.createdAt)}
              </div>
              
              {blog.subject && (
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {blog.subject}
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>

            {/* Subtitle */}
            {blog.subTitle && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {blog.subTitle}
              </p>
            )}

            {/* Additional images */}
            {blog.pictures && blog.pictures.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
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

            {/* Content placeholder - you can expand this based on your blog structure */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                This is where you would display the full blog content. Since your API response 
                doesn't include the full content, you might need to add a content field to your 
                blog schema or fetch it separately.
              </p>
              
              {/* You can add more content sections here based on your blog structure */}
            </div>

            {/* Share buttons or other actions */}
             
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Published on {formatDate(blog.createdAt)}
                </p>
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
    </div>
    </>
  );
};

export default BlogDetailPage;