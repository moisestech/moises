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
const image =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1791490573/moisestech/workshops/build-your-ai-daily-operator/00-core/hero/operator-core.png'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description: DAILY_OPERATOR_PROMISE,
    type: 'website',
    url,
    images: [
      {
        url: image,
        width: 1536,
        height: 1024,
        alt: 'Founder Attention OS Operator Core',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: DAILY_OPERATOR_PROMISE,
    images: [image],
  },
  alternates: { canonical: url },
  robots: { index: true, follow: true },
}

export default function BuildYourAiDailyOperatorPage() {
  return <ProgramClient />
}
