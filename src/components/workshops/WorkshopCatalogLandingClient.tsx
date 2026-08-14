'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardCheck,
  Clock,
  FolderTree,
  MapPinned,
  Package,
  Receipt,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import {
  getWorkshopBySlug,
  relatedWorkshops,
  type WorkshopCatalogEntry,
} from '@/content/workshops/catalog';
import { getWorkshopCover } from '@/content/workshops/catalog-covers';
import {
  QUICKBOOKS_AUTOMATION_AGENDA,
  QUICKBOOKS_AUTOMATION_AUDIENCE,
  QUICKBOOKS_AUTOMATION_BANNER,
  QUICKBOOKS_AUTOMATION_DELIVERABLES,
  QUICKBOOKS_AUTOMATION_FORMATS,
  QUICKBOOKS_AUTOMATION_SLIDES,
} from '@/content/workshops/quickbooksAutomation';
import {
  INSTITUTIONAL_CALENDLY_URL,
  INSTITUTIONAL_EMAIL,
} from '@/content/institutions/shared';
import {
  INST_ACCENT,
  InstContainer,
  InstFamilyNav,
  InstPageShell,
  InstPrimaryCta,
  InstReveal,
  InstSecondaryCta,
  InstSectionLabel,
} from '@/components/institutions/InstitutionalUi';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

const WORKSHOP_LANDING_MEDIA: Record<
  string,
  readonly { src: string; alt: string; caption?: string }[]
> = {
  'quickbooks-automation-for-artists': QUICKBOOKS_AUTOMATION_SLIDES,
};

const QUICKBOOKS_AGENDA_ICONS: LucideIcon[] = [
  MapPinned,
  FolderTree,
  Workflow,
  ClipboardCheck,
];

const STUDIO_FLOW = ['Invoice', 'Category', 'Review', 'Archive'] as const;

const paperPattern =
  'bg-[#f7f6f3] bg-[radial-gradient(circle_at_1px_1px,rgb(28_25_23_/_0.06)_1px,transparent_0)] bg-[size:18px_18px]';

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
  const media = WORKSHOP_LANDING_MEDIA[slug] ?? [];
  const isQuickBooks = slug === 'quickbooks-automation-for-artists';
  const cover = getWorkshopCover(slug);
  const mailHref = `mailto:${INSTITUTIONAL_EMAIL}?subject=${encodeURIComponent(
    `Workshop inquiry — ${workshop.publicTitle}`,
  )}`;

  return (
    <InstPageShell className="pt-[192px]">
      <InstFamilyNav active="workshops" className="sticky top-0 z-40" />

      {isQuickBooks ? (
        <div className="relative w-full overflow-hidden border-b border-neutral-200 bg-[#1c1916]">
          <div className="relative h-[min(calc(100vw/3),420px)] w-full">
            <Image
              src={QUICKBOOKS_AUTOMATION_BANNER.src}
              alt={QUICKBOOKS_AUTOMATION_BANNER.alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>
      ) : cover ? (
        <div className="relative w-full overflow-hidden border-b border-neutral-200 bg-neutral-900">
          <div className="relative mx-auto aspect-[21/9] max-h-[240px] w-full sm:max-h-[300px] lg:max-h-[340px]">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </div>
      ) : null}

      <header
        className={cn(
          'border-b border-neutral-200',
          isQuickBooks
            ? cn(paperPattern, 'bg-gradient-to-br from-amber-50/90 via-[#f7f6f3] to-stone-100')
            : 'bg-[#f7f6f3]',
        )}
      >
        <InstContainer className="py-12 sm:py-16">
          <InstSectionLabel accent={isQuickBooks ? 'copper' : 'ink'}>
            Workshop · {workshop.track}
          </InstSectionLabel>
          {isQuickBooks ? (
            <div className="mb-4 inline-flex items-center gap-2">
              <span className={cn('inline-flex h-8 w-8 items-center justify-center', INST_ACCENT.copper.iconBg)}>
                <Receipt className="h-4 w-4" aria-hidden />
              </span>
              <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-amber-900/80">
                {workshop.level} · {workshop.duration} · Ready
              </p>
            </div>
          ) : (
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-3">
              {workshop.level} · {workshop.duration} · Ready
            </p>
          )}
          <h1 className="font-['MoMA_Sans'] text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 max-w-3xl">
            {workshop.publicTitle}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-700 max-w-2xl leading-relaxed">
            {workshop.hook}
          </p>
          {isQuickBooks ? (
            <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2" aria-label="Studio money workflow">
              {STUDIO_FLOW.map((step, i) => (
                <li key={step} className="inline-flex items-center gap-2">
                  <span className="border border-amber-200/80 bg-white/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-amber-950">
                    {step}
                  </span>
                  {i < STUDIO_FLOW.length - 1 ? (
                    <ArrowRight className="h-3.5 w-3.5 text-amber-700/70" aria-hidden />
                  ) : null}
                </li>
              ))}
            </ol>
          ) : null}
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
            <InstSecondaryCta href="/artist-infrastructure#curriculum" label="Artist infrastructure" />
            <InstSecondaryCta href="/workshops#catalog" label="Full catalog" />
          </div>
        </InstContainer>
      </header>

      {media.length > 0 ? (
        <section className="border-b border-neutral-200 bg-white">
          <InstContainer className="py-10 sm:py-12">
            <InstSectionLabel accent={isQuickBooks ? 'copper' : 'ink'}>
              Workshop materials
            </InstSectionLabel>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">
              Idea Center / studio-ops slides — human review gates, not accountant cosplay.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {media.map((shot, i) => (
                <InstReveal key={shot.src} delay={i * 0.06}>
                  <figure className="group overflow-hidden border border-neutral-200 bg-[#f7f6f3] transition hover:border-amber-400/50 hover:shadow-sm">
                    <div className="relative aspect-[16/10] bg-neutral-200">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 360px"
                      />
                    </div>
                    {shot.caption ? (
                      <figcaption className="px-3 py-2.5 text-xs leading-snug text-neutral-600">
                        {shot.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </InstReveal>
              ))}
            </div>
          </InstContainer>
        </section>
      ) : null}

      <section className="border-b border-neutral-200 bg-white">
        <InstContainer className="py-12 sm:py-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <InstSectionLabel accent={isQuickBooks ? 'copper' : 'ink'}>Overview</InstSectionLabel>
              <p className="text-neutral-800 leading-relaxed">{workshop.shortDescription}</p>
            </div>
            {workshop.whyNow ? (
              <div>
                <InstSectionLabel accent={isQuickBooks ? 'copper' : 'ink'}>Why now</InstSectionLabel>
                <p className="text-neutral-800 leading-relaxed">{workshop.whyNow}</p>
              </div>
            ) : null}
            {workshop.learningOutcomes.length > 0 ? (
              <div>
                <InstSectionLabel accent={isQuickBooks ? 'copper' : 'ink'}>
                  Learning outcomes
                </InstSectionLabel>
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
            {media[0] && !isQuickBooks ? (
              <div className="relative aspect-[16/10] overflow-hidden border border-neutral-200 bg-neutral-200">
                <Image
                  src={media[0].src}
                  alt={media[0].alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            ) : null}
            <div
              className={cn(
                'border p-5 sm:p-6',
                isQuickBooks
                  ? 'border-amber-200/70 bg-gradient-to-br from-amber-50/80 to-[#f7f6f3]'
                  : 'border-neutral-200 bg-[#f7f6f3]',
              )}
            >
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

      {isQuickBooks ? (
        <>
          <section className={cn('border-b border-neutral-200', paperPattern)}>
            <InstContainer className="py-12 sm:py-16">
              <InstSectionLabel accent="copper">Session agenda</InstSectionLabel>
              <h2 className="font-['MoMA_Sans'] text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 mt-2 mb-8">
                What we cover
              </h2>
              <ol className="grid gap-4 sm:grid-cols-2">
                {QUICKBOOKS_AUTOMATION_AGENDA.map((step, i) => {
                  const Icon = QUICKBOOKS_AGENDA_ICONS[i] ?? Workflow;
                  return (
                    <li key={step.title}>
                      <InstReveal delay={i * 0.07}>
                        <div className="group h-full border border-neutral-200 bg-white p-5 sm:p-6 transition hover:-translate-y-0.5 hover:border-amber-400/55 hover:shadow-sm">
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <span
                              className={cn(
                                'inline-flex h-9 w-9 items-center justify-center',
                                INST_ACCENT.copper.iconBg,
                              )}
                            >
                              <Icon className="h-4 w-4" aria-hidden />
                            </span>
                            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-amber-800/80">
                              {String(i + 1).padStart(2, '0')}
                            </p>
                          </div>
                          <h3 className="font-['MoMA_Sans'] text-lg font-bold leading-snug">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </InstReveal>
                    </li>
                  );
                })}
              </ol>
            </InstContainer>
          </section>

          <section className="border-b border-neutral-200 bg-white">
            <InstContainer className="py-12 sm:py-16 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <InstSectionLabel accent="copper">Who it&apos;s for</InstSectionLabel>
                <ul className="mt-4 space-y-3">
                  {QUICKBOOKS_AUTOMATION_AUDIENCE.map((item) => (
                    <li key={item} className="flex gap-3 text-neutral-800 text-sm sm:text-base">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-amber-800" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4">
                <InstSectionLabel accent="teal">Formats</InstSectionLabel>
                <ul className="mt-4 space-y-4">
                  {QUICKBOOKS_AUTOMATION_FORMATS.map((f) => (
                    <li key={f.label} className="flex gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-800" aria-hidden />
                      <div>
                        <p className="font-medium text-neutral-900">{f.label}</p>
                        <p className="text-sm text-neutral-600 mt-1">{f.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3">
                <InstSectionLabel accent="ocean">Leave with</InstSectionLabel>
                <ul className="mt-4 space-y-2">
                  {QUICKBOOKS_AUTOMATION_DELIVERABLES.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-neutral-800">
                      <Package className="mt-0.5 h-4 w-4 shrink-0 text-sky-800" aria-hidden />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </InstContainer>
          </section>

          <section
            className={cn(
              'border-b border-neutral-200 bg-gradient-to-br from-amber-50 via-[#f7f6f3] to-stone-100',
            )}
          >
            <InstContainer className="py-12 sm:py-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <InstSectionLabel accent="copper">Next step</InstSectionLabel>
                <h2 className="font-['MoMA_Sans'] text-2xl font-bold mt-2">
                  Book for a studio, residency, or Digilab cohort
                </h2>
                <p className="mt-3 text-neutral-600 leading-relaxed">
                  Part of the Creative Infrastructure curriculum — studio automation that artists
                  can keep running after the session ends.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <InstPrimaryCta
                  href={INSTITUTIONAL_CALENDLY_URL}
                  label="Book a session"
                  external
                  onClick={() =>
                    track('workshop_landing_inquire', {
                      slug: workshop.slug,
                      kind: 'calendly_footer',
                    })
                  }
                />
                <InstSecondaryCta href={mailHref} label="Email Moises" />
              </div>
            </InstContainer>
          </section>
        </>
      ) : null}

      {related.length > 0 ? (
        <section className="bg-white">
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
    <li className="border border-neutral-200 bg-[#f7f6f3] p-4 transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-sm">
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
