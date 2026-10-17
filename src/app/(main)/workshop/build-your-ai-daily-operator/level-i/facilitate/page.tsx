import type { Metadata } from 'next'
import { LevelIPilotOpsClient } from '@/components/workshop/ai-daily-operator/LevelIPilotOpsClient'

export const metadata: Metadata = {
  title: 'Founder Attention OS — Level I Pilot Ops | Moises Sanabria',
  description: 'Internal facilitator preflight and cohort after-action capture for Build Your AI Daily Operator.',
  robots: { index: false, follow: false },
}

export default function FounderAttentionPilotOpsPage() {
  return <LevelIPilotOpsClient />
}
