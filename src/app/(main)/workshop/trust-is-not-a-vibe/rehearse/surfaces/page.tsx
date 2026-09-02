import type { Metadata } from 'next'
import { TrustSurfacesClient } from '@/components/workshop/trust-is-not-a-vibe/TrustSurfacesClient'
import { TRUST_SESSION_TITLE, TRUST_TITLE } from '@/content/workshops/trust-is-not-a-vibe'

export const metadata: Metadata = {
  title: `Surfaces — ${TRUST_SESSION_TITLE}`,
  description: `Five designed teaching surfaces for ${TRUST_TITLE}. Not indexed.`,
  robots: { index: false, follow: false },
}

export default function TrustSurfacesPage() {
  return <TrustSurfacesClient />
}
