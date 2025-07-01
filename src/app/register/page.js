// 'use client'
// import { useState } from 'react';
// import Button from '../components/ui/Button';
// import Link from 'next/link';

// export default function RegisterPage() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     console.log('Registration attempt:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-16">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h2 className="text-2xl font-light text-gray-900 tracking-wider">
//               REGISTER
//             </h2>
//             <p className="mt-4 text-sm text-gray-600">
//               Please fill in the information below:
//             </p>
//           </div>

//           {/* Form */}
//           <div className="space-y-6">
//             {/* First Name Field */}
//             <div>
//               <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 autoComplete="given-name"
//                 required
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 placeholder="First name"
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm"
//               />
//             </div>

//             {/* Last Name Field */}
//             <div>
//               <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 autoComplete="family-name"
//                 required
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 placeholder="Last name"
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm"
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Email"
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm"
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 placeholder="Password"
//                 className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm"
//               />
//             </div>

//             {/* Register Button */}
//             <div>
//               <Button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white text-center  focus:outline-none focus:ring-2 focus:ring-offset-2  transition-all duration-200 tracking-wider"
//               >
//                 CREATE MY ACCOUNT
//               </Button>
//             </div>

//              {/* Create Account Link */}
//             <div className="text-center">
//               <p className="text-sm text-gray-600">
//                 Do have an account?{' '}
//                 <Link
//                   href="login"
//                   type="button"
//                   className="font-medium text-gray-900 hover:text-green-500 focus:outline-none focus:underline transition-colors duration-200"
//                   onClick={() => console.log('Navigate to create account')}
//                 >
//                   Log in
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

 


'use client'
import { useState } from 'react';
import Button from '../components/ui/Button';
import Link from 'next/link';
import { authAPI } from '../../lib/api/endpoints';
 

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!formData.password.trim()) {
      setError('Password is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async () => {
    console.log('Registration attempt:', formData);
    
    // Clear previous messages
    setError('');
    setSuccess('');
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Prepare data for API call
      const userData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password
      };

      const response = await authAPI.registerUser(userData);
      
      if (response.success) {
        setSuccess(response.message || 'Account created successfully! Please log in.');
        console.log('User registered:', response.data);
        
        // Optional: Store tokens in localStorage or handle authentication
        if (response.data?.accessToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        });
        
        // Optional: Redirect to login page or dashboard after a delay
        setTimeout(() => {
          window.location.href = '/login'; // or use Next.js router
        }, 2000);
      }
      
    } catch (error) {
      console.error('Registration error:', error);
      
      // Handle different error formats
      let errorMessage = 'Registration failed. Please try again.';
      
      if (typeof error === 'string') {
        errorMessage = error;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (error?.error) {
        errorMessage = error.error;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-16">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-lg sm:px-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-gray-900 tracking-wider">
              REGISTER
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              Please fill in the information below:
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
          <div className="space-y-6">
            {/* First Name Field */}
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
                disabled={loading}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Last Name Field */}
            <div>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                disabled={loading}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                disabled={loading}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Password Field */}
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                disabled={loading}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>

            {/* Register Button */}
            <div>
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white text-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'CREATING ACCOUNT...' : 'CREATE MY ACCOUNT'}
              </Button>
            </div>

             {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Do have an account?{' '}
                <Link
                  href="/login"
                  className="font-medium text-gray-900 hover:text-green-500 focus:outline-none focus:underline transition-colors duration-200"
                >
                  Log in
                </Link>
              </p>
            </div>
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