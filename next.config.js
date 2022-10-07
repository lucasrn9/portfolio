/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx','api.ts'],
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['upload.wikimedia.org', 'repository-images.githubusercontent.com']
  }
}

module.exports = nextConfig
