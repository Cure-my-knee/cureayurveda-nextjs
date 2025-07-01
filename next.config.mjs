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
const nextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;





