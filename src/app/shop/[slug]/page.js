 'use client';
import React, { useState } from 'react';
import { Plus, Minus, ChevronDown, ChevronUp, Shield, Leaf, Award, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';
import ShopPage from '../page';
import RelatedProduct from '../../components/layout/Shop/RelatedProduct';

export default function OrthodexilProductPage() {
  const [selectedSize, setSelectedSize] = useState('30ml');
  const [quantity, setQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const sizes = ['30ml', '50ml'];
  const painTypes = [
    { name: 'Arthritis Pain', color: 'bg-[#989491]' },
    { name: 'Elbow Pain', color: 'bg-[#989491]' },
    { name: 'Knee Pain', color: 'bg-[#989491]' },
    { name: 'Back Pain', color: 'bg-[#989491]' },
    { name: 'Shoulder Pain', color: 'bg-[#989491]' }
  ];

  const benefits = [
    'Potent cannabinoid-based pain relief as compared to superficial numbing of the skin',
    'Natural and safe for long-term use',
    'Formulated specifically to reduce joint pain and inflammation',
    'Reduces muscle stiffness, inflammation, and joint soreness',
    'Fast-acting and long-lasting relief'
  ];

  const productImages = [
    'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1556909212-f773b1d15de9?w=600&h=600&fit=crop&crop=center'
  ];

  const guaranteeIcons = [
    { icon: Zap, text: 'REDUCE CORE TEMPERATURE' },
    { icon: Shield, text: 'COAL LIGNIFIED' },
    { icon: Award, text: 'LABS TESTED' },
    { icon: Leaf, text: 'NATURAL INGREDIENTS' }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <> 
    <div className="min-h-screen bg-gray-50 pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side - Images and Description */}
        <div>
          {/* Main Product Image */}
          <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg overflow-hidden">
            <img 
              src={productImages[selectedImageIndex]} 
              alt="Orthodexil Joint Pain Oil"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {productImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded border-2 cursor-pointer overflow-hidden ${
                  selectedImageIndex === index ? 'border-[#82a133]' : 'border-gray-200'
                }`}
              >
                <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Product Description below images */}
          <div className="bg-gray-50 p-3 rounded-md mt-4">
            <p className="text-sm text-gray-600">
              Rich in CBD content, Orthodexil contains high quality Cannabis (Vijaya) leaf extract combined with ayurvedic ingredients that amplify the extract's anti-inflammatory, pain and stress relieving properties to effectively reduce joint tenderness and discomfort.
            </p>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="space-y-5">
          <h1 className="text-2xl font-bold text-gray-800">ORTHODEXIL - JOINT PAIN OIL</h1>
          <p className="text-gray-600">Potent, all-natural relief from aching joints and inflammation.</p>

          {/* Pain Types */}
          <div className="flex flex-wrap gap-2">
            {painTypes.map((type, index) => (
              <span key={index} className={`px-3 py-1 rounded-full text-sm text-white ${type.color}`}>
                {type.name}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-gray-800">₹ 549 MRP</div>

          {/* Size Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded-md text-sm transition ${
                    selectedSize === size
                      ? 'bg-[#82a133] text-white border-[#82a133]'
                      : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <div className="flex items-center space-x-2 w-28">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-[#82a133] hover:text-white transition"
              >
                <Minus size={16} />
              </button>
              <span className="flex-1 text-center py-1 border border-gray-300 rounded text-sm text-black">
              {quantity}
            </span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-[#82a133] hover:text-white transition"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <Button className="w-full text-center">ADD TO CART</Button>
          <Button className="w-full text-center">BUY IT NOW</Button>

          
        </div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* Left Side (70%) */}
  <div className="lg:col-span-2 space-y-8">
    
    {/* Guarantee Section */}
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">OUR GUARANTEE</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {guaranteeIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                <IconComponent size={22} className="text-green-600" />
              </div>
              <div className="text-xs font-medium text-gray-700 leading-tight">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Why Choose Section */}
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">WHY CHOOSE ORTHODEXIL OVER OTHERS?</h2>
      <div className="bg-white rounded-lg p-6">
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    

  </div>

  {/* Right Side (30%) - FAQ Part */}
   <div className="space-y-3">
      {[
        { id: 'benefits', title: 'BENEFITS', content: 'Our Orthodexil Joint Pain Oil provides comprehensive relief through natural cannabinoid compounds that penetrate deep into tissues, offering long-lasting pain management and reduced inflammation for improved mobility and comfort.' },
        { id: 'usage', title: 'HOW & WHEN TO USE', content: 'Apply 2-3 drops to the affected area and gently massage in circular motions until fully absorbed. Use 2-3 times daily or as needed.' },
        { id: 'who', title: 'WHO CAN USE', content: 'Suitable for adults experiencing joint pain, arthritis, muscle stiffness, or inflammation. Not recommended for pregnant or nursing women, children under 18, or individuals with known allergies to cannabis-based products.' },
        { id: 'benefits', title: 'BENEFITS', content: 'Our Orthodexil Joint Pain Oil provides comprehensive relief through natural cannabinoid compounds that penetrate deep into tissues, offering long-lasting pain management and reduced inflammation for improved mobility and comfort.' },
        { id: 'usage', title: 'HOW & WHEN TO USE', content: 'Apply 2-3 drops to the affected area and gently massage in circular motions until fully absorbed. Use 2-3 times daily or as needed.' }
        
      ].map((section) => (
        <div key={section.id} className="bg-white border border-gray-200 rounded-md">
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex justify-between items-center p-3 text-left hover:bg-gray-50"
          >
            <span className="font-medium text-gray-700 text-sm">{section.title}</span>
            {expandedSection === section.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {expandedSection === section.id && (
            <div className="px-4 pb-3 border-t border-gray-200">
              <div className="pt-3 text-sm text-gray-600">{section.content}</div>
            </div>
          )}
        </div>
      ))}
    </div>

</div>

</div>

<RelatedProduct />
</>
  );
}
