/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = {
  eslint: {
    // Disabling eslint during build if necessary (optional)
    ignoreDuringBuilds: true,
  },
  output: 'export',
};