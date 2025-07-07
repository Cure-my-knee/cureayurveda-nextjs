 "use client"
import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, ThumbsDown, User, MessageCircle, Calendar } from 'lucide-react';

const ProductReviews = ({ productId = 'default', productName = 'Product' }) => {
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');

  // Sample reviews data
  const sampleReviews = [
    {
      id: 1,
      userName: 'Sarah Johnson',
      rating: 5,
      title: 'Excellent product!',
      comment: 'This product exceeded my expectations. The quality is outstanding and it works exactly as described.',
      date: '2024-06-15',
      verified: true,
      helpful: 12,
      notHelpful: 1,
      userLiked: null
    },
    {
      id: 2,
      userName: 'Mike Chen',
      rating: 4,
      title: 'Good value for money',
      comment: 'Overall satisfied with the purchase. The product is well-made and functions as expected.',
      date: '2024-06-10',
      verified: true,
      helpful: 8,
      notHelpful: 0,
      userLiked: null
    },
    {
      id: 3,
      userName: 'Emily Davis',
      rating: 5,
      title: 'Highly recommended',
      comment: 'Amazing quality and great customer service. The product arrived exactly as described.',
      date: '2024-06-05',
      verified: false,
      helpful: 15,
      notHelpful: 2,
      userLiked: null
    },
    {
      id: 4,
      userName: 'David Wilson',
      rating: 3,
      title: 'Average product',
      comment: 'The product is okay but nothing special. It does what it is supposed to do.',
      date: '2024-05-28',
      verified: true,
      helpful: 5,
      notHelpful: 3,
      userLiked: null
    }
  ];

  useEffect(() => {
    setReviews(sampleReviews);
  }, [productId]);

  // Calculate review statistics
  const calculateStats = () => {
    const total = reviews.length;
    const average = total > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / total : 0;
    
    const ratingCounts = {
      5: reviews.filter(r => r.rating === 5).length,
      4: reviews.filter(r => r.rating === 4).length,
      3: reviews.filter(r => r.rating === 3).length,
      2: reviews.filter(r => r.rating === 2).length,
      1: reviews.filter(r => r.rating === 1).length
    };

    return { total, average, ratingCounts };
  };

  const { total, average, ratingCounts } = calculateStats();

  // Handle helpful/not helpful votes
  const handleVote = (reviewId, type) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        const newReview = { ...review };
        
        if (type === 'helpful') {
          if (newReview.userLiked === 'helpful') {
            newReview.helpful--;
            newReview.userLiked = null;
          } else {
            if (newReview.userLiked === 'notHelpful') {
              newReview.notHelpful--;
            }
            newReview.helpful++;
            newReview.userLiked = 'helpful';
          }
        } else {
          if (newReview.userLiked === 'notHelpful') {
            newReview.notHelpful--;
            newReview.userLiked = null;
          } else {
            if (newReview.userLiked === 'helpful') {
              newReview.helpful--;
            }
            newReview.notHelpful++;
            newReview.userLiked = 'notHelpful';
          }
        }
        
        return newReview;
      }
      return review;
    });
    
    setReviews(updatedReviews);
  };

  // Filter and sort reviews
  const getFilteredAndSortedReviews = () => {
    let filtered = reviews;
    
    if (filterRating !== 'all') {
      filtered = reviews.filter(review => review.rating === parseInt(filterRating));
    }
    
    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'highest':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'lowest':
        return filtered.sort((a, b) => a.rating - b.rating);
      case 'helpful':
        return filtered.sort((a, b) => b.helpful - a.helpful);
      default:
        return filtered;
    }
  };

  const filteredReviews = getFilteredAndSortedReviews();

  // Render stars
  const renderStars = (rating, size = 'w-3 h-3') => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Reviews</h3>

        {/* Review Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Overall Rating */}
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-3">
              <div className="text-3xl font-bold text-gray-900">{average.toFixed(1)}</div>
              <div>
                {renderStars(Math.round(average), 'w-4 h-4')}
                <p className="text-sm text-gray-600 mt-1">Based on {total} reviews</p>
              </div>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div>
            <div className="space-y-1">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-700 w-3">{rating}</span>
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-yellow-400 h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: total > 0 ? `${(ratingCounts[rating] / total) * 100}%` : '0%'
                      }}
                    ></div>
                  </div>
                  <span className="text-gray-600 w-6 text-right">{ratingCounts[rating]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter and Sort Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="px-3 py-1.5 text-sm border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#82a133] focus:border-transparent"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 text-sm border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-[#82a133] focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
          
          <div className="text-sm text-gray-600">
            Showing {filteredReviews.length} of {total} reviews
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-8">
              <MessageCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No reviews yet</h3>
              <p className="text-gray-600">Be the first to review this product!</p>
            </div>
          ) : (
            filteredReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#82a133] rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900 text-sm">{review.userName}</h4>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        {renderStars(review.rating)}
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h5 className="font-medium text-gray-900 mb-2 text-sm">{review.title}</h5>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{review.comment}</p>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleVote(review.id, 'helpful')}
                    className={`flex items-center space-x-1 text-xs transition-colors ${
                      review.userLiked === 'helpful' 
                        ? 'text-green-600' 
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button
                    onClick={() => handleVote(review.id, 'notHelpful')}
                    className={`flex items-center space-x-1 text-xs transition-colors ${
                      review.userLiked === 'notHelpful' 
                        ? 'text-red-600' 
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    <ThumbsDown className="w-3 h-3" />
                    <span>Not Helpful ({review.notHelpful})</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;