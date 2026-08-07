const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/workshop',
        destination: '/workshops',
        permanent: true,
      },
      {
        source: '/workshops/learn-ai-without-losing-yourself',
        destination: '/workshop/learn-ai-without-losing-yourself',
        permanent: true,
      },
      {
        source: '/workshops/learn-ai-without-losing-yourself/rehearse',
        destination: '/workshop/learn-ai-without-losing-yourself/rehearse',
        permanent: true,
      },
      {
        source: '/workshops/learn-ai-without-losing-yourself/curriculum',
        destination: '/workshop/learn-ai-without-losing-yourself/curriculum',
        permanent: true,
      },
      {
        source: '/technology-product-strategy/genai-innovation-lab',
        destination: '/opportunities/cvs-senior-genai-engineer',
        permanent: false,
      },
      {
        source: '/opportunities/cvs-genai-engineer',
        destination: '/opportunities/cvs-senior-genai-engineer',
        permanent: true,
      },
      {
        source: '/opportunities/senior-genai-engineer',
        destination: '/opportunities/cvs-senior-genai-engineer',
        permanent: true,
      },
      {
        source: '/opportunities/creative-tech-image-tools',
        destination: '/work/creative-tech-image-tools',
        permanent: false,
      },
      {
        source: '/opportunities/wolfsonian',
        destination: '/grant/wolfsonian-fellowship',
        permanent: false,
      },
      {
        source: '/grant/wolfsonian',
        destination: '/grant/wolfsonian-fellowship',
        permanent: false,
      },
      {
        source: '/grants/wolfsonian-fellowship',
        destination: '/grant/wolfsonian-fellowship',
        permanent: false,
      },
      {
        source: '/grant/ssrc-just-tech-2027',
        destination: '/grant/ssrc-just-tech-fellowship-2027',
        permanent: false,
      },
      {
        source: '/grants/four-artists-four-seasons',
        destination: '/grant/four-artists-four-seasons',
        permanent: false,
      },
      {
        source: '/cv/netflix',
        destination: '/opportunities/netflix-full-stack-engineer-ai-insights',
        permanent: false,
      },
      {
        source: '/cv/air-space',
        destination: '/opportunities/air-space-intelligence-full-stack-engineer',
        permanent: false,
      },
      {
        source: '/algora/air-space-intelligence',
        destination: '/opportunities/air-space-intelligence-full-stack-engineer',
        permanent: false,
      },
      {
        source: '/cv/technology',
        destination: '/cv/tech',
        permanent: true,
      },
      {
        source: '/cv/technology/print',
        destination: '/cv/tech/print',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/cv/tech',
        permanent: true,
      },
      {
        source: '/projects/born-into-the-machine/365-post-ai-readymades',
        destination: '/research/born-into-the-machine/365-post-ai-readymades',
        permanent: true,
      },
      {
        // Public archetype aliases — short send URLs for Airtable job clusters
        source: '/ai-engineer',
        destination: '/ai-engineering',
        permanent: false,
      },
      {
        source: '/forward-deployed-engineer',
        destination: '/opportunities/forward-deployed-ai-engineer',
        permanent: false,
      },
      {
        source: '/ai-solutions-architect',
        destination: '/opportunities/ai-solutions-architect',
        permanent: false,
      },
      {
        source: '/roles/ai-engineer',
        destination: '/ai-engineering',
        permanent: false,
      },
      {
        source: '/roles/forward-deployed-engineer',
        destination: '/opportunities/forward-deployed-ai-engineer',
        permanent: false,
      },
      {
        source: '/roles/forward-deployed-ai-engineer',
        destination: '/opportunities/forward-deployed-ai-engineer',
        permanent: false,
      },
      {
        source: '/roles/ai-solutions-architect',
        destination: '/opportunities/ai-solutions-architect',
        permanent: false,
      },
      {
        source: '/roles/comfy-mts-frontend',
        destination: '/opportunities/comfy-mts-frontend',
        permanent: false,
      },
      {
        source: '/roles/flora-founding-data-engineer',
        destination: '/opportunities/flora-founding-data-engineer',
        permanent: false,
      },
    ]
  },

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
        hostname: 'shop.spikeartmagazine.com',
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
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
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
    // three-render-objects imports three/webgpu; our three build does not export it
    config.resolve.alias['three/webgpu'] = path.join(__dirname, 'src/lib/empty-module.js');

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
