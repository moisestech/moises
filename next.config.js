/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
};

module.exports = nextConfig;
