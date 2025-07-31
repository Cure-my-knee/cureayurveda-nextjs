// pages/payment/success.js
 

import OrderConfirmation from '../components/order/orderconfirmation';

// seo meta tag
export const metadata = {
  title: 'Order Confirmation - Cure Ayurvedic',
  description: 'Your order is confirmed',
  robots: 'noindex, nofollow',
};

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <OrderConfirmation />
    </div>
  );
}
