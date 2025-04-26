import { Metadata } from 'next'
import AboutClient from '@/components/workshop/AboutClient'

export const metadata: Metadata = {
  title: 'About Example | Digital Presence Workshop',
  description: 'Example of a compelling about page for your digital presence.'
}

export default function AboutExamplePage() {
  return <AboutClient />
} 