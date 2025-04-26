'use client';

import { ThemeProvider } from '@/contexts/ThemeContext'

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
} 