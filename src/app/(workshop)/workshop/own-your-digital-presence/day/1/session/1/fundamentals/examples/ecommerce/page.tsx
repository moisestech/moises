import { Metadata } from 'next'
import ECommerceClient from '@/components/workshop/ECommerceClient'

export const metadata: Metadata = {
  title: 'E-Commerce Example | Digital Presence Workshop',
  description: 'Example of an e-commerce page to sell your products online.'
}

export default function ECommerceExamplePage() {
  return <ECommerceClient />
} 