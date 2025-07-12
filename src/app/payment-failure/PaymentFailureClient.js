'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function PaymentFailureClient() {
  const searchParams = useSearchParams();
  const txnId = searchParams.get('transaction_id');

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#ffff] justify-center">
      <h1 className="text-2xl font-bold text-green-600">Payment Fail!</h1>
      <p className="mt-4 text-gray-600">
        Transaction ID: {txnId || 'N/A'}
      </p>
    </div>
  );
}