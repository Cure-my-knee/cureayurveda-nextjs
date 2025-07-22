// 'use client'
// import { useState } from 'react';
// import Button from '../components/ui/Button';
// import Link from 'next/link';

// export default function LoginPage() {
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
//               LOGIN
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
//             <div className="text-center">
//               <p className="text-sm text-gray-600">
//                 Don't have an account?{' '}
//                 <Link
//                   href="register"
//                   type="button"
//                   className="font-medium text-gray-900 hover:text-green-500 focus:outline-none focus:underline transition-colors duration-200"
//                   onClick={() => console.log('Navigate to create account')}
//                 >
//                   Create one
//                 </Link>
//               </p>
//             </div>
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

  'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authAPI } from '@/lib/api/endpoints';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const credentials = { email, password };
      const response = await authAPI.loginUser(credentials);

      if (response.success && response.data) {
        const { user, accessToken, refreshToken } = response.data;

        // Store in localStorage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('user', JSON.stringify(user));

        // 🔥 Dispatch the authChange event
        window.dispatchEvent(new Event('authChange'));

        // Navigate to home
        router.push('/');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center mt-10 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-gray-900 tracking-wider">LOGIN</h2>
            <p className="mt-4 text-sm text-gray-600">Please enter your e-mail and password:</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              disabled={isLoading}
              className="block w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-black placeholder-gray-500"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                disabled={isLoading}
                className="block w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-black placeholder-gray-500 pr-16"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-blue-600"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
                Forgot password?
              </Link>
            </div> */}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#82a133] text-white rounded-md text-sm font-medium tracking-wider hover:bg-[#6f8e28] disabled:opacity-50"
            >
              {isLoading ? 'LOGGING IN...' : 'LOGIN'}
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-gray-900 font-medium hover:text-green-500">
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
