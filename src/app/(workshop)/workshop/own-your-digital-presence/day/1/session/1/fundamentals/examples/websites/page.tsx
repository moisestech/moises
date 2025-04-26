import { Metadata } from 'next'
import WebsitesClient from '@/components/workshop/WebsitesClient'

export const metadata: Metadata = {
  title: 'Website Templates Example | Digital Presence Workshop',
  description: 'Example collection of website templates for your digital presence.'
}

export default function WebsitesExamplePage() {
  return <WebsitesClient />
} 