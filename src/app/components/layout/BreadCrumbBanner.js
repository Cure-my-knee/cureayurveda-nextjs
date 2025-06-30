 
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const BreadCrumbBanner = ({
   title = "Shop Now",
   breadcrumbs = [],
   backgroundImage = "https://www.wholeleaf.in/cdn/shop/files/jft_bg_1600x.png?v=1626068759",
   className = "",
   height = "h-96 md:h-[28rem] lg:h-[42rem]"
}) => {
  return (
    <div className={`relative w-full ${height} flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br ">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-y-12 scale-150"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-transparent via-white/10 to-transparent transform -skew-y-12 scale-150"></div>
        </div>
                
        {/* Custom Background Image */}
        {backgroundImage && (
          <img 
            src={backgroundImage}
            alt="Banner background"
            className="absolute inset-0 w-full h-full object-cover "
          />
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 tracking-wider">
          {title}
        </h1>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-600">
            <Home className="w-4 h-4 md:w-5 md:h-5" />
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="hover:text-gray-800 transition-colors duration-200 font-medium"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className={`${index === breadcrumbs.length - 1 ? 'text-gray-800 font-semibold' : 'font-medium'}`}>
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-6 right-6 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/15 rounded-full blur-lg"></div>
    </div>
  );
};


export default BreadCrumbBanner;