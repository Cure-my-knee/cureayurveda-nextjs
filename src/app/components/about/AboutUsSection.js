import React from 'react';
import { CheckCircle, Heart, Target } from 'lucide-react';
import Title from '../ui/Title';

const AboutUsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About  Us
            </h2> */}
            <Title className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-left">
            About Us
          </Title>

            <p className="text-lg text-gray-600 leading-relaxed">
              We are a passionate team of innovators, creators, and problem-solvers dedicated to delivering 
              exceptional solutions that make a real difference in people's lives. Our journey began with a 
              simple belief: that great products come from understanding our customers' needs and exceeding 
              their expectations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of combined experience and a commitment to excellence, we've built a reputation 
              for quality, reliability, and innovation. Every project we undertake is an opportunity to 
              demonstrate our values and create lasting relationships with our clients.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600 text-sm">Skilled professionals with proven expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Customer First</h4>
                  <p className="text-gray-600 text-sm">Your success is our primary focus</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-gradient-to-br rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div
                    className="h-full bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: "url('https://www.wholeleaf.in/cdn/shop/files/our_mission_1500x.jpg?v=1623912662')" }}
                >
                    
                </div>
                </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;