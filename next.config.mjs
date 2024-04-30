/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  module.exports = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  }
};

export default nextConfig;
