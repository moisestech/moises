import type { Metadata } from 'next'
import { TrustLandingClient } from '@/components/workshop/trust-is-not-a-vibe/TrustLandingClient'
import { TRUST_SEO, TRUST_SUBTITLE, TRUST_TITLE } from '@/content/workshops/trust-is-not-a-vibe'

export const metadata: Metadata = {
  title: TRUST_SEO.title,
  description: TRUST_SEO.description,
  keywords: [...TRUST_SEO.keywords],
  openGraph: {
    title: `${TRUST_TITLE} | Moises Sanabria`,
    description: TRUST_SUBTITLE,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TRUST_TITLE} | Moises Sanabria`,
    description: TRUST_SUBTITLE,
  },
}

export default function TrustIsNotAVibePage() {
  return <TrustLandingClient />
}
