'use client';
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function AdditionalInfo() {
  return (
    <section className="py-16 bg-[#EDF1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Whether you have a question about products, pricing,
              or anything else our team is ready to answer all your questions.
            </p>

            {/* <ul className="space-y-6 text-gray-700 mt-2">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#586e20]" />
                <span>A-41, FIEE Complex Okhla Phase-2, New Delhi 110020</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#586e20]" />
                <span>+91 8800023120</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#586e20]" />
                <span>Contact@cureayurvedic.com </span>
              </li>

               <li className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#586e20]" />
              <span>Business Hours: Monday to Saturday, 10:00 AM – 7:00 PM</span>
            </li>
            </ul> */}
            <ul className="space-y-6 text-gray-700 mt-2">
          {/* Address - open Google Maps */}
          <li className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#586e20]" />
            <a
              href="https://maps.app.goo.gl/v8TetLuTfFuxemZo7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#586e20] transition-colors"
            >
              A-41, FIEE Complex Okhla Phase-2, New Delhi 110020
            </a>
          </li>

          {/* Phone */}
          <li className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-[#586e20]" />
            <a href="tel:+918800023120" className="hover:text-[#586e20] transition-colors">
              +91 8800023120
            </a>
          </li>

          {/* Email */}
          <li className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#586e20]" />
            <a href="mailto:contact@cureayurvedic.com" className="hover:text-[#586e20] transition-colors">
              contact@cureayurvedic.com
            </a>
          </li>

          {/* Business Hours */}
          <li className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-[#586e20]" />
            <span>Business Hours: Monday to Saturday, 10:00 AM – 7:00 PM</span>
          </li>
        </ul>


          </div>

          {/* Map Container */}
          {/* Map Container */}
          <div>
             <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1895067821774!2d77.2697737!3d28.5340231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1786e9d024f%3A0xba37eebc2e69432f!2sCure%20Ayurvedic!5e0!3m2!1sen!2sin!4v1753943551162!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full border-0"
            ></iframe>

            
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
