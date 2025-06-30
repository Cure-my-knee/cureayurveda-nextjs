'use client'
import { useState } from 'react';
import Button from '../components/ui/Button';
import Link from 'next/link';

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log('Login attempt:', { email, password });
  };

  return (
    
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center mt-10 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-gray-900 tracking-wider">
              ADMIN LOGIN
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Please enter your e-mail and password:
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm pr-16"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Login Button */}
            <div>
              <Button
                type="button"
                onClick={handleSubmit}
                className="group relative w-full flex justify-center text-center py-3 px-4 border border-transparent text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2  transition-all duration-200 tracking-wider"
              >
                LOGIN
              </Button>
               
            </div>

            {/* Create Account Link */}
             
          </div>
        </div>
      </div>

      {/* Mobile optimization */}
      <style jsx>{`
        @media (max-width: 640px) {
          .sm\\:rounded-lg {
            border-radius: 0;
          }
        }
      `}</style>
    </div>
    
  );
}