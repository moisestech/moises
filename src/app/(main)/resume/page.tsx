import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ResumeClient = dynamic(() => import('@/components/resume/ResumeClient'), {
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
  title: 'Moises Sanabria | Full Stack Web AI Engineer',
  description: 'Full Stack Web AI Engineer with 12+ years of experience in JavaScript, React, Next.js, and AI technologies. Specializing in building innovative web applications and AI-powered solutions.',
  openGraph: {
    title: 'Moises Sanabria | Full Stack Web AI Engineer',
    description: 'Full Stack Web AI Engineer with 12+ years of experience in JavaScript, React, Next.js, and AI technologies. Specializing in building innovative web applications and AI-powered solutions.',
    url: 'https://moises.tech/resume',
    siteName: 'Moises Sanabria',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641802/DMINTI/dminti-may20-838-franklepkowski_cyemnj.png',
        width: 1200,
        height: 630,
        alt: 'Moises Sanabria - Full Stack Web AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moises Sanabria | Full Stack Web AI Engineer',
    description: 'Full Stack Web AI Engineer with 12+ years of experience in JavaScript, React, Next.js, and AI technologies. Specializing in building innovative web applications and AI-powered solutions.',
    images: ['https://res.cloudinary.com/dck5rzi4h/image/upload/v1746641802/DMINTI/dminti-may20-838-franklepkowski_cyemnj.png'],
    creator: '@moisestech',
  },
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="pt-[200px]">
        <Suspense fallback={
          <div className="flex min-h-screen items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4D9DE0]/20 via-[#E041B5]/20 to-[#41E079]/20 blur-2xl rounded-2xl animate-pulse" />
              <div className="relative px-8 py-4 text-sm">Loading...</div>
            </div>
          </div>
        }>
          <ResumeClient />
        </Suspense>
      </div>
    </div>
  )
}
