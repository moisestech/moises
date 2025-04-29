import { Metadata } from 'next'
import Day1Session1FundamentalsExamples from '@/components/workshop/Day1Session1FundamentalsExamples'

export const metadata: Metadata = {
  title: 'Examples | Digital Presence Workshop',
  description: 'Explore examples of effective digital presence strategies and implementations.'
}

export default function ExamplesPage() {
  return <Day1Session1FundamentalsExamples />
} 