/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nutrihuaca-assets.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '**'
      }, 
      {
        protocol: 'https',
        hostname: 'www.unlockfood.ca',
        port: '',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
