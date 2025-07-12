// 'use client';
// import { useSearchParams } from 'next/navigation';
// import React from 'react';

// const PaymentFailurePage = () => {
//   const searchParams = useSearchParams();
//   const txnid = searchParams.get('txnid');
//   const status = searchParams.get('status');

//   return (
//     <div className="min-h-screen flex flex-col bg-white items-center justify-center text-center px-4">
//       <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
//       <p className="text-lg mb-2">Transaction ID: {txnid || 'N/A'}</p>
//       <p className="text-lg mb-4">Status: {status || 'N/A'}</p>
//       <p className="text-gray-600">Please try again or contact support if the issue persists.</p>
//     </div>
//   );
// };

// export default PaymentFailurePage;

import React, { Suspense } from 'react';
import PaymentFailureClient from './PaymentFailureClient';
 
 

export default function PaymentFailurePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentFailureClient/>
    </Suspense>
  );
}
