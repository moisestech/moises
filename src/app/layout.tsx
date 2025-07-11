"use client"

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${spaceMono.variable} bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
