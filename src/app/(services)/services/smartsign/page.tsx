import { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Use dynamic import to load the client component
const SmartSignClient = dynamic(() => import('@/components/page/SmartSignClient'), {
  ssr: false // Disable server-side rendering
})

export const metadata: Metadata = {
  title: 'SmartSign: Digital Signage Workshop | Moises Sanabria',
  description: 'Transform any screen into a powerful, versatile digital sign optimized for galleries, nonprofits, and event spaces.',
}

export default function SmartSignPage() {
  return <SmartSignClient />
} 