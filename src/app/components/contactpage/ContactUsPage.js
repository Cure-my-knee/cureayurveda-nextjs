//  'use client'
// import { useState } from 'react';
// import Button from '../ui/Button';
// import Subtitle from '../ui/Subtitle';
// import { authAPI } from '@/lib/api/endpoints';
// import { toast } from 'react-toastify';
 

// export default function ContactUsPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear status when user starts typing
//     if (submitStatus) {
//       setSubmitStatus(null);
//     }
//   };

//   const handleSubmit = async () => {
//     // Basic validation
//     if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
//       toast.error('Please fill in all required fields.');
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       toast.error('Please enter a valid email address.');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       // Call the API
//       const response = await authAPI.postContact(formData);
      
//       // Success handling
//       setSubmitStatus('success');
//       console.log('Contact form submitted successfully:', response);
      
//       // Reset form
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: ''
//       });
      
//       // Show success message
//       toast.success('Thank you for your message! We\'ll get back to you soon.');
      
//     } catch (error) {
//       // Error handling
//       setSubmitStatus('error');
//       console.error('Contact form submission failed:', error);
      
//       // Show error message
//       const errorMessage = error.message || 'Something went wrong. Please try again.';
//       toast.error(`Error: ${errorMessage}`);
      
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <Subtitle>
//              For any queries you may have, you can let us know via this form and we'll be happy to help.
//           </Subtitle>
//         </div>

//         {/* Status Messages */}
//         {submitStatus === 'success' && (
//           <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
//             <p className="text-green-800 text-sm">
//               ✅ Your message has been sent successfully! We'll get back to you soon.
//             </p>
//           </div>
//         )}
        
//         {submitStatus === 'error' && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
//             <p className="text-red-800 text-sm">
//               ❌ There was an error sending your message. Please try again.
//             </p>
//           </div>
//         )}

//         {/* Contact Form */}
//         <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-10">
//           <div className="space-y-6">
//             {/* Name and Email Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your name *"
//                   disabled={isSubmitting}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Your email *"
//                   disabled={isSubmitting}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
//                 />
//               </div>
//             </div>

//             {/* Phone Field */}
//             <div>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Your phone (optional)"
//                 disabled={isSubmitting}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
//               />
//             </div>

//             {/* Subject Field */}
//             <div>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Subject *"
//                 disabled={isSubmitting}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
//               />
//             </div>

//             {/* Message Field */}
//             <div>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your message *"
//                 rows={6}
//                 disabled={isSubmitting}
//                 className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 resize-vertical min-h-[150px] disabled:bg-gray-50 disabled:cursor-not-allowed"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <Button 
//                 onClick={handleSubmit} 
//                 className="w-full text-center"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Subtitle from '../ui/Subtitle';
import { authAPI } from '@/lib/api/endpoints';
import { toast } from 'react-toastify';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [captcha, setCaptcha] = useState({ question: '', answer: '' });
  const [captchaInput, setCaptchaInput] = useState('');

  // Generate captcha question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({
      question: `What is ${num1} + ${num2}?`,
      answer: (num1 + num2).toString()
    });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    // Captcha validation
    if (captchaInput.trim() !== captcha.answer) {
      toast.error('Incorrect CAPTCHA. Please try again.');
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await authAPI.postContact(formData);

      setSubmitStatus('success');
      console.log('Contact form submitted successfully:', response);

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setCaptchaInput('');
      generateCaptcha();
      toast.success("Thank you for your message! We'll get back to you soon.");
    } catch (error) {
      setSubmitStatus('error');
      console.error('Contact form submission failed:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <Subtitle>
            For any queries you may have, you can let us know via this form and we'll be happy to help.
          </Subtitle>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 text-sm">
              ✅ Your message has been sent successfully! We'll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800 text-sm">
              ❌ There was an error sending your message. Please try again.
            </p>
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="space-y-4">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name *"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email *"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone (optional)"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Subject Field */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Message Field */}
            <div>
             <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message *"
              rows={3}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 resize-vertical min-h-[100px] disabled:bg-gray-50 disabled:cursor-not-allowed"
            />

            </div>

            {/* Captcha */}
            <div>
              <label className="block mb-2 text-sm text-gray-600">
                {captcha.question}
              </label>
              <input
                type="text"
                value={captchaInput}
                onChange={handleCaptchaChange}
                placeholder="Your answer *"
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                onClick={handleSubmit}
                className="w-full text-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
