'use client'
import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

// export const metadata = {
//   title: 'Cart - Cure Ayurvedic',
//   description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
//   robots: 'noindex, nofollow',
// };

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 99.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      color: "Black",
      size: "One Size"
    },
    {
      id: 2,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      color: "Navy Blue",
      size: "Large"
    },
    {
      id: 3,
      name: "Leather Wallet",
      price: 79.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
      color: "Brown",
      size: "Standard"
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <section className='pt-24'> 
    <div className="min-h-screen bg-gray-50 pt-10">
      
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="px-6 py-4 border-b">
                  <h2 className="text-lg font-medium text-gray-900">Cart Items</h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-medium text-gray-900 mb-1">
                                {item.name}
                              </h3>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                <span>Color: {item.color}</span>
                                <span>Size: {item.size}</span>
                              </div>
                              
                              {/* Mobile Price */}
                              <div className="sm:hidden mb-3">
                                <span className="text-lg font-semibold text-gray-900">
                                  Rs{item.price.toFixed(2)}
                                </span>
                              </div>
                            </div>
                            
                            {/* Desktop Price */}
                            <div className="hidden sm:block text-right">
                              <span className="text-lg font-semibold text-gray-900">
                                Rs{item.price.toFixed(2)}
                              </span>
                            </div>
                          </div>
                          
                          {/* Quantity Controls and Remove Button */}
                          <div className="flex items-center justify-between sm:justify-start sm:gap-4 mt-4">
                            <div className="flex items-center border rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-gray-100 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-gray-100 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex items-center text-red-600 hover:text-red-700 transition-colors"
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              <span className="text-sm">Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-sm border sticky top-8">
                <div className="px-6 py-4 border-b">
                  <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>Rs{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `Rs{shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>Rs{tax.toFixed(2)}</span>
                    </div>
                    {shipping === 0 && (
                      <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                        🎉 You qualify for free shipping!
                      </div>
                    )}
                    {shipping > 0 && (
                      <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                        Add Rs{(100 - subtotal).toFixed(2)} more for free shipping
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-semibold text-gray-900">
                      <span>Total</span>
                      <span>Rs{total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-3">
                    Proceed to Checkout
                  </button>
                  
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Continue Shopping
                  </button>
                  
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
                      <span>Secure checkout powered by</span>
                    </div>
                    <div className="flex justify-center space-x-4 text-xs text-gray-400">
                      <span>🔒 SSL</span>
                      <span>💳 Stripe</span>
                      <span>🛡️ PayPal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default CartPage;