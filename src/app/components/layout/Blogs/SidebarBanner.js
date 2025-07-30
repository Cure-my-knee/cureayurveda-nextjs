 'use client';
import React, { useEffect, useState } from 'react';
import { authAPI } from '@/lib/api/endpoints';

const SidebarBanner = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Fetch popular posts and other sidebar data
  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        setLoading(true);
        
        // Fetch blogs for popular posts
        const blogResponse = await authAPI.getBlog();
        const blogArray = blogResponse.data;
        
        // Get top 3 popular posts
        const popularPostsData = blogArray.slice(0, 3).map((blog) => ({
          id: blog._id,
          title: blog.title,
          image: blog.pictures?.[0] || '/images/banner/herobanner2.jpg',
          date: new Date(blog.createdAt || Date.now()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          readMoreLink: `/blogs/${blog.slug}`,
        }));

        // Extract tags
        const tagSet = new Set();
        blogArray.forEach(blog => {
          if (blog.tags && Array.isArray(blog.tags)) {
            blog.tags.forEach(tag => tagSet.add(tag));
          }
        });
        
        const tagsData = Array.from(tagSet);

        setPopularPosts(popularPostsData);
        setTags(tagsData.length > 0 ? tagsData.slice(0, 6) : ['React', 'JavaScript', 'CSS', 'Web Dev', 'UI/UX', 'Mobile']);
        
      } catch (error) {
        console.error('Error fetching sidebar data:', error);
        // Set default data on error
        setPopularPosts([]);
        setTags(['React', 'JavaScript', 'CSS', 'Web Dev', 'UI/UX', 'Mobile']);
      } finally {
        setLoading(false);
      }
    };

    fetchSidebarData();
  }, []);

  // Handle newsletter subscription
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setIsSubscribing(true);
    try {
      // Replace with your actual newsletter API endpoint
      // await authAPI.subscribeNewsletter({ email: newsletterEmail });
      alert('Thank you for subscribing to our newsletter!');
      setNewsletterEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="w-full mt-8 md:mt-12 lg:mt-20 bg-[#edf1e1]">
      <div className="sticky top-6 lg:top-8 space-y-6 lg:space-y-8">
        {/* Popular Posts Banner */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-5 md:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-[#586e20] to-[#82a133] rounded-full mr-4"></div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black">Popular Posts</h3>
          </div>
          <div className="space-y-4 lg:space-y-6">
            {loading ? (
              // Enhanced Loading skeleton
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="flex items-start space-x-4 animate-pulse">
                  <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="h-4 md:h-5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mb-3"></div>
                    <div className="h-3 md:h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-2/3"></div>
                  </div>
                </div>
              ))
            ) : popularPosts.length > 0 ? (
              popularPosts.map((post) => (
                <a 
                  key={post.id}
                  href={post.readMoreLink}
                  className="flex items-start space-x-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 p-3 md:p-4 rounded-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex-shrink-0 overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = '/images/banner/herobanner2.jpg';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base md:text-base lg:text-lg text-black line-clamp-2 leading-tight group-hover:text-from-[#586e20] to-[#82a133]  transition-colors duration-300">
                      {post.title}
                    </div>
                    {/* <p className="text-xs md:text-sm text-gray-500 mt-2 font-medium">{post.date}</p> */}
                  </div>
                </a>
              ))
            ) : (
              <p className="text-gray-500 text-sm md:text-base text-center py-8">No popular posts available</p>
            )}
          </div>
        </div>

        {/* ✅ ADDED: Banner section below popular posts */}
  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <img
      src="https://img.freepik.com/premium-photo/ayurvedic-background_1003030-9785.jpg?w=2000" // Replace with your actual banner image
      alt="Sidebar Banner"
      className="w-full h-auto object-cover"
    />
  </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

export default SidebarBanner;