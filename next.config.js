/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/fwos' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.GITHUB_ACTIONS ? '/fwos' : '',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
