//  'use client';
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import { Plus, Minus, ChevronDown, ChevronUp, Shield, Leaf, Award, Zap } from 'lucide-react';
// import Button from '../../components/ui/Button';
// import RelatedProduct from '../../components/layout/Shop/RelatedProduct';
// import { authAPI } from '@/lib/api/endpoints';
// import { toast } from 'react-toastify';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// export default function ProductDetailsPage() {
//   const params = useParams();
//   const productId = params?.id; // Get the dynamic ID from URL
  
//   const [selectedSize, setSelectedSize] = useState('30ml');
//   const [quantity, setQuantity] = useState(1);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
//   // Product state
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fallback product data
//   const fallbackProduct = {
//     id: 'orthodexil-30ml',
//     productImage: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=600&fit=crop&crop=center',
//     hoverImage: 'https://shaadiwish.com/blog/wp-content/uploads/2020/08/man.jpg',
//     productName: 'Orthodexil Joint Pain Oil',
//     price: '549',
//     currency: '₹',
//     mrpText: 'MRP',
//     quantity: 100,
//     type: 'Topical Oil',
//     category: 'Pain Relief',
//     details: 'Natural joint pain relief oil with premium ingredients',
//     features: ['Natural ingredients', 'Fast-acting', 'Long-lasting relief'],
//     benefits: ['Reduces inflammation', 'Relieves joint pain', 'Improves mobility'],
//     status: 'active',
//     images: [
//       'https://shaadiwish.com/blog/wp-content/uploads/2020/08/man.jpg',
//       'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=600&fit=crop&crop=center',
//       'https://shaadiwish.com/blog/wp-content/uploads/2020/08/man.jpg',
//       'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&h=600&fit=crop&crop=center',
//       'https://shaadiwish.com/blog/wp-content/uploads/2020/08/man.jpg',
//     ],
//     sizes: ['30ml', '50ml'],
//     description: 'Rich in CBD content, Orthodexil contains high quality Cannabis (Vijaya) leaf extract combined with ayurvedic ingredients that amplify the extract\'s anti-inflammatory, pain and stress relieving properties to effectively reduce joint tenderness and discomfort.'
//   };

//   // Fetch product details
//   const fetchProductDetails = async () => {
//     if (!productId) {
//       setError('Product ID not found');
//       setLoading(false);
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);
      
//       console.log('Fetching product details for ID:', productId);
//       const data = await authAPI.getProductDetails(productId);
//       console.log('Raw API response for product details:', data);
      
//       // Handle the API response structure
//       const productData = data.data?.product || data.product || data;
      
//       if (!productData) {
//         console.warn('No product found in API response, using fallback data');
//         setProduct(fallbackProduct);
//         toast.info('Loading default product details', {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//         return;
//       }
      
//       // Transform API data
//       const transformedProduct = {
//         id: productData._id || productData.id || productId,
//         productImage: productData.images?.[0] || productData.productImage || fallbackProduct.productImage,
//         hoverImage: productData.images?.[1] || productData.hoverImage || fallbackProduct.hoverImage,
//         productName: productData.productName || productData.name || fallbackProduct.productName,
//         price: productData.price?.toString() || fallbackProduct.price,
//         currency: productData.currency || fallbackProduct.currency,
//         mrpText: productData.mrpText || fallbackProduct.mrpText,
//         quantity: productData.quantity || fallbackProduct.quantity,
//         type: productData.type || fallbackProduct.type,
//         category: productData.category || fallbackProduct.category,
//         details: productData.details || productData.description || fallbackProduct.details,
//         features: productData.features || fallbackProduct.features,
//         benefits: productData.benefits || fallbackProduct.benefits,
//         status: productData.status || fallbackProduct.status,
//         images: productData.images || fallbackProduct.images,
//         sizes: productData.sizes || fallbackProduct.sizes,
//         description: productData.description || productData.details || fallbackProduct.description
//       };
      
//       setProduct(transformedProduct);
//       console.log('Product details state updated successfully:', transformedProduct);
      
//       toast.success('Product details loaded successfully!', {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
      
//     } catch (err) {
//       console.error('Error fetching product details:', err);
//       setError(err.message || 'Failed to fetch product details');
      
//       // Use fallback data on error
//       console.log('Using fallback product due to API error');
//       setProduct(fallbackProduct);
      
//       toast.error('Failed to load product details from server. Showing default product.', {
//         position: "top-right",
//         autoClose: 4000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     } finally {
//       setLoading(false);
//       console.log('Fetch product details completed');
//     }
//   };

//   // Fetch product details on component mount or when productId changes
//   useEffect(() => {
//     fetchProductDetails();
//   }, [productId]);

//   const painTypes = [
//     { name: 'Arthritis Pain', color: 'bg-[#989491]' },
//     { name: 'Elbow Pain', color: 'bg-[#989491]' },
//     { name: 'Knee Pain', color: 'bg-[#989491]' },
//     { name: 'Back Pain', color: 'bg-[#989491]' },
//     { name: 'Shoulder Pain', color: 'bg-[#989491]' }
//   ];

//   const benefits = [
//     'Potent cannabinoid-based pain relief as compared to superficial numbing of the skin',
//     'Natural and safe for long-term use',
//     'Formulated specifically to reduce joint pain and inflammation',
//     'Reduces muscle stiffness, inflammation, and joint soreness',
//     'Fast-acting and long-lasting relief'
//   ];

//   const guaranteeIcons = [
//     { icon: Zap, text: 'REDUCE CORE TEMPERATURE' },
//     { icon: Shield, text: 'COAL LIGNIFIED' },
//     { icon: Award, text: 'LABS TESTED' },
//     { icon: Leaf, text: 'NATURAL INGREDIENTS' }
//   ];

//   const faqSections = [
//     { 
//       id: 'benefits', 
//       title: 'BENEFITS', 
//       content: 'Our joint pain oil provides comprehensive relief through natural compounds that penetrate deep into tissues, offering long-lasting pain management and reduced inflammation for improved mobility and comfort.' 
//     },
//     { 
//       id: 'usage', 
//       title: 'HOW & WHEN TO USE', 
//       content: 'Apply 2-3 drops to the affected area and gently massage in circular motions until fully absorbed. Use 2-3 times daily or as needed.' 
//     },
//     { 
//       id: 'who', 
//       title: 'WHO CAN USE', 
//       content: 'Suitable for adults experiencing joint pain, arthritis, muscle stiffness, or inflammation. Not recommended for pregnant or nursing women, children under 18, or individuals with known allergies to any ingredients.' 
//     },
//     { 
//       id: 'ingredients', 
//       title: 'INGREDIENTS', 
//       content: 'Contains high-quality natural extracts combined with traditional Ayurvedic ingredients that enhance the anti-inflammatory and pain-relieving properties.' 
//     },
//     { 
//       id: 'safety', 
//       title: 'SAFETY INFORMATION', 
//       content: 'For external use only. Avoid contact with eyes. Discontinue use if irritation occurs. Store in a cool, dry place away from direct sunlight.' 
//     }
//   ];

//   const toggleSection = (section) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   const handleAddToCart = () => {
//     toast.success(`Added ${quantity} x ${product?.productName} (${selectedSize}) to cart!`, {
//       position: "bottom-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

//   const handleBuyNow = () => {
//     toast.info('Redirecting to checkout...', {
//       position: "bottom-right",
//       autoClose: 1500,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: true,
//     });
//     // Add your buy now logic here
//   };

//   // Show loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-24">
//         <div className="max-w-7xl mx-auto">
//           <SkeletonTheme baseColor="#f3f4f6" highlightColor="#e5e7eb">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//               <div>
//                 <Skeleton height={500} className="rounded-lg" />
//                 <div className="flex gap-2 mt-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Skeleton key={i} height={56} width={56} className="rounded" />
//                   ))}
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <Skeleton height={40} />
//                 <Skeleton height={20} width="60%" />
//                 <Skeleton height={30} />
//                 <Skeleton height={60} />
//                 <Skeleton height={50} />
//                 <Skeleton height={50} />
//               </div>
//             </div>
//           </SkeletonTheme>
//         </div>
//       </div>
//     );
//   }

//   // Show error state
//   if (error && !product) {
//     return (
//       <div className="min-h-screen bg-gray-50 pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-24">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-red-50 border border-red-200 rounded-md p-6">
//             <h3 className="text-lg font-medium text-red-800 mb-2">Product Not Found</h3>
//             <p className="text-sm text-red-700">
//               The product you're looking for doesn't exist or couldn't be loaded.
//             </p>
//             <button 
//               onClick={() => window.history.back()}
//               className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <> 
//       <div className="min-h-screen bg-gray-50 pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-24">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
//           {/* Left Side - Images and Description */}
//           <div>
//             {/* Main Product Image */}
//             <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg overflow-hidden">
//               <img 
//                 src={product?.images?.[selectedImageIndex] || product?.productImage} 
//                 alt={product?.productName || "Product Image"}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>

//             {/* Thumbnails */}
//             <div className="flex flex-wrap gap-2 mt-4 justify-center">
//               {product?.images?.map((image, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setSelectedImageIndex(index)}
//                   className={`w-12 h-12 sm:w-14 sm:h-14 rounded border-2 cursor-pointer overflow-hidden ${
//                     selectedImageIndex === index ? 'border-[#82a133]' : 'border-gray-200'
//                   }`}
//                 >
//                   <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
//                 </div>
//               ))}
//             </div>

//             {/* Product Description below images */}
//             <div className="bg-white p-4 rounded-md mt-4 shadow-sm">
//               <p className="text-sm text-gray-600">
//                 {product?.description || product?.details || "No description available."}
//               </p>
//             </div>
//           </div>

//           {/* Right Side - Product Details */}
//           <div className="space-y-5">
//             <h1 className="text-2xl font-bold text-gray-800">
//               {product?.productName?.toUpperCase() || "PRODUCT NAME"}
//             </h1>
//             <p className="text-gray-600">
//               {product?.type || "Premium quality product for your needs."}
//             </p>

//             {/* Pain Types */}
//             <div className="flex flex-wrap gap-2">
//               {painTypes.map((type, index) => (
//                 <span key={index} className={`px-3 py-1 rounded-full text-sm text-white ${type.color}`}>
//                   {type.name}
//                 </span>
//               ))}
//             </div>

//             {/* Price */}
//             <div className="text-2xl font-bold text-gray-800">
//               {product?.currency} {product?.price} {product?.mrpText}
//             </div>

//             {/* Size Selection */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
//               <div className="flex space-x-2">
//                 {(product?.sizes || ['30ml', '50ml']).map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-3 py-1 border rounded-md text-sm transition ${
//                       selectedSize === size
//                         ? 'bg-[#82a133] text-white border-[#82a133]'
//                         : 'bg-white text-black border-gray-300 hover:bg-gray-100'
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
//               <div className="flex items-center space-x-2 w-28">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-[#82a133] hover:text-white transition"
//                 >
//                   <Minus size={16} />
//                 </button>
//                 <span className="flex-1 text-center py-1 border border-gray-300 rounded text-sm text-black">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-[#82a133] hover:text-white transition"
//                 >
//                   <Plus size={16} />
//                 </button>
//               </div>
//             </div>

//             {/* Buttons */}
//             <Button 
//               className="w-full text-center" 
//               onClick={handleAddToCart}
//             >
//               ADD TO CART
//             </Button>
//             <Button 
//               className="w-full text-center" 
//               onClick={handleBuyNow}
//             >
//               BUY IT NOW
//             </Button>
//           </div>
//         </div>

//         <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Side (70%) */}
//           <div className="lg:col-span-2 space-y-8">
            
//             {/* Guarantee Section */}
//             <div className="bg-white rounded-lg p-6 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">OUR GUARANTEE</h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//                 {guaranteeIcons.map((item, index) => {
//                   const IconComponent = item.icon;
//                   return (
//                     <div key={index} className="text-center">
//                       <div className="w-14 h-14 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
//                         <IconComponent size={22} className="text-green-600" />
//                       </div>
//                       <div className="text-xs font-medium text-gray-700 leading-tight">{item.text}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Why Choose Section */}
//             <div>
//               <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
//                 WHY CHOOSE {product?.productName?.toUpperCase() || 'THIS PRODUCT'} OVER OTHERS?
//               </h2>
//               <div className="bg-white rounded-lg p-6 shadow-sm">
//                 <ul className="space-y-3">
//                   {(product?.benefits?.length > 0 ? product.benefits : benefits).map((benefit, index) => (
//                     <li key={index} className="flex items-start space-x-2">
//                       <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
//                       <span className="text-gray-700 text-sm">{benefit}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right Side (30%) - FAQ Part */}
//           <div className="space-y-3">
//             {faqSections.map((section) => (
//               <div key={section.id} className="bg-white border border-gray-200 rounded-md shadow-sm">
//                 <button
//                   onClick={() => toggleSection(section.id)}
//                   className="w-full flex justify-between items-center p-3 text-left hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="font-medium text-gray-700 text-sm">{section.title}</span>
//                   {expandedSection === section.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//                 </button>
//                 {expandedSection === section.id && (
//                   <div className="px-4 pb-3 border-t border-gray-200">
//                     <div className="pt-3 text-sm text-gray-600">{section.content}</div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <RelatedProduct />
//     </>
//   );
// }

//  "use client"
// import React, { useState, useEffect } from 'react';
// import { useRouter, useParams } from 'next/navigation';
// import { toast } from 'react-toastify';
// import Image from 'next/image';
// import { Heart, ShoppingCart, Star, Plus, Minus, Shield, Leaf } from 'lucide-react';
// import BreadCrumbBanner from '../../components/layout/BreadCrumbBanner';
// import Button from '../../components/ui/Button';
// import { authAPI } from '@/lib/api/endpoints';

// const ProductDetailsPage = () => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [showFAQ, setShowFAQ] = useState(false);
  
//   const router = useRouter();
//   const params = useParams();
//   const productId = params.id;

//   // Breadcrumbs
//   const breadcrumbs = [
//     { label: 'Home', href: '/' },
//     { label: 'Shop', href: '/shop' },
//     { label: product?.productName || 'Product Details' }
//   ];

//   // Fetch product details on component mount
//   useEffect(() => {
//     if (productId) {
//       fetchProductDetails();
//     }
//   }, [productId]);

//   const fetchProductDetails = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const data = await authAPI.getProductDetails(productId);   
      
//       // Check if the response is successful
//       if (data.success) {
//         const productData = data.data;

//         if (!productData) {
//           throw new Error('Product not found');
//         }

//         const transformedProduct = {
//           id: productData._id || productData.id || productId,
//           productName: productData.name || 'Unknown Product',
//           price: productData.price?.toString() || "0",
//           currency: productData.currency === 'INR' ? '₹' : productData.currency || "₹",
//           mrpText: productData.mrpText || "MRP",
//           images: productData.productImages && productData.productImages.length > 0 
//             ? productData.productImages 
//             : ["/images/defaultproduct/productimage1.jpeg"],   
//           description: productData.description || 'No description available',
//           benefits: productData.benefits || [],
//           sizes: productData.sizes || [],
//           painTypes: productData.painTypes || [],
//           guaranteeIcons: productData.guaranteeIcons || [],
//           faq: productData.faq || [],
//           stock: productData.stock || 0,
//           createdAt: productData.createdAt,
//           updatedAt: productData.updatedAt,
//           rating: 4.5, // Default rating as API doesn't provide it
//           reviews: Math.floor(Math.random() * 100) + 10 // Random reviews count
//         };

//         setProduct(transformedProduct);
//         // Set default size if available
//         if (transformedProduct.sizes.length > 0) {
//           setSelectedSize(transformedProduct.sizes[0]);
//         }
//       } else {
//         throw new Error('Product not found');
//       }

//     } catch (err) {
//       console.error('Error fetching product details:', err);
//       setError(err.message || 'Failed to fetch product details');
//       toast.error('Failed to load product details', {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(prev => Math.max(1, Math.min(product.stock, prev + change)));
//   };

//   const handleAddToCart = () => {
//     if (product.stock === 0) {
//       toast.error('Product is out of stock!', {
//         position: "bottom-right",
//         autoClose: 2000,
//       });
//       return;
//     }

//     console.log('Adding to cart:', { productId, quantity, selectedSize });
//     toast.success(`Added ${quantity} item(s) to cart!`, {
//       position: "bottom-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
    
//     // Add actual cart logic here
//     setTimeout(() => {
//       router.push('/cart');
//     }, 1500);
//   };

//   const handleAddToWishlist = () => {
//     console.log('Adding to wishlist:', productId);
//     toast.success('Added to wishlist!', {
//       position: "bottom-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

//   const handleBuyNow = () => {
//     if (product.stock === 0) {
//       toast.error('Product is out of stock!', {
//         position: "bottom-right",
//         autoClose: 2000,
//       });
//       return;
//     }

//     console.log('Buy now:', { productId, quantity, selectedSize });
//     toast.info('Proceeding to checkout...', {
//       position: "bottom-right",
//       autoClose: 1500,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: true,
//     });
    
//     // Add to cart and navigate to checkout
//     setTimeout(() => {
//       router.push('/checkout');
//     }, 1000);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <BreadCrumbBanner title="Loading..." breadcrumbs={breadcrumbs} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="animate-pulse">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <div className="aspect-square bg-gray-300 rounded"></div>
//                 <div className="flex space-x-2">
//                   {[...Array(4)].map((_, i) => (
//                     <div key={i} className="w-20 h-20 bg-gray-300 rounded"></div>
//                   ))}
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="h-8 bg-gray-300 rounded w-3/4"></div>
//                 <div className="h-6 bg-gray-300 rounded w-1/2"></div>
//                 <div className="h-4 bg-gray-300 rounded w-full"></div>
//                 <div className="h-4 bg-gray-300 rounded w-full"></div>
//                 <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !product) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <BreadCrumbBanner title="Product Not Found" breadcrumbs={breadcrumbs} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="text-center">
//             <div className="mx-auto h-12 w-12 text-gray-400">
//               <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12M6 20.291A7.962 7.962 0 016 12m0 8.291A7.962 7.962 0 016 12m0 8.291A7.962 7.962 0 016 12" />
//               </svg>
//             </div>
//             <h3 className="mt-2 text-sm font-medium text-gray-900">Product not found</h3>
//             <p className="mt-1 text-sm text-gray-500">
//               The product you're looking for doesn't exist or has been removed.
//             </p>
//             <div className="mt-6">
//               <Button onClick={() => router.push('/shop')}>
//                 Back to Shop
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <BreadCrumbBanner title={product.productName} breadcrumbs={breadcrumbs} />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Product Images */}
//           <div className="space-y-4">
//             <div className="relative">
//               <Image
//                 src={product.images[selectedImage]}
//                 alt={product.productName}
//                 width={500}
//                 height={500}
//                 className="object-cover rounded w-full h-96"
//               />
//             </div>
//             {product.images.length > 1 && (
//               <div className="flex space-x-2">
//                 {product.images.map((image, index) => (
//                   <button
//                     key={index}
//                     className={`w-20 h-20 bg-gray-100 rounded border-2 ${
//                       selectedImage === index ? 'border-blue-500' : 'border-gray-300'
//                     }`}
//                     onClick={() => setSelectedImage(index)}
//                   >
//                     <Image
//                       src={image}
//                       alt={`Product image ${index + 1}`}
//                       width={80}
//                       height={80}
//                       className="object-cover w-full h-full rounded"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Product Details */}
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">{product.productName}</h1>
//               <div className="flex items-center mt-2">
//                 <div className="text-2xl font-bold text-green-600">
//                   {product.currency}{product.price}
//                 </div>
//                 {product.mrpText && (
//                   <span className="ml-2 text-lg text-gray-500 line-through">
//                     {product.mrpText}
//                   </span>
//                 )}
//               </div>
//             </div>

//             <div className="flex items-center">
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={18}
//                     className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
//                     fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
//                   />
//                 ))}
//               </div>
//               <span className="ml-2 text-sm text-gray-600">
//                 {product.rating} ({product.reviews} reviews)
//               </span>
//             </div>

//             {/* Stock Status */}
//             <div className="flex items-center space-x-2">
//               <span className="text-sm text-gray-600">Stock:</span>
//               <span className={`text-sm font-medium ${
//                 product.stock > 0 ? 'text-green-600' : 'text-red-600'
//               }`}>
//                 {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
//               </span>
//             </div>

//             {/* Pain Types */}
//             {product.painTypes && product.painTypes.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">For Relief From:</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {product.painTypes.map((painType, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 rounded-full text-sm font-medium text-white"
//                       style={{ backgroundColor: painType.color }}
//                     >
//                       {painType.name}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Sizes */}
//             {product.sizes && product.sizes.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Size:</h3>
//                 <div className="flex space-x-2">
//                   {product.sizes.map((size, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-4 py-2 border rounded-md text-sm font-medium ${
//                         selectedSize === size
//                           ? 'border-blue-500 bg-blue-50 text-blue-700'
//                           : 'border-gray-300 text-gray-700 hover:border-gray-400'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
//               <p className="text-gray-700 leading-relaxed">{product.description}</p>
//             </div>

//             {/* Benefits */}
//             {product.benefits && product.benefits.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Benefits:</h3>
//                 <ul className="space-y-1">
//                   {product.benefits.map((benefit, index) => (
//                     <li key={index} className="flex items-center text-gray-700">
//                       <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
//                       {benefit}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Guarantee Icons */}
//             {product.guaranteeIcons && product.guaranteeIcons.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Guarantees:</h3>
//                 <div className="flex flex-wrap gap-4">
//                   {product.guaranteeIcons.map((guarantee, index) => (
//                     <div key={index} className="flex items-center space-x-2 bg-gray-50 p-2 rounded">
//                       <Image
//                         src={guarantee.icon}
//                         alt={guarantee.text}
//                         width={24}
//                         height={24}
//                         className="w-6 h-6"
//                       />
//                       <span className="text-sm text-gray-700">{guarantee.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Quantity:</h3>
//               <div className="flex items-center space-x-3">
//                 <button
//                   className="p-2 border-2 border-gray-300 rounded-md hover:border-gray-400 disabled:opacity-50"
//                   onClick={() => handleQuantityChange(-1)}
//                   disabled={quantity <= 1}
//                 >
//                   <Minus size={16} />
//                 </button>
//                 <input
//                   type="text"
//                   value={quantity}
//                   readOnly
//                   className="w-16 text-center border-2 border-gray-300 rounded-md py-2"
//                 />
//                 <button
//                   className="p-2 border-2 border-gray-300 rounded-md hover:border-gray-400 disabled:opacity-50"
//                   onClick={() => handleQuantityChange(1)}
//                   disabled={quantity >= product.stock}
//                 >
//                   <Plus size={16} />
//                 </button>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="space-y-4">
//               <div className="flex space-x-4">
//                 <Button 
//                   onClick={handleAddToCart}
//                   disabled={product.stock === 0}
//                   className="flex-1"
//                 >
//                   <ShoppingCart size={18} className="mr-2" />
//                   Add to Cart
//                 </Button>
//                 <Button 
//                   onClick={handleAddToWishlist}
//                   variant="outline"
//                   className="px-4"
//                 >
//                   <Heart size={18} />
//                 </Button>
//               </div>

//               <Button 
//                 onClick={handleBuyNow} 
//                 className="w-full bg-orange-500 hover:bg-orange-600"
//                 disabled={product.stock === 0}
//               >
//                 Buy Now
//               </Button>
//             </div>

//             {/* FAQ Section */}
//             {product.faq && product.faq.length > 0 && (
//               <div className="border-t pt-6">
//                 <button
//                   onClick={() => setShowFAQ(!showFAQ)}
//                   className="flex items-center justify-between w-full text-left"
//                 >
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     Frequently Asked Questions
//                   </h3>
//                   <span className="text-2xl">{showFAQ ? '−' : '+'}</span>
//                 </button>
//                 {showFAQ && (
//                   <div className="mt-4 space-y-4">
//                     {product.faq.map((faq, index) => (
//                       <div key={index} className="border-l-4 border-blue-500 pl-4">
//                         <h4 className="font-medium text-gray-900">{faq.title}</h4>
//                         <p className="text-gray-700 mt-1">{faq.content}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailsPage;

//  "use client"
// import React, { useState, useEffect } from 'react';
// import { useRouter, useParams } from 'next/navigation';
// import { toast } from 'react-toastify';
// import Image from 'next/image';
// import { Heart, ShoppingCart, Star, Plus, Minus, Shield, Leaf } from 'lucide-react';
// import BreadCrumbBanner from '../../components/layout/BreadCrumbBanner';
// import Button from '../../components/ui/Button';
// import { authAPI } from '@/lib/api/endpoints';
// import RelatedProduct from '@/app/components/layout/Shop/RelatedProduct';

// const ProductDetailsPage = () => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState('');
  
//   const router = useRouter();
//   const params = useParams();
//   const productId = params.id;

//   // Breadcrumbs
//   const breadcrumbs = [
//     { label: 'Home', href: '/' },
//     { label: 'Shop', href: '/shop' },
//     { label: product?.productName || 'Product Details' }
//   ];

//   // Fetch product details on component mount
//   useEffect(() => {
//     if (productId) {
//       fetchProductDetails();
//     }
//   }, [productId]);

//   const fetchProductDetails = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const data = await authAPI.getProductDetails(productId);   
      
//       // Check if the response is successful
//       if (data.success) {
//         const productData = data.data;

//         if (!productData) {
//           throw new Error('Product not found');
//         }

//         const transformedProduct = {
//           id: productData._id || productData.id || productId,
//           productName: productData.name || 'Unknown Product',
//           price: productData.price?.toString() || "0",
//           currency: productData.currency === 'INR' ? '₹' : productData.currency || "₹",
//           mrpText: productData.mrpText || "MRP",
//           images: productData.productImages && productData.productImages.length > 0 
//             ? productData.productImages 
//             : ["/images/defaultproduct/productimage1.jpeg"],   
//           description: productData.description || 'No description available',
//           benefits: productData.benefits || [],
//           sizes: productData.sizes || [],
//           painTypes: productData.painTypes || [],
//           guaranteeIcons: productData.guaranteeIcons || [],
//           faq: productData.faq || [],
//           stock: productData.stock || 0,
//           createdAt: productData.createdAt,
//           updatedAt: productData.updatedAt,
//           rating: 4.5, // Default rating as API doesn't provide it
//           reviews: Math.floor(Math.random() * 100) + 10 // Random reviews count
//         };

//         setProduct(transformedProduct);
//         // Set default size if available
//         if (transformedProduct.sizes.length > 0) {
//           setSelectedSize(transformedProduct.sizes[0]);
//         }
//       } else {
//         throw new Error('Product not found');
//       }

//     } catch (err) {
//       console.error('Error fetching product details:', err);
//       setError(err.message || 'Failed to fetch product details');
//       toast.error('Failed to load product details', {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity(prev => Math.max(1, Math.min(product.stock, prev + change)));
//   };

//   const handleAddToCart = () => {
//     if (product.stock === 0) {
//       toast.error('Product is out of stock!', {
//         position: "bottom-right",
//         autoClose: 2000,
//       });
//       return;
//     }

//     console.log('Adding to cart:', { productId, quantity, selectedSize });
//     toast.success(`Added ${quantity} item(s) to cart!`, {
//       position: "bottom-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
    
//     // Add actual cart logic here
//     setTimeout(() => {
//       router.push('/cart');
//     }, 1500);
//   };

//   const handleAddToWishlist = () => {
//     console.log('Adding to wishlist:', productId);
//     toast.success('Added to wishlist!', {
//       position: "bottom-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

//    const handleBuyNow = () => {
//   if (product.stock === 0) {
//     toast.error('Product is out of stock!', {
//       position: "bottom-right",
//       autoClose: 2000,
//     });
//     return;
//   }

//   console.log('Buy now:', { productId, quantity, selectedSize });

//   toast.info('Proceeding to checkout...', {
//     position: "bottom-right",
//     autoClose: 1000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//   });

//   // 🚀 Navigate to checkout immediately
//   router.push('/checkout');
// };


//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <BreadCrumbBanner title="Loading..." breadcrumbs={breadcrumbs} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="animate-pulse">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <div className="aspect-square bg-gray-300 rounded"></div>
//                 <div className="flex space-x-2">
//                   {[...Array(4)].map((_, i) => (
//                     <div key={i} className="w-20 h-20 bg-gray-300 rounded"></div>
//                   ))}
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="h-8 bg-gray-300 rounded w-3/4"></div>
//                 <div className="h-6 bg-gray-300 rounded w-1/2"></div>
//                 <div className="h-4 bg-gray-300 rounded w-full"></div>
//                 <div className="h-4 bg-gray-300 rounded w-full"></div>
//                 <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !product) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <BreadCrumbBanner title="Product Not Found" breadcrumbs={breadcrumbs} />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="text-center">
//             <div className="mx-auto h-12 w-12 text-gray-400">
//               <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12M6 20.291A7.962 7.962 0 016 12m0 8.291A7.962 7.962 0 016 12m0 8.291A7.962 7.962 0 016 12" />
//               </svg>
//             </div>
//             <h3 className="mt-2 text-sm font-medium text-gray-900">Product not found</h3>
//             <p className="mt-1 text-sm text-gray-500">
//               The product you're looking for doesn't exist or has been removed.
//             </p>
//             <div className="mt-6">
//               <Button onClick={() => router.push('/shop')}>
//                 Back to Shop
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <> 
//     <div className="min-h-screen bg-gray-50">
//       <BreadCrumbBanner title={product.productName} breadcrumbs={breadcrumbs} />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Main Product Section - 60/40 Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
//           {/* Left Side - Product Images (60%) */}
//           <div className="lg:col-span-3 space-y-2">
//             <div className="relative">
//               <Image
//                 src={product.images[selectedImage]}
//                 alt={product.productName}
//                 width={300}
//                 height={300}
//                 className="object-cover rounded-lg w-full max-w-md mx-auto aspect-square shadow-lg"
//               />
//             </div>
//             {/* Thumbnail Images */}
//             {product.images.length > 1 && (
//               <div className="flex space-x-2 overflow-x-auto justify-center">
//                 {product.images.map((image, index) => (
//                   <button
//                     key={index}
//                     className={`flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg border-2 transition-all ${
//                       selectedImage === index ? 'border-blue-500 shadow-md' : 'border-gray-300 hover:border-gray-400'
//                     }`}
//                     onClick={() => setSelectedImage(index)}
//                   >
//                     <Image
//                       src={image}
//                       alt={`Product image ${index + 1}`}
//                       width={64}
//                       height={64}
//                       className="object-cover w-full h-full rounded-lg"
//                     />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Right Side - Product Info (40%) */}
//           <div className="lg:col-span-2 space-y-2">
//             {/* Product Title */}
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.productName}</h1>
              
//               {/* Rating and Reviews */}
//               <div className="flex items-center mb-2">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={18}
//                       className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
//                       fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
//                     />
//                   ))}
//                 </div>
//                 <span className="ml-2 text-sm text-gray-600">
//                   {product.rating} ({product.reviews} reviews)
//                 </span>
//               </div>

//               {/* Price */}
//               <div className="flex items-center mb-2">
//                 <div className="text-3xl font-bold text-green-600">
//                   {product.currency}{product.price}
//                 </div>
//                 {product.mrpText && (
//                   <span className="ml-3 text-xl text-gray-500 line-through">
//                     {product.mrpText}
//                   </span>
//                 )}
//               </div>

//               {/* Stock Status */}
//               <div className="flex items-center space-x-2 mb-2">
//                 <span className="text-sm text-gray-600">Stock:</span>
//                 <span className={`text-sm font-medium ${
//                   product.stock > 0 ? 'text-green-600' : 'text-red-600'
//                 }`}>
//                   {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
//                 </span>
//               </div>
//             </div>

//             {/* Pain Types */}
//             {product.painTypes && product.painTypes.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">For Relief From:</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {product.painTypes.map((painType, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 rounded-full text-sm font-medium text-white"
//                       style={{ backgroundColor: '#82a133' }}
//                     >
//                       {painType.name}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Sizes */}
//             {product.sizes && product.sizes.length > 0 && (
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">Size:</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {product.sizes.map((size, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
//                         selectedSize === size
//                           ? 'border-blue-500 bg-blue-50 text-blue-700'
//                           : 'border-gray-300 text-gray-700 hover:border-gray-400'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Quantity:</h3>
//               <div className="flex items-center space-x-3">
//                 <button
//                   className="p-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 transition-colors text-black"
//                   onClick={() => handleQuantityChange(-1)}
//                   disabled={quantity <= 1}
//                 >
//                   <Minus size={16} />
//                 </button>
//                 <input
//                   type="text"
//                   value={quantity}
//                   readOnly
//                   className="w-16 text-center border-2 border-gray-300 rounded-lg py-2 font-medium text-black"
//                 />
//                 <button
//                   className="p-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 transition-colors text-black"
//                   onClick={() => handleQuantityChange(1)}
//                   disabled={quantity >= product.stock}
//                 >
//                   <Plus size={16} />
//                 </button>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="space-y-2">
//               <div className="flex space-x-2">
//                  <button 
//                   onClick={handleBuyNow} 
//                   disabled={product.stock === 0}
//                   className={`flex-1 py-3 text-lg  text-center rounded-md transition-all duration-300 
//                     ${product.stock === 0 
//                       ? 'bg-gray-400 text-white cursor-not-allowed' 
//                       : 'bg-[#82a133] hover:bg-[#82a133] text-white'
//                     }`}
//                 >
//                   {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
//                 </button>

//                 {/* <Button 
//                   onClick={handleAddToWishlist}
//                   variant="outline"
//                   className="px-4 py-3"
//                 >
//                   <Heart size={20} />
//                 </Button> */}
//               </div>

//                <button 
//               onClick={handleBuyNow} 
//               className={`w-full py-3 text-lg text-center rounded-md transition-colors duration-300
//                 ${product.stock === 0 
//                   ? 'bg-gray-400 text-white cursor-not-allowed' 
//                   : 'bg-[#82a133] hover:bg-[#82a133] text-white'
//                 }`}
//               disabled={product.stock === 0}
//             >
//               {product.stock === 0 ? 'Out of Stock' : 'Buy Now'}
//             </button>

//             </div>

//             {/* Guarantee Icons */}
//             {product.guaranteeIcons && product.guaranteeIcons.length > 0 && (
//               <div className="pt-4 border-t">
//                 <div className="flex flex-wrap gap-4">
//                   {product.guaranteeIcons.map((guarantee, index) => (
//                     <div key={index} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
//                       <Image
//                         src={guarantee.icon}
//                         alt={guarantee.text}
//                         width={24}
//                         height={24}
//                         className="w-6 h-6"
//                       />
//                       <span className="text-sm text-gray-700 font-medium">{guarantee.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Separate Sections for Description, Benefits, and FAQ */}
//         <div className="space-y-8">
//           {/* Description Section */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h3>
//             <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
//           </div>

//           {/* Benefits Section */}
//           {product.benefits && product.benefits.length > 0 && (
//             <div className="bg-white rounded-lg shadow-sm p-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
//               <ul className="space-y-3">
//                 {product.benefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start text-gray-700">
//                     <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
//                     <span className="text-lg">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* FAQ Section */}
//           {product.faq && product.faq.length > 0 && (
//             <div className="bg-white rounded-lg shadow-sm p-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
//               <div className="space-y-6">
//                 {product.faq.map((faq, index) => (
//                   <div key={index} className="border-l-4 border-blue-500 pl-6 py-3">
//                     <h4 className="font-semibold text-gray-900 mb-2 text-lg">{faq.title}</h4>
//                     <p className="text-gray-700 leading-relaxed">{faq.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Product Information Card */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               <div>
//                 <span className="text-sm font-medium text-gray-600">Product ID:</span>
//                 <p className="text-gray-900">{product.id}</p>
//               </div>

//               {product.stock > 0 && (
//                 <div>
//                   <span className="text-sm font-medium text-gray-600">Availability:</span>
//                   <p className="text-green-600 font-medium">In Stock</p>
//                 </div>
//               )}

//               {product.sizes && product.sizes.length > 0 && (
//                 <div>
//                   <span className="text-sm font-medium text-gray-600">Available Sizes:</span>
//                   <p className="text-gray-900">{product.sizes.join(', ')}</p>
//                 </div>
//               )}
//             </div>

//             <div className="mt-6 pt-4 border-t">
//               <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
//               <p className="text-sm text-gray-600">
//                 Contact our customer support for any questions about this product.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <RelatedProduct />
//     </>
//   );
// };

// export default ProductDetailsPage;


"use client"
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { Heart, ShoppingCart, Star, Plus, Minus, Shield, Leaf } from 'lucide-react';
import BreadCrumbBanner from '../../components/layout/BreadCrumbBanner';
import Button from '../../components/ui/Button';
import { authAPI } from '@/lib/api/endpoints';
import RelatedProduct from '@/app/components/layout/Shop/RelatedProduct';
import ProductReviews from '../../components/review/page';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  
  const router = useRouter();
  const params = useParams();
  const productId = params.id;

  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: product?.productName || 'Product Details' }
  ];

  // Fetch product details on component mount
  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await authAPI.getProductDetails(productId);   
      
      // Check if the response is successful
      if (data.success) {
        const productData = data.data;

        if (!productData) {
          throw new Error('Product not found');
        }

        const transformedProduct = {
          id: productData._id || productData.id || productId,
          productName: productData.name || 'Unknown Product',
          price: productData.price?.toString() || "0",
          currency: productData.currency === 'INR' ? '₹' : productData.currency || "₹",
          mrpText: productData.mrpText || "MRP",
          images: productData.productImages && productData.productImages.length > 0 
            ? productData.productImages 
            : ["/images/defaultproduct/productimage1.jpeg"],   
          description: productData.description || 'No description available',
          benefits: productData.benefits || [],
          sizes: productData.sizes || [],
          painTypes: productData.painTypes || [],
          guaranteeIcons: productData.guaranteeIcons || [],
          faq: productData.faq || [],
          stock: productData.stock || 0,
          createdAt: productData.createdAt,
          updatedAt: productData.updatedAt,
          rating: 4.5, // Default rating as API doesn't provide it
          reviews: Math.floor(Math.random() * 100) + 10 // Random reviews count
        };

        setProduct(transformedProduct);
        console.log('get single product dwtails')
        if (transformedProduct.sizes.length > 0) {
          setSelectedSize(transformedProduct.sizes[0]);
        }
      } else {
        throw new Error('Product not found');
      }

    } catch (err) {
      console.error('Error fetching product details:', err);
      setError(err.message || 'Failed to fetch product details');
      toast.error('Failed to load product details', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, Math.min(product.stock, prev + change)));
  };

  // Updated handleAddToCart function
  const handleAddToCart = () => {
    if (product.stock === 0) {
      toast.error('Product is out of stock!', {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    // Create cart item object
    const cartItem = {
      id: product.id,
      name: product.productName,
      price: parseFloat(product.price),
      quantity: quantity,
      image: product.images[0],
      size: selectedSize,
      currency: product.currency,
      stock: product.stock
    };

    // Get existing cart from localStorage or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(item => 
      item.id === cartItem.id && item.size === cartItem.size
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      existingCart[existingItemIndex].quantity += cartItem.quantity;
    } else {
      // Add new item to cart
      existingCart.push(cartItem);
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    console.log('Adding to cart:', cartItem);
    toast.success(`Added ${quantity} item(s) to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleAddToWishlist = () => {
    console.log('Adding to wishlist:', productId);
    toast.success('Added to wishlist!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Updated handleBuyNow function
  const handleBuyNow = () => {
    if (product.stock === 0) {
      toast.error('Product is out of stock!', {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    // Create cart item object for immediate purchase
    const cartItem = {
      id: product.id,
      name: product.productName,
      price: parseFloat(product.price),
      quantity: quantity,
      image: product.images[0],
      size: selectedSize,
      currency: product.currency,
      stock: product.stock
    };

    console.log('Buy now:', cartItem);

    // Store the item in localStorage for checkout
    localStorage.setItem('buyNowItem', JSON.stringify([cartItem]));

    toast.info('Proceeding to checkout...', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

    // Navigate to checkout with buy now flag
    router.push('/checkout?buyNow=true');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <BreadCrumbBanner title="Loading..." breadcrumbs={breadcrumbs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="aspect-square bg-gray-300 rounded"></div>
                <div className="flex space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-20 h-20 bg-gray-300 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <BreadCrumbBanner title="Product Not Found" breadcrumbs={breadcrumbs} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0118 12M6 20.291A7.962 7.962 0 016 12m0 8.291A7.962 7.962 0 016 12m0 8.291A7.962 7.962 0 016 12" />
              </svg>
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Product not found</h3>
            <p className="mt-1 text-sm text-gray-500">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <div className="mt-6">
              <Button onClick={() => router.push('/shop')}>
                Back to Shop
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <> 
    <div className="min-h-screen bg-gray-50">
      <BreadCrumbBanner title={product.productName} breadcrumbs={breadcrumbs} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Product Section - 60/40 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
          {/* Left Side - Product Images (60%) */}
          <div className="lg:col-span-3 space-y-2">
            <div className="relative">
              <Image
                src={product.images[selectedImage]}
                alt={product.productName}
                width={300}
                height={300}
                className="object-cover rounded-lg w-full max-w-md mx-auto aspect-square shadow-lg"
              />
            </div>
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto justify-center">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg border-2 transition-all ${
                      selectedImage === index ? 'border-blue-500 shadow-md' : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`Product image ${index + 1}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Product Info (40%) */}
          <div className="lg:col-span-2 space-y-2">
            {/* Product Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.productName}</h1>
              
              {/* Rating and Reviews */}
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center mb-2">
                <div className="text-3xl font-bold text-green-600">
                  {product.currency}{product.price}
                </div>
                {product.mrpText && (
                  <span className="ml-3 text-xl text-gray-500 line-through">
                    {product.mrpText}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-600">Stock:</span>
                <span className={`text-sm font-medium ${
                  product.stock > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </div>
            </div>

            {/* Pain Types */}
            {product.painTypes && product.painTypes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Relief From:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.painTypes.map((painType, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: '#82a133' }}
                    >
                      {painType.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Size:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quantity:</h3>
              <div className="flex items-center space-x-3">
                <button
                  className="p-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 transition-colors text-black"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-16 text-center border-2 border-gray-300 rounded-lg py-2 font-medium text-black"
                />
                <button
                  className="p-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 disabled:opacity-50 transition-colors text-black"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <div className="flex space-x-2">
                 <button 
                  onClick={handleAddToCart} 
                  disabled={product.stock === 0}
                  className={`flex-1 py-3 text-lg  text-center rounded-md transition-all duration-300 
                    ${product.stock === 0 
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : 'bg-[#82a133] hover:bg-[#82a133] text-white'
                    }`}
                >
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
              </div>

               <button 
              onClick={handleBuyNow} 
              className={`w-full py-3 text-lg text-center rounded-md transition-colors duration-300
                ${product.stock === 0 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-[#82a133] hover:bg-[#82a133] text-white'
                }`}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Buy Now'}
            </button>

            </div>

            {/* Guarantee Icons */}
            {product.guaranteeIcons && product.guaranteeIcons.length > 0 && (
              <div className="pt-4 border-t">
                <div className="flex flex-wrap gap-4">
                  {product.guaranteeIcons.map((guarantee, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                      <Image
                        src={guarantee.icon}
                        alt={guarantee.text}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span className="text-sm text-gray-700 font-medium">{guarantee.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Separate Sections for Description, Benefits, and FAQ */}
        <div className="space-y-8">
          {/* Description Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
          </div>

          {/* Benefits Section */}
          {product.benefits && product.benefits.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ Section */}
          {product.faq && product.faq.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {product.faq.map((faq, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 py-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">{faq.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Information Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Product ID:</span>
                <p className="text-gray-900">{product.id}</p>
              </div>

              {product.stock > 0 && (
                <div>
                  <span className="text-sm font-medium text-gray-600">Availability:</span>
                  <p className="text-green-600 font-medium">In Stock</p>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <span className="text-sm font-medium text-gray-600">Available Sizes:</span>
                  <p className="text-gray-900">{product.sizes.join(', ')}</p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t">
              <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
              <p className="text-sm text-gray-600">
                Contact our customer support for any questions about this product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProductReviews />
    <RelatedProduct />
    </>
  );
};

export default ProductDetailsPage;