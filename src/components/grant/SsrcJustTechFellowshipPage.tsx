'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { WorkImageCarousel } from '@/components/page/WorkImageCarousel';
import {
  ConceptCard,
  DiagramLadder,
  EngineAccordion,
  ExpandableText,
  PanelHook,
  PracticeEvidenceTabs,
  ReferenceCard,
  SectionGroup,
  StatusPill,
  ThesisCard,
  dossierTypography,
  grantButtonClass,
  grantCardClass,
  grantLinkClass,
} from '@/components/grant/dossier/GrantDossierUi';
import {
  GrantSectionHero,
  GrantSectionPagerFooter,
  GrantSectionPagerNav,
  siteHeaderExpandedPaddingTopClass,
} from '@/components/grant/dossier/GrantSectionPager';
import { getSsrcZoneAccent } from '@/config/ssrc-zone-accents';
import {
  ssrcApplicationMaterials,
  ssrcBornIntoMachineArchive,
  ssrcContact,
  ssrcEngineChapters,
  ssrcFieldContext,
  ssrcFieldReferences,
  ssrcHeroCtas,
  ssrcInfrastructureCards,
  ssrcJustTechMeta,
  ssrcLaborAgency,
  ssrcMajorZones,
  ssrcOriginalConcepts,
  ssrcOutcomes2027,
  ssrcPracticeEvidence,
  ssrcProjectOverview,
  ssrcPublicContribution,
  ssrcResearchQuestions,
  ssrcReviewerHook,
  ssrcSculpturalEnginesIntro,
  ssrcThesis,
  ssrcThesisPullQuote,
  ssrcTimeline,
  ssrcVideoIntro,
  ssrcWhyNow,
  ssrcWorkSamples,
} from '@/content/grants/ssrc-just-tech-fellowship-2027';

const snapshotFacts = [
  { label: 'Grant', value: 'SSRC Just Tech Fellowship' },
  { label: 'Project', value: ssrcJustTechMeta.projectTitle },
  { label: 'Deadline', value: ssrcJustTechMeta.deadline },
  { label: 'Status', value: ssrcJustTechMeta.status },
] as const;

function ResearchQuestionsBlock() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? ssrcResearchQuestions : ssrcResearchQuestions.slice(0, 3);

  return (
    <div className={grantCardClass}>
      <ul className="divide-y divide-stone-200 dark:divide-stone-700">
        {visible.map((question) => (
          <li key={question} className={cn('px-5 py-4 sm:px-6', dossierTypography.body)}>
            {question}
          </li>
        ))}
      </ul>
      {ssrcResearchQuestions.length > 3 ? (
        <div className="border-t border-stone-200 px-5 py-3 dark:border-stone-700">
          <button type="button" onClick={() => setShowAll((v) => !v)} className={cn('min-h-11 text-sm', grantLinkClass)}>
            {showAll ? 'Show fewer questions' : `Show all ${ssrcResearchQuestions.length} questions`}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default function SsrcJustTechFellowshipPage() {
  const [activeZoneId, setActiveZoneId] = useState<string>(ssrcMajorZones[0]?.id ?? 'opening');
  const [copiedLink, setCopiedLink] = useState(false);
  const activeZone = ssrcMajorZones.find((zone) => zone.id === activeZoneId) ?? ssrcMajorZones[0];
  const activeAccent = getSsrcZoneAccent(activeZoneId);

  const goToZone = useCallback((id: string) => {
    setActiveZoneId(id);
    window.history.replaceState(null, '', `#${id}`);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const ids = ssrcMajorZones.map((z) => z.id);
      if (hash && ids.includes(hash as (typeof ids)[number])) {
        setActiveZoneId(hash);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
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

  const renderPracticeWork = useCallback(
    (work: (typeof ssrcPracticeEvidence.categories)[number]['works'][number]) => {
      const workHref = 'href' in work ? work.href : work.slug ? `/art/${work.slug}` : undefined;
      const content = (
        <>
          <p className="font-medium text-stone-900 dark:text-stone-100">{work.title}</p>
          <p className={cn('mt-1', dossierTypography.meta)}>{work.note}</p>
        </>
      );
      if (!workHref) return content;
      return (
        <Link
          href={workHref}
          className="block transition hover:opacity-80"
          {...(workHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
          <span className={cn('mt-1 inline-block text-xs', grantLinkClass)}>View →</span>
        </Link>
      );
    },
    [],
  );

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <div className={cn('mx-auto w-[min(96vw,1200px)] px-4 pb-20 sm:px-8', siteHeaderExpandedPaddingTopClass)}>
        <div className="lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
          <GrantSectionPagerNav
            zones={ssrcMajorZones}
            activeZoneId={activeZoneId}
            onSelect={goToZone}
            portraitSrc={ssrcJustTechMeta.portraitUrl}
            portraitAlt="Moises Sanabria — applicant portrait"
            applicantName={ssrcJustTechMeta.applicant}
            fellowshipLabel={ssrcJustTechMeta.fellowshipLabel}
          />

          {activeZone ? (
            <div key={activeZoneId} className={cn(activeAccent.navMarker, 'pl-4 sm:pl-6 lg:pl-8')}>
              <SectionGroup
                paginated
                id={activeZone.id}
                eyebrow={activeZone.number}
                title={activeZone.label}
                summary={activeZone.summary}
                accentEyebrowClass={activeAccent.eyebrow}
                accentBorderClass={cn('border-b-2', activeAccent.sectionBorder)}
              >
                <GrantSectionHero zone={activeZone} />

                {activeZoneId === 'opening' ? (
                  <>
              <div className={dossierTypography.prose}>
                  <p className={dossierTypography.eyebrow}>{ssrcJustTechMeta.fellowshipLabel}</p>
                  <h1 className={cn('mt-3', dossierTypography.h1)}>{ssrcJustTechMeta.projectTitle}</h1>
                  <p className={cn('mt-3 font-medium text-stone-800 dark:text-stone-200', dossierTypography.body)}>
                    {ssrcJustTechMeta.subtitle}
                  </p>
                  <p className={cn('mt-5', dossierTypography.pullQuote)}>{ssrcJustTechMeta.centralQuestion}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {ssrcHeroCtas.map((cta) => (
                      <button key={cta.target} type="button" onClick={() => goToZone(cta.target)} className={grantButtonClass}>
                        {cta.label}
                      </button>
                    ))}
                  </div>
                  <p className={cn('mt-4', dossierTypography.meta)}>Applicant: {ssrcJustTechMeta.applicant}</p>
              </div>

              <div className="mt-10">
                <PanelHook label={ssrcReviewerHook.label} text={ssrcReviewerHook.text} />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {snapshotFacts.map((fact) => (
                  <div key={fact.label} className={cn('p-4', grantCardClass)}>
                    <p className={dossierTypography.eyebrow}>{fact.label}</p>
                    <p className={cn('mt-2 text-sm font-medium text-stone-900 dark:text-stone-100')}>{fact.value}</p>
                  </div>
                ))}
              </div>
              <p className={cn('mt-3', dossierTypography.meta)}>Format: {ssrcJustTechMeta.format}</p>

              <div className="mt-10">
                <p className={dossierTypography.eyebrow}>Watch — 3-minute introduction</p>
                <h3 className={cn('mt-2', dossierTypography.h3)}>{ssrcVideoIntro.title}</h3>
                <p className={cn('mt-1', dossierTypography.meta)}>{ssrcVideoIntro.subtitle}</p>
                {ssrcJustTechMeta.youtubeVideoId ? (
                  <div className="mt-4 aspect-video overflow-hidden border border-stone-300 dark:border-stone-700">
                    <iframe
                      title={ssrcVideoIntro.title}
                      src={`https://www.youtube.com/embed/${ssrcJustTechMeta.youtubeVideoId}`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="mt-4 flex aspect-video items-center justify-center border border-dashed border-stone-400 bg-stone-100 dark:border-stone-600 dark:bg-neutral-900">
                    <p className={cn('max-w-md px-6 text-center', dossierTypography.meta)}>{ssrcVideoIntro.placeholderNote}</p>
                  </div>
                )}
                <div className="mt-4">
                  <button type="button" onClick={copyShareLink} className={grantButtonClass}>
                    {copiedLink ? 'Link copied' : 'Copy video share link'}
                  </button>
                </div>
                <details className={cn('mt-6', grantCardClass)}>
                  <summary className={cn('cursor-pointer px-4 py-3 font-semibold text-stone-900 dark:text-stone-100', dossierTypography.meta)}>
                    Full transcript
                  </summary>
                  <div className="border-t border-stone-200 px-4 py-4 dark:border-stone-700">
                    {ssrcVideoIntro.transcript.split('\n\n').map((block) => (
                      <p key={block.slice(0, 40)} className={cn('mb-4 last:mb-0', dossierTypography.body)}>
                        {block}
                      </p>
                    ))}
                  </div>
                </details>
              </div>
                  </>
                ) : null}

                {activeZoneId === 'thesis' ? (
                  <>
              <ThesisCard claim={ssrcThesisPullQuote} />

              <div className="mt-8">
                <ExpandableText preview={ssrcThesis.paragraphs[0] ?? ''} label="Read full thesis">
                  {ssrcThesis.paragraphs.slice(1).map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </ExpandableText>
              </div>

              <div className="mt-8">
                <p className={dossierTypography.eyebrow}>In one sentence</p>
                <p className={cn('mt-2', dossierTypography.body)}>{ssrcProjectOverview.summary}</p>
              </div>

              <div className="mt-8">
                <ExpandableText preview={ssrcWhyNow.intro} label="Read why this project now">
                  <ul className="space-y-2">
                    {ssrcWhyNow.shifts.map((shift) => (
                      <li key={shift}>— {shift}</li>
                    ))}
                  </ul>
                  <p className="mt-4">{ssrcWhyNow.closing}</p>
                  <p className="mt-4">{ssrcProjectOverview.detail}</p>
                </ExpandableText>
              </div>

              <div className="mt-8">
                <p className={dossierTypography.eyebrow}>Core research questions</p>
                <div className="mt-4">
                  <ResearchQuestionsBlock />
                </div>
              </div>
                  </>
                ) : null}

                {activeZoneId === 'engines' ? (
                  <>
              <p className={cn(dossierTypography.body, dossierTypography.prose)}>
                {ssrcSculpturalEnginesIntro.paragraphs[0]}
              </p>
              <div className="mt-8">
                <EngineAccordion engines={ssrcEngineChapters} />
              </div>

              <div className="mt-10">
                <p className={dossierTypography.eyebrow}>Labor, value, and agency</p>
                <p className={cn('mt-2', dossierTypography.body, dossierTypography.prose)}>{ssrcLaborAgency.intro}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className={cn('p-5', grantCardClass)}>
                    <p className={dossierTypography.eyebrow}>Prior labor value</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {ssrcLaborAgency.oldLaborValue.map((item) => (
                        <li key={item} className="border border-stone-300 px-2 py-1 text-xs text-stone-800 dark:border-stone-600 dark:text-stone-200">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={cn('p-5', grantCardClass)}>
                    <p className={dossierTypography.eyebrow}>Emerging labor value</p>
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
              </div>
                  </>
                ) : null}

                {activeZoneId === 'public' ? (
                  <>
              <p className={cn(dossierTypography.body, dossierTypography.prose)}>{ssrcPublicContribution.intro}</p>
              <ul className={cn('mt-6 space-y-2', dossierTypography.body, dossierTypography.prose)}>
                {ssrcPublicContribution.outputs.slice(0, 4).map((output) => (
                  <li key={output}>• {output}</li>
                ))}
              </ul>

              <details className={cn('mt-4', grantCardClass)}>
                <summary className={cn('cursor-pointer px-4 py-3 font-medium text-stone-900 dark:text-stone-100', dossierTypography.meta)}>
                  Full public contribution list
                </summary>
                <ul className={cn('space-y-2 border-t border-stone-200 px-4 py-4 dark:border-stone-700', dossierTypography.body)}>
                  {ssrcPublicContribution.outputs.map((output) => (
                    <li key={output}>• {output}</li>
                  ))}
                </ul>
              </details>

              <div className="mt-8">
                <p className={dossierTypography.eyebrow}>Culture to law</p>
                <div className="mt-4">
                  <DiagramLadder steps={ssrcThesis.cultureToLaw} />
                </div>
                <p className={cn('mt-6', dossierTypography.body, dossierTypography.prose)}>{ssrcPublicContribution.bridge}</p>
              </div>
                  </>
                ) : null}

                {activeZoneId === 'field' ? (
                  <>
              <div>
                <p className={dossierTypography.eyebrow}>Original concepts developed in this project</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {ssrcOriginalConcepts.map((concept) => {
                    const engine = ssrcEngineChapters.find((e) => e.id === concept.relatedEngineId);
                    return (
                      <ConceptCard
                        key={concept.id}
                        concept={concept}
                        engineTitle={engine?.title}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="mt-12">
                <p className={dossierTypography.eyebrow}>{ssrcFieldContext.title}</p>
                <p className={cn('mt-3', dossierTypography.body, dossierTypography.prose)}>{ssrcFieldContext.intro}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {ssrcFieldReferences.map((reference) => (
                    <ReferenceCard key={reference.id} reference={reference} />
                  ))}
                </div>
                <p className={cn('mt-6', dossierTypography.meta)}>{ssrcFieldContext.bibliographyTeaser}</p>
              </div>

              <div className="mt-12">
                <p className={dossierTypography.eyebrow}>{ssrcBornIntoMachineArchive.title}</p>
                <p className={cn('mt-3', dossierTypography.body, dossierTypography.prose)}>
                  {ssrcBornIntoMachineArchive.intro}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {ssrcBornIntoMachineArchive.links.map((link) => (
                    <article key={link.href} className={cn('flex flex-col p-4 sm:p-5', grantCardClass)}>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">{link.label}</h3>
                        {link.status === 'coming-soon' ? (
                          <span className="rounded-full bg-stone-200 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-stone-600 dark:bg-stone-800 dark:text-stone-400">
                            Coming soon
                          </span>
                        ) : null}
                      </div>
                      <p className={cn('mt-2 flex-1', dossierTypography.meta)}>{link.description}</p>
                      <Link href={link.href} className={cn('mt-4 text-sm', grantLinkClass)}>
                        {link.status === 'live' ? 'Open archive →' : 'Preview route →'}
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
                  </>
                ) : null}

                {activeZoneId === 'evidence' ? (
                  <>
              <p className={cn(dossierTypography.meta, dossierTypography.prose)}>
                Selected to demonstrate sculptural practice (Baby AGI) and public technology infrastructure (Oolite Digital Lab). DCC.Miami appears under related infrastructure as future-facing cultural platform work.
              </p>

              <div className="mt-8 space-y-12">
                {ssrcWorkSamples.map((sample, index) => {
                  const href = sample.slug ? `/art/${sample.slug}` : sample.href;
                  return (
                    <article key={sample.id} className={cn('overflow-hidden', grantCardClass)}>
                      <p className={cn('border-b border-stone-200 px-5 py-3 dark:border-stone-700', dossierTypography.eyebrow)}>
                        Work sample {String(index + 1).padStart(2, '0')} — {sample.type === 'artwork' ? 'Artwork' : 'Infrastructure'}
                      </p>
                      <div className="p-4 sm:p-5">
                        <WorkImageCarousel images={sample.images} alt={sample.title} className="rounded-none" showControlsOnTouch />
                        <div className="mt-5">
                          {href ? (
                            <Link
                              href={href}
                              className={cn(dossierTypography.h3, 'hover:underline')}
                              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                              {sample.title}
                            </Link>
                          ) : (
                            <h3 className={dossierTypography.h3}>{sample.title}</h3>
                          )}
                          <p className={cn('mt-2', dossierTypography.meta)}>{sample.medium}</p>
                          <p className={cn('mt-4', dossierTypography.body)}>{sample.description}</p>
                          <p className={cn('mt-4 italic', dossierTypography.meta)}>
                            <strong>Why it matters:</strong> {sample.relevance}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-12">
                <p className={dossierTypography.eyebrow}>Practice evidence</p>
                <div className="mt-4">
                  <PracticeEvidenceTabs categories={ssrcPracticeEvidence.categories} renderWorkLink={renderPracticeWork} />
                </div>
              </div>

              <details className={cn('mt-10', grantCardClass)}>
                <summary className={cn('cursor-pointer px-4 py-3 font-medium text-stone-900 dark:text-stone-100', dossierTypography.meta)}>
                  Related infrastructure — Oolite, DCC, Infra24
                </summary>
                <div className="grid gap-4 border-t border-stone-200 p-4 sm:grid-cols-3 dark:border-stone-700">
                  {ssrcInfrastructureCards.map((card) => (
                    <article key={card.id} className="p-3">
                      <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100">{card.title}</h3>
                      <p className={cn('mt-2', dossierTypography.meta)}>{card.description}</p>
                      <a
                        href={card.href}
                        target={card.href.startsWith('http') ? '_blank' : undefined}
                        rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={cn('mt-3 inline-block text-sm', grantLinkClass)}
                      >
                        Learn more →
                      </a>
                    </article>
                  ))}
                </div>
              </details>
                  </>
                ) : null}

                {activeZoneId === 'application' ? (
                  <>
              <div className="-mx-4 flex gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4">
                {ssrcTimeline.map((row) => (
                  <article key={row.quarter} className={cn('min-w-[16rem] shrink-0 p-4 sm:min-w-0', grantCardClass)}>
                    <p className={dossierTypography.eyebrow}>{row.quarter}</p>
                    <p className={cn('mt-2 text-sm font-medium text-stone-900 dark:text-stone-100')}>{row.focus}</p>
                    <p className={cn('mt-2', dossierTypography.meta)}>{row.outputs.join(' · ')}</p>
                  </article>
                ))}
              </div>

              <details className={cn('mt-8', grantCardClass)}>
                <summary className={cn('cursor-pointer px-4 py-3 font-semibold text-stone-900 dark:text-stone-100', dossierTypography.meta)}>
                  Application dashboard — submission materials
                </summary>
                <div className="space-y-3 border-t border-stone-200 p-4 dark:border-stone-700">
                  {ssrcApplicationMaterials.map((item) => (
                    <div key={item.label} className="flex flex-col gap-2 border-b border-stone-100 pb-3 last:border-0 dark:border-stone-800 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{item.label}</p>
                        <p className={dossierTypography.meta}>{item.notes}</p>
                      </div>
                      <StatusPill status={item.status} />
                    </div>
                  ))}
                </div>
              </details>

              <div className={cn('mt-8 p-5', grantCardClass)}>
                <p className={dossierTypography.eyebrow}>Proposed outcomes by end of 2027</p>
                <ul className={cn('mt-4 space-y-2', dossierTypography.body)}>
                  {ssrcOutcomes2027.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 border-t border-stone-300 pt-10 dark:border-stone-700">
                <div className={dossierTypography.prose}>
                  <p className={dossierTypography.eyebrow}>Contact</p>
                  <p className={cn('mt-3', dossierTypography.body)}>{ssrcContact.bio}</p>
                  <a href={`mailto:${ssrcContact.email}`} className={cn('mt-4 inline-block text-sm', grantLinkClass)}>
                    {ssrcContact.email}
                  </a>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {ssrcContact.links.map((link) => (
                      <Link key={link.label} href={link.href} className={cn('text-sm', grantLinkClass)}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <p className={cn('mt-6', dossierTypography.meta)}>{ssrcContact.closing}</p>
                </div>
              </div>
                  </>
                ) : null}

                <GrantSectionPagerFooter zones={ssrcMajorZones} activeZoneId={activeZoneId} onSelect={goToZone} />
              </SectionGroup>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
