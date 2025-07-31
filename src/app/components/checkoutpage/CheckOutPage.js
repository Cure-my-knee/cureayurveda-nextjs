// 'use client';
// import React, { Suspense } from 'react';
// import { useState, useEffect } from 'react';

// import { Trash2, Plus, Minus, CreditCard, Smartphone, Building2, ShoppingCart } from 'lucide-react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import LoginGuestSelector from '../components/login/LoginGuestSelector';
// import { postCreateOrder } from '@/lib/api/createOrder';
// // import { postCreateOrder } from '@/lib/api/endpoints';
 

 
// function CheckoutContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const isBuyNow = searchParams.get('buyNow') === 'true';
  
//   const [cartItems, setCartItems] = useState([]);
//   const [shippingAddress, setShippingAddress] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: 'India'
//   });

//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [loading, setLoading] = useState(true);

 
//   useEffect(() => {
//     loadCartItems();
//   }, [isBuyNow]);

//   const loadCartItems = () => {
//     try {
//       let items = [];
      
//       if (isBuyNow) {
//         // Load item from Buy Now
//         const buyNowItem = localStorage.getItem('buyNowItem');
//         if (buyNowItem) {
//           items = JSON.parse(buyNowItem);
//         }
//       } else {
        
//         const cartData = localStorage.getItem('cart');
//         if (cartData) {
//           items = JSON.parse(cartData);
//         }
//       }
      
//       setCartItems(items);
//     } catch (error) {
//       console.error('Error loading cart items:', error);
//       setCartItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity <= 0) return;
    
//     const updatedItems = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );
    
//     setCartItems(updatedItems);
    
    
    
//     if (isBuyNow) {
//       localStorage.setItem('buyNowItem', JSON.stringify(updatedItems));
//     } else {
//       localStorage.setItem('cart', JSON.stringify(updatedItems));
//     }
//   };

//   const removeItem = (id) => {
//     const updatedItems = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedItems);
    
//     // Update localStorage
//     if (isBuyNow) {
//       localStorage.setItem('buyNowItem', JSON.stringify(updatedItems));
//     } else {
//       localStorage.setItem('cart', JSON.stringify(updatedItems));
//     }
//   };

//   // Calculate totals
//   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const gst = subtotal * 0.18;  
//   const shipping = 0;  
//   const total = subtotal + gst + shipping;

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress(prev => ({ ...prev, [name]: value }));
//   };

//   // adjust the path if needed

//  const handlePlaceOrder = async () => {
//   setIsProcessing(true);

//   try {
//         const token = localStorage.getItem('accessToken');  
//     // STEP 1: Create the order by calling your backend

//     const orderPayload = {
//       cartItems: cartItems.map((item) => ({
//         productId: item.id || 'unknown-product-id',
//         productName: item.name || 'Unnamed Product',
//         quantity: item.quantity || 1,
//         price: item.price || 0,
//         sku: item.sku || 'N/A',
//         weight: item.weight || 0.2,
//         hsn: item.hsn || '30049011'
//       })),
//       shippingAddress: {
//         fullName: shippingAddress.fullName || 'Guest User',
//         addressLine1: shippingAddress.address || 'No Address Provided',
//         addressLine2: '',
//         city: shippingAddress.city || 'Unknown City',
//         state: shippingAddress.state || 'Unknown State',
//         postalCode: shippingAddress.zipCode || '000000',
//         country: shippingAddress.country || 'India',
//         phone: shippingAddress.phone || '0000000000'
//       },
//       billingAddress: {
//         fullName: shippingAddress.fullName || 'Guest User',
//         addressLine1: shippingAddress.address || 'No Address Provided',
//         addressLine2: '',
//         city: shippingAddress.city || 'Unknown City',
//         state: shippingAddress.state || 'Unknown State',
//         postalCode: shippingAddress.zipCode || '000000',
//         country: shippingAddress.country || 'India',
//         phone: shippingAddress.phone || '0000000000'
//       },
//       paymentMethod: paymentMethod || 'payu',
//       totalAmount: total || 0,
//       orderDate: new Date().toISOString(),
//       isBuyNow
//     };

//     const createOrderResponse = await fetch('http://localhost:3010/api/orders/create', {
//       method: 'POST',
//       headers: { 
//          Authorization: `Bearer ${token}`, 
//         'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         cartItems,
//         shippingAddress,
//         paymentMethod,
//         subtotal,
//         gst,
//         shipping,
//         total,
//         orderDate: new Date().toISOString(),
//         isBuyNow,
//       }),
//     });

//     const orderResult = await createOrderResponse.json();

//     if (!orderResult.success) {
//       throw new Error(orderResult.message || 'Failed to create order.');
//     }

//     // STEP 2: Check if payment is required and initiate it
//     if (orderResult.data.requiresPayment) {
//           const token = localStorage.getItem('accessToken');  
//       // This is a PayU order, so we must initiate payment
//       const initiatePaymentResponse = await fetch('http://localhost:3010/api/payu/initiate', {
//         method: 'POST',
        
//         headers: { 
//            Authorization: `Bearer ${token}`, 
//           'Content-Type': 'application/json' },
//         body: JSON.stringify({ orderId: orderResult.data.orderId }),
//       });

//       const paymentResult = await initiatePaymentResponse.json();

//       if (!paymentResult.success) {
//         throw new Error(paymentResult.message || 'Failed to initiate payment.');
//       }

//       // STEP 3: Redirect to the PayU gateway using the data from the backend
//       redirectToPayU(paymentResult.data);

//     } else {
//       // COD or free order, no payment needed.
//       router.push('/order-confirmed-page');
//     }

//     // Optionally clear cart/buyNowItem here if needed

//   } catch (error) {
//     console.error("Order process failed:", error);
//     alert(error.message || "Order process failed. Please try again.");
//   } finally {
//     setIsProcessing(false);
//   }
// };

// /**
//  * This helper function creates a form on the fly and submits it,
//  * redirecting the user to the PayU payment page.
//  * @param {object} payuData - The data object from your /api/payu/initiate response.
//  */
// function redirectToPayU(payuData) {
//   const form = document.createElement('form');
//   form.method = 'POST';
//   form.action = payuData.action; // The PayU URL to post to

//   for (const key in payuData) {
//     if (key !== 'action') {
//       const input = document.createElement('input');
//       input.type = 'hidden';
//       input.name = key;
//       input.value = payuData[key];
//       form.appendChild(input);
//     }
//   }

//   document.body.appendChild(form);
//   form.submit();
// }



//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//             <p className="mt-4 text-gray-600">Loading checkout...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-8">
//           <h1 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
//             {isBuyNow ? 'QUICK CHECKOUT' : 'CHECKOUT'}
//           </h1>
//           <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
//             <ShoppingCart className="w-4 h-4 mr-1" />
//             <span>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} {isBuyNow ? 'for quick purchase' : 'in cart'}</span>
//           </div>
//         </div>

//         <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
//           {/* Left Column - Cart Items & Forms */}
//           <div className="lg:col-span-8 space-y-4 sm:space-y-6">
//             {/* Cart Items */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Order Summary</h2>
              
//               {cartItems.length === 0 ? (
//                 <div className="text-center py-8">
//                   <ShoppingCart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
//                   <p className="text-gray-500">Your cart is empty</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-200 last:border-b-0 space-y-3 sm:space-y-0">
//                       <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
//                         />
                        
//                         <div className="flex-1 min-w-0">
//                           <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">{item.name}</h3>
//                           <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
//                           <p className="text-xs text-gray-400 sm:hidden">Total: ${(item.price * item.quantity).toFixed(2)}</p>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
//                         <div className="flex items-center space-x-2">
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                             className="p-1 rounded-full hover:bg-gray-100 transition-colors"
//                             disabled={item.quantity <= 1}
//                           >
//                             <Minus className="w-4 h-4" />
//                           </button>
//                           <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                             className="p-1 rounded-full hover:bg-gray-100 transition-colors"
//                           >
//                             <Plus className="w-4 h-4" />
//                           </button>
//                         </div>

//                         <div className="flex items-center space-x-3">
//                           <p className="text-sm font-medium text-gray-900 hidden sm:block">
//                             ${(item.price * item.quantity).toFixed(2)}
//                           </p>
//                           <button
//                             onClick={() => removeItem(item.id)}
//                             className="p-1 text-red-400 hover:text-red-600 transition-colors"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Login as guest */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Select Order Type
//               </h2> 

//            {/* login part selection */}
//             <div className="space-y-3">  
//             <LoginGuestSelector />
//             </div> 
    
//             </div>

//             {/* Shipping Address */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Shipping Address
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={shippingAddress.fullName}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={shippingAddress.email}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={shippingAddress.phone}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Country
//                   </label>
//                   <select
//                     name="country"
//                     value={shippingAddress.country}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-blackfocus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="India">India</option>
//                     <option value="US">United States</option>
//                     <option value="UK">United Kingdom</option>
//                     <option value="Canada">Canada</option>
//                   </select>
//                 </div>
                
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Address *
//                   </label>
//                   <textarea
//                     name="address"
//                     value={shippingAddress.address}
//                     onChange={handleAddressChange}
//                     rows={3}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     City *
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={shippingAddress.city}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     State *
//                   </label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={shippingAddress.state}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     ZIP Code *
//                   </label>
//                   <input
//                     type="text"
//                     name="zipCode"
//                     value={shippingAddress.zipCode}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Payment Method
//               </h2>

//               <div className="space-y-3">
//                 {/* PayU Radio Option */}
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     id="payu"
//                     name="paymentMethod"
//                     value="payu"
//                     checked={paymentMethod === 'payu'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                   />
//                   <label htmlFor="payu" className="ml-3 flex items-center text-sm font-medium text-gray-700">
//                     <img src="https://latestlogo.com/wp-content/uploads/2024/03/payu-logo.png" alt="PayU" className="w-10 h-10 mr-2" />
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div className="lg:col-span-4">
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-4">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Order Summary
//               </h2>
              
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Subtotal</span>
//                   <span className="text-sm font-medium text-gray-600">₹{subtotal.toFixed(2)}</span>
//                 </div>
                
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">GST (18%)</span>
//                   <span className="text-sm font-medium text-gray-600">₹{gst.toFixed(2)}</span>
//                 </div>
                
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Shipping</span>
//                   <span className="text-sm font-medium text-gray-600">
//                     {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
//                   </span>
//                 </div>
                
//                 <div className="border-t pt-3">
//                   <div className="flex justify-between">
//                     <span className="text-base font-medium text-gray-900">Total</span>
//                     <span className="text-base font-medium text-gray-900">₹{total.toFixed(2)}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <button
//                 onClick={handlePlaceOrder}
//                 disabled={isProcessing || cartItems.length === 0}
//                 className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 {isProcessing ? (
//                   <div className="flex items-center justify-center">
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                     Processing...
//                   </div>
//                 ) : (
//                   `Place Order : ₹${total.toFixed(2)}`
//                 )}
//               </button>
              
//               <div className="mt-4 text-xs text-gray-500 text-center">
//                 By placing your order, you agree to our Terms of Service and Privacy Policy.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main component with Suspense boundary
// export default function CheckoutPage() {
//   return (
//     <Suspense fallback={
//       <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//             <p className="mt-4 text-gray-600">Loading checkout...</p>
//           </div>
//         </div>
//       </div>
//     }>
//       <CheckoutContent />
//     </Suspense>
//   );
// }



// working payement code for payu

// 'use client';
// import React, { Suspense } from 'react';
// import { useState, useEffect } from 'react';

// import { Trash2, Plus, Minus, CreditCard, Smartphone, Building2, ShoppingCart } from 'lucide-react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import LoginGuestSelector from '../components/login/LoginGuestSelector';
// // import { postCreateOrder } from '@/lib/api/createOrder';
// // import { postCreateOrder } from '@/lib/api/endpoints';
 

 
// function CheckoutContent() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const isBuyNow = searchParams.get('buyNow') === 'true';
  
//   const [cartItems, setCartItems] = useState([]);
//   const [shippingAddress, setShippingAddress] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: 'India'
//   });

//   const [paymentMethod, setPaymentMethod] = useState('payu');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // Helper function to ensure cart items have all required fields
//   const ensureRequiredFields = (item) => ({
//     ...item,
//     id: item.id || item.productId || Date.now().toString(),
//     name: item.name || item.productName || 'Unknown Product',
//     sku: item.sku || `SKU-${item.id || Date.now()}`,
//     weight: item.weight || 0.2,
//     hsn: item.hsn || '30049011',
//     price: item.price || 0,
//     quantity: item.quantity || 1,
//     productId: item.productId || item.id,
//     productName: item.productName || item.name
//   });

 
//   useEffect(() => {
//     loadCartItems();
//   }, [isBuyNow]);

//   const loadCartItems = () => {
//     try {
//       let items = [];
      
//       if (isBuyNow) {
//         // Load item from Buy Now
//         const buyNowItem = localStorage.getItem('buyNowItem');
//         if (buyNowItem) {
//           items = JSON.parse(buyNowItem);
//         }
//       } else {
        
//         const cartData = localStorage.getItem('cart');
//         if (cartData) {
//           items = JSON.parse(cartData);
//         }
//       }
      
//       // Ensure all items have required fields
//       items = items.map(ensureRequiredFields);
      
//       setCartItems(items);
//     } catch (error) {
//       console.error('Error loading cart items:', error);
//       setCartItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity <= 0) return;
    
//     const updatedItems = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );
    
//     setCartItems(updatedItems);
    
//     // Update localStorage
//     if (isBuyNow) {
//       localStorage.setItem('buyNowItem', JSON.stringify(updatedItems));
//     } else {
//       localStorage.setItem('cart', JSON.stringify(updatedItems));
//     }
//   };

//   const removeItem = (id) => {
//     const updatedItems = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedItems);
    
//     // Update localStorage
//     if (isBuyNow) {
//       localStorage.setItem('buyNowItem', JSON.stringify(updatedItems));
//     } else {
//       localStorage.setItem('cart', JSON.stringify(updatedItems));
//     }
//   };

//   // Calculate totals
//   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const gst = subtotal * 0.18;  
//   const shipping = 0;  
//   const total = subtotal + gst + shipping;

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress(prev => ({ ...prev, [name]: value }));
//   };

//   // Validation function
//   const validateForm = () => {
//     const errors = [];
    
//     // Check if cart has items
//     if (cartItems.length === 0) {
//       errors.push('Cart is empty');
//     }
    
//     // Validate cart items - all items should have required fields after loadCartItems
//     cartItems.forEach((item, index) => {
//       if (!item.id && !item.productId) errors.push(`Item ${index + 1}: Product ID is required`);
//       if (!item.name && !item.productName) errors.push(`Item ${index + 1}: Product name is required`);
//       if (!item.price || item.price <= 0) errors.push(`Item ${index + 1}: Valid price is required`);
//       if (!item.quantity || item.quantity <= 0) errors.push(`Item ${index + 1}: Valid quantity is required`);
//       // SKU and weight are now guaranteed to exist from loadCartItems
//       console.log('Product ID:', item.productId || item.id);
//       console.log('Name:', item.productName || item.name);
//       console.log('Price:', item.price);
//       console.log('Quantity:', item.quantity);
//       console.log('SKU:', item.sku);
//       console.log('Weight:', item.weight);
//       console.log('HSN:', item.hsn);
//     });
    
//     // Validate shipping address
//     if (!shippingAddress.fullName.trim()) errors.push('Full name is required');
//     if (!shippingAddress.email.trim()) errors.push('Email is required');
//     if (!shippingAddress.phone.trim()) errors.push('Phone is required');
//     if (!shippingAddress.address.trim()) errors.push('Address is required');
//     if (!shippingAddress.city.trim()) errors.push('City is required');
//     if (!shippingAddress.state.trim()) errors.push('State is required');
//     if (!shippingAddress.zipCode.trim()) errors.push('ZIP code is required');
    
//     return errors;
//   };

//   const handlePlaceOrder = async () => {
//     // Validate form first
//     const validationErrors = validateForm();
//     if (validationErrors.length > 0) {
//       alert('Please fix the following errors:\n' + validationErrors.join('\n'));
//       return;
//     }
    
//     setIsProcessing(true);

//     try {
//       const token = localStorage.getItem('accessToken');  
      
//       // Create the order payload with correct structure
//       const orderPayload = {
//         cartItems: cartItems.map((item) => ({
//           productId: item.productId || item.id,
//           productName: item.productName || item.name,
//           quantity: item.quantity,
//           price: item.price,
//           sku: item.sku, // Now guaranteed to exist
//           weight: item.weight, // Now guaranteed to exist
//           hsn: item.hsn || '30049011'
//         })),
//         shippingAddress: {
//           fullName: shippingAddress.fullName,
//           addressLine1: shippingAddress.address,
//           addressLine2: '',
//           city: shippingAddress.city,
//           state: shippingAddress.state,
//           postalCode: shippingAddress.zipCode,
//           country: shippingAddress.country,
//           phone: shippingAddress.phone
//         },
//         billingAddress: {
//           fullName: shippingAddress.fullName,
//           addressLine1: shippingAddress.address,
//           addressLine2: '',
//           city: shippingAddress.city,
//           state: shippingAddress.state,
//           postalCode: shippingAddress.zipCode,
//           country: shippingAddress.country,
//           phone: shippingAddress.phone
//         },
//         paymentMethod: paymentMethod,
//         totalAmount: total,
//         subtotal: subtotal,
//         gst: gst,
//         shipping: shipping,
//         orderDate: new Date().toISOString(),
//         isBuyNow,
//         email: shippingAddress.email  
//       };

//       console.log('Sending order payload:', orderPayload); // Debug log

//       const createOrderResponse = await fetch('http://localhost:3010/api/orders/create', {
//         method: 'POST',
//         headers: { 
//           Authorization: `Bearer ${token}`, 
//           'Content-Type': 'application/json' 
//         },
//         body: JSON.stringify(orderPayload),
//       });

//       const orderResult = await createOrderResponse.json();
//       console.log('Order response:', orderResult); // Debug log

//       if (!orderResult.success) {
//         throw new Error(orderResult.message || orderResult.error || 'Failed to create order.');
//       }

//       // STEP 2: Check if payment is required and initiate it
//       if (orderResult.data.requiresPayment) {
//         const token = localStorage.getItem('accessToken');  
//         // This is a PayU order, so we must initiate payment
//         const initiatePaymentResponse = await fetch('http://localhost:3010/api/payu/initiate', {
//           method: 'POST',
//           headers: { 
//             Authorization: `Bearer ${token}`, 
//             'Content-Type': 'application/json' 
//           },
//           body: JSON.stringify({ orderId: orderResult.data.orderId }),
//         });

//         const paymentResult = await initiatePaymentResponse.json();

//         if (!paymentResult.success) {
//           throw new Error(paymentResult.message || 'Failed to initiate payment.');
//         }

//         // STEP 3: Redirect to the PayU gateway using the data from the backend
//         redirectToPayU(paymentResult.data);

//       } else {
//         // COD or free order, no payment needed.
//         // Clear cart/buyNowItem
//         if (isBuyNow) {
//           localStorage.removeItem('buyNowItem');
//         } else {
//           localStorage.removeItem('cart');
//         }
//         router.push('/order-confirmed-page');
//       }

//     } catch (error) {
//       console.error("Order process failed:", error);
//       alert(error.message || "Order process failed. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   /**
//    * This helper function creates a form on the fly and submits it,
//    * redirecting the user to the PayU payment page.
//    * @param {object} payuData - The data object from your /api/payu/initiate response.
//    */
//   function redirectToPayU(payuData) {
//     const form = document.createElement('form');
//     form.method = 'POST';
//     form.action = payuData.action; // The PayU URL to post to

//     for (const key in payuData) {
//       if (key !== 'action') {
//         const input = document.createElement('input');
//         input.type = 'hidden';
//         input.name = key;
//         input.value = payuData[key];
//         form.appendChild(input);
//       }
//     }

//     document.body.appendChild(form);
//     form.submit();
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//             <p className="mt-4 text-gray-600">Loading checkout...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-8">
//           <h1 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
//             {isBuyNow ? 'QUICK CHECKOUT' : 'CHECKOUT'}
//           </h1>
//           <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
//             <ShoppingCart className="w-4 h-4 mr-1" />
//             <span>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} {isBuyNow ? 'for quick purchase' : 'in cart'}</span>
//           </div>
//         </div>

//         <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
//           {/* Left Column - Cart Items & Forms */}
//           <div className="lg:col-span-8 space-y-4 sm:space-y-6">
//             {/* Cart Items */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Order Summary</h2>
              
//               {cartItems.length === 0 ? (
//                 <div className="text-center py-8">
//                   <ShoppingCart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
//                   <p className="text-gray-500">Your cart is empty</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-200 last:border-b-0 space-y-3 sm:space-y-0">
//                       <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
//                         />
                        
//                         <div className="flex-1 min-w-0">
//                           <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">{item.name}</h3>
//                           <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
//                           <p className="text-xs text-gray-400">SKU: {item.sku}</p>
//                           <p className="text-xs text-gray-400">Weight: {item.weight}kg</p>
//                           <p className="text-xs text-gray-400 sm:hidden">Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
//                         <div className="flex items-center space-x-2">
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                             className="p-1 rounded-full hover:bg-gray-100 transition-colors"
//                             disabled={item.quantity <= 1}
//                           >
//                             <Minus className="w-4 h-4" />
//                           </button>
//                           <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                             className="p-1 rounded-full hover:bg-gray-100 transition-colors"
//                           >
//                             <Plus className="w-4 h-4" />
//                           </button>
//                         </div>

//                         <div className="flex items-center space-x-3">
//                           <p className="text-sm font-medium text-gray-900 hidden sm:block">
//                             ₹{(item.price * item.quantity).toFixed(2)}
//                           </p>
//                           <button
//                             onClick={() => removeItem(item.id)}
//                             className="p-1 text-red-400 hover:text-red-600 transition-colors"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Login as guest */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Select Order Type
//               </h2> 

//            {/* login part selection */}
//             <div className="space-y-3">  
//             <LoginGuestSelector />
//             </div> 
    
//             </div>

//             {/* Shipping Address */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Shipping Address
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={shippingAddress.fullName}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={shippingAddress.email}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={shippingAddress.phone}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Country
//                   </label>
//                   <select
//                     name="country"
//                     value={shippingAddress.country}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="India">India</option>
//                     <option value="US">United States</option>
//                     <option value="UK">United Kingdom</option>
//                     <option value="Canada">Canada</option>
//                   </select>
//                 </div>
                
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Address *
//                   </label>
//                   <textarea
//                     name="address"
//                     value={shippingAddress.address}
//                     onChange={handleAddressChange}
//                     rows={3}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     City *
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={shippingAddress.city}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     State *
//                   </label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={shippingAddress.state}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     ZIP Code *
//                   </label>
//                   <input
//                     type="text"
//                     name="zipCode"
//                     value={shippingAddress.zipCode}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Payment Method
//               </h2>

//               <div className="space-y-3">
//                 {/* PayU Radio Option */}
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     id="payu"
//                     name="paymentMethod"
//                     value="payu"
//                     checked={paymentMethod === 'payu'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                   />
//                   <label htmlFor="payu" className="ml-3 flex items-center text-sm font-medium text-gray-700">
//                     <img src="https://latestlogo.com/wp-content/uploads/2024/03/payu-logo.png" alt="PayU" className="w-10 h-10 mr-2" />
//                     PayU Payment Gateway
//                   </label>
//                 </div>
                
//                 {/* COD Option */}
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     id="cod"
//                     name="paymentMethod"
//                     value="cod"
//                     checked={paymentMethod === 'cod'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                   />
//                   <label htmlFor="cod" className="ml-3 flex items-center text-sm font-medium text-gray-700">
//                     <Building2 className="w-5 h-5 mr-2" />
//                     Cash on Delivery
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div className="lg:col-span-4">
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-4">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Order Summary
//               </h2>
              
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Subtotal</span>
//                   <span className="text-sm font-medium text-gray-600">₹{subtotal.toFixed(2)}</span>
//                 </div>
                
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">GST (18%)</span>
//                   <span className="text-sm font-medium text-gray-600">₹{gst.toFixed(2)}</span>
//                 </div>
                
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Shipping</span>
//                   <span className="text-sm font-medium text-gray-600">
//                     {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
//                   </span>
//                 </div>
                
//                 <div className="border-t pt-3">
//                   <div className="flex justify-between">
//                     <span className="text-base font-medium text-gray-900">Total</span>
//                     <span className="text-base font-medium text-gray-900">₹{total.toFixed(2)}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <button
//                 onClick={handlePlaceOrder}
//                 disabled={isProcessing || cartItems.length === 0}
//                 className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 {isProcessing ? (
//                   <div className="flex items-center justify-center">
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                     Processing...
//                   </div>
//                 ) : (
//                   `Place Order : ₹${total.toFixed(2)}`
//                 )}
//               </button>
              
//               <div className="mt-4 text-xs text-gray-500 text-center">
//                 By placing your order, you agree to our Terms of Service and Privacy Policy.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main component with Suspense boundary
// export default function CheckoutPage() {
//   return (
//     <Suspense fallback={
//       <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//             <p className="mt-4 text-gray-600">Loading checkout...</p>
//           </div>
//         </div>
//       </div>
//     }>
//       <CheckoutContent />
//     </Suspense>
//   );
// }


// above main code 09/07




// new code 10/07


// 'use client';
// import React, { Suspense } from 'react';
// import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { Trash2, Plus, Minus, CreditCard, Smartphone, Building2, ShoppingCart } from 'lucide-react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import LoginGuestSelector from '../login/LoginGuestSelector';
// // import LoginGuestSelector from '../components/login/LoginGuestSelector';
// // import { postCreateOrder } from '@/lib/api/createOrder';
// // import { postCreateOrder } from '@/lib/api/endpoints';

// // export const metadata = {
// //   title: 'Checkout - Cure Ayurvedic',
// //   description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
// //   robots: 'noindex, nofollow',
// // };
 

 
// function CheckoutContent( ) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const isBuyNow = searchParams.get('buyNow') === 'true';
  
//   const [cartItems, setCartItems] = useState([]);
//   const [shippingAddress, setShippingAddress] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: 'India'
//   });

//   const [paymentMethod, setPaymentMethod] = useState('payu');
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [loading, setLoading] = useState(true);


//   // guest login start

//   const [selectedOption, setSelectedOption] = useState('');
//   const [guestEmail, setGuestEmail] = useState('');
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleRadioChange = (e) => {
//     const value = e.target.value;
//     setSelectedOption(value);
//     onSelectionChange({ selectedOption: value, guestEmail });
//   };

//   const handleEmailChange = (e) => {
//     const email = e.target.value;
//     setGuestEmail(email);
//     onSelectionChange({ selectedOption, guestEmail: email });
//   };

//   // if (!isClient) return null;


//   // guest login end 


//   // country api 

//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
 
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//  useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
//         const data = await response.json();
//         const sorted = data
//           .map((c) => c.name.common)
//           .sort((a, b) => a.localeCompare(b));
//         setCountries(sorted);
//         setFilteredCountries(sorted);
//       } catch (error) {
//         console.error("Failed to load countries:", error);
//         const fallbackCountries = [
//           'United States', 'Canada', 'United Kingdom', 'Australia', 
//           'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Other'
//         ];
//         setCountries(fallbackCountries);
//         setFilteredCountries(fallbackCountries);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     setIsDropdownOpen(true);
    
//     if (value.trim() === '') {
//       setFilteredCountries(countries);
//     } else {
//       const filtered = countries.filter(country =>
//         country.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredCountries(filtered);
//     }
//   };

//   const handleCountrySelect = (country) => {
//     setShippingAddress(prev => ({
//       ...prev,
//       country: country
//     }));
//     setSearchTerm(country);
//     setIsDropdownOpen(false);
//   };

//   const handleInputFocus = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleInputBlur = () => {
//     // Delay closing to allow for country selection
//     setTimeout(() => {
//       setIsDropdownOpen(false);
//     }, 200);
//   };

//   // country api end

//   // Helper function to ensure cart items have all required fields
//   const ensureRequiredFields = (item) => ({
//     ...item,
//     id: item.id || item.productId || Date.now().toString(),
//     name: item.name || item.productName || 'Unknown Product',
//     sku: item.sku || `SKU-${item.id || Date.now()}`,
//     weight: item.weight || 0.5,
//     hsn: item.hsn || '30049011',
//     price: item.price || 1,
//     quantity: item.quantity || 1,
//     productId: item.productId || item.id,
//     productName: item.productName || item.name
//   });

 
//   useEffect(() => {
//     loadCartItems();
//   }, [isBuyNow]);

//   const loadCartItems = () => {
//     try {
//       let items = [];
      
//       if (isBuyNow) {
//         // Load item from Buy Now
//         const buyNowItem = localStorage.getItem('buyNowItem');
//         if (buyNowItem) {
//           items = JSON.parse(buyNowItem);
//         }
//       } else {
        
//         const cartData = localStorage.getItem('cart');
//         if (cartData) {
//           items = JSON.parse(cartData);
//         }
//       }
      
//       // Ensure all items have required fields
//       items = items.map(ensureRequiredFields);
      
//       setCartItems(items);
//     } catch (error) {
//       console.error('Error loading cart items:', error);
//       setCartItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity <= 0) return;
    
//     const updatedItems = cartItems.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     );
    
//     setCartItems(updatedItems);
    
//     // Update localStorage
//     if (isBuyNow) {
//       localStorage.setItem('buyNowItem', JSON.stringify(updatedItems));
//     } else {
//       localStorage.setItem('cart', JSON.stringify(updatedItems));
//     }
//   };

//   const removeItem = (id) => {
//     const updatedItems = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedItems);
    
//     // Update localStorage
//     if (isBuyNow) {
//       localStorage.setItem('buyNowItem', JSON.stringify(updatedItems));
//     } else {
//       localStorage.setItem('cart', JSON.stringify(updatedItems));
//     }
//   };

//   // Calculate totals
//   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const gst = subtotal * 0;  
//   const shipping = 0;  
//   const total = subtotal + gst + shipping;

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress(prev => ({ ...prev, [name]: value }));
//   };

//   // Validation function
//   const validateForm = () => {
//     const errors = [];
    
//     // Check if cart has items
//     if (cartItems.length === 0) {
//       errors.push('Cart is empty');
//     }
    
//     // Validate cart items - all items should have required fields after loadCartItems
//     cartItems.forEach((item, index) => {
//       if (!item.id && !item.productId) errors.push(`Item ${index + 1}: Product ID is required`);
//       if (!item.name && !item.productName) errors.push(`Item ${index + 1}: Product name is required`);
//        if (item.price === undefined || item.price === null || isNaN(item.price)) {
//         errors.push(`Item ${index + 1}: Valid price is required`);
//         }

//       if (!item.quantity || item.quantity <= 0) errors.push(`Item ${index + 1}: Valid quantity is required`);
//       // SKU and weight are now guaranteed to exist from loadCartItems
//       console.log('Product ID:', item.productId || item.id);
//       console.log('Name:', item.productName || item.name);
//       console.log('Price:', item.price);
//       console.log('Quantity:', item.quantity);
//       console.log('SKU:', item.sku);
//       console.log('Weight:', item.weight);
//       console.log('HSN:', item.hsn);
//     });
    
//     // Validate shipping address
//     if (!shippingAddress.fullName.trim()) errors.push('Full name is required');
//     if (!shippingAddress.email.trim()) errors.push('Email is required');
//     if (!shippingAddress.phone.trim()) errors.push('Phone is required');
//     if (!shippingAddress.address.trim()) errors.push('Address is required');
//     if (!shippingAddress.city.trim()) errors.push('City is required');
//     if (!shippingAddress.state.trim()) errors.push('State is required');
//     if (!shippingAddress.zipCode.trim()) errors.push('ZIP code is required');

//     // new update
//     // ✨ New validations
//         const phoneRegex = /^\d{10}$/;
//         if (!phoneRegex.test(shippingAddress.phone)) {
//             errors.push('Phone number must be 10 digits');
//         }

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(shippingAddress.email)) {
//             errors.push('Enter a valid email address');
//         }

//         const zipRegex = /^\d{6}$/;
//         if (!zipRegex.test(shippingAddress.zipCode)) {
//             errors.push('ZIP code must be 6 digits');
//         }
    
//     return errors;
//   };

//   const handlePlaceOrder = async () => {
//     // Validate form first
//     // const validationErrors = validateForm();
//     // if (validationErrors.length > 0) {
//     //   alert('Please fix the following errors:\n' + validationErrors.join('\n'));
//     //   return;
//     // }
//      const validationErrors = validateForm();
//   if (validationErrors.length > 0) {
//     validationErrors.forEach(err => toast.error(err));
//     return;
//   }
    
//     setIsProcessing(true);

//     try {
//       const token = localStorage.getItem('accessToken');  
      
//       // Create the order payload with correct structure
//       const orderPayload = {
//         cartItems: cartItems.map((item) => ({
//           productId: item.productId || item.id,
//           productName: item.productName || item.name,
//           quantity: item.quantity,
//           price: item.price,
//           sku: item.sku, // Now guaranteed to exist
//           weight: item.weight, // Now guaranteed to exist
//           hsn: item.hsn || '30049011'
//         })),
//         shippingAddress: {
//           fullName: shippingAddress.fullName,
//           addressLine1: shippingAddress.address,
//           addressLine2: '',
//           city: shippingAddress.city,
//           state: shippingAddress.state,
//           postalCode: shippingAddress.zipCode,
//           country: shippingAddress.country,
//           phone: shippingAddress.phone
//         },
//         billingAddress: {
//           fullName: shippingAddress.fullName,
//           addressLine1: shippingAddress.address,
//           addressLine2: '',
//           city: shippingAddress.city,
//           state: shippingAddress.state,
//           postalCode: shippingAddress.zipCode,
//           country: shippingAddress.country,
//           phone: shippingAddress.phone
//         },
//         paymentMethod: paymentMethod,
//         totalAmount: total,
//         subtotal: subtotal,
//         gst: gst,
//         shipping: shipping,
//         orderDate: new Date().toISOString(),
//         isBuyNow,
//         email: shippingAddress.email, 
//         guestEmail:  shippingAddress.email
//       };

//       console.log('Sending order payload:', orderPayload); // Debug log
      

//       const createOrderResponse = await fetch('https://www.cureayurvedics.com/api/orders/create', {
//         method: 'POST',
//         headers: { 
//           Authorization: `Bearer ${token}`, 
//           'Content-Type': 'application/json' 
//         },
//         body: JSON.stringify(orderPayload),
//       });

//       const orderResult = await createOrderResponse.json();
//       console.log('Order response:', orderResult); // Debug log

//       if (!orderResult.success) {
//         throw new Error(orderResult.message || orderResult.error || 'Failed to create order.');
//       }

//       // STEP 2: Check if payment is required and initiate it
//       if (orderResult.data.requiresPayment) {
//         const token = localStorage.getItem('accessToken');  
//         // This is a PayU order, so we must initiate payment
//         const initiatePaymentResponse = await fetch('https://www.cureayurvedics.com/api/payu/initiate', {
//           method: 'POST',
//           headers: { 
//             Authorization: `Bearer ${token}`, 
//             'Content-Type': 'application/json' 
//           },
//           body: JSON.stringify({ orderId: orderResult.data.orderId }),
//         });

//         const paymentResult = await initiatePaymentResponse.json();

//         if (!paymentResult.success) {
//           throw new Error(paymentResult.message || 'Failed to initiate payment.');
//         }

//         // STEP 3: Redirect to the PayU gateway using the data from the backend
//         redirectToPayU(paymentResult.data);

//       } else {
//         // COD or free order, no payment needed.
//         // Clear cart/buyNowItem
//         if (isBuyNow) {
//           localStorage.removeItem('buyNowItem');
//         } else {
//           localStorage.removeItem('cart');
//         }
//         router.push('/order-confirmed-page');
//       }

//     } catch (error) {
//       console.error("Order process failed:", error);
//       toast.error(error.message || "Order process failed. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   /**
//    * This helper function creates a form on the fly and submits it,
//    * redirecting the user to the PayU payment page.
//    * @param {object} payuData - The data object from your /api/payu/initiate response.
//    */
//   function redirectToPayU(payuData) {
//     const form = document.createElement('form');
//     form.method = 'POST';
//     form.action = payuData.action; // The PayU URL to post to

//     for (const key in payuData) {
//       if (key !== 'action') {
//         const input = document.createElement('input');
//         input.type = 'hidden';
//         input.name = key;
//         input.value = payuData[key];
//         form.appendChild(input);
//       }
//     }

//     document.body.appendChild(form);
//     form.submit();
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#586e20] mx-auto"></div>
//             <p className="mt-4 text-gray-600">Loading checkout...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-8">
//           <h1 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
//             {isBuyNow ? 'QUICK CHECKOUT' : 'CHECKOUT'}
//           </h1>
//           <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
//             <ShoppingCart className="w-4 h-4 mr-1" />
//             <span>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} {isBuyNow ? 'for quick purchase' : 'in cart'}</span>
//           </div>
//         </div>

//         <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
//           {/* Left Column - Cart Items & Forms */}
//           <div className="lg:col-span-8 space-y-4 sm:space-y-6">
//             {/* Cart Items */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Order Summary</h2>
              
//               {cartItems.length === 0 ? (
//                 <div className="text-center py-8">
//                   <ShoppingCart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
//                   <p className="text-gray-500">Your cart is empty</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-200 last:border-b-0 space-y-3 sm:space-y-0">
//                       <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
//                         />
                        
//                         <div className="flex-1 min-w-0">
//                           <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">{item.name}</h3>
//                           <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
//                           <p className="hidden text-xs text-gray-400">SKU: {item.sku}</p>
//                           <p className="hidden text-xs text-gray-400">Weight: {item.weight}kg</p>
//                           <p className="text-xs text-gray-400 sm:hidden">Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
//                         <div className="flex items-center space-x-2">
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                             className="p-1 rounded-full hover:bg-gray-100 text-black transition-colors"
//                             disabled={item.quantity <= 1}
//                           >
//                             <Minus className="w-4 h-4" />
//                           </button>
//                           <span className="w-8 text-center text-black text-sm font-medium">{item.quantity}</span>
//                           <button
//                             onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                             className="p-1 rounded-full hover:bg-gray-100 text-black transition-colors"
//                           >
//                             <Plus className="w-4 h-4" />
//                           </button>
//                         </div>

//                         <div className="flex items-center space-x-3">
//                           <p className="text-sm font-medium text-gray-900 hidden sm:block">
//                             ₹{(item.price * item.quantity).toFixed(2)}
//                           </p>
//                           <button
//                             onClick={() => removeItem(item.id)}
//                             className="p-1 text-red-400 hover:text-red-600 transition-colors"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Login as guest */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Select Order Type
//               </h2> 

          
//             <div className="space-y-3">  
//             <LoginGuestSelector />
//             </div> 
    
//             </div>

//             {/* Shipping Address */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Shipping Address
//               </h2>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={shippingAddress.fullName}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={shippingAddress.email}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#586e20]"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={shippingAddress.phone}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Country
//                   </label>
//                   {/* <select
//                     name="country"
//                     value={shippingAddress.country}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="India">India</option>
//                     <option value="US">United States</option>
//                     <option value="UK">United Kingdom</option>
//                     <option value="Canada">Canada</option>
//                     <option value="Canada">Other</option>
//                   </select> */}


//                  {/* <select
//                   id="country"
//                   name="country"
//                   value={shippingAddress.country}
//                   onChange={handleAddressChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
//                   required
//                 >
//                   <option value="">
//                     {loading ? 'Loading countries...' : 'Select Country'}
//                   </option>
//                   {countries.map((country) => (
//                     <option key={country} value={country}>
//                       {country}
//                     </option>
//                   ))}
//                   <option value="Other">Other</option>
//                 </select> */}

//                  <input
//             type="text"
//             id="country"
//             name="country"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             onFocus={handleInputFocus}
//             onBlur={handleInputBlur}
//             placeholder={loading ? 'Loading countries...' : 'Search for a country...'}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
//             disabled={loading}
//           />
//           {isDropdownOpen && !loading && (
//             <div className="absolute z-10 w-90 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//               {filteredCountries.length > 0 ? (
//                 <>
//                   {filteredCountries.map((country) => (
//                     <div
//                       key={country}
//                       onClick={() => handleCountrySelect(country)}
//                       className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-black border-b border-gray-100 last:border-b-0"
//                     >
//                       {country}
//                     </div>
//                   ))}
//                   <div
//                     onClick={() => handleCountrySelect('Other')}
//                     className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-black border-t border-gray-200"
//                   >
//                     Other
//                   </div>
//                 </>
//               ) : (
//                 <div className="px-3 py-2 text-gray-500">
//                   No countries found
//                 </div>
//               )}
//               </div>
//           )}
               
//                 </div>
                
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Address *
//                   </label>
//                   <textarea
//                     name="address"
//                     value={shippingAddress.address}
//                     onChange={handleAddressChange}
//                     rows={3}
//                     placeholder="e.g. H.No. 1234, 4th Floor, Gaur City, Noida, Near DLF, U.P, 201001"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
//                     required
//                   />
//                    <div className="text-sm text-gray-600 md:w-1/3">
                  
//                 </div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     City *
//                   </label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={shippingAddress.city}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     State *
//                   </label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={shippingAddress.state}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     ZIP Code *
//                   </label>
//                   <input
//                     type="text"
//                     name="zipCode"
//                     value={shippingAddress.zipCode}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Payment Method
//               </h2>

//               <div className="space-y-3">
//                 {/* PayU Radio Option */}
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     id="payu"
//                     name="paymentMethod"
//                     value="payu"
//                     checked={paymentMethod === 'payu'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="h-4 w-4 text-[#586e20] focus:ring-[#586e20] border-gray-300"
//                   />
//                   <label htmlFor="payu" className="ml-3 flex items-center text-sm font-medium text-gray-700">
//                     <img src="https://latestlogo.com/wp-content/uploads/2024/03/payu-logo.png" alt="PayU" className="w-10 h-10 mr-2" />
//                     PayU Payment Gateway
//                   </label>
//                 </div>
                
//                 {/* COD Option */}
//                 {/* <div className="flex items-center">
//                   <input
//                     type="radio"
//                     id="cod"
//                     name="paymentMethod"
//                     value="cod"
//                     checked={paymentMethod === 'cod'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                   />
//                   <label htmlFor="cod" className="ml-3 flex items-center text-sm font-medium text-gray-700">
//                     <Building2 className="w-5 h-5 mr-2" />
//                     Cash on Delivery
//                   </label>
//                 </div> */}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div className="lg:col-span-4 ">
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-32">
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 Order Summary
//               </h2>
              
//               <div className="space-y-3">
//                 {/* <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Subtotal</span>
                  
//                   <span className="text-sm font-medium text-gray-600">
//                 ₹{!isNaN(subtotal) ? subtotal.toFixed(2) : '0.00'}
//               </span>

//                 </div> */}

//                  <div className="flex justify-between items-start">
//                 <div>
//                   <span className="text-sm text-gray-600 block">Subtotal</span>
//                   <span className="text-[11px] text-gray-500">(INCLUSIVE OF ALL TAXES)</span>
//                 </div>
//                 <div className="text-right">
//                   <span className="text-sm font-medium text-gray-600">
//                     ₹{!isNaN(subtotal) ? subtotal.toFixed(2) : '0.00'}
//                   </span>
//                 </div>
//               </div>


                
//                 {/* <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">GST (18%)</span>
//                   <span className="text-sm font-medium text-gray-600">₹{gst.toFixed(2)}</span>
//                 </div> */}
                
//                 <div className="flex justify-between">
//                   <span className="text-sm text-gray-600">Shipping</span>
//                   <span className="text-sm font-medium text-gray-600">
//                     {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
//                   </span>
//                 </div>
                
//                 <div className="border-t pt-3">
//                   <div className="flex justify-between">
//                     <span className="text-base font-medium text-gray-900">Total</span>
//                     <span className="text-base font-medium text-gray-900">₹{total.toFixed(2)}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <button
//                 onClick={handlePlaceOrder}
//                 disabled={isProcessing || cartItems.length === 0}
//                 className="w-full mt-6 bg-[#82a133] text-white py-3 px-4 rounded-md font-medium hover:bg-[#586e20] focus:outline-none focus:ring-2 focus:ring-[#586e20] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 {isProcessing ? (
//                   <div className="flex items-center justify-center">
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                     Processing...
//                   </div>
//                 ) : (
//                   `Place Order : ₹${total.toFixed(2)}`
//                 )}
//               </button>
              
//               <div className="mt-4 text-xs text-gray-500 text-center">
//                 By placing your order, you agree to our Terms of Service and Privacy Policy.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main component with Suspense boundary
// export default function CheckOutPage() {
//   return (
//     <Suspense fallback={
//       <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//             <p className="mt-4 text-gray-600">Loading checkout...</p>
//           </div>
//         </div>
//       </div>
//     }>
//       <CheckoutContent />
//     </Suspense>
//   );
// }

//  new cash on delivery update 25/07/2025



'use client';
import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Trash2, Plus, Minus, CreditCard, Smartphone, Building2, ShoppingCart } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import LoginGuestSelector from '../login/LoginGuestSelector';
 
// import LoginGuestSelector from '../components/login/LoginGuestSelector';
// import { postCreateOrder } from '@/lib/api/createOrder';
// import { postCreateOrder } from '@/lib/api/endpoints';

// export const metadata = {
//   title: 'Checkout - Cure Ayurvedic',
//   description: 'Checkout your order at Cure Ayurvedic.',
//   robots: 'noindex, nofollow',
// };

// seo meta tag

 
 

 
function CheckoutContent( ) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isBuyNow = searchParams.get('buyNow') === 'true';
  
  const [cartItems, setCartItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India'
  });

  const [paymentMethod, setPaymentMethod] = useState('payu');
  const [isProcessing, setIsProcessing] = useState(false);
  const [loading, setLoading] = useState(true);
  


  // guest login start

  const [selectedOption, setSelectedOption] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelectionChange({ selectedOption: value, guestEmail });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setGuestEmail(email);
    onSelectionChange({ selectedOption, guestEmail: email });
  };

  // if (!isClient) return null;


  // guest login end 


  // country api 

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
 
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
        const data = await response.json();
        const sorted = data
          .map((c) => c.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sorted);
        setFilteredCountries(sorted);
      } catch (error) {
        console.error("Failed to load countries:", error);
        const fallbackCountries = [
          'United States', 'Canada', 'United Kingdom', 'Australia', 
          'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Other'
        ];
        setCountries(fallbackCountries);
        setFilteredCountries(fallbackCountries);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsDropdownOpen(true);
    
    if (value.trim() === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  const handleCountrySelect = (country) => {
    setShippingAddress(prev => ({
      ...prev,
      country: country
    }));
    setSearchTerm(country);
    setIsDropdownOpen(false);
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleInputBlur = () => {
    // Delay closing to allow for country selection
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  // country api end

  // toasty confirm order

//   const showCODConfirmation = () => {
//   return new Promise((resolve) => {
//     const toastId = toast(
//       ({ closeToast }) => (
//         <div>
//           <p>Are you sure you want to place a <strong>Cash on Delivery</strong> order?</p>
//           <div className="flex justify-end gap-2 mt-3">
//             <button
//               className="bg-[#82a133] text-white px-3 py-1 rounded"
//               onClick={() => {
//                 resolve(true);
//                 toast.dismiss(toastId);
//               }}
//             >
//               Yes
//             </button>
//             <button
//               className="bg-red-500 text-white px-3 py-1 rounded"
//               onClick={() => {
//                 resolve(false);
//                 toast.dismiss(toastId);
//               }}
//             >
//               No
//             </button>
//           </div>
//         </div>
//       ),
//       {
//         autoClose: false,
//         closeOnClick: false,
//         closeButton: false,
//       }
//     );
//   });
// };
let activeCODToast = null;

const showCODConfirmation = () => {
  return new Promise((resolve) => {
    // If toast is already showing, don't show another
    if (activeCODToast && toast.isActive(activeCODToast)) return;

    const toastId = toast(
      ({ closeToast }) => (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md text-sm">
          <p className="text-gray-800">
            Are you sure you want to place a <strong>Cash on Delivery</strong> order?
          </p>
          <div className="flex flex-wrap justify-end gap-2 mt-4">
            <button
              className="bg-[#82a133] hover:bg-[#6c882b] text-white px-4 py-1.5 rounded text-sm"
              onClick={() => {
                resolve(true);
                toast.dismiss(toastId);
                activeCODToast = null;
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm"
              onClick={() => {
                resolve(false);
                toast.dismiss(toastId);
                activeCODToast = null;
              }}
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
      }
    );

    activeCODToast = toastId;
  });
};

// end 


  // Helper function to ensure cart items have all required fields
  const ensureRequiredFields = (item) => ({
    ...item,
    id: item.id || item.productId || Date.now().toString(),
    name: item.name || item.productName || 'Unknown Product',
    sku: item.sku || `SKU-${item.id || Date.now()}`,
    weight: item.weight || 0.5,
    hsn: item.hsn || '30049011',
    price: item.price || 1,
    quantity: item.quantity || 1,
    productId: item.productId || item.id,
    productName: item.productName || item.name
  });

 
  useEffect(() => {
    loadCartItems();
  }, [isBuyNow]);

  const loadCartItems = () => {
    try {
      let items = [];
      
      if (isBuyNow) {
        // Load item from Buy Now
        const buyNowItem = localStorage.getItem('buyNowItem');
        if (buyNowItem) {
          items = JSON.parse(buyNowItem);
        }
      } else {
        
        const cartData = localStorage.getItem('cart');
        if (cartData) {
          items = JSON.parse(cartData);
        }
      }
      
      // Ensure all items have required fields
      items = items.map(ensureRequiredFields);
      
      setCartItems(items);
    } catch (error) {
      console.error('Error loading cart items:', error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;
    
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedItems);
    
    // Update localStorage
    if (isBuyNow) {
      localStorage.setItem('buyNowItem', JSON.stringify(updatedItems));
    } else {
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    }
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    
    // Update localStorage
    if (isBuyNow) {
      localStorage.setItem('buyNowItem', JSON.stringify(updatedItems));
    } else {
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    }
  };

  // Add this line
  // window.dispatchEvent(new Event('cartUpdated'));
   if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cartUpdated'));
    }

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = subtotal * 0;  
  const shipping = 0;  
  const total = subtotal + gst + shipping;

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({ ...prev, [name]: value }));
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    // Check if cart has items
    if (cartItems.length === 0) {
      errors.push('Cart is empty');
    }
    
    // Validate cart items - all items should have required fields after loadCartItems
    cartItems.forEach((item, index) => {
      if (!item.id && !item.productId) errors.push(`Item ${index + 1}: Product ID is required`);
      if (!item.name && !item.productName) errors.push(`Item ${index + 1}: Product name is required`);
       if (item.price === undefined || item.price === null || isNaN(item.price)) {
        errors.push(`Item ${index + 1}: Valid price is required`);
        }

      if (!item.quantity || item.quantity <= 0) errors.push(`Item ${index + 1}: Valid quantity is required`);
      // SKU and weight are now guaranteed to exist from loadCartItems
      // console.log('Product ID:', item.productId || item.id);
      // console.log('Name:', item.productName || item.name);
      // console.log('Price:', item.price);
      // console.log('Quantity:', item.quantity);
      // console.log('SKU:', item.sku);
      // console.log('Weight:', item.weight);
      // console.log('HSN:', item.hsn);
    });
    
    // Validate shipping address
    if (!shippingAddress.fullName.trim()) errors.push('Full name is required');
    if (!shippingAddress.email.trim()) errors.push('Email is required');
    if (!shippingAddress.phone.trim()) errors.push('Phone is required');
    if (!shippingAddress.address.trim()) errors.push('Address is required');
    if (!shippingAddress.city.trim()) errors.push('City is required');
    if (!shippingAddress.state.trim()) errors.push('State is required');
    if (!shippingAddress.zipCode.trim()) errors.push('ZIP code is required');

    // new update
    // ✨ New validations
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(shippingAddress.phone)) {
            errors.push('Phone number must be 10 digits');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(shippingAddress.email)) {
            errors.push('Enter a valid email address');
        }

        const zipRegex = /^\d{6}$/;
        if (!zipRegex.test(shippingAddress.zipCode)) {
            errors.push('ZIP code must be 6 digits');
        }
    
    return errors;
  };

  const handlePlaceOrder = async () => {
    // Validate form first
    // const validationErrors = validateForm();
    // if (validationErrors.length > 0) {
    //   alert('Please fix the following errors:\n' + validationErrors.join('\n'));
    //   return;
    // }
     const validationErrors = validateForm();
  if (validationErrors.length > 0) {
    validationErrors.forEach(err => toast.error(err));
    return;
  }

   // 🔔 Confirm COD before proceeding
  // if (paymentMethod === 'cod') {
  //   const userConfirmed = window.confirm("Are you sure you want to place a Cash on Delivery order?");
  //   if (!userConfirmed) return;
  // }
    if (paymentMethod === 'cod') {
    const confirmed = await showCODConfirmation();
    if (!confirmed) return;
  }

    
    setIsProcessing(true);

    try {
      const token = localStorage.getItem('accessToken');  
      
      // Create the order payload with correct structure
      const orderPayload = {
        cartItems: cartItems.map((item) => ({
          productId: item.productId || item.id,
          productName: item.productName || item.name,
          quantity: item.quantity,
          price: item.price,
          sku: item.sku, // Now guaranteed to exist
          weight: item.weight, // Now guaranteed to exist
          hsn: item.hsn || '30049011'
        })),
        shippingAddress: {
          fullName: shippingAddress.fullName,
          addressLine1: shippingAddress.address,
          addressLine2: '',
          city: shippingAddress.city,
          state: shippingAddress.state,
          postalCode: shippingAddress.zipCode,
          country: shippingAddress.country,
          phone: shippingAddress.phone
        },
        billingAddress: {
          fullName: shippingAddress.fullName,
          addressLine1: shippingAddress.address,
          addressLine2: '',
          city: shippingAddress.city,
          state: shippingAddress.state,
          postalCode: shippingAddress.zipCode,
          country: shippingAddress.country,
          phone: shippingAddress.phone
        },
        paymentMethod: paymentMethod,
        totalAmount: total,
        subtotal: subtotal,
        gst: gst,
        shipping: shipping,
        orderDate: new Date().toISOString(),
        isBuyNow,
        email: shippingAddress.email, 
        guestEmail:  shippingAddress.email
      };

      console.log('Sending order payload:', orderPayload); // Debug log
      

      const createOrderResponse = await fetch('https://www.cureayurvedics.com/api/orders/create', {
        method: 'POST',
        headers: { 
          Authorization: `Bearer ${token}`, 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(orderPayload),
      });

      const orderResult = await createOrderResponse.json();
      console.log('Order response:', orderResult); // Debug log

      if (!orderResult.success) {
        throw new Error(orderResult.message || orderResult.error || 'Failed to create order.');
      }

      // STEP 2: Check if payment is required and initiate it
      if (orderResult.data.requiresPayment && paymentMethod !== 'cod') {

        const token = localStorage.getItem('accessToken');  
        // This is a PayU order, so we must initiate payment
        const initiatePaymentResponse = await fetch('https://www.cureayurvedics.com/api/payu/initiate', {
          method: 'POST',
          headers: { 
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify({ orderId: orderResult.data.orderId }),
        });

        const paymentResult = await initiatePaymentResponse.json();

        if (!paymentResult.success) {
          throw new Error(paymentResult.message || 'Failed to initiate payment.');
        }

        // STEP 3: Redirect to the PayU gateway using the data from the backend
        redirectToPayU(paymentResult.data);

      } else {
        // COD or free order, no payment needed.
        // Clear cart/buyNowItem
        if (isBuyNow) {
          localStorage.removeItem('buyNowItem');
        } else {
          localStorage.removeItem('cart');
        }
        router.push('/order-confirmed-page');
      }

    } catch (error) {
      console.error("Order process failed:", error);
      toast.error(error.message || "Order process failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  /**
   * This helper function creates a form on the fly and submits it,
   * redirecting the user to the PayU payment page.
   * @param {object} payuData - The data object from your /api/payu/initiate response.
   */
  function redirectToPayU(payuData) {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = payuData.action; // The PayU URL to post to

    for (const key in payuData) {
      if (key !== 'action') {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = payuData[key];
        form.appendChild(input);
      }
    }

    document.body.appendChild(form);
    form.submit();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#586e20] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading checkout...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-6 lg:py-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">
            {isBuyNow ? 'QUICK CHECKOUT' : 'CHECKOUT'}
          </h1>
          <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
            <ShoppingCart className="w-4 h-4 mr-1" />
            <span>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} {isBuyNow ? 'for quick purchase' : 'in cart'}</span>
          </div>
        </div>

        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Cart Items & Forms */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {/* Cart Items */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Order Summary</h2>
              
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-200 last:border-b-0 space-y-3 sm:space-y-0">
                      <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-medium text-gray-900 truncate">{item.name}</h3>
                          <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                          <p className="hidden text-xs text-gray-400">SKU: {item.sku}</p>
                          <p className="hidden text-xs text-gray-400">Weight: {item.weight}kg</p>
                          <p className="text-xs text-gray-400 sm:hidden">Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full hover:bg-gray-100 text-black transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center text-black text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-gray-100 text-black transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center space-x-3">
                          <p className="text-sm font-medium text-gray-900 hidden sm:block">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-red-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Login as guest */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
                Select Order Type
              </h2> 

          
            <div className="space-y-3">  
            <LoginGuestSelector />
            </div> 
    
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
                Shipping Address
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={shippingAddress.fullName}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={shippingAddress.email}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#586e20]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={shippingAddress.phone}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  {/* <select
                    name="country"
                    value={shippingAddress.country}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="India">India</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Canada">Other</option>
                  </select> */}


                 {/* <select
                  id="country"
                  name="country"
                  value={shippingAddress.country}
                  onChange={handleAddressChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">
                    {loading ? 'Loading countries...' : 'Select Country'}
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select> */}

                 <input
            type="text"
            id="country"
            name="country"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder={loading ? 'Loading countries...' : 'Search for a country...'}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
            disabled={loading}
          />
          {isDropdownOpen && !loading && (
            <div className="absolute z-10 w-90 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filteredCountries.length > 0 ? (
                <>
                  {filteredCountries.map((country) => (
                    <div
                      key={country}
                      onClick={() => handleCountrySelect(country)}
                      className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-black border-b border-gray-100 last:border-b-0"
                    >
                      {country}
                    </div>
                  ))}
                  <div
                    onClick={() => handleCountrySelect('Other')}
                    className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-black border-t border-gray-200"
                  >
                    Other
                  </div>
                </>
              ) : (
                <div className="px-3 py-2 text-gray-500">
                  No countries found
                </div>
              )}
              </div>
          )}
               
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={shippingAddress.address}
                    onChange={handleAddressChange}
                    rows={3}
                    placeholder="e.g. H.No. 1234, 4th Floor,  Gaur City, Noida, Near AD Tower, U.P, 201001"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
                    required
                  />
                   <div className="text-sm text-gray-600 md:w-1/3">
                  
                </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={shippingAddress.city}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={shippingAddress.state}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={shippingAddress.zipCode}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-[#586e20]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
                Payment Method
              </h2>

              <div className="space-y-3">
                {/* PayU Radio Option */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="payu"
                    name="paymentMethod"
                    value="payu"
                    checked={paymentMethod === 'payu'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-[#586e20] focus:ring-[#586e20] border-gray-300"
                  />
                  <label htmlFor="payu" className="ml-3 flex items-center text-sm font-medium text-gray-700">
                    <img src="https://latestlogo.com/wp-content/uploads/2024/03/payu-logo.png" alt="PayU" className="w-10 h-10 mr-2" />
                    PayU Payment Gateway
                  </label>
                </div>
                
                {/* COD Option */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="cod" className="ml-3 flex items-center text-sm font-medium text-gray-700">
                    <Building2 className="w-5 h-5 mr-2" />
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-4 ">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-32">
              <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3">
                {/* <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  
                  <span className="text-sm font-medium text-gray-600">
                ₹{!isNaN(subtotal) ? subtotal.toFixed(2) : '0.00'}
              </span>

                </div> */}

                 <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm text-gray-600 block">Subtotal</span>
                  <span className="text-[11px] text-gray-500">(INCLUSIVE OF ALL TAXES)</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-600">
                    ₹{!isNaN(subtotal) ? subtotal.toFixed(2) : '0.00'}
                  </span>
                </div>
              </div>


                
                {/* <div className="flex justify-between">
                  <span className="text-sm text-gray-600">GST (18%)</span>
                  <span className="text-sm font-medium text-gray-600">₹{gst.toFixed(2)}</span>
                </div> */}
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Shipping</span>
                  <span className="text-sm font-medium text-gray-600">
                    {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-gray-900">Total</span>
                    <span className="text-base font-medium text-gray-900">₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handlePlaceOrder}
                disabled={isProcessing || cartItems.length === 0}
                className="w-full mt-6 bg-[#82a133] text-white py-3 px-4 rounded-md font-medium hover:bg-[#586e20] focus:outline-none focus:ring-2 focus:ring-[#586e20] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  `Place Order : ₹${total.toFixed(2)}`
                )}
              </button>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                By placing your order, you agree to our Terms of Service and Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function CheckOutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading checkout...</p>
          </div>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}