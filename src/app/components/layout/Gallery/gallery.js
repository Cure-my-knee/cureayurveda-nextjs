'use client'
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import Title from '../../ui/Title';
import Subtitle from '../../ui/Subtitle';
 

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery data - replace with your actual images
  const galleryItems = [
    {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    title: "Herbal Medicine Preparation",
    description: "Traditional Ayurvedic herbs being processed for natural remedies."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    title: "Meditation & Wellness",
    description: "Guided meditation practices that support mental and emotional balance."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    title: "Ayurvedic Consultation",
    description: "Personalized health consultations with experienced Ayurvedic doctors."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
    title: "Natural Ingredients",
    description: "Sourcing pure, organic herbs and ingredients from nature’s bounty."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    title: "Therapeutic Massage",
    description: "Healing body therapies like Abhyanga to restore energy flow and relaxation."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    title: "Yoga Practice",
    description: "Traditional yoga sessions designed to align mind, body, and spirit."
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
    title: "Herbal Garden",
    description: "Cultivation of healing herbs in a sustainable and organic environment."
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=300&fit=crop",
    title: "Panchakarma Therapy",
    description: "Holistic detox programs that purify the body and rejuvenate the system."
  }
  ];

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <> 
    
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
           
          <Title>
              Our Ayurvedic Gallery
          </Title>

          <Subtitle>
                Discover the beauty of traditional Ayurvedic practices through our curated collection of healing moments
          </Subtitle>
          
           <div className="w-24 h-1 mx-auto mt-8 rounded-full" style={{background: 'linear-gradient(to right, #586e20, #82a133)',}}> </div>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
              onClick={() => openModal(item)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img style={{color: 'white'}}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 style={{color: 'white'}} className="text-xl font-bold  mb-2">{item.title}</h3>
                  <p style={{color: 'white'}} className="text-sm  mb-4">{item.description}</p>
                  
                  {/* Zoom Icon */}
                  <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full ml-auto">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Popup */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn">
            <div className="relative max-w-4xl max-h-full mx-4 animate-scaleIn">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 style={{color: 'white'}} className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p style={{color: 'white'}} className="text-gray-200">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
    </>
  );
};

export default GallerySection;