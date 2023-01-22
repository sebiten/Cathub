/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: 'cdn2.thedogapi.com',
    domains: 'api.thedogapi.com'

  },
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thedogapi.com',
        port: '',
        pathname: '/images/**',

      },
      {
        protocol: 'https',
        hostname: 'api.thedogapi.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}
