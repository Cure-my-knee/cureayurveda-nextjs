
// pages/payment/success.js
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function PaymentSuccess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(`/api/orders/${orderId}`);
      const data = await response.json();
      setOrder(data.order);
    } catch (error) {
      console.error('Error fetching order:', error);
    }
  };

  const handleContinueShopping = () => {
    // Clear cart data
    localStorage.removeItem('cart');
    localStorage.removeItem('buyNowItem');
    localStorage.removeItem('currentOrder');
    
    router.push('/shop');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">Your order has been confirmed and is being processed.</p>
        
        {order && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">Order ID: <span className="font-medium">{order._id}</span></p>
            <p className="text-sm text-gray-600">Total: <span className="font-medium">₹{order.total}</span></p>
          </div>
        )}
        
        <button
          onClick={handleContinueShopping}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}