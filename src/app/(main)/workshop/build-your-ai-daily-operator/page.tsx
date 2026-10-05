import type { Metadata } from 'next'
import { ProgramClient } from '@/components/workshop/ai-daily-operator/ProgramClient'
import {
  DAILY_OPERATOR_HREF,
  DAILY_OPERATOR_PROMISE,
  DAILY_OPERATOR_STATUS,
  DAILY_OPERATOR_TITLE,
} from '@/content/workshops/ai-daily-operator/program'

const title = `${DAILY_OPERATOR_TITLE} | Moises Sanabria`
const description = `${DAILY_OPERATOR_PROMISE} ${DAILY_OPERATOR_STATUS}`
const url = `https://moises.tech${DAILY_OPERATOR_HREF}`

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description: DAILY_OPERATOR_PROMISE,
    type: 'website',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: DAILY_OPERATOR_PROMISE,
  },
  alternates: { canonical: url },
  robots: { index: true, follow: true },
}

export default function BuildYourAiDailyOperatorPage() {
  return <ProgramClient />
}
