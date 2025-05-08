import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ThemeProvider = dynamic(() => import('@/contexts/ThemeContext').then(mod => mod.ThemeProvider), {
  ssr: false,
})

// Basic layout component without any heavy dependencies
const BasicLayout = dynamic(() => import('@/components/page/BasicLayout'), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
        <div className="relative px-8 py-4 text-sm">Loading...</div>
      </div>
    </div>
  )
})

export const metadata: Metadata = {
  title: 'DMINTI | Attendant Engagements No. 1',
  description: 'A culminating one-night-only digital art exhibition celebrating the creative impact of The Kaleidoscope (...Bigger) House by Laurie Simmons and Peter M. Wheelwright.',
  openGraph: {
    title: 'DMINTI | Attendant Engagements No. 1',
    description: 'A culminating one-night-only digital art exhibition celebrating the creative impact of The Kaleidoscope (...Bigger) House by Laurie Simmons and Peter M. Wheelwright.',
    url: 'https://dminti.art/events/dminti/attendant-engagements',
    siteName: 'DMINTI',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641802/DMINTI/dminti-may20-838-franklepkowski_cyemnj.png',
        width: 1200,
        height: 630,
        alt: 'DMINTI Attendant Engagements No. 1',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMINTI | Attendant Engagements No. 1',
    description: 'A culminating one-night-only digital art exhibition celebrating the creative impact of The Kaleidoscope (...Bigger) House by Laurie Simmons and Peter M. Wheelwright.',
    images: ['https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641802/DMINTI/dminti-may20-838-franklepkowski_cyemnj.png'],
    creator: '@dminti',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function AttendantEngagementsPage() {
  return (
    <ThemeProvider>
      <Suspense fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
            <div className="relative px-8 py-4 text-sm">Loading...</div>
          </div>
        </div>
      }>
        <BasicLayout />
      </Suspense>
    </ThemeProvider>
  )
} 