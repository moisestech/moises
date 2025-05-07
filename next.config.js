/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase static page generation timeout
  staticPageGenerationTimeout: 120,
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      'example.com',
      'res.cloudinary.com',
      'www.augustoesquivel.com',
      'shawnamoulton.com',
      'www.moreldoucet.com',
      'moniquelazard.com',
      'monicalopezdevictoria.com',
      'christine-cortes.com',
      'mateoseza.art',
      'wooslerdelisfort.com',
      'www.pedrowazzan.com',
      'www.dianaespin.com',
      'www.maipdesigns.com',
      'www.christinapettersson.com'
    ],
    unoptimized: true,
  },

  // Optimize build
  swcMinify: true,
  
  // Configure webpack for better performance
  webpack: (config, { dev, isServer }) => {
    // Optimize Three.js bundle
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.three = {
        test: /[\\/]node_modules[\\/]three[\\/]/,
        name: 'three',
        priority: 10,
        chunks: 'all',
      }
    }
    return config
  },

  // Configure experimental features
  experimental: {
    // Optimize server components
    serverComponents: true,
    // Optimize concurrent features
    concurrentFeatures: true,
  },
};

module.exports = nextConfig;
