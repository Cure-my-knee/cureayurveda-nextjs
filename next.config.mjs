// old code 
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// // on deployement to vercel this file need to be present
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export', // Ensures static HTML export
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

 /** @type {import('next').NextConfig} */
export default {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable specific ESLint rules during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add compatibility settings for stable build
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Ensure proper module resolution
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};





