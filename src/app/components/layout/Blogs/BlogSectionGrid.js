// 'use client';

// import React, { useEffect, useState } from 'react';
// import PainManagementCard from './PainManagementCard';
// import Title from '../../ui/Title';
// import Subtitle from '../../ui/Subtitle';
// import { authAPI } from '@/lib/api/endpoints';

// const BlogSectionGrid = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         const response = await authAPI.getBlog();
//         const blogArray = response.data;
        
//         console.log("blog data ======>:", response.data);

//         const formatted = blogArray.map((blog) => ({
//           image: blog.pictures?.[0] || '/images/banner/herobanner2.jpg',
//           title: blog.title,
//           description: blog.subTitle,
//           readMoreLink: `/blogs/${blog._id}`,
//         }));

//         setBlogs(formatted);
//         console.log('blog data list received========>:', formatted);
        
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//         setError('Failed to load blogs. Please try again later.');
//         setBlogs([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Loading skeleton cards
//   const loadingCards = Array(6).fill({
//     image: '',
//     title: 'Loading...',
//     description: 'Please wait while blogs are loading...',
//     readMoreLink: '#',
//   });

//   // Handle retry
//   const handleRetry = () => {
//     window.location.reload();
//   };

//   // Error state
//   if (error && !loading) {
//     return (
//       <div className="relative bg-smoke py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="text-center mb-10">
//             <Title>Insights on Pain Management</Title>
//             <Subtitle>
//               Explore expert articles, natural remedies, and tips for effective pain relief and wellness.
//             </Subtitle>
//           </div>
//           <div className="text-center py-8">
//             <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
//               <p className="text-red-600 text-lg mb-4">{error}</p>
//               <button 
//                 onClick={handleRetry}
//                 className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Display cards (loading or actual blogs)
//   const displayCards = loading ? loadingCards : blogs;

//   return (
//     <div className="relative bg-smoke py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-10">
//           <Title>Insights on Pain Management</Title>
//           <Subtitle>
//             Explore expert articles, natural remedies, and tips for effective pain relief and wellness.
//           </Subtitle>
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div className="text-center mb-6">
//             <div className="inline-flex items-center">
//               <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-2"></div>
//               <span className="text-gray-600">Loading blogs...</span>
//             </div>
//           </div>
//         )}

//         {/* No blogs message */}
//         {!loading && blogs.length === 0 && !error && (
//           <div className="text-center py-12">
//             <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
//               <p className="text-gray-500 text-lg">No blogs available at the moment.</p>
//               <p className="text-gray-400 text-sm mt-2">Check back later for new content.</p>
//             </div>
//           </div>
//         )}

//         {/* Blog Grid */}
//         {displayCards.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {displayCards.map((card, index) => (
//               <div 
//                 key={loading ? `loading-${index}` : `blog-${card.title}-${index}`} 
//                 className="h-auto animate-float-slow"
//                 style={{
//                   animationDelay: `${index * 0.1}s`
//                 }}
//               >
//                 <PainManagementCard {...card} />
//               </div>
//             ))}
//           </div>
//         )}

        
        
//       </div>

//       <style jsx>{`
//         @keyframes floatSlow {
//           0%,
//           100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-8px);
//           }
//         }
//         .animate-float-slow {
//           animation: floatSlow 5s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BlogSectionGrid;

'use client';

import React, { useEffect, useState } from 'react';
import PainManagementCard from './PainManagementCard';
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';
import { authAPI } from '@/lib/api/endpoints';

const BlogSectionGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await authAPI.getBlog();
        const blogArray = response.data;
        
        console.log("blog data ======>:", response.data);

        const formatted = blogArray.map((blog) => ({
          image: blog.pictures?.[0] || '/images/banner/herobanner2.jpg',
          title: blog.title,
          description: blog.subTitle,
          readMoreLink: `/blogs/${blog._id}`,
        }));

        setBlogs(formatted);
        console.log('blog data list received========>:', formatted);
        
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to load blogs. Please try again later.');
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Loading skeleton cards
  const loadingCards = Array(6).fill({
    image: '',
    title: 'Loading...',
    description: 'Please wait while blogs are loading...',
    readMoreLink: '#',
  });

  // Handle retry
  const handleRetry = () => {
    window.location.reload();
  };

  // Error state
  if (error && !loading) {
    return (
      <div className="relative bg-smoke py-8 sm:py-12 px-3 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <Title>Insights on Pain Management</Title>
            <Subtitle>
              Explore expert articles, natural remedies, and tips for effective pain relief and wellness.
            </Subtitle>
          </div>
          <div className="text-center py-6 sm:py-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6 max-w-md mx-auto">
              <p className="text-red-600 text-base sm:text-lg mb-4">{error}</p>
              <button 
                onClick={handleRetry}
                className="px-4 sm:px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm sm:text-base"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Display cards (loading or actual blogs)
  const displayCards = loading ? loadingCards : blogs;

  return (
    <div className="relative bg-smoke py-8 sm:py-12 px-3 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <Title>Insights on Pain Management</Title>
          <Subtitle>
            Explore expert articles, natural remedies, and tips for effective pain relief and wellness.
          </Subtitle>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-blue-500 mr-2"></div>
              <span className="text-gray-600 text-sm sm:text-base">Loading blogs...</span>
            </div>
          </div>
        )}

        {/* No blogs message */}
        {!loading && blogs.length === 0 && !error && (
          <div className="text-center py-8 sm:py-12">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 max-w-md mx-auto">
              <p className="text-gray-500 text-base sm:text-lg">No blogs available at the moment.</p>
              <p className="text-gray-400 text-sm mt-2">Check back later for new content.</p>
            </div>
          </div>
        )}

        {/* Blog Grid - 3 Cards Per Row */}
        {displayCards.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {displayCards.map((card, index) => (
              <div 
                key={loading ? `loading-${index}` : `blog-${card.title}-${index}`} 
                className="h-auto animate-float-slow"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <PainManagementCard {...card} />
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }
        
        /* Responsive grid adjustments */
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1023px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default BlogSectionGrid;