import { Metadata } from 'next'
import OoliteImpactROIClientPage from './OoliteImpactROIClientPage'

export const metadata: Metadata = {
  title: 'Impact & ROI - Oolite Digital Arts Lab',
  description: 'Comprehensive impact analysis and return on investment metrics for the Digital Arts Lab. Track community impact, economic benefits, and sustainability measures.',
  keywords: ['impact', 'roi', 'metrics', 'community impact', 'economic benefits', 'sustainability', 'oolite', 'miami'],
}

export default function OoliteImpactROIPage() {
  return <OoliteImpactROIClientPage />
} 