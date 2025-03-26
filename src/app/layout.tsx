import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// STYLES
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

// COMPONENTS
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

const spaceMono = localFont({
  src: [
    {
      path: '../../public/fonts/space-mono-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/space-mono-bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-space-mono'
});

export const metadata: Metadata = {
  title: 'Moises Sanabria',
  description:
    'Moises Sanabria is an interdisciplinary artist exploring machine philosophy, memetics, and branding in social media life.',
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${spaceMono.variable} bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
