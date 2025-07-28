//  'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Eye, Heart, ShoppingCart } from 'lucide-react';

// const ProductCardShop = ({
//   productImage = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
//   hoverImage = "https://images.unsplash.com/photo-1606813902592-8e437f8d5e0c?w=400&h=400&fit=crop",  // ✅ Set Hover Image
//   productName = "ORTHODEXIL - JOINT PAIN OIL",
//   price = "549",
//   currency = "₹",
//   mrpText = "MRP",
//   slug = productName,
//   onQuickView = () => console.log('Quick view clicked'),
//   onAddToWishlist = () => console.log('Add to wishlist clicked'),
//   onAddToCart = () => console.log('Add to cart clicked'),
//   onProductClick = () => console.log('Product card clicked')
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleProductClick = () => {
//     onProductClick(slug);
//     // For Next.js navigation, you can use:
//     // router.push(`/shop/details/${productId}`);
//   };

//   const handleQuickView = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     onQuickView(slug);
//     // For Next.js navigation, you can use:
//     router.push(`/shop/${slug}`);
//   };

//   const handleAddToWishlist = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     onAddToWishlist(slug);
//     // For Next.js navigation, you can use:
//     router.push('/wishlist');
//   };

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     onAddToCart(slug);
//     // For Next.js navigation, you can use:
//     router.push('/cart');
//   };

//   return (
//     <div 
//       className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white rounded-none overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleProductClick}
//     >
//       {/* Image Container */}
//       <div className="relative bg-gradient-to-br from-pink-50 to-rose-100 aspect-square">
//         {/* Default Image */}
//         <img 
//           src={productImage}
//           alt={productName}
//           className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
//         />
        
//         {/* Hover Image */}
//         <img 
//           src={hoverImage}
//           alt={productName + " Hover"}
//           className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
//         />

//         {/* Hover Icons Overlay */}
//         <div className={`absolute inset-0  bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//           <div className="flex space-x-3">
//             {/* Quick View Icon */}
//             <button
//               onClick={handleQuickView}
//               className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-50 transform hover:scale-110 transition-all duration-200 group"
//               title="Quick View"
//             >
//               <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-black" />
//             </button>

//             {/* Add to Wishlist Icon */}
//             {/* <button
//               onClick={handleAddToWishlist}
//               className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-red-50 transform hover:scale-110 transition-all duration-200 group"
//               title="Add to Wishlist"
//             >
//               <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-red-500" />
//             </button> */}

//             {/* Add to Cart Icon */}
//             <button
//               onClick={handleAddToCart}
//               className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-green-50 transform hover:scale-110 transition-all duration-200 group"
//               title="Add to Cart"
//             >
//               <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-green-600" />
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Product Details */}
//       <div className="px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 text-center bg-white">
//         {/* Product Name */}
//         <div className=" text-gray-600 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">
//           {productName}
//         </div>
        
//         {/* Price Section */}
//         <div className="text-gray-600 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">
//           {currency} {price}  {mrpText}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCardShop;

 
 'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, Heart, ShoppingCart } from 'lucide-react';

const ProductCardShop = ({
  productId, // Add productId prop
  productImage = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
  hoverImage = "https://images.unsplash.com/photo-1606813902592-8e437f8d5e0c?w=400&h=400&fit=crop",
  productName = "ORTHODEXIL - JOINT PAIN OIL",
  price = "549",
  currency = "₹",
  mrpText = "MRP",
  slug = '',
  onQuickView = () => console.log('Quick view clicked'),
  onAddToWishlist = () => console.log('Add to wishlist clicked'),
  onAddToCart = () => console.log('Add to cart clicked'),
  onProductClick = () => console.log('Product card clicked')
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleProductClick = () => {
    // Use productId instead of undefined id
    onProductClick(productId);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Use productId instead of undefined id
    onQuickView(productId);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Use productId instead of slug for consistency
    onAddToWishlist(productId);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Use productId instead of slug for consistency
    onAddToCart(productId);
  };

  return (
    <div 
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white rounded-none overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleProductClick}
    >
      {/* Image Container */}
      <div className="relative bg-[#ffff] aspect-square">
        {/* Default Image */}
        <img 
          src={productImage}
          alt={productName}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Hover Image */}
        <img 
          src={hoverImage}
          alt={productName + " Hover"}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Hover Icons Overlay */}
        {/* <div className={`absolute inset-0 bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex space-x-3">
            
            <button
              onClick={handleQuickView}
              className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-50 transform hover:scale-110 transition-all duration-200 group"
              title="Quick View"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-black" />
            </button>

           

           
            <button
              onClick={handleAddToCart}
              className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-green-50 transform hover:scale-110 transition-all duration-200 group"
              title="Add to Cart"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-green-600" />
            </button>
          </div>
        </div> */}

       <div
  className={`absolute top-4 right-4 transition-all duration-500 ${
    isHovered ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 -translate-y-4'
  }`}
>
  <div className="flex space-x-3">
    {/* Quick View Icon */}
    <button
      onClick={handleQuickView}
      className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-50 transform hover:scale-110 transition-all duration-200 group"
      title="Quick View"
    >
      <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-black" />
    </button>

    {/* Add to Cart Icon */}
    {/* <button
      onClick={handleAddToCart}
      className="bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-green-50 transform hover:scale-110 transition-all duration-200 group"
      title="Add to Cart"
    >
      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-green-600" />
    </button> */}
  </div>
</div>


      </div>
      
      {/* Product Details */}
      <div className="px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 text-center bg-[#ffff] border-t border-gray-200">
        {/* Product Name */}
        {/* text-start text-xl sm:text-3xl md:text-4xl   mb-2 text-[#586e20] drop-shadow-lg */}
        <div className="text-[#586e20] text-lg sm:text-xl md:text-2xl ">

          {productName}
        </div>
        
        {/* Price Section */}
        {/* <div className="text-gray-600 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase">
          {currency} {price} {mrpText}
        </div> */}
        <div className="text-black text-lg ">
      
        {mrpText && (
          <span className="ml-2 line-through text-black">
            {mrpText}
          </span>
          
          )}
           <span className="ml-2">
          ₹ {price}
        </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardShop;
 
 