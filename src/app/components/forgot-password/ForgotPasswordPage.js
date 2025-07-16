'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authAPI } from '@/lib/api/endpoints';


export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const router = useRouter();

  // Forgot password API call 
  const handleSubmit = async (e) => {
    e.preventDefault(); // Always prevent default form submission
    
    console.log('Forgot password form submitted'); // Debug log

    // Basic validation
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        email
      };

      console.log('Sending forgot password request:', payload); // Debug log

      const response = await authAPI.forgotPassword(payload);
      
      console.log('API Response:', response); // Debug log
      
      // Handle successful response
      if (response.success) {
        setIsEmailSent(true);
        setSuccess('Password reset instructions have been sent to your email address. Please check your inbox and follow the instructions to reset your password.');
        setEmail(''); // Clear email field
        
      } else {
        setError('Failed to send password reset email. Please try again.');
      }
      
    } catch (error) {
      console.error('Forgot password error:', error);
      setError(error.response?.data?.message || 'Failed to send password reset email. Please check your email address and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center mt-10 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-gray-900 tracking-wider">
              FORGOT PASSWORD
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              {isEmailSent 
                ? "Check your email for reset instructions"
                : "Enter your email address and we'll send you instructions to reset your password:"
              }
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-600">{success}</p>
            </div>
          )}

          {/* Form */}
          {!isEmailSent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  disabled={isLoading}
                />
              </div>

              {/* Send Password Reset Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center text-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-[#82a133] hover:bg-[#82a133] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 tracking-wider disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
                >
                  {isLoading ? 'SENDING...' : 'SEND RESET INSTRUCTIONS'}
                </button>
              </div>
            </form>
          ) : (
            /* After email sent - show actions */
            <div className="space-y-6">
              <div className="text-center">
                <svg className="mx-auto h-16 w-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Resend Button */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setIsEmailSent(false);
                    setSuccess('');
                    setError('');
                  }}
                  className="group relative w-full flex justify-center text-center py-3 px-4 border border-gray-300 text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 tracking-wider rounded-md"
                >
                  RESEND EMAIL
                </button>
              </div>
            </div>
          )}

          {/* Back to Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{' '}
              <Link
                href="/login"
                className="font-medium text-gray-900 hover:text-green-500 focus:outline-none focus:underline transition-colors duration-200"
              >
                Back to Login
              </Link>
            </p>
          </div>

          {/* Create Account Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-gray-900 hover:text-green-500 focus:outline-none focus:underline transition-colors duration-200"
              >
                Create one
              </Link>
            </p>
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