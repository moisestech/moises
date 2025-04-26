import { Metadata } from 'next'
import Day1Session1FundamentalsExamples from '@/components/workshop/Day1Session1FundamentalsExamples'

export const metadata: Metadata = {
  title: 'Example Components | Digital Presence Workshop',
  description: 'Explore a collection of pre-built components to help you build your digital presence.'
}

export default function ExamplesPage() {
  return <Day1Session1FundamentalsExamples />
} 