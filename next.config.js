/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['play-lh.googleusercontent.com', 'lh3.googleusercontent.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig