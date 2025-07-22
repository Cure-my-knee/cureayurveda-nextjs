 'use client'

import { authAPI } from '@/lib/api/endpoints'
import { useState, useEffect } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [captchaInput, setCaptchaInput] = useState('')
  const [captcha, setCaptcha] = useState({ question: '', answer: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState('')
 
  // Generate simple math CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operations = ['+', '-', '×']
    const operation = operations[Math.floor(Math.random() * operations.length)]
    
    let answer
    let question
    
    switch (operation) {
      case '+':
        answer = num1 + num2
        question = `${num1} + ${num2}`
        break
      case '-':
        const larger = Math.max(num1, num2)
        const smaller = Math.min(num1, num2)
        answer = larger - smaller
        question = `${larger} - ${smaller}`
        break
      case '×':
        answer = num1 * num2
        question = `${num1} × ${num2}`
        break
      default:
        answer = num1 + num2
        question = `${num1} + ${num2}`
    }
    
    setCaptcha({ question, answer: answer.toString() })
  }

  useEffect(() => {
    generateCaptcha()
  }, [])

  // Mock API call - replace with your actual API
  const mockSubscribeAPI = async (data) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate success (90% of the time) or failure
    if (Math.random() > 0.1) {
      return { success: true, message: 'Successfully subscribed!' }
    } else {
      throw new Error('Subscription service temporarily unavailable')
    }
  }

 const handleSubscribe = async (e) => {
   e.preventDefault();
 
   // Reset states
   setError('');
   setIsSubscribed(false);
 
   // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
 
   // Basic email checks
   if (!email.trim()) {
     setError('Please enter an email address');
     return;
   }
 
   if (!emailRegex.test(email.trim())) {
     setError('Please enter a valid email address');
     return;
   }
 
   // Captcha check
   if (captchaInput.trim() !== captcha.answer) {
     setError('Incorrect CAPTCHA. Please try again.');
     generateCaptcha(); // regenerate on failure
     return;
   }
 
   setIsLoading(true);
 
   try {
     const subscribeData = {
       email: email.trim(),
       timestamp: new Date().toISOString(),
       source: 'newsletter_form'
     };
 
     const response = await authAPI.postSubscribe(subscribeData);
 
     if (response && (response.success || response.status === 'success' || response.message)) {
       setIsSubscribed(true);
       setEmail('');
       setCaptchaInput('');
       generateCaptcha(); // regenerate on success
 
       // Reset subscription state after 3s
       setTimeout(() => {
         setIsSubscribed(false);
       }, 3000);
     } else {
       throw new Error('Subscription failed. Please try again.');
     }
 
   } catch (error) {
     console.error('Newsletter subscription error:', error);
 
     if (error.response?.data?.message) {
       setError(error.response.data.message);
     } else if (error.message) {
       setError(error.message);
     } else if (typeof error === 'string') {
       setError(error);
     } else {
       setError('Subscription failed. Please try again.');
     }
 
     generateCaptcha(); // regenerate on error
 
   } finally {
     setIsLoading(false);
   }
 };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Banner Background with Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dztmhmutv/image/upload/v1753094092/elegant-skin-care-banner-design_rdqcub.jpg')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0  "></div>
        
        {/* Overlay pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-lg mx-auto">
          {/* Newsletter Card */}
          <div className=" rounded-lg shadow-xl p-6 border border-white/30">
            {/* Header */}
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Newsletter
              </h2>
              <p className="text-xs text-gray-600">
                Get updates on new launches, offers & Ayurvedic tips.
              </p>
            </div>
            
            {/* Form */}
            <div className="space-y-3">
              {/* Single Row: Email + CAPTCHA + Button */}
              <div className="flex items-end gap-2">
                {/* Email Input */}
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-transparent placeholder-gray-500 transition-all duration-200"
                    required
                    disabled={isLoading}
                  />
                </div>
                
                {/* CAPTCHA Section */}
                <div className="flex-shrink-0">
                  <label className="block mb-1 text-xs text-white font-medium text-center">
                    {captcha.question} = ?
                  </label>
                  <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    placeholder="Answer"
                    disabled={isLoading}
                    className="w-16 px-2 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 transition-all duration-200 text-center"
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubscribe}
                  disabled={isLoading || isSubscribed}
                  className={`
                    flex-shrink-0 px-4 py-2
                    bg-[#82a133] hover:bg-[#82a133] text-white font-semibold 
                    rounded text-sm
                    transition-all duration-200 transform hover:scale-[1.02]
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                    shadow-md hover:shadow-lg
                    ${isSubscribed ? 'bg-green-500 hover:bg-green-500' : ''}
                  `}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  ) : isSubscribed ? (
                    <span className="flex items-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
            </div>
            
            {/* Success Message */}
            {isSubscribed && (
              <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded">
                <p className="text-xs text-green-700 text-center">
                  Thank you for subscribing!
                </p>
              </div>
            )}
            
            {/* Error Message */}
            {error && (
              <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded">
                <p className="text-xs text-red-700 text-center">
                  {error}
                </p>
              </div>
            )}
          </div>
          
          {/* Additional Info */}
          {/* <div className="text-center mt-3">
            <p className="text-xs text-white/90">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}