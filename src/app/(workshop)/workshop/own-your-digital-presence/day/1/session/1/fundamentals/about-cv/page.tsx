import { Metadata } from 'next'
import Day1Session1FundamentalsAboutCV from '@/components/workshop/Day1Session1FundamentalsAboutCV'

export const metadata: Metadata = {
  title: 'About & CV | Digital Presence Workshop',
  description: 'Learn how to present your professional information effectively across different platforms.'
}

export default function AboutCVPage() {
  return <Day1Session1FundamentalsAboutCV />
} 