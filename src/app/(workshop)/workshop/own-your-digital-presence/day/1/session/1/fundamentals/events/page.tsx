import { Metadata } from 'next'
import Day1Session1FundamentalsEvents from '@/components/workshop/Day1Session1FundamentalsEvents'

export const metadata: Metadata = {
  title: 'Events & Exhibitions | Digital Presence Workshop',
  description: 'Learn how to showcase your exhibitions and events effectively across different platforms.'
}

export default function EventsPage() {
  return <Day1Session1FundamentalsEvents />
} 