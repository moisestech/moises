import { Metadata } from 'next'
import ServicesClient from '@/components/workshop/ServicesClient'

export const metadata: Metadata = {
  title: 'Services Example | Digital Presence Workshop',
  description: 'Example of a services page to showcase your offerings.'
}

export default function ServicesExamplePage() {
  return <ServicesClient />
} 