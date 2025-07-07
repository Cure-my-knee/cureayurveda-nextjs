'use client';
 import { useState, useEffect } from 'react';
 

export default function LoginGuestSelector() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isClient, setIsClient] = useState(false);  // Track if the component is client-side
  

  useEffect(() => {
    // This will only run on the client-side
    setIsClient(true);
  }, []);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNavigation = () => {
    if (selectedOption === 'login') {
      if (!isLoggedIn) {
        // If not logged in, navigate to login page
        router.push('/login');
      }
    } else if (selectedOption === 'guest') {
      // Navigate to guest order page
      router.push('/guest-checkout');
    }
  };

  if (!isClient) return null;  // Return nothing until client-side rendering

  return (
    <div className="space-y-3">
      {/* Login or Guest Order */}
      <div className="flex items-center">
        <input
          type="radio"
          id="login"
          value="login"
          checked={selectedOption === 'login'}
          onChange={handleRadioChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
        />
        <label className="ml-3 text-sm font-medium text-gray-700">Login (Existing User)</label>
      </div>

      <div className="flex items-center">
        <input
          type="radio"
          id="guest"
          value="guest"
          checked={selectedOption === 'guest'}
          onChange={handleRadioChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
        />
        <label className="ml-3 text-sm font-medium text-gray-700">Guest Order (New Customer)</label>
      </div>

      
       
    </div>
  );
}
