import { redirect } from 'next/navigation'
import { TRUST_CHAPTERS, TRUST_LEARN_BASE } from '@/content/workshops/trust-is-not-a-vibe'

export default function TrustLearnIndexPage() {
  redirect(`${TRUST_LEARN_BASE}/${TRUST_CHAPTERS[0].slug}`)
}
