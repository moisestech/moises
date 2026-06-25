'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { grantDossierSectionScrollMarginClass, siteHeaderExpandedPaddingTopClass } from '@/config/site-header-layout';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import {
  DiagramLadder,
  ExpandableText,
  PanelHook,
  SectionGroup,
  StatusPill,
  dossierTypography,
  grantButtonClass,
  grantCardClass,
  grantLinkClass,
  type MajorZone,
} from '@/components/grant/dossier/GrantDossierUi';
import { GrantDossierSidebar } from '@/components/grant/dossier/GrantDossierSidebar';
import { VerticalProofShowcase } from '@/components/grant/VerticalProofShowcase';
import {
  fourArtistsApplicationFacts,
  fourArtistsApplicationResponses,
  fourArtistsBakehouseTrajectory,
  fourArtistsFitCards,
  fourArtistsHero,
  fourArtistsMeta,
  fourArtistsNavZones,
  fourArtistsProductionLogoBand,
  fourArtistsProofItems,
  fourArtistsReadinessMetrics,
  fourArtistsStatement,
  fourArtistsStorytellingPrinciples,
  fourArtistsSurveyAlignment,
  fourArtistsToolStack,
  fourArtistsWeeklyPlan,
  fourArtistsWorkflowSteps,
} from '@/content/grants/four-artists-four-seasons';

const navZones: MajorZone[] = fourArtistsNavZones.map((z) => ({
  id: z.id,
  number: z.number,
  label: z.label,
  summary: z.summary,
}));

const programLabel = `${fourArtistsMeta.program} · ${fourArtistsMeta.organization}`;

export default function FourArtistsFourSeasonsPage() {
  const [activeZoneId, setActiveZoneId] = useState(navZones[0]?.id ?? 'overview');
  const navIds = useMemo(() => navZones.map((z) => z.id), []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && navIds.includes(hash)) setActiveZoneId(hash);
  }, [navIds]);

  useEffect(() => {
    const updateActive = () => {
      let current = navIds[0] ?? 'overview';
      for (const id of navIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 220) current = id;
      }
      setActiveZoneId((prev) => (prev === current ? prev : current));
    };
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [navIds]);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    setActiveZoneId(id);
  }, []);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <div
        className={cn(
          'mx-auto w-[min(96vw,1200px)] px-4 pb-20 sm:px-8',
          siteHeaderExpandedPaddingTopClass,
        )}
      >
        <div className="lg:grid lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
          <GrantDossierSidebar
            zones={navZones}
            activeZoneId={activeZoneId}
            onNavigate={scrollToSection}
            portraitSrc={fourArtistsMeta.portraitUrl}
            portraitAlt={`${fourArtistsMeta.applicant} — professional portrait`}
            applicantName={fourArtistsMeta.applicant}
            programLabel={programLabel}
            socialLinks={{
              instagram: fourArtistsMeta.social.instagram,
              youtube: fourArtistsMeta.social.youtube,
              linkedin: fourArtistsMeta.social.linkedin,
              website: fourArtistsMeta.social.website,
              email: fourArtistsMeta.social.email,
            }}
          />

          <div className="min-w-0">
            <section
              id="overview"
              className={cn(grantDossierSectionScrollMarginClass, 'pb-14 pt-4 sm:pt-6')}
            >
              <p className={dossierTypography.eyebrow}>{fourArtistsHero.eyebrow}</p>
              <h1 className={cn('mt-6', dossierTypography.h1)}>{fourArtistsHero.headline}</h1>
              <p className={cn('mt-4', dossierTypography.pullQuote)}>{fourArtistsHero.subheadline}</p>
              <p className={cn('mt-6 max-w-[62ch]', dossierTypography.body)}>{fourArtistsHero.intro}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {fourArtistsHero.statusPills.map((pill) => (
                  <StatusPill key={pill} status={pill} />
                ))}
              </div>

              <p className={cn('mt-4 max-w-[62ch] font-medium text-stone-800 dark:text-stone-200', dossierTypography.body)}>
                {fourArtistsMeta.postingTagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={() => scrollToSection('proof')} className={grantButtonClass}>
                  View proof samples
                </button>
                <button type="button" onClick={() => scrollToSection('weekly-plan')} className={grantButtonClass}>
                  View 12-week plan
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('application-responses')}
                  className={grantButtonClass}
                >
                  Application answers
                </button>
                <a
                  href={`mailto:${fourArtistsMeta.social.email}?subject=${encodeURIComponent('Four Artists: Four Seasons — Bakehouse')}`}
                  className={grantButtonClass}
                >
                  Contact Moises
                </a>
              </div>

              <div className={cn('mt-12 p-5 sm:p-6', grantCardClass)}>
                <p className={dossierTypography.eyebrow}>Application snapshot</p>
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  {fourArtistsApplicationFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt className={dossierTypography.meta}>{fact.label}</dt>
                      <dd className="mt-1 text-sm font-medium text-stone-900 dark:text-stone-100">{fact.value}</dd>
                      {'note' in fact && fact.note ? (
                        <dd className={cn('mt-1', dossierTypography.meta)}>{fact.note}</dd>
                      ) : null}
                    </div>
                  ))}
                </dl>
              </div>

              <PanelHook
                label="Positioning"
                text="A Bakehouse resident artist with insider access, artist-documentation sensitivity, and the technical ability to build a repeatable weekly micro-film system — not a generic social media contractor."
              />
            </section>

            <article className="space-y-16 sm:space-y-20">
              <SectionGroup
                id="trajectory"
                eyebrow="Context"
                title="Bakehouse trajectory"
                summary="Artistic practice and trajectory inside the building."
              >
                <p className={cn('max-w-[62ch] whitespace-pre-line', dossierTypography.body)}>
                  {fourArtistsBakehouseTrajectory}
                </p>
              </SectionGroup>

              <SectionGroup
                id="fit"
                eyebrow="Fit"
                title="Why I fit"
                summary="Low risk, high output — already inside the ecosystem."
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {fourArtistsFitCards.map((card) => (
                    <article key={card.title} className={cn('p-4 sm:p-5', grantCardClass)}>
                      <h3 className={cn(dossierTypography.h3, 'text-lg sm:text-xl')}>{card.title}</h3>
                      <p className={cn('mt-2', dossierTypography.body)}>{card.body}</p>
                    </article>
                  ))}
                </div>
              </SectionGroup>

              <SectionGroup
                id="proof"
                eyebrow="Evidence"
                title="Proof of short-form storytelling"
                summary="Vertical-first samples — process, production, and platform fluency."
              >
                <VerticalProofShowcase
                  items={fourArtistsProofItems}
                  readinessMetrics={fourArtistsReadinessMetrics}
                />
              </SectionGroup>

              <SectionGroup
                id="weekly-plan"
                eyebrow="Cadence"
                title="A 12-week rhythm for documenting creative life"
                summary="Repeatable weekly formats that adapt to Bakehouse programming, exhibitions, and fundraising season."
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {fourArtistsWeeklyPlan.map((week) => (
                    <article key={week.week} className={cn('p-4', grantCardClass)}>
                      <p className={dossierTypography.eyebrow}>Week {week.week}</p>
                      <h3 className="mt-2 text-base font-semibold text-stone-900 dark:text-stone-100">{week.title}</h3>
                      <p className={cn('mt-2', dossierTypography.meta)}>{week.description}</p>
                    </article>
                  ))}
                </div>
              </SectionGroup>

              <SectionGroup
                id="workflow"
                eyebrow="Operations"
                title="Production workflow"
                summary="Reliable weekly cadence — capture through archive."
              >
                <DiagramLadder steps={fourArtistsWorkflowSteps} />
              </SectionGroup>

              <SectionGroup
                id="tools"
                eyebrow="Stack"
                title="Tool stack"
                summary="Editing, design, production, experimental, and infrastructure."
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {fourArtistsToolStack.map((group) => (
                    <div key={group.category} className={cn('p-4 sm:p-5', grantCardClass)}>
                      <p className={dossierTypography.eyebrow}>{group.category}</p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {group.tools.map((tool) => (
                          <li
                            key={tool}
                            className="rounded border border-stone-300 px-2 py-1 text-xs text-stone-700 dark:border-stone-600 dark:text-stone-300"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {fourArtistsProductionLogoBand.length ? (
                  <div className="mt-10">
                    <p className={cn('mb-4', dossierTypography.eyebrow)}>Production platforms</p>
                    <AnimatedLogoBand
                      logos={fourArtistsProductionLogoBand}
                      bleed
                      ariaLabel="Editing and production platform logos"
                      className="rounded border border-stone-300 dark:border-stone-700"
                    />
                  </div>
                ) : null}
              </SectionGroup>

              <SectionGroup
                id="storytelling"
                eyebrow="Philosophy"
                title="Storytelling & social approach"
                summary="What makes content engaging — and how posting fits an art practice."
              >
                <ul className={cn('max-w-[62ch] space-y-3', dossierTypography.body)}>
                  {fourArtistsStorytellingPrinciples.map((principle) => (
                    <li key={principle} className="flex gap-3">
                      <span className="text-stone-400" aria-hidden>
                        —
                      </span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
                <div className={cn('mt-8 p-4 sm:p-5', grantCardClass)}>
                  <p className={dossierTypography.eyebrow}>Posting approach</p>
                  <p className={cn('mt-2 font-medium text-stone-900 dark:text-stone-100', dossierTypography.body)}>
                    {fourArtistsMeta.postingTagline}
                  </p>
                  <p className={cn('mt-3', dossierTypography.body)}>{fourArtistsMeta.postingFrequency}</p>
                </div>
              </SectionGroup>

              <SectionGroup
                id="application-responses"
                eyebrow="Survey"
                title="Application responses"
                summary="Full answers for SurveyMonkey — Q6 through Q13."
              >
                <div className="space-y-6">
                  {fourArtistsApplicationResponses.map((response) => (
                    <article key={response.number} className={cn('p-4 sm:p-6', grantCardClass)}>
                      <p className={dossierTypography.eyebrow}>Question {response.number}</p>
                      <h3 className={cn('mt-2', dossierTypography.h3)}>{response.title}</h3>
                      {response.formChoice ? (
                        <p className={cn('mt-3 text-sm font-semibold text-stone-900 dark:text-stone-100')}>
                          Select: {response.formChoice}
                        </p>
                      ) : null}
                      <p className={cn('mt-4 max-w-[62ch] whitespace-pre-line', dossierTypography.body)}>
                        {response.body}
                      </p>
                      <ExpandableText
                        preview="Copy for SurveyMonkey"
                        label="Show paste block"
                        defaultOpen={false}
                      >
                        <p className="whitespace-pre-line">{response.copyText}</p>
                        {response.optionalNote ? (
                          <div className="mt-4 border-t border-stone-200 pt-4 dark:border-stone-700">
                            <p className={dossierTypography.eyebrow}>Optional note</p>
                            <p className={cn('mt-2 whitespace-pre-line', dossierTypography.body)}>
                              {response.optionalNote}
                            </p>
                          </div>
                        ) : null}
                      </ExpandableText>
                    </article>
                  ))}
                </div>

                <details className={cn('mt-8', grantCardClass)}>
                  <summary className={cn('cursor-pointer p-4 sm:p-5', dossierTypography.meta, '[&::-webkit-details-marker]:hidden')}>
                    <span className="font-semibold text-stone-900 dark:text-stone-100">Quick reference map</span>
                    <span className="ml-2 text-stone-500">▾</span>
                  </summary>
                  <div className="space-y-3 border-t border-stone-200 p-4 sm:p-5 dark:border-stone-700">
                    {fourArtistsSurveyAlignment.map((item) => (
                      <article key={item.question}>
                        <p className={dossierTypography.eyebrow}>{item.question}</p>
                        <p className={cn('mt-1', dossierTypography.meta)}>{item.answerSummary}</p>
                        {item.pageAnchor ? (
                          <button
                            type="button"
                            onClick={() => scrollToSection(item.pageAnchor!)}
                            className={cn('mt-2 text-sm', grantLinkClass)}
                          >
                            Jump to section →
                          </button>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </details>
              </SectionGroup>

              <SectionGroup
                id="statement"
                eyebrow="Statement"
                title="Application statement"
                summary="Consolidated interest and approach."
              >
                <ExpandableText
                  preview={fourArtistsStatement.preview}
                  label="Read full statement"
                  defaultOpen={false}
                >
                  <p>{fourArtistsStatement.full}</p>
                </ExpandableText>
              </SectionGroup>

              <SectionGroup
                id="contact"
                eyebrow="Contact"
                title="Links & next steps"
                summary="Include this page URL in the SurveyMonkey application."
              >
                <p className={cn('mb-4', dossierTypography.meta)}>
                  Application URL:{' '}
                  <Link href={fourArtistsMeta.route} className={grantLinkClass}>
                    {fourArtistsMeta.canonicalUrl}
                  </Link>
                </p>
                <div className={cn('mb-6 p-4 sm:p-5', grantCardClass)}>
                  <p className={dossierTypography.eyebrow}>Social handles — copy for form</p>
                  <ul className={cn('mt-3 space-y-1 font-mono text-sm text-stone-800 dark:text-stone-200')}>
                    <li>Instagram: {fourArtistsMeta.socialHandles.instagram}</li>
                    <li>YouTube: {fourArtistsMeta.socialHandles.youtube}</li>
                    <li>Website: {fourArtistsMeta.socialHandles.website}</li>
                    <li>Application: {fourArtistsMeta.canonicalUrl}</li>
                    <li>Email: {fourArtistsMeta.socialHandles.email}</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={fourArtistsMeta.social.website} className={grantButtonClass}>
                    Website
                  </a>
                  <a
                    href={fourArtistsMeta.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={grantButtonClass}
                  >
                    Instagram
                  </a>
                  <a
                    href={fourArtistsMeta.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={grantButtonClass}
                  >
                    YouTube
                  </a>
                  <a href={`mailto:${fourArtistsMeta.social.email}`} className={grantButtonClass}>
                    Email
                  </a>
                  <Link href="/bio" className={grantButtonClass}>
                    Bio
                  </Link>
                  <Link href="/tech-nonprofit/oolite" className={grantButtonClass}>
                    Oolite Digital Lab
                  </Link>
                </div>
              </SectionGroup>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
