 'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Title from '../../ui/Title';
import { useRouter } from 'next/navigation';


const SpotlightCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); // Ensures the component only renders on the client
  }, []);

  if (!isMounted) return null; // Prevent SSR rendering mismatch

  const slides = [
    {
      id: 1,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "ShilajitExtract",
      subtitle: "Unleash Ancient Energy With Shilajit",
      buttonText: "Shop Now"
    },
    {
      id: 2,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Amla pericarp extract",
      subtitle: "Ancient Berry, Modern Sugar Support",
      buttonText: "Explore More"
    },
    {
      id: 3,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Go-ghruta",
      subtitle: "Revitalize with the Power of Desi Cow Ghee",
      buttonText: "View Products"
    },
    {
      id: 4,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "Jambu fruit",
      subtitle: "A Herbal Remedy to Support Healthy Sugar Level",
      buttonText: "View Products"
    },
    {
      id: 5,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title: "Khatika powder",
      subtitle: "Naturally Restore Bone Density & Vitality",
      buttonText: "Shop Now"
    },
    {
      id: 6,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title: "Nirgundi oil",
      subtitle: "Anti-Inflammatory Herbal Support for Long-Term Relief",
      buttonText: "Shop Now"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    if (diff === 0) return 'translate-x-0 scale-110 z-30 opacity-100';
    if (diff === 1 || (diff === -(slides.length - 1))) return 'translate-x-32 md:translate-x-48 lg:translate-x-64 scale-90 z-20 opacity-80';
    if (diff === -1 || (diff === slides.length - 1)) return '-translate-x-32 md:-translate-x-48 lg:-translate-x-64 scale-90 z-20 opacity-80';
    if (diff === 2 || (diff === -(slides.length - 2))) return 'translate-x-48 md:translate-x-72 lg:translate-x-96 scale-75 z-10 opacity-60';
    if (diff === -2 || (diff === slides.length - 2)) return '-translate-x-48 md:-translate-x-72 lg:-translate-x-96 scale-75 z-10 opacity-60';
    return 'translate-x-96 scale-50 z-0 opacity-0';
  };

  return (
    <div className="w-full  bg-gradient-to-br bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center text-gray-800 mb-8 md:mb-16">
          In the Spotlight
        </h2> */}
        <Title>
          In the Spotlight
        </Title>

        {/* Carousel Container */}
        <div className="relative flex justify-center items-center h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute transition-all duration-500 ease-in-out ${getSlidePosition(index)}`}
            >
              <div className="relative w-48 h-72 md:w-64 md:h-96 lg:w-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Video */}
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-6 lg:p-8">
                  <div></div>
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-1 md:mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg font-light mb-4 md:mb-6 opacity-90">
                      {slide.subtitle}
                    </p>
                    <button   onClick={() => router.push('/shop')} className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full py-2 md:py-3 px-4 md:px-6 text-sm md:text-base font-light transition-all duration-300 hover:scale-105">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 md:mt-12 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#586e20] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotlightCarousel;
