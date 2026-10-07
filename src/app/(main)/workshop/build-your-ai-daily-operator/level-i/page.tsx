import type { Metadata } from 'next'
import { LevelIToolkitClient } from '@/components/workshop/ai-daily-operator/LevelIToolkitClient'

const title = 'AI Daily Operator — Level I Participant Toolkit | Moises Sanabria'
const description =
  'Build a Founder Profile, Attention Rules, Daily Operator, and Daily Operating Brief in a 90-minute ChatGPT or Claude workshop.'

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
}

export default function AiDailyOperatorLevelIPage() {
  return <LevelIToolkitClient />
}
