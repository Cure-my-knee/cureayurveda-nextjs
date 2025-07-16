'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const ClientReviewSlider = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp Solutions",
      rating: 5,
      review: "Exceptional service and outstanding results! The team went above and beyond our expectations. Their attention to detail and commitment to excellence is truly remarkable.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "Innovation Labs",
      rating: 5,
      review: "Working with this team has been a game-changer for our business. They delivered exactly what we needed, on time and within budget. Highly recommend!",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "Digital Dynamics",
      rating: 5,
      review: "Professional, creative, and reliable. They transformed our vision into reality with incredible precision. The entire process was smooth and collaborative.",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Founder",
      company: "StartupVenture",
      rating: 5,
      review: "From concept to execution, they delivered perfection. Their expertise and dedication helped us achieve results beyond our wildest dreams. Amazing work!",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Operations Director",
      company: "Global Systems Inc",
      rating: 5,
      review: "Top-notch quality and exceptional customer service. They understood our needs perfectly and delivered a solution that exceeded all expectations.",
      avatar: "LW"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="bg-gradient-to-br min-h-screen bg-white from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-6xl mx-auto mt-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden mx-2 sm:mx-4 lg:mx-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Reviews Container */}
          <div className="relative h-auto min-h-[400px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[420px]">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500 mb-4 sm:mb-6 opacity-20" />
                  
                  {/* Review Text */}
                  <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl leading-relaxed px-2 sm:px-4">
                    "{review.review}"
                  </blockquote>
                  
                  {/* Client Info */}
                  <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
                    {/* Avatar */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
                      {review.avatar}
                    </div>
                    
                    {/* Client Details */}
                    <div className="text-center">
                      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1">
                        {review.name}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-1">
                        {review.position}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-blue-600 font-medium mb-2">
                        {review.company}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex justify-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-4 sm:w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 sm:mt-6 max-w-xs sm:max-w-md mx-auto px-4">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-200"
              style={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-3 sm:mt-4">
          <span className="text-xs sm:text-sm text-gray-500">
            {isAutoPlaying ? (
              <>
                <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                <span className="hidden sm:inline">Auto-playing • Hover to pause</span>
                <span className="sm:hidden">Auto-playing</span>
              </>
            ) : (
              <>
                <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mr-1 sm:mr-2"></span>
                <span className="hidden sm:inline">Paused • Leave to resume</span>
                <span className="sm:hidden">Paused</span>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewSlider;