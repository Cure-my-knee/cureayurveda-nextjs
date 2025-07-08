import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { XCircle } from 'lucide-react';

export default function PaymentFailure() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const orderId = searchParams.get('orderId');

  const handleRetryPayment = () => {
    if (orderId) {
      router.push(`/checkout?retryOrder=${orderId}`);
    } else {
      router.push('/checkout');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-6">
          {error ? `Error: ${error}` : 'There was an issue processing your payment. Please try again.'}
        </p>
        
        <div className="space-y-3">
          <button
            onClick={handleRetryPayment}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Retry Payment
          </button>
          
          <button
            onClick={() => router.push('/cart')}
            className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-md font-medium hover:bg-gray-300 transition-colors"
          >
            Back to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
