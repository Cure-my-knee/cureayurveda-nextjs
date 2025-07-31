'use client'
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const GoogleReviewsComponent = () => {
  // Sample review data - replace with your actual reviews
 const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "Nutrition Consultant",
    company: "AyurCare India",
    rating: 5,
    date: "2 weeks ago",
    review: "VedicCal worked wonders for my mother’s bone health. Within a few weeks, she felt less joint stiffness and more energy. Truly effective and completely natural!",
    avatar: "PS"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    position: "Yoga Trainer",
    company: "Wellness Path Studio",
    rating: 5,
    date: "1 month ago",
    review: "After using VedicFlx Oil for my knee pain, I noticed a major improvement in flexibility. The oil absorbs well and provides long-lasting relief without any side effects.",
    avatar: "RK"
  },
  {
    id: 3,
    name: "Anita Verma",
    position: "Homemaker",
    company: "N/A",
    rating: 5,
    date: "3 weeks ago",
    review: "I’ve been using D Vedic Syrup for my blood sugar levels, and I can already feel the difference. It’s gentle, herbal, and really supports my diabetic care routine.",
    avatar: "AV"
  },
  {
    id: 4,
    name: "Suresh Patel",
    position: "Retired Bank Officer",
    company: "State Bank of India",
    rating: 4,
    date: "1 week ago",
    review: "I tried VedicFlx capsules for joint discomfort. It’s a good product and did show results, but the delivery was delayed. The effectiveness made up for it, though.",
    avatar: "SP"
  },
  {
    id: 5,
    name: "Meera Joshi",
    position: "Ayurvedic Wellness Coach",
    company: "NatureGlow",
    rating: 5,
    date: "2 months ago",
    review: "Vedic Shilajit has boosted my energy and focus. I feel more active throughout the day. Great quality and pure formulation—definitely recommend it!",
    avatar: "MJ"
  },
  {
    id: 6,
    name: "Vikram Singh",
    position: "Corporate Manager",
    company: "TechServe India",
    rating: 5,
    date: "3 days ago",
    review: "Using VedicFlx and VedicFlx Oil together has significantly reduced my back and shoulder pain. It’s now a regular part of my evening routine. Highly effective combo.",
    avatar: "VS"
  }
];


  const [currentReview, setCurrentReview] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className='bg-[#ffff]'>

    
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-[#ffff]">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          What Our Patients Say
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {renderStars(5)}
          </div>
          <span className="text-lg font-semibold text-gray-700">{averageRating}</span>
          <span className="text-gray-500">({reviews.length} reviews)</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjU2IDEyLjI1QzIyLjU2IDExLjQ3IDIyLjQ5IDEwLjcyIDIyLjM2IDEwSDEyVjE0LjI2SDE3LjkyQzE3LjY2IDE1LjMgMTYuOTggMTYuMTIgMTYuMDEgMTYuNjVWMTkuNTJIMTkuNDJDMjEuMzEgMTcuNzggMjIuNTYgMTUuMjUgMjIuNTYgMTIuMjVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGQ9Ik0xMiAyMkM5Ljc5IDIyIDcuOTYgMTkuNCA3Ljk2IDE3LjYySDEwLjA0QzEwLjA0IDE4LjkxIDEwLjk2IDIwIDEyIDIwQzEzLjA0IDIwIDEzLjk2IDE4LjkxIDEzLjk2IDE3LjYySDEzLjU2VjE0LjU4SDEwVjE3LjYyQzEwIDIwIDEyLjQ4IDIyIDEyIDIyWiIgZmlsbD0iIzM0QTg1MyIvPgo8cGF0aCBkPSJNMTYuMDEgMTYuNjVDMTUuMDQgMTcuMTggMTMuODIgMTcuNSAxMi41NiAxNy41QzEwLjY0IDE3LjUgOC45OSAxNi40MSA4LjMxIDE0Ljg2SDUuNzFWMTcuNzNDNy4xOSAyMC42NyA5LjQ1IDIyIDEyIDIyQzE0LjA4IDIyIDE1LjgxIDIxLjM1IDE2Ljk5IDE5LjUyTDE2LjAxIDE2LjY1WiIgZmlsbD0iI0ZCQkMwNCIvPgo8cGF0aCBkPSJNMTYuMDEgMTYuNjVMMTkuNDIgMTkuNTJDMjEuMzEgMTcuNzggMjIuNTYgMTUuMjUgMjIuNTYgMTIuMjVDMjIuNTYgMTEuNDcgMjIuNDkgMTAuNzIgMjIuMzYgMTBIMTJWMTQuMjZIMTcuOTJDMTcuNjYgMTUuMyAxNi45OCAxNi4xMiAxNi4wMSAxNi42NVoiIGZpbGw9IiNFQTQzMzUiLz4KPC9zdmc+" 
            alt="Google" 
            className="w-6 h-6"
          />
          <span className="text-sm font-medium text-gray-600">Google Reviews</span>
        </div>
      </div>

      {/* Mobile Carousel View */}
      <div className="block md:hidden">
        <div className="relative bg-white rounded-2xl shadow-lg p-6 mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-semibold text-sm">
                {reviews[currentReview].avatar}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{reviews[currentReview].name}</h3>
                <span className="text-xs text-gray-500">{reviews[currentReview].date}</span>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {renderStars(reviews[currentReview].rating)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {reviews[currentReview].review}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevReview}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentReview ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextReview}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:block">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {(showAll ? reviews : reviews.slice(0, 6)).map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">
                    {review.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {review.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {reviews.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              {showAll ? 'Show Less' : `View All ${reviews.length} Reviews`}
            </button>
          </div>
        )}
      </div>

       
     
    </div>
     </section>
  );
};

export default GoogleReviewsComponent;