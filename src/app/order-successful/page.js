'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, Package, Truck, Home, ShoppingBag, Calendar, MapPin } from 'lucide-react';

export default function OrderSuccessPage() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState('');
  const [estimatedDelivery, setEstimatedDelivery] = useState('');

  useEffect(() => {
    // Generate order number and estimated delivery date
    const generateOrderNumber = () => {
      const timestamp = Date.now().toString();
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      return `xxxxx${timestamp.slice(-6)}${random}`;
    };

    const getEstimatedDelivery = () => {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + Math.floor(Math.random() * 5) + 3); // 3-7 days
      return deliveryDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };

    setOrderNumber(generateOrderNumber());
    setEstimatedDelivery(getEstimatedDelivery());
  }, []);

  const handleContinueShopping = () => {
    router.push('/shop'); // Adjust route as needed
  };

  const handleGoHome = () => {
    router.push('/'); // Home page route
  };

  const handleTrackOrder = () => {
    router.push(`/track-order/${orderNumber}`); // Track order page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Success Animation Container */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-pulse">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h1>
          
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto">
            Thank you for your purchase! Your order has been confirmed and will be processed shortly.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">Order Details</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Package className="w-5 h-5 text-[#82a133]" />
                      <span className="font-medium text-black">Order Number</span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-black bg-white px-3 py-1 rounded-md">
                      {orderNumber}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-[#82a133]" />
                      <span className="font-medium text-black">Order Date</span>
                    </div>
                    <span className="text-sm font-semibold text-black">
                      {new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Truck className="w-5 h-5 text-[#82a133]" />
                      <span className="font-medium text-black">Estimated Delivery</span>
                    </div>
                    <span className="text-sm font-semibold text-black">
                      {estimatedDelivery}
                    </span>
                  </div>
                </div>
              </div>

              {/* Delivery Status */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#82a133]" />
                  <h3 className="font-semibold text-black">Delivery Status</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 text-black rounded-full"></div>
                    <span className="text-sm text-black">Order Confirmed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 text-black rounded-full animate-pulse"></div>
                    <span className="text-sm text-black">Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-black">Shipped</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-black">Delivered</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-black mb-4">What's Next?</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-black font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Order Confirmation</h4>
                      <p className="text-sm text-black">
                        You'll receive an email confirmation with your order details within 5 minutes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-black font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Processing</h4>
                      <p className="text-sm text-black">
                        We'll prepare your order for shipment within 1-2 business days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-black font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Shipping</h4>
                      <p className="text-sm text-black">
                        You'll receive tracking information once your order ships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* <button
            onClick={handleTrackOrder}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Package className="w-5 h-5" />
            <span>Track Your Order</span>
          </button> */}

          <button
            onClick={handleContinueShopping}
            className="w-full sm:w-auto px-8 py-4 bg-[#82a133] text-white font-semibold rounded-xl hover:bg-[#82a133] focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>

          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto px-8 py-4 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            <span>Go to Home</span>
          </button>
        </div>

        {/* Support Section */}
         <div className="mt-12 text-center">
  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Shipped Soon</h3>
    <p className="text-gray-600 mb-6">
      Your order has been confirmed and will be shipped shortly. You will receive shipping updates and tracking details via SMS and email from <strong>Shiprocket</strong>.
    </p>
    <p className="text-gray-600 mb-6">
      If you have any questions about your order, our customer support team is here to help.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:Contact@cureayurvedic.com"
        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-black font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
      >
        Email Support
      </a>
      <a
        href="tel:+91-8800023120"
        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-black font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
      >
        Call Us
      </a>
      <a
        href="/contact"
        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-black font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
      >
        Help Center
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}