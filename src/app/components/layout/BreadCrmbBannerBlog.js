 import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

const BreadCrumbBannerBlog = ({ breadcrumbs = [], className = '' }) => {
  return (
    <div
      className={`w-full bg-gray-50 py-2 px-4 sm:px-6 lg:px-8 rounded-2xl border ${className}`}
    >
      <div className="max-w-7xl mx-auto min-h-[60px] flex items-center">
       <nav className="flex items-center text-xs sm:text-sm lg:text-base text-black flex-wrap gap-1">

          <Link href="/" className="flex items-center gap-1 hover:text-black">
            <Home className="w-4 h-4 text-black" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-black" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-black transition-colors duration-200 font-medium"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className={`${
                    index === breadcrumbs.length - 1
                      ? 'text-black '
                      : 'font-medium'
                  }`}
                >
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumbBannerBlog;
