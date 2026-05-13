import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { listActiveOpportunities } from '@/content/opportunities/registry';

const title = 'Opportunities | Moises Sanabria';
const description =
  'Role-specific technical briefs — GenAI engineering, Knight Journalism technology strategy, product dossiers, and related recruiting pages.';

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
          the conversation. Knight dossier: same content at{' '}
          <Link href="/technology-product-strategy" className="font-medium text-cyan-800 underline-offset-2 hover:underline">
            /technology-product-strategy
          </Link>{' '}
          and under opportunities below.
        </p>
        <ul className="mt-10 space-y-4">
          {items.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/opportunities/${o.slug}`}
                className="block overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:border-stone-300 hover:shadow"
              >
                {o.applicationBanner?.src ? (
                  <div className="relative aspect-[21/9] w-full border-b border-stone-200 bg-stone-200">
                    <Image
                      src={o.applicationBanner.src}
                      alt={o.applicationBanner.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 42rem"
                      priority={o.slug === 'knight-journalism-tech-product-strategist'}
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                    {o.company ?? 'Open role'}
                  </p>
                  <h2 className="mt-1 font-['MoMA_Sans'] text-xl font-bold text-stone-950">{o.hero.headline}</h2>
                  <p className="mt-1 text-sm text-stone-600">{o.hero.subheadline}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
