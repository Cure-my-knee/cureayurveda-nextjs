// 'use client'
// import { useState } from 'react';
// import Button from '../components/ui/Button';
// import Link from 'next/link';

// export default function AdminPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = () => {
//     console.log('Login attempt:', { email, password });
//   };

//   return (
    
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center mt-10 py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-light text-gray-900 tracking-wider">
//               ADMIN LOGIN
//             </h2>
//             <p className="mt-4 text-sm text-gray-600">
//               Please enter your e-mail and password:
//             </p>
//           </div>

//           {/* Form */}
//           <div className="space-y-6">
//             {/* Email Field */}
//             <div>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm"
//               />
//             </div>

//             {/* Password Field */}
//             <div className="relative">
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm pr-16"
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
//                 >
//                   Forgot password?
//                 </button>
//               </div>
//             </div>

//             {/* Login Button */}
//             <div>
//               <Button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="group relative w-full flex justify-center text-center py-3 px-4 border border-transparent text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2  transition-all duration-200 tracking-wider"
//               >
//                 LOGIN
//               </Button>
               
//             </div>

//             {/* Create Account Link */}
             
//           </div>
//         </div>
//       </div>

//       {/* Mobile optimization */}
//       <style jsx>{`
//         @media (max-width: 640px) {
//           .sm\\:rounded-lg {
//             border-radius: 0;
//           }
//         }
//       `}</style>
//     </div>
    
//   );
// }

// 'use client'
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Button from '../components/ui/Button';
// import Link from 'next/link';
// import { authAPI } from '../../lib/api/endpoints';

// export default function AdminLoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   // Login post API call 
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Always prevent default form submission
    
//     console.log('Form submitted'); // Debug log

//     // Basic validation
//     if (!email || !password) {
//       setError('Please enter both email and password');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       const credentials = {
//         email,
//         password
//       };

//       console.log('Sending credentials:', credentials); // Debug log

//       const response = await authAPI.loginUser(credentials);
      
//       console.log('API Response:', response); // Debug log
      
//       // Handle successful response
//       if (response.success && response.data) {
//         const { user, accessToken, refreshToken } = response.data;
        
//         // Store tokens safely (only in browser)
//         if (typeof window !== 'undefined') {
//           localStorage.setItem('accessToken', accessToken);
//           localStorage.setItem('refreshToken', refreshToken);
//           localStorage.setItem('user', JSON.stringify(user));
//         }

//         console.log('Admin Login successful, navigating to admin dashboard...'); // Debug log
        
//         // Navigate to home page using Next.js router
//         router.push('/admin/dashboard');
        
//       } else {
//         setError('Login failed. Please try again.');
//       }
      
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.response?.data?.message || 'Login failed. Please check your credentials and try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center mt-10 py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-light text-gray-900 tracking-wider">
//               ADMIN LOGIN
//             </h2>
//             <p className="mt-4 text-sm text-gray-600">
//               Please enter your e-mail and password:
//             </p>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
//               <p className="text-sm text-red-600">{error}</p>
//             </div>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email Field */}
//             <div>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm"
//                 disabled={isLoading}
//               />
//             </div>

//             {/* Password Field */}
//             <div className="relative">
//               <input
//                 id="password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm pr-16"
//                 disabled={isLoading}
//               />
//               <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none transition-colors duration-200"
//                   disabled={isLoading}
//                 >
//                   {showPassword ? 'Hide' : 'Show'}
//                 </button>
//               </div>
//             </div>

//             {/* Forgot Password Link */}
//             <div className="text-right">
//               <Link
//                 href="/forgot-password"
//                 className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
//               >
//                 Forgot password?
//               </Link>
//             </div>

//             {/* Login Button */}
//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="group relative w-full flex justify-center text-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 tracking-wider disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
//               >
//                 {isLoading ? 'LOGGING IN...' : 'LOGIN'}
//               </button>
//             </div>

//             {/* Create Account Link */}
//             <div className="text-center">
//               <p className="text-sm text-gray-600">
//                 Don't have an account?{' '}
//                 <Link
//                   href="/register"
//                   className="font-medium text-gray-900 hover:text-green-500 focus:outline-none focus:underline transition-colors duration-200"
//                 >
//                   Create one
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Mobile optimization */}
//       <style jsx>{`
//         @media (max-width: 640px) {
//           .sm\\:rounded-lg {
//             border-radius: 0;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// app/admin/login/page.js
 
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import Link from 'next/link';

export default function AdminPage() {
  const router = useRouter();
  const { isAuthenticated, loading, user } = useAdminAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect authenticated admin users to dashboard
  useEffect(() => {
    if (mounted && !loading && isAuthenticated && user?.role === 'admin') {
      router.push('/admin/dashboard');
    }
  }, [mounted, loading, isAuthenticated, user, router]);

  // Show loading while checking authentication
  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  // If user is authenticated and is admin, show loading (will redirect to dashboard)
  if (isAuthenticated && user?.role === 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          <p className="text-gray-600">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  // Public admin page - show to everyone who isn't an authenticated admin
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-gray-900 tracking-wider">
              ADMIN AREA
            </h1>
            <p className="mt-4 text-sm text-gray-600">
              Welcome to the admin section
            </p>
          </div>

          {/* Show different content based on authentication status */}
          {isAuthenticated && user?.role !== 'admin' && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-sm text-yellow-800">
                You are logged in but don't have admin privileges.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            {!isAuthenticated ? (
              <>
                <Link
                  href="/admin/login"
                  className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-[#82a133] hover:bg-[#82a133] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#82a133] transition-all duration-200 tracking-wider rounded-md"
                >
                  ADMIN LOGIN
                </Link>
                <p className="text-center text-sm text-gray-600">
                  Sign in with admin credentials to access the dashboard
                </p>
              </>
            ) : (
              <>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    You are logged in as: <span className="font-medium">{user?.email}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Admin access required for dashboard
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}