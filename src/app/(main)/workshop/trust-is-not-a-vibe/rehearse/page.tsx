import type { Metadata } from 'next'
import { TrustRehearseClient } from '@/components/workshop/trust-is-not-a-vibe/TrustRehearseClient'
import { TRUST_TITLE } from '@/content/workshops/trust-is-not-a-vibe'

export const metadata: Metadata = {
  title: `Presenter cue sheet — ${TRUST_TITLE}`,
  description: `Private rehearsal view: 30-minute clock and speaker notes for ${TRUST_TITLE}. Not indexed for search.`,
  robots: { index: false, follow: false },
}

export default function TrustRehearsePage() {
  return <TrustRehearseClient />
}
