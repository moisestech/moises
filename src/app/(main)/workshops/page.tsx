import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Workshops | Moises Sanabria',
  description:
    'Workshops and live sessions on art, technology, AI literacy, and public teaching — Moises Sanabria, Miami.',
}

export default function WorkshopsIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-4">Workshops</p>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
        Workshops &amp; live programs
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
        Index of public workshops and session formats. For the full program hub (automation, partnerships, and course
        listings), start from the main workshop page.
      </p>
      <ul className="space-y-6 border-t border-gray-200 dark:border-gray-800 pt-10">
        <li>
          <Link
            href="/workshop/learn-ai-without-losing-yourself"
            className="group block text-xl font-medium text-gray-900 dark:text-white hover:underline underline-offset-4"
          >
            Learn AI Without Losing Yourself
            <span className="block text-sm font-normal text-gray-500 mt-1 group-hover:no-underline">
              Live workshop-performance · practical AI, burnout culture, staying human in the loop
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/workshop"
            className="text-lg text-gray-700 dark:text-gray-300 underline underline-offset-4 hover:no-underline"
          >
            Workshop hub — all programs &amp; formats →
          </Link>
        </li>
      </ul>
    </div>
  )
}
