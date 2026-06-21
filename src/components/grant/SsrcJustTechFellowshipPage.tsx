'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { WorkImageCarousel } from '@/components/page/WorkImageCarousel';
import {
  ssrcApplicationMaterials,
  ssrcArchivePreview,
  ssrcContact,
  ssrcEngineChapters,
  ssrcHeroCtas,
  ssrcImages,
  ssrcInfrastructureCards,
  ssrcJustTechMeta,
  ssrcLaborAgency,
  ssrcLogoAssets,
  ssrcNavItems,
  ssrcOutcomes2027,
  ssrcPracticeEvidence,
  ssrcProjectOverview,
  ssrcPublicContribution,
  ssrcResearchQuestions,
  ssrcReviewerHook,
  ssrcSculpturalEnginesIntro,
  ssrcThesis,
  ssrcTimeline,
  ssrcVideoIntro,
  ssrcWhyNow,
  ssrcWorkSamples,
} from '@/content/grants/ssrc-just-tech-fellowship-2027';

const sectionScrollClass = 'scroll-mt-[10.5rem] sm:scroll-mt-36 md:scroll-mt-40';

const grantButtonClass =
  'inline-flex min-h-11 items-center justify-center border border-stone-800 px-4 py-2.5 text-sm font-medium text-stone-900 transition hover:bg-stone-900 hover:text-white dark:border-stone-200 dark:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-black';

const grantCardClass =
  'border border-stone-300 bg-white dark:border-stone-700 dark:bg-neutral-900';

const grantLinkClass =
  'font-medium text-stone-900 underline underline-offset-2 transition hover:opacity-80 dark:text-stone-100';

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={`${id}-heading`}
      className="border-b border-stone-300 pb-4 text-xl font-semibold text-stone-900 sm:text-2xl dark:border-stone-700 dark:text-stone-100"
    >
      {children}
    </h2>
  );
}

function LabelValueCards({ rows }: { rows: readonly (readonly [string, string])[] }) {
  return (
    <dl className="mt-8 space-y-3 md:hidden">
      {rows.map(([label, value]) => (
        <div key={label} className={cn(grantCardClass, 'p-4')}>
          <dt className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
            {label}
          </dt>
          <dd className="mt-1 text-sm text-stone-800 dark:text-stone-200">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function statusColor(status: string) {
  switch (status) {
    case 'Ready':
      return 'text-emerald-700 dark:text-emerald-400';
    case 'Drafting':
    case 'Needs edit':
      return 'text-amber-700 dark:text-amber-400';
    default:
      return 'text-stone-600 dark:text-stone-400';
  }
}

export default function SsrcJustTechFellowshipPage() {
  const [activeSectionId, setActiveSectionId] = useState('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navIds = useMemo(() => ssrcNavItems.map((item) => item.id), []);
  const bannerImage = ssrcImages.find((image) => image.role === 'banner');

  const snapshotRows = useMemo(
    () =>
      [
        ['Grant', 'SSRC Just Tech Fellowship'],
        ['Year', '2027'],
        ['Applicant', ssrcJustTechMeta.applicant],
        ['Project', ssrcJustTechMeta.projectTitle],
        ['Format', ssrcJustTechMeta.format],
        ['Fellowship period', ssrcJustTechMeta.fellowshipPeriod],
        ['Deadline', ssrcJustTechMeta.deadline],
        ['Status', ssrcJustTechMeta.status],
      ] as const,
    [],
  );

  const getScrollThreshold = useCallback(() => {
    const headerOffset = window.innerWidth >= 768 ? 128 : 96;
    const navHeight = navRef.current?.getBoundingClientRect().height ?? 52;
    return headerOffset + navHeight + 12;
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && (navIds as readonly string[]).includes(hash)) {
      setActiveSectionId(hash);
    }
  }, [navIds]);

  useEffect(() => {
    const updateActiveSection = () => {
      const threshold = getScrollThreshold();
      let current = navIds[0] ?? 'overview';
      for (const id of navIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActiveSectionId((prev) => (prev === current ? prev : current));
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [getScrollThreshold, navIds]);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    setActiveSectionId(id);
  }, []);

  const copyShareLink = useCallback(async () => {
    const url =
      ssrcJustTechMeta.youtubeVideoId != null
        ? `https://www.youtube.com/watch?v=${ssrcJustTechMeta.youtubeVideoId}`
        : ssrcJustTechMeta.shareUrl;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }, []);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <section id="overview" className="mx-auto w-[min(96vw,1200px)] px-4 pb-14 pt-20 sm:px-8 sm:pt-32">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 sm:tracking-[0.2em] dark:text-stone-400">
          {ssrcJustTechMeta.fellowshipLabel}
        </p>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-stone-50 to-transparent dark:from-neutral-950 sm:hidden"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-stone-50 to-transparent dark:from-neutral-950 sm:hidden"
          />
          <nav
            ref={navRef}
            aria-label="SSRC Just Tech section navigation"
            className="sticky top-20 z-40 mb-8 overflow-x-auto overscroll-x-contain border border-stone-300 bg-white/95 px-2 py-2 backdrop-blur sm:top-24 sm:px-3 sm:py-3 md:top-32 dark:border-stone-700 dark:bg-neutral-900/95 [-webkit-overflow-scrolling:touch]"
          >
            <div className="flex min-w-max snap-x snap-mandatory gap-2 px-1">
              {ssrcNavItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'snap-start whitespace-nowrap rounded-full border px-3 py-2.5 text-xs font-medium uppercase tracking-wide transition sm:px-3 sm:py-1',
                    activeSectionId === item.id
                      ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
                      : 'border-stone-300 text-stone-700 hover:border-stone-600 dark:border-stone-600 dark:text-stone-300 dark:hover:border-stone-300',
                  )}
                  aria-current={activeSectionId === item.id ? 'true' : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl md:text-5xl dark:text-stone-100">
          {ssrcJustTechMeta.projectTitle}
        </h1>
        <p className="mt-3 text-lg font-medium text-stone-800 sm:text-xl dark:text-stone-200">
          {ssrcJustTechMeta.subtitle}
        </p>
        <p className="mt-5 max-w-3xl text-xl font-medium leading-snug text-stone-800 sm:mt-6 sm:text-2xl md:text-3xl dark:text-stone-200">
          {ssrcJustTechMeta.centralQuestion}
        </p>

        <aside
          className={cn(
            'mt-6 max-w-3xl border-l-4 border-stone-800 p-5 sm:mt-8 sm:p-6 dark:border-stone-200',
            grantCardClass,
          )}
          aria-labelledby="reviewer-hook-label"
        >
          <p
            id="reviewer-hook-label"
            className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400"
          >
            {ssrcReviewerHook.label}
          </p>
          <p className="mt-3 text-base leading-relaxed text-stone-800 sm:text-lg dark:text-stone-200">
            {ssrcReviewerHook.text}
          </p>
        </aside>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
          {ssrcJustTechMeta.heroIntro}
        </p>
        <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
          Applicant: {ssrcJustTechMeta.applicant}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {ssrcHeroCtas.map((cta) => (
            <button
              key={cta.target}
              type="button"
              onClick={() => scrollToSection(cta.target)}
              className={grantButtonClass}
            >
              {cta.label}
            </button>
          ))}
        </div>

        {bannerImage ? (
          <figure className={cn('mt-8 overflow-hidden sm:mt-10', grantCardClass)}>
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/8]">
              <Image
                src={bannerImage.src}
                alt={bannerImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
            <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-700 dark:border-stone-700 dark:text-stone-300">
              {bannerImage.caption}
            </figcaption>
          </figure>
        ) : null}
      </section>

      <article className="mx-auto w-[min(96vw,1200px)] space-y-16 px-4 pb-20 sm:px-8">
        <section id="snapshot" aria-labelledby="snapshot-heading" className={sectionScrollClass}>
          <SectionHeading id="snapshot">Grant snapshot</SectionHeading>
          <LabelValueCards rows={snapshotRows} />
          <div className={cn('mt-8 hidden overflow-x-auto md:block', grantCardClass)}>
            <table className="w-full min-w-[480px] text-left text-sm">
              <tbody>
                {snapshotRows.map(([label, value]) => (
                  <tr key={label} className="border-b border-stone-200 last:border-0 dark:border-stone-700">
                    <th className="w-40 px-4 py-3 font-semibold text-stone-600 dark:text-stone-400">{label}</th>
                    <td className="px-4 py-3 text-stone-800 dark:text-stone-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 break-all text-xs text-stone-500 dark:text-stone-400">
            Fellowship logo: upload to{' '}
            <code className="rounded bg-stone-200/80 px-1 py-0.5 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
              {ssrcLogoAssets.ssrcJustTech.expectedPath}
            </code>
          </p>
        </section>

        <section id="thesis" aria-labelledby="thesis-heading" className={sectionScrollClass}>
          <SectionHeading id="thesis">Central thesis</SectionHeading>
          <div className="mt-8 max-w-3xl space-y-4">
            {ssrcThesis.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className={cn('mt-10 p-6', grantCardClass)}>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
              Culture to law
            </p>
            <ol className="mt-4 space-y-2">
              {ssrcThesis.cultureToLaw.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-stone-700 dark:text-stone-300 sm:text-base">
                  <span className="font-semibold text-stone-500 dark:text-stone-400">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="why-now" aria-labelledby="why-now-heading" className={sectionScrollClass}>
          <SectionHeading id="why-now">Why this project now</SectionHeading>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
            {ssrcWhyNow.intro}
          </p>
          <ul className="mt-6 max-w-3xl space-y-2">
            {ssrcWhyNow.shifts.map((shift) => (
              <li key={shift} className="flex gap-2 text-sm text-stone-700 dark:text-stone-300 sm:text-base">
                <span aria-hidden className="text-stone-400">
                  —
                </span>
                {shift}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
            {ssrcWhyNow.closing}
          </p>
        </section>

        <section id="project-overview" aria-labelledby="project-overview-heading" className={sectionScrollClass}>
          <SectionHeading id="project-overview">Project overview</SectionHeading>
          <div className="mt-8 max-w-3xl space-y-4">
            <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
              {ssrcProjectOverview.summary}
            </p>
            <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
              {ssrcProjectOverview.detail}
            </p>
          </div>
        </section>

        <section id="questions" aria-labelledby="questions-heading" className={sectionScrollClass}>
          <SectionHeading id="questions">Core research questions</SectionHeading>
          <ul className="mt-8 max-w-3xl space-y-4">
            {ssrcResearchQuestions.map((question) => (
              <li
                key={question}
                className="border-l-2 border-stone-400 pl-4 text-base leading-relaxed text-stone-700 dark:border-stone-600 dark:text-stone-300 sm:text-lg"
              >
                {question}
              </li>
            ))}
          </ul>
        </section>

        <section id="engines" aria-labelledby="engines-heading" className={sectionScrollClass}>
          <SectionHeading id="engines">{ssrcSculpturalEnginesIntro.title}</SectionHeading>
          <div className="mt-8 max-w-3xl space-y-4">
            {ssrcSculpturalEnginesIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {ssrcEngineChapters.map((chapter) => (
              <article key={chapter.id} className={cn('overflow-hidden', grantCardClass)}>
                <figure>
                  <div className="relative aspect-[4/3] w-full bg-stone-200 dark:bg-stone-800">
                    <Image
                      src={chapter.studyImage.src}
                      alt={chapter.studyImage.alt}
                      fill
                      className="object-cover opacity-60"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {chapter.studyImage.isPlaceholder ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-stone-900/40 px-4 text-center">
                        <p className="text-sm font-medium text-white">{chapter.studyImage.caption}</p>
                      </div>
                    ) : null}
                  </div>
                  <figcaption className="border-t border-stone-200 px-4 py-2 text-xs text-stone-600 dark:border-stone-700 dark:text-stone-400">
                    {chapter.studyImage.caption}
                  </figcaption>
                </figure>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-stone-900 sm:text-lg dark:text-stone-100">{chapter.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
                    {chapter.focus}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{chapter.body}</p>
                  <ul className="mt-4 space-y-1">
                    {chapter.politicalQuestions.map((q) => (
                      <li key={q} className="text-sm text-stone-600 dark:text-stone-400">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="labor-agency" aria-labelledby="labor-agency-heading" className={sectionScrollClass}>
          <SectionHeading id="labor-agency">Labor, value, and agency</SectionHeading>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
            {ssrcLaborAgency.intro}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className={cn('p-5', grantCardClass)}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                Prior labor value
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ssrcLaborAgency.oldLaborValue.map((item) => (
                  <li
                    key={item}
                    className="border border-stone-300 px-2 py-1 text-xs text-stone-800 dark:border-stone-600 dark:text-stone-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn('p-5', grantCardClass)}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                Emerging labor value
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ssrcLaborAgency.newLaborValue.map((item) => (
                  <li
                    key={item}
                    className="border border-stone-800 bg-stone-900 px-2 py-1 text-xs text-white dark:border-stone-200 dark:bg-stone-100 dark:text-black"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="public-contribution" aria-labelledby="public-contribution-heading" className={sectionScrollClass}>
          <SectionHeading id="public-contribution">Public contribution</SectionHeading>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
            {ssrcPublicContribution.intro}
          </p>
          <ul className="mt-6 max-w-3xl space-y-2">
            {ssrcPublicContribution.outputs.map((output) => (
              <li key={output} className="flex gap-2 text-sm text-stone-700 dark:text-stone-300 sm:text-base">
                <span aria-hidden className="text-stone-400">
                  •
                </span>
                {output}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
            {ssrcPublicContribution.bridge}
          </p>
        </section>

        <section id="archive" aria-labelledby="archive-heading" className={sectionScrollClass}>
          <SectionHeading id="archive">Website / artist-book archive</SectionHeading>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
            {ssrcArchivePreview.intro}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
            {ssrcArchivePreview.detail}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {ssrcArchivePreview.modules.map((mod) => (
              <span
                key={mod}
                className="border border-stone-300 px-3 py-1.5 font-mono text-xs text-stone-700 dark:border-stone-600 dark:text-stone-300"
              >
                {mod}
              </span>
            ))}
          </div>
          <p className="mt-6">
            <Link href={ssrcArchivePreview.researchHref} className={grantButtonClass}>
              Explore Born into the Machine research →
            </Link>
          </p>
        </section>

        <section id="video" aria-labelledby="video-heading" className={sectionScrollClass}>
          <SectionHeading id="video">Video introduction</SectionHeading>
          <p className="mt-4 text-sm text-stone-600 dark:text-stone-400">{ssrcVideoIntro.placeholderNote}</p>
          <h3 className="mt-6 text-base font-semibold text-stone-900 sm:text-lg dark:text-stone-100">
            {ssrcVideoIntro.title}
          </h3>
          <p className="text-sm text-stone-600 dark:text-stone-400">{ssrcVideoIntro.subtitle}</p>

          {ssrcJustTechMeta.youtubeVideoId ? (
            <div className="mt-6 aspect-video overflow-hidden border border-stone-300 dark:border-stone-700">
              <iframe
                title={ssrcVideoIntro.title}
                src={`https://www.youtube.com/embed/${ssrcJustTechMeta.youtubeVideoId}`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="mt-6 flex aspect-video items-center justify-center border border-dashed border-stone-400 bg-stone-100 dark:border-stone-600 dark:bg-neutral-900">
              <p className="max-w-md px-6 text-center text-sm text-stone-600 dark:text-stone-400">
                YouTube embed will appear here once{' '}
                <code className="text-stone-800 dark:text-stone-200">youtubeVideoId</code> is set in the content
                module.
              </p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={copyShareLink} className={grantButtonClass}>
              {copiedLink ? 'Link copied' : 'Copy video share link'}
            </button>
          </div>

          <details className={cn('mt-8', grantCardClass)}>
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-stone-900 dark:text-stone-100">
              Full transcript
            </summary>
            <div className="border-t border-stone-200 px-4 py-4 dark:border-stone-700">
              {ssrcVideoIntro.transcript.split('\n\n').map((block) => (
                <p
                  key={block.slice(0, 40)}
                  className="mb-4 text-sm leading-relaxed text-stone-700 last:mb-0 dark:text-stone-300"
                >
                  {block}
                </p>
              ))}
            </div>
          </details>
        </section>

        <section id="practice" aria-labelledby="practice-heading" className={sectionScrollClass}>
          <SectionHeading id="practice">Practice evidence</SectionHeading>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
            {ssrcPracticeEvidence.intro}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ssrcPracticeEvidence.categories.map((category) => (
              <div key={category.id} className={cn('p-5', grantCardClass)}>
                <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">{category.title}</h3>
                <ul className="mt-4 space-y-4">
                  {category.works.map((work) => {
                    const workHref = 'href' in work ? work.href : work.slug ? `/art/${work.slug}` : undefined;
                    const content = (
                      <>
                        <p className="font-medium text-stone-900 dark:text-stone-100">{work.title}</p>
                        <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{work.note}</p>
                      </>
                    );
                    return (
                      <li key={`${category.id}-${work.title}`}>
                        {workHref ? (
                          <Link
                            href={workHref}
                            className="block transition hover:opacity-80"
                            {...(workHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          >
                            {content}
                            <span className={cn('mt-1 inline-block text-xs', grantLinkClass)}>View →</span>
                          </Link>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="infrastructure" aria-labelledby="infrastructure-heading" className={sectionScrollClass}>
          <SectionHeading id="infrastructure">Related infrastructure</SectionHeading>
          <p className="mt-8 max-w-3xl text-sm text-stone-600 dark:text-stone-400 sm:text-base">
            These initiatives are not the fellowship project itself. They are evidence of a broader practice committed
            to public technology, artist education, and cultural infrastructure.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ssrcInfrastructureCards.map((card) => (
              <article key={card.id} className={cn('flex flex-col p-5', grantCardClass)}>
                {card.logoSrc ? (
                  <div className="relative mb-4 h-10 w-full">
                    <Image src={card.logoSrc} alt={card.logoAlt} fill className="object-contain object-left" />
                  </div>
                ) : (
                  <p className="mb-4 break-all text-xs text-stone-500 dark:text-stone-400">
                    Logo pending:{' '}
                    <code className="rounded bg-stone-200/80 px-1 py-0.5 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
                      {card.logoExpectedPath}
                    </code>
                  </p>
                )}
                <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={cn('mt-4 text-sm', grantLinkClass)}
                >
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="work-samples" aria-labelledby="work-samples-heading" className={sectionScrollClass}>
          <SectionHeading id="work-samples">Work samples</SectionHeading>
          <p className="mt-4 max-w-3xl text-sm text-stone-600 dark:text-stone-400 sm:text-base">
            Two official application work samples: sculptural practice and public technology infrastructure.
          </p>
          <div className="mt-10 space-y-16">
            {ssrcWorkSamples.map((sample, index) => {
              const href = sample.slug ? `/art/${sample.slug}` : sample.href;
              return (
                <article key={sample.id} className="space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                    Work sample {index + 1} — {sample.type === 'artwork' ? 'Artwork' : 'Infrastructure'}
                  </p>
                  <div className={cn('overflow-hidden', grantCardClass)}>
                    <WorkImageCarousel
                      images={sample.images}
                      alt={sample.title}
                      className="rounded-none"
                      showControlsOnTouch
                    />
                  </div>
                  <div>
                    {href ? (
                      <Link
                        href={href}
                        className="text-lg font-semibold text-stone-900 hover:underline sm:text-xl dark:text-stone-100"
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {sample.title}
                      </Link>
                    ) : (
                      <h3 className="text-lg font-semibold text-stone-900 sm:text-xl dark:text-stone-100">{sample.title}</h3>
                    )}
                    <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{sample.medium}</p>
                    <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                      {sample.description}
                    </p>
                    <p className="mt-4 text-sm italic text-stone-600 dark:text-stone-400">
                      <strong>Relevance:</strong> {sample.relevance}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="timeline" aria-labelledby="timeline-heading" className={sectionScrollClass}>
          <SectionHeading id="timeline">2027 fellowship timeline</SectionHeading>
          <div className="mt-8 space-y-4 md:hidden">
            {ssrcTimeline.map((row) => (
              <article key={row.quarter} className={cn('p-4', grantCardClass)}>
                <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">{row.quarter}</h3>
                <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">
                  <span className="font-medium text-stone-500 dark:text-stone-400">Focus: </span>
                  {row.focus}
                </p>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                  <span className="font-medium text-stone-500 dark:text-stone-400">Outputs: </span>
                  {row.outputs.join(' · ')}
                </p>
              </article>
            ))}
          </div>
          <div className={cn('mt-8 hidden overflow-x-auto md:block', grantCardClass)}>
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 dark:border-stone-700">
                  <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">Quarter</th>
                  <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">Focus</th>
                  <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">Outputs</th>
                </tr>
              </thead>
              <tbody>
                {ssrcTimeline.map((row) => (
                  <tr key={row.quarter} className="border-b border-stone-200 last:border-0 dark:border-stone-700">
                    <td className="px-4 py-3 font-medium text-stone-800 dark:text-stone-200">{row.quarter}</td>
                    <td className="px-4 py-3 text-stone-700 dark:text-stone-300">{row.focus}</td>
                    <td className="px-4 py-3 text-stone-600 dark:text-stone-400">{row.outputs.join(' · ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={cn('mt-8 p-5', grantCardClass)}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
              Proposed outcomes by end of 2027
            </h3>
            <ul className="mt-4 space-y-2">
              {ssrcOutcomes2027.map((outcome) => (
                <li key={outcome} className="text-sm text-stone-700 dark:text-stone-300">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="materials" aria-labelledby="materials-heading" className={sectionScrollClass}>
          <SectionHeading id="materials">Application materials</SectionHeading>
          <p className="mt-4 max-w-3xl text-sm text-stone-600 dark:text-stone-400">
            Required materials for the SSRC Just Tech Fellowship submission.
          </p>
          <div className="mt-8 space-y-3 md:hidden">
            {ssrcApplicationMaterials.map((item) => (
              <article key={item.label} className={cn('p-4', grantCardClass)}>
                <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">{item.label}</h3>
                <p className={cn('mt-2 text-sm font-medium', statusColor(item.status))}>{item.status}</p>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{item.notes}</p>
              </article>
            ))}
          </div>
          <div className={cn('mt-8 hidden overflow-x-auto md:block', grantCardClass)}>
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 dark:border-stone-700">
                  <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">Material</th>
                  <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">Status</th>
                  <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ssrcApplicationMaterials.map((item) => (
                  <tr key={item.label} className="border-b border-stone-200 last:border-0 dark:border-stone-700">
                    <td className="px-4 py-3 font-medium text-stone-800 dark:text-stone-200">{item.label}</td>
                    <td className={cn('px-4 py-3 font-medium', statusColor(item.status))}>{item.status}</td>
                    <td className="px-4 py-3 text-stone-600 dark:text-stone-400">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className={sectionScrollClass}>
          <SectionHeading id="contact">Contact</SectionHeading>
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden border border-stone-300 dark:border-stone-700">
              <Image
                src={ssrcJustTechMeta.portraitUrl}
                alt="Moises Sanabria"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            <div className="max-w-3xl">
              <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
                {ssrcContact.bio}
              </p>
              <p className="mt-4">
                <a href={`mailto:${ssrcContact.email}`} className={cn('text-sm', grantLinkClass)}>
                  {ssrcContact.email}
                </a>
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {ssrcContact.links.map((link) => (
                  <Link key={link.label} href={link.href} className={cn('text-sm', grantLinkClass)}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <p className="mt-8 text-base leading-relaxed text-stone-600 dark:text-stone-400">
                {ssrcContact.closing}
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
