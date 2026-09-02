import type { Metadata } from 'next'
import { TrustDecisionCard } from '@/components/workshop/trust-is-not-a-vibe/TrustDecisionCard'
import { TRUST_SESSION_TITLE } from '@/content/workshops/trust-is-not-a-vibe'

export const metadata: Metadata = {
  title: `Decision card — ${TRUST_SESSION_TITLE}`,
  description: 'Printable participant decision card. Not indexed.',
  robots: { index: false, follow: false },
}

export default function TrustDecisionCardPage() {
  return <TrustDecisionCard />
}
