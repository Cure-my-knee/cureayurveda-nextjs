'use client'
import { useState } from 'react';
import Button from '../ui/Button';
import Subtitle from '../ui/Subtitle';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Subtitle>
             For any queries you may have, you can let us know via this form and we'll be happy to help.
          </Subtitle>
          {/* <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            For any queries you may have, you can let us know via this form and we'll be happy to help.
          </p> */}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400"
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
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Subject Field */}
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-colors duration-200 text-gray-700 placeholder-gray-400 resize-vertical min-h-[150px]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              {/* <button
                onClick={handleSubmit}
                className="w-full bg-green-400 hover:bg-green-500 text-white font-medium py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 uppercase tracking-wide text-sm"
              >
                SEND MESSAGE
              </button> */}
              <Button onClick={handleSubmit}  className="w-full text-center" >
                SEND MESSAGE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}