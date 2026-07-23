import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { listActiveOpportunities } from '@/content/opportunities/registry';
import { opp } from '@/components/opportunities/opportunityTheme';

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
    <div className={opp.shell}>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <p className={opp.accent}>Recruiting</p>
        <h1 className={`mt-2 ${opp.h1}`}>Opportunities</h1>
        <p className={`mt-3 ${opp.muted}`}>
          Curated, role-specific pages — not linked from the main exhibition navigation. Share the URL that
          matches the conversation. Knight dossier: same content at{' '}
          <Link href="/technology-product-strategy" className={opp.linkAccent}>
            /technology-product-strategy
          </Link>{' '}
          and under opportunities below.
        </p>
        <p className={`mt-4 ${opp.subtle}`}>
          {items.length} active dossiers · sorted A–Z by company
        </p>
        <ul className="mt-8 space-y-4">
          {items.map((o) => {
            const titleLine = o.roleTitle ?? o.hero.headline;
            const subtitle = o.roleTitle ? o.hero.subheadline : o.hero.subheadline;
            return (
              <li key={o.slug}>
                <Link href={`/opportunities/${o.slug}`} className={opp.indexCard}>
                  {o.applicationBanner?.src ? (
                    <div className={opp.indexBanner}>
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
                    <p className={opp.label}>{o.company ?? 'Open role'}</p>
                    <h2 className={`mt-1 ${opp.h2} text-xl`}>{titleLine}</h2>
                    {subtitle ? <p className={`mt-1 ${opp.muted}`}>{subtitle}</p> : null}
                    <p className={`mt-2 font-mono text-[11px] text-stone-400 dark:text-stone-500`}>
                      /opportunities/{o.slug}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
