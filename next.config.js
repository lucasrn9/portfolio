/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['upload.wikimedia.org', 'repository-images.githubusercontent.com']
  }
}

module.exports = nextConfig
