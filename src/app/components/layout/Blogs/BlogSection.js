 'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PainManagementCard from './PainManagementCard';
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';
import { authAPI } from '@/lib/api/endpoints'; // your API utility

const BlogSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setIsClient(true);

    const fetchBlogs = async () => {
      
      try {
        const response = await authAPI.getBlog(); // API response
        const blogArray = response.data;
        console.log("blog data ======>:", response.data)

        const formatted = blogArray.map((blog) => ({
          image: blog.pictures?.[0] || '/images/banner/herobanner2.jpg',
          title: blog.title,
          description: blog.subTitle,
          readMoreLink: `/blogs/${blog.slug}`,
        }));

        setBlogs(formatted);
        console.log('blog data list received========>:', formatted);
        
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  const cards = blogs.length
    ? blogs
    : Array(3).fill({
        image: null,
        title: 'Loading...',
        description: 'Please wait while blogs are loading...',
        readMoreLink: '/blogs/${blog._id}',
      });

  return (
    <div className="relative bg-smoke py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#edf1e1]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <Title>Blogs</Title>
          {/* <Subtitle>
             Explore expert articles, natural remedies, and tips for effective pain relief and wellness — including Joint Pain, Diabetes, and Energy Booster.
          </Subtitle> */}
        </div>

        <div className="relative">
          {!isClient ? (
            <div className="pb-10">
              <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-3">
                {cards.slice(0, 3).map((card, index) => (
                  <div key={index} className="h-full">
                    <PainManagementCard {...card} />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <div className="flex">
                  {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, index) => (
                    <div
                      key={index}
                      className={`inline-block w-3 h-3 bg-slate-300 rounded-full mx-1.5 ${
                        index === 0 ? 'bg-blue-500 scale-125' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  el: '.custom-pagination',
                  bulletClass: 'custom-bullet',
                  bulletActiveClass: 'custom-bullet-active',
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={20}
                loop={true}
                slidesPerGroup={1}
                speed={700}
                breakpoints={{
                  0: { slidesPerView: 1, slidesPerGroup: 1 },
                  640: { slidesPerView: 1.2 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pb-10"
              >
                {cards.map((card, index) => (
                  <SwiperSlide key={index} className="h-auto flex pb-3">
                    <PainManagementCard {...card} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-pagination flex justify-center mt-6 "></div>
            </>
          )}
        </div>
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
      `}</style>
    </div>
  );
};

export default BlogSection;
