/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },
  eslint: {
    // Disabling eslint during build if necessary (optional)
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
