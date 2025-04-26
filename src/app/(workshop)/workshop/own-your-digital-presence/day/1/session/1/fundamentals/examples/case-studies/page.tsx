import { Metadata } from 'next'
import CaseStudiesClient from '@/components/workshop/CaseStudiesClient'

export const metadata: Metadata = {
  title: 'Case Studies Example | Digital Presence Workshop',
  description: 'Example of case studies to showcase your project success stories.'
}

export default function CaseStudiesExamplePage() {
  return <CaseStudiesClient />
} 