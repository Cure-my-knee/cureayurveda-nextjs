//  'use client'
// import { useState } from 'react';
// import { Trash2, Plus, Minus, CreditCard, Smartphone, Building2 } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import Toast from '../components/Toast/Toast';
// import { showError, showSuccess, showInfo, showPromise } from '../utils/Toast';
// // import Toast from '../components/Toast/Toast';
// // import { showSuccess, showError, showInfo, showPromise } from '../../utils/toast';

// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Wireless Headphones',
//       price: 99.99,
//       quantity: 2,
//       image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop'
//     },
//     {
//       id: 2,
//       name: 'Smart Watch',
//       price: 249.99,
//       quantity: 1,
//       image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop'
//     },
//     {
//       id: 3,
//       name: 'Phone Case',
//       price: 19.99,
//       quantity: 3,
//       image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=200&h=200&fit=crop'
//     }
//   ]);
//   const router = useRouter();

//   const [shippingAddress, setShippingAddress] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: 'United States'
//   });

//   const [paymentMethod, setPaymentMethod] = useState('card');

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity <= 0) return;
//     setCartItems(items =>
//       items.map(item =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//     showInfo(`Quantity updated`, { autoClose: 2000 });
//   };

//   const removeItem = (id) => {
//     const item = cartItems.find(item => item.id === id);
//     setCartItems(items => items.filter(item => item.id !== id));
//     showInfo(`${item.name} removed from cart`);
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const gst = subtotal * 0.18; // 18% GST
//   const shipping = 9.99;
//   const total = subtotal + gst + shipping;

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePlaceOrder = async () => {
//     // Basic validation
//     const requiredFields = ['fullName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
//     const missingFields = requiredFields.filter(field => !shippingAddress[field].trim());
    
//     if (missingFields.length > 0) {
//       showError('Please fill in all required shipping address fields');
//       return;
//     }

//     if (cartItems.length === 0) {
//       showError('Your cart is empty');
//       return;
//     }

//     // Simulate API call with promise toast
//     const orderPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulate success (you can change this to reject for testing error state)
//         resolve({
//           orderId: 'ORD-' + Date.now(),
//           items: cartItems,
//           shipping: shippingAddress,
//           payment: paymentMethod,
//           total: total.toFixed(2)
//         });
//       }, 2000);
//     });

//     try {
//       const result = await showPromise(
//         orderPromise,
//         {
//           pending: 'Processing your order...',
//           success: 'Order placed successfully! 🎉',
//           error: 'Failed to place order. Please try again.'
//         }
//       );

//       console.log('Order placed:', result);

//       // Navigate to order success page after a short delay
//       setTimeout(() => {
//         router.push('/order-successful');
//       }, 1500);

//     } catch (error) {
//       console.error('Order failed:', error);
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 py-8 pt-36">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-light text-gray-900 tracking-wide">CHECKOUT</h1>
//           </div>

//           <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//             {/* Left Column - Cart Items */}
//             <div className="lg:col-span-8">
//               <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                
//                 {cartItems.length === 0 ? (
//                   <div className="text-center py-8">
//                     <p className="text-gray-500">Your cart is empty</p>
//                   </div>
//                 ) : (
//                   cartItems.map((item) => (
//                     <div key={item.id} className="flex items-center py-4 border-b border-gray-200 last:border-b-0">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="w-16 h-16 object-cover rounded-md"
//                       />
                      
//                       <div className="flex-1 ml-4">
//                         <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
//                         <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
//                       </div>

//                       <div className="flex items-center space-x-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="p-1 rounded-full hover:bg-gray-100 transition-colors"
//                         >
//                           <Minus className="w-4 h-4" />
//                         </button>
//                         <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="p-1 rounded-full hover:bg-gray-100 transition-colors"
//                         >
//                           <Plus className="w-4 h-4" />
//                         </button>
//                       </div>

//                       <div className="ml-4">
//                         <p className="text-sm font-medium text-gray-900">
//                           ${(item.price * item.quantity).toFixed(2)}
//                         </p>
//                       </div>

//                       <button
//                         onClick={() => removeItem(item.id)}
//                         className="ml-4 p-1 text-red-400 hover:text-red-600 transition-colors"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>

//               {/* Shipping Address */}
//               <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Address</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={shippingAddress.fullName}
//                       onChange={handleAddressChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="John Doe"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={shippingAddress.email}
//                       onChange={handleAddressChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="john@example.com"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={shippingAddress.phone}
//                       onChange={handleAddressChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="+1 (555) 123-4567"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                     <select
//                       name="country"
//                       value={shippingAddress.country}
//                       onChange={handleAddressChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="United States">United States</option>
//                       <option value="Canada">Canada</option>
//                       <option value="United Kingdom">United Kingdom</option>
//                       <option value="India">India</option>
//                     </select>
//                   </div>

//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
//                     <input
//                       type="text"
//                       name="address"
//                       value={shippingAddress.address}
//                       onChange={handleAddressChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="123 Main Street"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={shippingAddress.city}
//                       onChange={handleAddressChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="New York"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
//                     <input
//                       type="text"
//                       name="state"
//                       value={shippingAddress.state}
//                       onChange={handleAddressChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="NY"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
//                     <input
//                       type="text"
//                       name="zipCode"
//                       value={shippingAddress.zipCode}
//                       onChange={handleAddressChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="10001"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Method */}
//               <div className="bg-white rounded-lg shadow-sm p-6">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>
                
//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <input
//                       id="card"
//                       name="payment"
//                       type="radio"
//                       value="card"
//                       checked={paymentMethod === 'card'}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                     />
//                     <label htmlFor="card" className="ml-3 flex items-center cursor-pointer">
//                       <CreditCard className="w-5 h-5 mr-2 text-gray-600" />
//                       <span className="text-sm font-medium text-gray-900">Credit/Debit Card</span>
//                     </label>
//                   </div>

//                   <div className="flex items-center">
//                     <input
//                       id="paypal"
//                       name="payment"
//                       type="radio"
//                       value="paypal"
//                       checked={paymentMethod === 'paypal'}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                     />
//                     <label htmlFor="paypal" className="ml-3 flex items-center cursor-pointer">
//                       <Building2 className="w-5 h-5 mr-2 text-gray-600" />
//                       <span className="text-sm font-medium text-gray-900">PayPal</span>
//                     </label>
//                   </div>

//                   <div className="flex items-center">
//                     <input
//                       id="upi"
//                       name="payment"
//                       type="radio"
//                       value="upi"
//                       checked={paymentMethod === 'upi'}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                     />
//                     <label htmlFor="upi" className="ml-3 flex items-center cursor-pointer">
//                       <Smartphone className="w-5 h-5 mr-2 text-gray-600" />
//                       <span className="text-sm font-medium text-gray-900">UPI / Digital Wallet</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Order Total */}
//             <div className="lg:col-span-4 mt-6 lg:mt-0">
//               <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Total</h2>
                
//                 <div className="space-y-4">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="text-gray-900">${subtotal.toFixed(2)}</span>
//                   </div>

//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">GST (18%)</span>
//                     <span className="text-gray-900">${gst.toFixed(2)}</span>
//                   </div>

//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Shipping</span>
//                     <span className="text-gray-900">${shipping.toFixed(2)}</span>
//                   </div>

//                   <div className="border-t border-gray-200 pt-4">
//                     <div className="flex justify-between">
//                       <span className="text-lg font-semibold text-gray-900">Total</span>
//                       <span className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>
               
//                 <button
//                   onClick={handlePlaceOrder}
//                   className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
//                 >
//                   Place Order
//                 </button>

//                 <div className="mt-4 text-center">
//                   <p className="text-xs text-gray-500">
//                     By placing your order, you agree to our Terms of Service and Privacy Policy
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Reusable Toast Component */}
//       <Toast />
//     </>
//   );
// }


//  'use client'
// import { useState } from 'react';
// import { Trash2, Plus, Minus, CreditCard, Smartphone, Building2, ShoppingCart } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// export default function CheckoutPage() {

//   const router = useRouter();
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: 'Wireless Headphones',
//       price: 99.99,
//       quantity: 2,
//       image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop'
//     },
//     {
//       id: 2,
//       name: 'Smart Watch',
//       price: 249.99,
//       quantity: 1,
//       image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop'
//     },
//     {
//       id: 3,
//       name: 'Phone Case',
//       price: 19.99,
//       quantity: 3,
//       image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=200&h=200&fit=crop'
//     }
//   ]);

//   const [shippingAddress, setShippingAddress] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     country: 'United States'
//   });

//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [isProcessing, setIsProcessing] = useState(false);

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity <= 0) return;
//     setCartItems(items =>
//       items.map(item =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setCartItems(items => items.filter(item => item.id !== id));
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const gst = subtotal * 0.18; // 18% GST
//   const shipping = 9.99;
//   const total = subtotal + gst + shipping;

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePlaceOrder = async () => {
//     // Basic validation
//     const requiredFields = ['fullName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
//     const missingFields = requiredFields.filter(field => !shippingAddress[field].trim());
    
//     if (missingFields.length > 0) {
//       alert('Please fill in all required shipping address fields');
//       return;
//     }

//     if (cartItems.length === 0) {
//       alert('Your cart is empty');
//       return;
//     }

//     setIsProcessing(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       // alert('Order placed successfully! 🎉');
//       setIsProcessing(false);
//       router.push('/order-successful');
//       // Reset form or redirect as needed
//     }, 500);
//   };
  

//   return (
//     <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-8">
//           <h1 className="text-2xl sm:text-3xl font-light text-gray-900 tracking-wide">CHECKOUT</h1>
//           <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
//             <ShoppingCart className="w-4 h-4 mr-1" />
//             <span>{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart</span>
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

//             {/* Shipping Address */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Shipping Address</h2>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="sm:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={shippingAddress.fullName}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={shippingAddress.email}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={shippingAddress.phone}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                     placeholder="+1 (555) 123-4567"
//                     required
//                   />
//                 </div>

//                 <div className="sm:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={shippingAddress.address}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                     placeholder="123 Main Street"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={shippingAddress.city}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                     placeholder="New York"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
//                   <input
//                     type="text"
//                     name="state"
//                     value={shippingAddress.state}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                     placeholder="NY"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
//                   <input
//                     type="text"
//                     name="zipCode"
//                     value={shippingAddress.zipCode}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                     placeholder="10001"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                   <select
//                     name="country"
//                     value={shippingAddress.country}
//                     onChange={handleAddressChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                   >
//                     <option value="United States">United States</option>
//                     <option value="Canada">Canada</option>
//                     <option value="United Kingdom">United Kingdom</option>
//                     <option value="India">India</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Payment Method</h2>
              
//               <div className="space-y-3 sm:space-y-4">
//                 <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
//                   <input
//                     id="card"
//                     name="payment"
//                     type="radio"
//                     value="card"
//                     checked={paymentMethod === 'card'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 flex-shrink-0"
//                   />
//                   <label htmlFor="card" className="ml-3 flex items-center cursor-pointer flex-1">
//                     <CreditCard className="w-5 h-5 mr-3 text-gray-600 flex-shrink-0" />
//                     <span className="text-sm sm:text-base font-medium text-gray-900">Credit/Debit Card</span>
//                   </label>
//                 </div>

//                 <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
//                   <input
//                     id="paypal"
//                     name="payment"
//                     type="radio"
//                     value="paypal"
//                     checked={paymentMethod === 'paypal'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 flex-shrink-0"
//                   />
//                   <label htmlFor="paypal" className="ml-3 flex items-center cursor-pointer flex-1">
//                     <Building2 className="w-5 h-5 mr-3 text-gray-600 flex-shrink-0" />
//                     <span className="text-sm sm:text-base font-medium text-gray-900">PayPal</span>
//                   </label>
//                 </div>

//                 <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
//                   <input
//                     id="upi"
//                     name="payment"
//                     type="radio"
//                     value="upi"
//                     checked={paymentMethod === 'upi'}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 flex-shrink-0"
//                   />
//                   <label htmlFor="upi" className="ml-3 flex items-center cursor-pointer flex-1">
//                     <Smartphone className="w-5 h-5 mr-3 text-gray-600 flex-shrink-0" />
//                     <span className="text-sm sm:text-base font-medium text-gray-900">UPI / Digital Wallet</span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Order Total */}
//           <div className="lg:col-span-4">
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-6">
//               <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Order Total</h2>
              
//               <div className="space-y-3 sm:space-y-4">
//                 <div className="flex justify-between text-sm sm:text-base">
//                   <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
//                   <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
//                 </div>

//                 <div className="flex justify-between text-sm sm:text-base">
//                   <span className="text-gray-600">GST (18%)</span>
//                   <span className="text-gray-900 font-medium">${gst.toFixed(2)}</span>
//                 </div>

//                 <div className="flex justify-between text-sm sm:text-base">
//                   <span className="text-gray-600">Shipping</span>
//                   <span className="text-gray-900 font-medium">${shipping.toFixed(2)}</span>
//                 </div>

//                 <div className="border-t border-gray-200 pt-3 sm:pt-4">
//                   <div className="flex justify-between">
//                     <span className="text-lg sm:text-xl font-semibold text-gray-900">Total</span>
//                     <span className="text-lg sm:text-xl font-semibold text-gray-900">${total.toFixed(2)}</span>
//                   </div>
//                 </div>
//               </div>
             
//               <button
//                 onClick={handlePlaceOrder}
//                 disabled={isProcessing || cartItems.length === 0}
//                 className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
//               >
//                 {isProcessing ? 'Processing...' : 'Place Order'}
//               </button>

//               <div className="mt-4 text-center">
//                 <p className="text-xs text-gray-500">
//                   By placing your order, you agree to our Terms of Service and Privacy Policy
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


 
// 'use client';
// import React, { Suspense } from 'react';
// import { useState, useEffect } from 'react';

// import { Trash2, Plus, Minus, CreditCard, Smartphone, Building2, ShoppingCart } from 'lucide-react';
// import { useRouter, useSearchParams } from 'next/navigation';
 

// export default function CheckoutPage() {
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

//   // Load cart items on component mount
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
//         // Load items from regular cart
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
//   const gst = subtotal * 0.18; // 18% GST
//   const shipping = 0; // Shipping is always free
// const total = subtotal + gst + shipping;


//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setShippingAddress(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePlaceOrder = async () => {
//     // Basic validation
//     const requiredFields = ['fullName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
//     const missingFields = requiredFields.filter(field => !shippingAddress[field].trim());
    
//     if (missingFields.length > 0) {
//       alert('Please fill in all required shipping address fields');
//       return;
//     }

//     if (cartItems.length === 0) {
//       alert('Your cart is empty');
//       return;
//     }

//     setIsProcessing(true);
    
//     try {
//       // Create order data
//       const orderData = {
//         items: cartItems,
//         shippingAddress,
//         paymentMethod,
//         subtotal,
//         gst,
//         shipping,
//         total,
//         orderDate: new Date().toISOString(),
//         isBuyNow
//       };

//       // Store order data for confirmation page
//       localStorage.setItem('lastOrder', JSON.stringify(orderData));
      
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Clear cart after successful order
//       if (isBuyNow) {
//         localStorage.removeItem('buyNowItem');
//       } else {
//         localStorage.removeItem('cart');
//       }
      
//       // Redirect to success page
//       router.push('/order-successful');
      
//     } catch (error) {
//       console.error('Order placement failed:', error);
//       alert('Failed to place order. Please try again.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
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
//      <Suspense fallback={<div>Loading...</div>}> 
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
//               <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//                 {isBuyNow ? 'Item to Purchase' : 'Items in Cart'}
//               </h2>
              
//               {cartItems.length === 0 ? (
//                 <div className="text-center py-8">
//                   <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
//                   <p className="text-gray-500">Your cart is empty</p>
//                   <button
//                     onClick={() => router.push('/shop')}
//                     className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
//                   >
//                     Continue Shopping
//                   </button>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
//                       <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
//                         {item.image ? (
//                           <img 
//                             src={item.image} 
//                             alt={item.name}
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                             <span className="text-gray-400 text-xs">No Image</span>
//                           </div>
//                         )}
//                       </div>
                      
//                       <div className="flex-1 min-w-0">
//                         <h3 className="text-sm font-medium text-gray-900 truncate">
//                           {item.name}
//                         </h3>
//                         <p className="text-sm text-gray-500">
//                           ₹{item.price.toFixed(2)}
//                         </p>
//                         {item.size && (
//                           <p className="text-xs text-gray-400">Size: {item.size}</p>
//                         )}
//                       </div>
                      
//                       <div className="flex items-center space-x-2">
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                           className="p-1 hover:bg-gray-100 rounded-full"
//                           disabled={item.quantity <= 1}
//                         >
//                           <Minus className="w-4 h-4" />
//                         </button>
//                         <span className="w-8 text-center text-sm font-medium">
//                           {item.quantity}
//                         </span>
//                         <button
//                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                           className="p-1 hover:bg-gray-100 rounded-full"
//                         >
//                           <Plus className="w-4 h-4" />
//                         </button>
//                       </div>
                      
//                       <div className="text-right">
//                         <p className="text-sm font-medium text-gray-900">
//                           ₹{(item.price * item.quantity).toFixed(2)}
//                         </p>
//                       </div>
                      
//                       <button
//                         onClick={() => removeItem(item.id)}
//                         className="text-red-500 hover:text-red-700 p-1"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>


//             {/* login as guest */}


//         {/* Login or Guest Order Selection */}
//         <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//           <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//             Select Order Type
//           </h2>

//           <div className="space-y-3">
//             {/* Login or Guest Order */}
//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 id="login"
//                 value="login"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//               />
//               <label   className="ml-3 text-sm font-medium text-gray-700">
//                 Login (Existing User)
//               </label>
//             </div>

//             <div className="flex items-center">
//               <input
//                 type="radio"
//                 id="guest"
//                 value="guest"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//               />
//               <label  className="ml-3 text-sm font-medium text-gray-700">
//                 Guest Order (New Customer)
//               </label>
//             </div>
//           </div>
//         </div>

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
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//             <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
//               Payment Method
//             </h2>

//             <div className="space-y-3">
//               {/* PayU Radio Option */}
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   id="payu"
//                   name="paymentMethod"
//                   value="payu"
//                   checked={paymentMethod === 'payu'}
//                   onChange={(e) => setPaymentMethod(e.target.value)}
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                 />
//                 <label htmlFor="payu" className="ml-3 flex items-center text-sm font-medium text-gray-700">
//                   {/* You can replace the icon with PayU's icon or logo */}
//                   <img src="https://latestlogo.com/wp-content/uploads/2024/03/payu-logo.png" alt="PayU" className="w-10 h-10 mr-2" />
                  
//                 </label>
//               </div>
//             </div>
//           </div>

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
                
//                 {/* {subtotal > 0 && subtotal <= 500 && (
//                   <div className="text-xs text-green-600 bg-green-50 p-2 rounded">
//                     Add ₹{(500 - subtotal).toFixed(2)} more for free shipping!
//                   </div>
//                 )} */}
                
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
//                   `Place Order - ₹${total.toFixed(2)}`
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
//     </Suspense>
//   );
// }


'use client';
import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';

import { Trash2, Plus, Minus, CreditCard, Smartphone, Building2, ShoppingCart } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

// Separate component for the checkout content
function CheckoutContent() {
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

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [loading, setLoading] = useState(true);

 
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
        // Load items from regular cart
        const cartData = localStorage.getItem('cart');
        if (cartData) {
          items = JSON.parse(cartData);
        }
      }
      
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

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = subtotal * 0.18; // 18% GST
  const shipping = 0; // Shipping is always free
  const total = subtotal + gst + shipping;

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    // Basic validation
    const requiredFields = ['fullName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
    const missingFields = requiredFields.filter(field => !shippingAddress[field].trim());
    
    if (missingFields.length > 0) {
      alert('Please fill in all required shipping address fields');
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Create order data
      const orderData = {
        items: cartItems,
        shippingAddress,
        paymentMethod,
        subtotal,
        gst,
        shipping,
        total,
        orderDate: new Date().toISOString(),
        isBuyNow
      };

      // Store order data for confirmation page
      localStorage.setItem('lastOrder', JSON.stringify(orderData));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear cart after successful order
      if (isBuyNow) {
        localStorage.removeItem('buyNowItem');
      } else {
        localStorage.removeItem('cart');
      }
      
      // Redirect to success page
      router.push('/order-successful');
      
    } catch (error) {
      console.error('Order placement failed:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading checkout...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 mt-24">
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
              <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
                {isBuyNow ? 'Item to Purchase' : 'Items in Cart'}
              </h2>
              
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <button
                    onClick={() => router.push('/shop')}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">No Image</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ₹{item.price.toFixed(2)}
                        </p>
                        {item.size && (
                          <p className="text-xs text-gray-400">Size: {item.size}</p>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
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
                {/* Login or Guest Order */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="login"
                    value="login"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label className="ml-3 text-sm font-medium text-gray-700">
                    Login (Existing User)
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="guest"
                    value="guest"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label className="ml-3 text-sm font-medium text-gray-700">
                    Guest Order (New Customer)
                  </label>
                </div>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    value={shippingAddress.country}
                    onChange={handleAddressChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="India">India</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                  </select>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="payu" className="ml-3 flex items-center text-sm font-medium text-gray-700">
                    <img src="https://latestlogo.com/wp-content/uploads/2024/03/payu-logo.png" alt="PayU" className="w-10 h-10 mr-2" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-4">
              <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium text-gray-600">₹{subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">GST (18%)</span>
                  <span className="text-sm font-medium text-gray-600">₹{gst.toFixed(2)}</span>
                </div>
                
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
                className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  `Place Order - ₹${total.toFixed(2)}`
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
export default function CheckoutPage() {
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
