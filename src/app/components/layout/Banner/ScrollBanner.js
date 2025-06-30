'use client'
 import React, { useState } from 'react';
import Button from '../../ui/Button';

export default function ScrollBanner({
  backgroundImage,
  icon,
  title,
  description,
  buttonText = 'KNOW MORE',
}) {
  return (
    <div
      className="relative w-full h-[85vh] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white py-4 px-3 shadow-xl max-w-xs w-full text-center animate-float">
          {icon && (
            <img
              src={icon}
              alt="Icon"
              className="w-12 h-12 mx-auto mb-3"
            />
          )}

          <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>

          <p className="mb-4 text-gray-600 text-sm leading-relaxed">
            {description}
          </p>

          <Button className="px-3 py-1.5 rounded-full text-xs transition duration-300 transform hover:scale-105">
            {buttonText}
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
