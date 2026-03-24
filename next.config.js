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
      {
        protocol: 'https',
        hostname: 'www.blind-magazine.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'spikeartmagazine.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.e-flux.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-eflux.b-cdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'apossible.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.spikeartmagazine.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'commons.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      'example.com',
      'ui-avatars.com',
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
  // swcMinify: true,
  
  // Configure webpack for better performance
  webpack: (config) => {
    // Initialize splitChunks if it doesn't exist
    if (!config.optimization.splitChunks) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {}
      }
    }

    // Initialize cacheGroups if it doesn't exist
    if (!config.optimization.splitChunks.cacheGroups) {
      config.optimization.splitChunks.cacheGroups = {}
    }

    // Add Three.js optimization
    config.optimization.splitChunks.cacheGroups.three = {
      test: /[\\/]node_modules[\\/]three[\\/]/,
      name: 'three',
      chunks: 'all',
      priority: 10,
    }

    return config
  },

  // Configure experimental features
  experimental: {
    // Remove invalid options
    optimizeCss: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
