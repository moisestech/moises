
import { Metadata } from 'next'
import Day1Session1FundamentalsMobile from '@/components/workshop/Day1Session1FundamentalsMobile'

export const metadata: Metadata = {
  title: 'Mobile Optimization | Digital Presence Workshop',
  description: 'Learn how to create a responsive and mobile-friendly website that works well on all devices.',
}

export default function MobileFoundationsPage() {
  return <Day1Session1FundamentalsMobile />
}
