import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import LearnAiRehearsePageClient from '@/components/page/LearnAiRehearsePageClient'

const title = 'Presenter cue sheet — Learn AI Without Losing Yourself'
const description =
  'Private rehearsal view: slide-by-slide cue sheet for Learn AI Without Losing Yourself. Not indexed for search.'

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: 'website',
  },
}

const PRINTABLE_REL_PATH = 'content/workshop/learn-ai-without-losing-yourself-printable-rehearsal.md'

function loadPrintableMarkdown(): string {
  const abs = path.join(process.cwd(), PRINTABLE_REL_PATH)
  try {
    return fs.readFileSync(abs, 'utf8')
  } catch (e) {
    console.warn('[LearnAiRehearsePage] Missing printable rehearsal markdown:', abs, e)
    return ''
  }
}

export default function LearnAiRehearsePage() {
  const printableMarkdown = loadPrintableMarkdown()
  return <LearnAiRehearsePageClient printableMarkdown={printableMarkdown} />
}
