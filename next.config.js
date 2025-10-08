/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Dot-Energia' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Dot-Energia' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
