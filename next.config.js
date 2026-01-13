/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://instapreps.com/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;