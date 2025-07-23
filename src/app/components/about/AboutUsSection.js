import React from 'react';
import { CheckCircle, Heart, Target } from 'lucide-react';
import Title from '../ui/Title';

const AboutUsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#EDF1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              About  Us
            </h2> */}
            <Title className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-left">
            About Us
          </Title>

            <p className="text-lg text-gray-600 text-justify leading-relaxed">
              At Cure Ayurvedic, we believe in the philosophy of ‘Care Before Cure’. Since its inception in 2020 in the healthcare services, we have dedicated ourselves towards understanding individual needs and providing effective care through our services earning the trust of many along the way. Now, our ayurvedic journey began with a simple vision, to bring natural, effective and safe healthcare solutions to every household.
            </p>
            <p className="text-lg text-gray-600 text-justify leading-relaxed">
             Rooted in tradition and backed by modern practices, we offer a range of herbal and ayurvedic products that are carefully formulated to support holistic health. Each of our formulations is made from pure, authentic ingredients ensuring that you receive nature’s healing touch with every dose with no side effects and chemical free.
             Over the years, we've earned the trust of thousands by focusing not just on curing illness, but on caring for overall well-being. At Cure Ayurvedic, your health is our priority, and we are here to walk with you on your journey to a good living.

            </p>
            
          </div>
          <div className="relative">
             <div className="aspect-square bg-gradient-to-br rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div
                    className="h-full bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/035/978/179/non_2x/ai-generated-indian-ayurveda-herbal-medicine-free-photo.jpg')" }}
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