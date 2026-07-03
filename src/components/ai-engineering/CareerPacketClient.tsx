'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { Download, FileText, Mail, Briefcase, Github } from 'lucide-react';
import { CareerPacketFitSection } from '@/components/ai-engineering/career-packet/CareerPacketFitSection';
import { CareerPacketParagraph } from '@/components/ai-engineering/career-packet/CareerPacketParagraph';
import { CareerPacketPortrait } from '@/components/ai-engineering/career-packet/CareerPacketPortrait';
import { CareerPacketSection } from '@/components/ai-engineering/career-packet/CareerPacketSection';
import { CareerPacketSnapshotSection } from '@/components/ai-engineering/career-packet/CareerPacketSnapshotSection';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getCareerPacketAccent } from '@/config/career-packet-section-theme';
import { careerPacketDossier } from '@/content/ai-engineering/dossier';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';
import { careerPacketSectionHighlights } from '@/content/ai-engineering/career-packet-keywords';
import { aiEngineeringVisuals } from '@/content/ai-engineering/visualAssets';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

function trackCta(kind: string) {
  track('career_packet_cta_click', { kind });
}

export function CareerPacketClient() {
  const dossier = careerPacketDossier;
  const p = aiEngineeringPacket;

  const [activeParagraphKey, setActiveParagraphKey] = useState<string | null>(null);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const handleParagraphActivate = useCallback((key: string | null) => {
    setActiveParagraphKey(key);
  }, []);

  const handleKeywordActivate = useCallback((term: string | null) => {
    setActiveKeyword(term);
  }, []);

  const heroAccent = getCareerPacketAccent('hero');
  const fitAccent = getCareerPacketAccent('fit');
  const snapshotAccent = getCareerPacketAccent('snapshot');
  const materialsAccent = getCareerPacketAccent('materials');

  const portraitGlow = activeParagraphKey?.startsWith('hero-') || Boolean(activeKeyword);

  return (
    <OpportunityShell navItems={dossier.navItems} getSectionNavAccent={getCareerPacketAccent}>
      <>
        <OpportunityApplicationBanner banner={dossier.applicationBanner} />
        <main className={cn(opp.main, 'pt-4 sm:pt-6')}>
          {dossier.audienceKeywords?.terms?.length ? (
            <OpportunityAudienceKeywords data={dossier.audienceKeywords} />
          ) : null}

          <CareerPacketSection id="hero" accent={heroAccent} isFirst>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className={cn('text-xs font-semibold uppercase tracking-wide', heroAccent.eyebrow)}>
                  Career packet · Forward to recruiters
                </p>
                <h1 className={cn(opp.h1, 'mt-2')}>{dossier.hero.headline}</h1>
                <p className={cn(opp.bodyLg, 'mt-2')}>{dossier.hero.subheadline}</p>
                {dossier.hero.trustLine ? <p className={`mt-2 ${opp.subtle}`}>{dossier.hero.trustLine}</p> : null}
                <div className={`mt-4 space-y-1 ${opp.body}`}>
                  {dossier.hero.introParagraphs.map((para, index) => (
                    <CareerPacketParagraph
                      key={para.slice(0, 48)}
                      text={para}
                      paragraphKey={`hero-${index}`}
                      highlights={careerPacketSectionHighlights.hero}
                      accent={heroAccent}
                      activeParagraphKey={activeParagraphKey}
                      activeKeyword={activeKeyword}
                      onParagraphActivate={handleParagraphActivate}
                      onKeywordActivate={handleKeywordActivate}
                    />
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/ai-engineering" className={opp.btnPrimary} onClick={() => trackCta('ai_engineering')}>
                    <Briefcase className="h-4 w-4 shrink-0" aria-hidden />
                    AI Engineering page
                  </Link>
                  <Link href={p.resumeWebPath} className={opp.btnSecondary} onClick={() => trackCta('resume_web')}>
                    <FileText className="h-4 w-4 shrink-0" aria-hidden />
                    View Resume
                  </Link>
                  <a
                    href={p.downloads.resumePdf.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={opp.btnSecondary}
                    onClick={() => trackCta('resume_pdf')}
                  >
                    <Download className="h-4 w-4 shrink-0" aria-hidden />
                    Download Resume
                  </a>
                  <a href={`mailto:${p.email}`} className={opp.btnSecondary} onClick={() => trackCta('email')}>
                    <Mail className="h-4 w-4 shrink-0" aria-hidden />
                    Email
                  </a>
                </div>
              </div>
              <div>
                <p className={cn(opp.label, heroAccent.eyebrow)}>Profile</p>
                <CareerPacketPortrait
                  src={aiEngineeringVisuals.headshot.src}
                  alt={aiEngineeringVisuals.headshot.alt}
                  accent={heroAccent}
                  glowActive={portraitGlow}
                  activeKeyword={activeKeyword}
                  className="mt-2"
                />
              </div>
            </div>
          </CareerPacketSection>

          <CareerPacketSection id="fit" accent={fitAccent}>
            <CareerPacketFitSection title={p.agenticFit.title} intro={p.agenticFit.intro} accent={fitAccent} />
          </CareerPacketSection>

          <div
            className={cn(
              '-mx-4 border-t px-4 sm:-mx-6 sm:px-6',
              snapshotAccent.sectionBorder,
              'bg-gradient-to-b',
              snapshotAccent.sectionGradient,
            )}
          >
            <CareerPacketSnapshotSection accent={snapshotAccent} />
          </div>

          <CareerPacketSection id="materials" accent={materialsAccent}>
            <h2 className={opp.h2}>Resume &amp; materials</h2>
            <CareerPacketParagraph
              text={p.technicalSummary150}
              paragraphKey="materials-summary"
              highlights={careerPacketSectionHighlights.materials}
              accent={materialsAccent}
              activeParagraphKey={activeParagraphKey}
              activeKeyword={activeKeyword}
              onParagraphActivate={handleParagraphActivate}
              onKeywordActivate={handleKeywordActivate}
              className={`mt-2 max-w-3xl ${opp.muted} border-l-0 px-0`}
            />
            <ul className="mt-6 grid gap-4 sm:grid-cols-2" role="list">
              {[
                {
                  href: p.resumeWebPath,
                  label: 'Resume (web)',
                  desc: 'Formal technology CV',
                  icon: FileText,
                  external: false,
                  kind: 'resume_web',
                },
                {
                  href: p.downloads.resumePdf.path,
                  label: p.downloads.resumePdf.label,
                  desc: 'PDF resume for forwarding',
                  icon: Download,
                  external: true,
                  kind: 'resume_pdf',
                },
                {
                  href: p.downloads.resumePrint.path,
                  label: p.downloads.resumePrint.label,
                  desc: 'Print → Save as PDF',
                  icon: FileText,
                  external: false,
                  kind: 'resume_print',
                },
                {
                  href: '/ai-engineering',
                  label: 'AI Engineering page',
                  desc: 'Full proof and stack match',
                  icon: Briefcase,
                  external: false,
                  kind: 'ai_engineering',
                },
                {
                  href: p.availability.github,
                  label: 'GitHub',
                  desc: 'github.com/moisestech — code and engineering history',
                  icon: Github,
                  external: true,
                  kind: 'github',
                },
              ].map((item) => {
                const Icon = item.icon;
                const className = cn(
                  opp.indexCard,
                  materialsAccent.mediaBorder,
                  'group flex h-full transition duration-300',
                  materialsAccent.cardHover,
                );
                const inner = (
                  <div className="flex h-full min-h-[5.5rem] items-center gap-4 p-5 text-left">
                    <div
                      className={cn(
                        'flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border transition duration-300 motion-reduce:transition-none',
                        materialsAccent.mediaBorder,
                        'bg-gradient-to-br from-amber-50/90 via-white to-amber-50/40 dark:from-amber-950/50 dark:via-stone-900 dark:to-amber-950/20',
                        'shadow-sm',
                        '[@media(hover:hover)]:group-hover:scale-105 [@media(hover:hover)]:group-hover:shadow-md',
                      )}
                      aria-hidden
                    >
                      <Icon className={cn('h-8 w-8', materialsAccent.eyebrow)} />
                    </div>
                    <div className="min-w-0 flex-1 text-left">
                      <span className={cn(opp.matrixPrimary, 'block text-left')}>{item.label}</span>
                      <p className={cn(opp.muted, 'mt-1.5 text-left leading-snug')}>{item.desc}</p>
                    </div>
                  </div>
                );
                if ('download' in item && item.download) {
                  return (
                    <li key={item.href}>
                      <a href={item.href} download className={className} onClick={() => trackCta(item.kind)}>
                        {inner}
                      </a>
                    </li>
                  );
                }
                if (item.external) {
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                        onClick={() => trackCta(item.kind)}
                      >
                        {inner}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link href={item.href} className={className} onClick={() => trackCta(item.kind)}>
                      {inner}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {p.proofProjects
                .filter((proj) => proj.href)
                .map((proj) => {
                  const external = proj.href!.startsWith('http');
                  const className = cn(
                    opp.pillTag,
                    materialsAccent.chipIdle,
                    'transition duration-300',
                    materialsAccent.cardHover,
                  );
                  if (external) {
                    return (
                      <a
                        key={proj.slug}
                        href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                        onClick={() => trackCta(`project_${proj.slug}`)}
                      >
                        {proj.title}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={proj.slug}
                      href={proj.href!}
                      className={className}
                      onClick={() => trackCta(`project_${proj.slug}`)}
                    >
                      {proj.title}
                    </Link>
                  );
                })}
              <Link
                href="/ai-engineering#proof-life-os"
                className={cn(opp.pillTag, materialsAccent.chipIdle, 'transition duration-300', materialsAccent.cardHover)}
                onClick={() => trackCta('project_life_os')}
              >
                Life OS / Recruiter Graph
              </Link>
            </div>
          </CareerPacketSection>

          <ResumeCTA opportunity={dossier} />
        </main>
      </>
    </OpportunityShell>
  );
}
