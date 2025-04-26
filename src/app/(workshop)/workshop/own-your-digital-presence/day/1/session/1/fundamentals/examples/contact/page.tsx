import { Metadata } from 'next'
import ContactClient from '@/components/workshop/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Example | Digital Presence Workshop',
  description: 'Example of a contact page to connect with your audience.'
}

export default function ContactExamplePage() {
  return <ContactClient />
} 