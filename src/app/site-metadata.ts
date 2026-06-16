import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Tech Nonprofit',
  description: 'Empowering nonprofits with technology solutions',
  metadataBase: new URL('https://moises.tech'),
  keywords:
    'artificial intelligence artist, ai art, ai generated art, art artificial intelligence, ai artist, contemporary art, machine learning art, art gans, meme art, creative ai, creative technology, ai artist',
  alternates: {
    types: {
      'application/rss+xml': 'https://moises.tech/rss.xml',
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: '/apple-icon-57x57.png',
        sizes: '57x57',
        type: 'image/png',
      },
      {
        url: '/apple-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png',
      },
    ],
  },
};
