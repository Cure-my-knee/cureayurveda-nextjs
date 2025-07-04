 'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PainManagementCard from './PainManagementCard';
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';

const BlogSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cardData = [
    {
      image: "https://t4.ftcdn.net/jpg/05/78/45/21/360_F_578452196_2szXN92U1RtPLGUvuFB4QiNQlQWtlMKq.jpg",
      title: "AYURVEDIC APPROACHES",
      description: "Pain management comprises many methods...",
      readMoreLink: "#ayurvedic-approaches"
    },
    {
      image: "https://t4.ftcdn.net/jpg/05/78/45/21/360_F_578452196_2szXN92U1RtPLGUvuFB4QiNQlQWtlMKq.jpg",
      title: "HOW TO MANAGE BACK PAIN",
      description: "Back pain can be a crippling ailment...",
      readMoreLink: "#back-pain-management"
    },
    {
      image: "https://t4.ftcdn.net/jpg/05/78/45/21/360_F_578452196_2szXN92U1RtPLGUvuFB4QiNQlQWtlMKq.jpg",
      title: "HOW TO MANAGE NERVE PAIN",
      description: "Nerve pain, also known as neuropathic...",
      readMoreLink: "#nerve-pain-management"
    },
    {
      image: "https://t4.ftcdn.net/jpg/05/78/45/21/360_F_578452196_2szXN92U1RtPLGUvuFB4QiNQlQWtlMKq.jpg",
      title: "NATURAL REMEDIES",
      description: "Explore natural and holistic...",
      readMoreLink: "#natural-remedies"
    },
    {
      image: "https://t4.ftcdn.net/jpg/05/78/45/21/360_F_578452196_2szXN92U1RtPLGUvuFB4QiNQlQWtlMKq.jpg",
      title: "UNDERSTANDING ARTHRITIS",
      description: "Arthritis affects millions...",
      readMoreLink: "#arthritis-management"
    }
  ];

  return (
    <div className="relative bg-smoke py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Floating Corner Images */}
      <img
        src="/images/leaf/yellow-flower-2.png"
        alt="Decorative Left Leaf"
        className="absolute bottom-0 left-0 w-20 sm:w-28 animate-float-slow pointer-events-none"
      />
      <img
        src="/images/leaf/leaf2.png"
        alt="Decorative Right Leaf"
        className="absolute bottom-0 right-0 w-20 sm:w-28 animate-float-slow pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pain Management Solutions
          </h1> */}
          <Title>
           Insights on Pain Management
          </Title>
          <Subtitle>
             Explore expert articles, natural remedies, and tips for effective pain relief and wellness.
          </Subtitle>
          {/* <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover effective approaches to managing different types of pain through proven methods and expert guidance.
          </p> */}
        </div>

        {/* Render content based on client state */}
        <div className="relative">
          {!isClient ? (
            // SSR fallback - render placeholder with same structure as Swiper
            <div className="pb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-3">
                {cardData.slice(0, 3).map((card, index) => (
                  <div key={index} className="h-auto">
                    <PainManagementCard {...card} />
                  </div>
                ))}
              </div>
              {/* Placeholder pagination dots */}
              <div className="flex justify-center mt-6">
                <div className="flex">
                  {Array.from({ length: Math.ceil(cardData.length / 3) }).map((_, index) => (
                    <div 
                      key={index} 
                      className={`inline-block w-3 h-3 bg-slate-300 rounded-full mx-1.5 ${index === 0 ? 'bg-blue-500 scale-125' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Client-side Swiper
            <>
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  el: '.custom-pagination',
                  bulletClass: 'inline-block w-3 h-3 bg-slate-300 rounded-full mx-1.5 cursor-pointer transition-all duration-300 hover:bg-blue-400',
                  bulletActiveClass: 'bg-blue-500 scale-125'
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                spaceBetween={20}
                loop={true}
                slidesPerGroup={1}
                speed={700}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  640: {
                    slidesPerView: 1.2,
                  },
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                  1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                  }
                }}
                className="pb-10"
              >
                {cardData.map((card, index) => (
                  <SwiperSlide key={index} className="h-auto flex pb-3">
                    <PainManagementCard {...card} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-pagination flex justify-center mt-6"></div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow {
          animation: floatSlow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BlogSection;