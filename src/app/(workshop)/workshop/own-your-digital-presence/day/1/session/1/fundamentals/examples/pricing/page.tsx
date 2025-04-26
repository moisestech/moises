import { Metadata } from 'next'
import PricingClient from '@/components/workshop/PricingClient'

export const metadata: Metadata = {
  title: 'Pricing Example | Digital Presence Workshop',
  description: 'Example of a pricing page to present your service packages.'
}

export default function PricingExamplePage() {
  return <PricingClient />
} 