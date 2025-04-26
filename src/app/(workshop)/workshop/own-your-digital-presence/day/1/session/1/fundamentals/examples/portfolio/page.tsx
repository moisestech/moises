import { Metadata } from 'next'
import PortfolioClient from '@/components/workshop/PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio Example | Digital Presence Workshop',
  description: 'Example of a portfolio page to showcase your work effectively.'
}

export default function PortfolioExamplePage() {
  return <PortfolioClient />
} 