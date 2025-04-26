import { Metadata } from 'next'
import PortfoliosClient from '@/components/workshop/PortfoliosClient'

export const metadata: Metadata = {
  title: 'Portfolio Templates Example | Digital Presence Workshop',
  description: 'Example collection of portfolio templates for your digital presence.'
}

export default function PortfoliosExamplePage() {
  return <PortfoliosClient />
} 