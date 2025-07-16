// pages/payment/success.js
 

import OrderConfirmation from '../components/order/orderconfirmation';

// seo meta tag
export const metadata = {
  title: 'Order Confirmation - Cure Ayurvedic',
  description: 'Cure Ayurvedic is one of the best ayurvedic products company in India. Get affordable ayurvedic products for better health.',
  robots: 'noindex, nofollow',
};

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <OrderConfirmation />
    </div>
  );
}
