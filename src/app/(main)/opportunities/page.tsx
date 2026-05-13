import type { Metadata } from 'next';
import Link from 'next/link';
import { listActiveOpportunities } from '@/content/opportunities/registry';

const title = 'Opportunities | Moises Sanabria';
const description =
  'Role-specific technical briefs — GenAI engineering, product strategy, and related recruiting dossiers.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: 'website' },
};

export default function OpportunitiesIndexPage() {
  const items = listActiveOpportunities();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-['MoMA_Sans']">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-800">Recruiting</p>
        <h1 className="mt-2 font-['MoMA_Sans'] text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">
          Opportunities
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Curated, role-specific pages — not linked from the main exhibition navigation. Share the URL that matches
          the conversation.
        </p>
        <ul className="mt-10 space-y-4">
          {items.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/opportunities/${o.slug}`}
                className="block rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-stone-300 hover:shadow"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                  {o.company ?? 'Open role'}
                </p>
                <h2 className="mt-1 font-['MoMA_Sans'] text-xl font-bold text-stone-950">{o.hero.headline}</h2>
                <p className="mt-1 text-sm text-stone-600">{o.hero.subheadline}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
