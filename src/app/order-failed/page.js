'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { XCircle, RefreshCw, ArrowLeft, Home, ShoppingBag, AlertTriangle, CreditCard } from 'lucide-react';

export default function OrderFailedPage() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Generate order number for failed order
    const generateOrderNumber = () => {
      const timestamp = Date.now().toString();
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      return `ORD-${timestamp.slice(-6)}${random}`;
    };

    setOrderNumber(generateOrderNumber());
  }, []);

  const handleRetryPayment = () => {
    router.push('/checkout'); // Redirect to checkout page
  };

  const handleGoBack = () => {
    router.back(); // Go back to previous page
  };

  const handleGoHome = () => {
    router.push('/'); // Home page route
  };

  const handleContinueShopping = () => {
    router.push('/shop'); // Adjust route as needed
  };

  return (
    <div className=" bg-gradient-to-br bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Error Animation Container */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6 animate-pulse">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Payment Failed
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We couldn't process your payment. Don't worry, you can try again or use a different payment method.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <span className="font-medium text-gray-700">Order Number</span>
                    </div>
                    <span className="font-mono text-sm font-semibold text-gray-900 bg-white px-3 py-1 rounded-md">
                      {orderNumber}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-700">Attempted Date</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      {new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <span className="font-medium text-red-700">Status</span>
                    </div>
                    <span className="text-sm font-semibold text-red-900 bg-red-100 px-3 py-1 rounded-md">
                      Payment Failed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What Went Wrong Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Went Wrong?</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-900 mb-1">Common Issues</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Insufficient funds</li>
                        <li>• Incorrect card details</li>
                        <li>• Card declined by bank</li>
                        <li>• Network connection error</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">?</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">What You Can Do</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Check your card details</li>
                        <li>• Try a different payment method</li>
                        <li>• Contact your bank</li>
                        <li>• Retry the payment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          {/* <button
            onClick={handleRetryPayment}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Retry Payment</span>
          </button> */}

          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto px-8 py-4 bg-[#82a133] text-white font-semibold rounded-xl hover:bg-[#586e20] focus:outline-none focus:ring-4 focus:ring-[#586e20] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>

          <button
            onClick={handleContinueShopping}
            className="w-full sm:w-auto px-8 py-4 bg-[#82a133] text-white font-semibold rounded-xl hover:bg-[#586e20] focus:outline-none focus:ring-4 focus:ring-[#586e20] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Continue Shopping</span>
          </button>

          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto px-8 py-4 bg-[#82a133] text-white font-semibold rounded-xl hover:bg-[#586e20] focus:outline-none focus:ring-4 focus:ring-[#586e20] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5" />
            <span>Go to Home</span>
          </button>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-6">
              If you continue to experience issues with your payment, our customer support team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@example.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Email Support
              </a>
              <a
                href="tel:+1-800-123-4567"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Call Us
              </a>
              <a
                href="/help"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
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