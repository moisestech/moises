'use client';

import Link from 'next/link';
import {
  getWorkshopBySlug,
  relatedWorkshops,
  type WorkshopCatalogEntry,
} from '@/content/workshops/catalog';
import {
  INSTITUTIONAL_CALENDLY_URL,
  INSTITUTIONAL_EMAIL,
} from '@/content/institutions/shared';
import {
  InstContainer,
  InstFamilyNav,
  InstPageShell,
  InstPrimaryCta,
  InstSecondaryCta,
  InstSectionLabel,
} from '@/components/institutions/InstitutionalUi';
import { track } from '@/lib/analytics';

export function WorkshopCatalogLandingClient({ slug }: { slug: string }) {
  const workshop = getWorkshopBySlug(slug);
  if (!workshop) {
    return (
      <InstPageShell>
        <InstContainer className="py-24">
          <p className="text-neutral-600">Workshop not found.</p>
          <Link href="/workshops#catalog" className="mt-4 inline-block underline">
            Back to catalog
          </Link>
        </InstContainer>
      </InstPageShell>
    );
  }

  const related = relatedWorkshops(slug);
  const mailHref = `mailto:${INSTITUTIONAL_EMAIL}?subject=${encodeURIComponent(
    `Workshop inquiry — ${workshop.publicTitle}`,
  )}`;

  return (
    <InstPageShell>
      <InstFamilyNav active="workshops" className="sticky top-0 z-40" />

      <header className="border-b border-neutral-200 bg-[#f7f6f3]">
        <InstContainer className="py-12 sm:py-16">
          <InstSectionLabel>Workshop · {workshop.track}</InstSectionLabel>
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-3">
            {workshop.level} · {workshop.duration} · Ready
          </p>
          <h1 className="font-['MoMA_Sans'] text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 max-w-3xl">
            {workshop.publicTitle}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-700 max-w-2xl leading-relaxed">
            {workshop.hook}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <InstPrimaryCta
              href={INSTITUTIONAL_CALENDLY_URL}
              label="Book a session"
              external
              onClick={() =>
                track('workshop_landing_inquire', { slug: workshop.slug, kind: 'calendly' })
              }
            />
            <InstSecondaryCta href={mailHref} label="Email Moises" />
            <InstSecondaryCta href="/workshops#catalog" label="Full catalog" />
          </div>
        </InstContainer>
      </header>

      <section className="border-b border-neutral-200 bg-white">
        <InstContainer className="py-12 sm:py-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <InstSectionLabel>Overview</InstSectionLabel>
              <p className="text-neutral-800 leading-relaxed">{workshop.shortDescription}</p>
            </div>
            {workshop.whyNow ? (
              <div>
                <InstSectionLabel>Why now</InstSectionLabel>
                <p className="text-neutral-800 leading-relaxed">{workshop.whyNow}</p>
              </div>
            ) : null}
            {workshop.learningOutcomes.length > 0 ? (
              <div>
                <InstSectionLabel>Learning outcomes</InstSectionLabel>
                <ul className="space-y-2">
                  {workshop.learningOutcomes.map((o) => (
                    <li key={o} className="flex gap-2 text-neutral-800 text-sm sm:text-base">
                      <span className="text-neutral-400 mt-1.5">·</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <aside className="lg:col-span-5 space-y-6">
            <div className="border border-neutral-200 bg-[#f7f6f3] p-5 sm:p-6">
              <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-2">
                Subtitle
              </p>
              <p className="text-neutral-900 leading-relaxed">{workshop.subtitle}</p>
              <p className="mt-4 text-sm text-neutral-600">
                Developed from Digital Lab teaching practice at Oolite Arts. Offered independently
                for artists, residencies, and institutional partners.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Link
                  href="/oolite-arts#classes"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  Digilab class archive →
                </Link>
                <Link
                  href="/artist-infrastructure"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  Creative infrastructure overview →
                </Link>
              </div>
            </div>
          </aside>
        </InstContainer>
      </section>

      {related.length > 0 ? (
        <section className="bg-[#f7f6f3]">
          <InstContainer className="py-12 sm:py-16">
            <InstSectionLabel>Related · {workshop.track}</InstSectionLabel>
            <h2 className="font-['MoMA_Sans'] text-2xl font-bold mb-6">Continue in this track</h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {related.map((w) => (
                <RelatedCard key={w.slug} workshop={w} />
              ))}
            </ul>
          </InstContainer>
        </section>
      ) : null}
    </InstPageShell>
  );
}

function RelatedCard({ workshop }: { workshop: WorkshopCatalogEntry }) {
  return (
    <li className="border border-neutral-200 bg-white p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500 mb-2">
        {workshop.duration}
      </p>
      <h3 className="font-['MoMA_Sans'] text-lg font-bold leading-snug mb-2">
        {workshop.publicTitle}
      </h3>
      <p className="text-sm text-neutral-600 line-clamp-3 mb-3">{workshop.hook}</p>
      <Link
        href={workshop.href}
        className="text-sm font-medium underline underline-offset-4"
        onClick={() => track('workshop_landing_related', { slug: workshop.slug })}
      >
        Open →
      </Link>
    </li>
  );
}
