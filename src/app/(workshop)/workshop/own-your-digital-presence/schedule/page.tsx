import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamically import the client component
const WorkshopScheduleClient = dynamic(
  () => import('@/components/workshop/WorkshopScheduleClient'),
  { ssr: true }
)

export const metadata: Metadata = {
  title: 'Workshop Schedule | Digital Presence Workshop',
  description: 'View the complete schedule for the Digital Presence Workshop, including session details and topics covered.',
  metadataBase: new URL('https://moises.ai'),
}

export default function SchedulePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkshopScheduleClient />
    </Suspense>
  )
} 