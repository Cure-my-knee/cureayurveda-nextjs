'use client';
import { useState, useEffect } from 'react';

export default function LoginGuestSelector({ onSelectionChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onSelectionChange({ selectedOption: value, guestEmail });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setGuestEmail(email);
    onSelectionChange({ selectedOption, guestEmail: email });
  };

  if (!isClient) return null;

  return (
    <div className="space-y-3">
      {/* Login Option */}
      <div className="flex items-center">
        <input
          type="radio"
          id="login"
          value="login"
          checked={selectedOption === 'login'}
          onChange={handleRadioChange}
          className="h-4 w-4 text-[#586e20] focus:ring-[#586e20] border-gray-300"
        />
        <label htmlFor="login" className="ml-3 text-sm font-medium text-gray-700">
          Login (Existing User)
        </label>
      </div>

      {/* Guest Option */}
      <div className="flex items-center">
        <input
          type="radio"
          id="guest"
          value="guest"
          checked={selectedOption === 'guest'}
          onChange={handleRadioChange}
          className="h-4 w-4 text-[#586e20] focus:ring-[#586e20] border-gray-300"
        />
        <label htmlFor="guest" className="ml-3 text-sm font-medium text-gray-700">
          Guest Order (New Customer)
        </label>
      </div>

      {/* {selectedOption === 'guest' && (
        <div className="mt-3">
          <input
            type="email"
            value={guestEmail}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#586e20]"
          />
        </div>
      )} */}
    </div>
  );
}
