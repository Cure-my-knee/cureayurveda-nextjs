'use client';
import React, { useState } from 'react';
import { Search, Package, Truck, MapPin, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import BreadCrumbBanner from '../components/layout/BreadCrumbBanner';

const OrderTrackingPage = () => {
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock order data
  const mockOrders = {
    'ORD123456': {
      id: 'ORD123456',
      customerName: 'John Doe',
      orderDate: '2024-07-05',
      estimatedDelivery: '2024-07-10',
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 99.99 },
        { name: 'Phone Case', quantity: 2, price: 24.99 }
      ],
      totalAmount: 149.97,
      status: 'In Transit',
      trackingSteps: [
        { title: 'Order Placed', description: 'Your order has been confirmed', date: '2024-07-05 10:30 AM', completed: true },
        { title: 'Processing', description: 'Order is being prepared', date: '2024-07-05 02:15 PM', completed: true },
        { title: 'Shipped', description: 'Package left the warehouse', date: '2024-07-06 09:00 AM', completed: true },
        { title: 'In Transit', description: 'Package is on the way', date: '2024-07-07 11:30 AM', completed: true, current: true },
        { title: 'Out for Delivery', description: 'Package is out for delivery', date: '', completed: false },
        { title: 'Delivered', description: 'Package has been delivered', date: '', completed: false }
      ],
      shippingAddress: {
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      }
    },
    'ORD789012': {
      id: 'ORD789012',
      customerName: 'Jane Smith',
      orderDate: '2024-07-03',
      estimatedDelivery: '2024-07-08',
      items: [
        { name: 'Laptop Stand', quantity: 1, price: 79.99 }
      ],
      totalAmount: 79.99,
      status: 'Delivered',
      trackingSteps: [
        { title: 'Order Placed', description: 'Your order has been confirmed', date: '2024-07-03 02:20 PM', completed: true },
        { title: 'Processing', description: 'Order is being prepared', date: '2024-07-03 04:45 PM', completed: true },
        { title: 'Shipped', description: 'Package left the warehouse', date: '2024-07-04 08:30 AM', completed: true },
        { title: 'In Transit', description: 'Package is on the way', date: '2024-07-05 01:15 PM', completed: true },
        { title: 'Out for Delivery', description: 'Package is out for delivery', date: '2024-07-06 09:00 AM', completed: true },
        { title: 'Delivered', description: 'Package has been delivered', date: '2024-07-06 03:30 PM', completed: true, current: true }
      ],
      shippingAddress: {
        street: '456 Oak Avenue',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90210'
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const order = mockOrders[orderId.toUpperCase()];
      if (order) {
        setOrderData(order);
        setError('');
      } else {
        setError('Order not found. Please check your order ID and try again.');
        setOrderData(null);
      }
      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'text-green-600 bg-green-100';
      case 'in transit':
        return 'text-blue-600 bg-blue-100';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100';
      case 'shipped':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStepIcon = (step) => {
    if (step.completed) {
      return <CheckCircle className="w-6 h-6 text-green-600" />;
    } else if (step.current) {
      return <Clock className="w-6 h-6 text-blue-600" />;
    } else {
      return <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white"></div>;
    }
  };

  return (
    <> 
    {/* <BreadCrumbBanner /> */}
    <div className="min-h-screen bg-gradient-to-br bg-white py-8 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Track Your Order</h1>
          <p className="text-gray-600">Enter your order ID to get real-time updates</p>
        </div>

        {/* Order ID Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
                Order ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Package className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="orderId"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Enter your order ID (e.g., ORD123456)"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Tracking...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Track Order</span>
                </>
              )}
            </button>
          </form>

          {/* Demo Order IDs */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Try these demo order IDs:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setOrderId('ORD123456')}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
              >
                ORD123456
              </button>
              <button
                onClick={() => setOrderId('ORD789012')}
                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors"
              >
                ORD789012
              </button>
            </div>
          </div>
        </div>

        {/* Order Details Section */}
        {orderData && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Order #{orderData.id}</h2>
                  <p className="text-gray-600">Placed on {new Date(orderData.orderDate).toLocaleDateString()}</p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(orderData.status)}`}>
                    {orderData.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Information</h3>
                  <p className="text-gray-600 mb-2">{orderData.customerName}</p>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div className="text-gray-600">
                      <p>{orderData.shippingAddress.street}</p>
                      <p>{orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zip}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Summary</h3>
                  <div className="space-y-2">
                    {orderData.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.name} x{item.quantity}</span>
                        <span className="text-gray-900">${item.price}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${orderData.totalAmount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tracking Steps */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Progress</h2>
              
              <div className="space-y-6">
                {orderData.trackingSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getStepIcon(step)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className={`text-lg font-semibold ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                            {step.title}
                          </h3>
                          <p className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                            {step.description}
                          </p>
                        </div>
                        
                        {step.date && (
                          <div className="mt-2 sm:mt-0 text-sm text-gray-500">
                            {step.date}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {orderData.status !== 'Delivered' && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-blue-900">
                        Estimated Delivery: {new Date(orderData.estimatedDelivery).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-blue-700">
                        We'll notify you when your package is out for delivery
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default OrderTrackingPage;