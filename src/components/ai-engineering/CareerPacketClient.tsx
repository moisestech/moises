'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { Download, ExternalLink, FileText, Mail, Briefcase, Github, Linkedin } from 'lucide-react';
import { CopyBlurbButton } from '@/components/ai-engineering/CopyBlurbButton';
import { CareerPacketKeywordText } from '@/components/ai-engineering/career-packet/CareerPacketKeywordText';
import { CareerPacketParagraph } from '@/components/ai-engineering/career-packet/CareerPacketParagraph';
import { CareerPacketPortrait } from '@/components/ai-engineering/career-packet/CareerPacketPortrait';
import { CareerPacketSection } from '@/components/ai-engineering/career-packet/CareerPacketSection';
import { RecruiterSnapshotSection } from '@/components/ai-engineering/RecruiterSnapshotSection';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { opp } from '@/components/opportunities/opportunityTheme';
import { getCareerPacketAccent } from '@/config/career-packet-section-theme';
import { careerPacketDossier } from '@/content/ai-engineering/dossier';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';
import {
  careerPacketSectionHighlights,
  fitItemHighlights,
} from '@/content/ai-engineering/career-packet-keywords';
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
  const linksAccent = getCareerPacketAccent('links');
  const fitAccent = getCareerPacketAccent('fit');
  const snapshotAccent = getCareerPacketAccent('snapshot');
  const materialsAccent = getCareerPacketAccent('materials');
  const resumeAccent = getCareerPacketAccent('resume');

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

          <CareerPacketSection id="links" accent={linksAccent}>
            <h2 className={opp.h2}>Send-ready recruiter links</h2>
            <p className={`mt-2 max-w-3xl ${opp.muted}`}>Paste this block into Gmail replies.</p>
            <div className={cn(opp.callout, linksAccent.mediaBorder, 'mt-4 max-w-3xl transition duration-300', linksAccent.cardHover)}>
              <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                {p.recruiterLinksBlock}
              </pre>
              <CopyBlurbButton text={p.recruiterLinksBlock} className="mt-3" onCopy={() => trackCta('copy_links')} />
            </div>
            <blockquote className={cn(opp.callout, linksAccent.mediaBorder, 'mt-6 max-w-3xl transition duration-300', linksAccent.cardHover)}>
              <p className={cn(opp.label, linksAccent.eyebrow)}>Recruiter blurb</p>
              <CareerPacketParagraph
                text={p.recruiterBlurb}
                paragraphKey="links-blurb"
                highlights={careerPacketSectionHighlights.links}
                accent={linksAccent}
                activeParagraphKey={activeParagraphKey}
                activeKeyword={activeKeyword}
                onParagraphActivate={handleParagraphActivate}
                onKeywordActivate={handleKeywordActivate}
                className="mt-2 border-l-0 px-0"
              />
            </blockquote>
            <CopyBlurbButton text={p.recruiterBlurb} onCopy={() => trackCta('copy_blurb')} />
          </CareerPacketSection>

          <CareerPacketSection id="fit" accent={fitAccent}>
            <h2 className={opp.h2}>{p.agenticFit.title}</h2>
            <CareerPacketParagraph
              text={p.agenticFit.intro}
              paragraphKey="fit-intro"
              highlights={careerPacketSectionHighlights.fit}
              accent={fitAccent}
              activeParagraphKey={activeParagraphKey}
              activeKeyword={activeKeyword}
              onParagraphActivate={handleParagraphActivate}
              onKeywordActivate={handleKeywordActivate}
              className={`mt-2 max-w-3xl ${opp.muted} border-l-0 px-0`}
            />
            <ul className="mt-4 grid gap-2 sm:grid-cols-2" role="list">
              {p.agenticFit.items.map((item, index) => (
                <li
                  key={item}
                  className={cn(
                    opp.card,
                    fitAccent.mediaBorder,
                    'border-l-2 border-transparent p-3 text-sm transition duration-300',
                    fitAccent.cardHover,
                    activeParagraphKey === `fit-${index}` && fitAccent.paragraphActiveBg,
                    activeParagraphKey === `fit-${index}` && fitAccent.paragraphActiveBorder,
                  )}
                  onMouseEnter={() => handleParagraphActivate(`fit-${index}`)}
                  onMouseLeave={() => handleParagraphActivate(null)}
                  onFocus={() => handleParagraphActivate(`fit-${index}`)}
                  onBlur={() => handleParagraphActivate(null)}
                  tabIndex={0}
                >
                  <CareerPacketKeywordText
                    text={item}
                    highlights={fitItemHighlights(item)}
                    accent={fitAccent}
                    activeKeyword={activeKeyword}
                    onKeywordActivate={handleKeywordActivate}
                  />
                </li>
              ))}
            </ul>
          </CareerPacketSection>

          <div className={cn('-mx-4 border-t px-4 sm:-mx-6 sm:px-6', snapshotAccent.sectionBorder, 'bg-gradient-to-b', snapshotAccent.sectionGradient)}>
            <RecruiterSnapshotSection rows={[...p.recruiterSnapshot]} sectionId="snapshot" />
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
                  desc: 'GenAI-tailored PDF',
                  icon: Download,
                  external: false,
                  download: true,
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
                  href: p.fullDossierPath,
                  label: 'GenAI engineering dossier',
                  desc: 'Role-match matrix and teaching',
                  icon: ExternalLink,
                  external: false,
                  kind: 'full_dossier',
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
                  'flex h-full flex-col p-5 transition duration-300',
                  materialsAccent.cardHover,
                );
                const inner = (
                  <>
                    <Icon className={cn('h-5 w-5', materialsAccent.eyebrow)} aria-hidden />
                    <span className={cn(opp.matrixPrimary, 'mt-3')}>{item.label}</span>
                    <p className={cn(opp.muted, 'mt-1')}>{item.desc}</p>
                  </>
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
                if ('external' in item && item.external) {
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
                .map((proj) => (
                  <Link
                    key={proj.slug}
                    href={proj.href!}
                    className={cn(opp.pillTag, materialsAccent.chipIdle, 'transition duration-300', materialsAccent.cardHover)}
                    onClick={() => trackCta(`project_${proj.slug}`)}
                  >
                    {proj.title}
                  </Link>
                ))}
              <Link
                href="/ai-engineering#proof-life-os"
                className={cn(opp.pillTag, materialsAccent.chipIdle, 'transition duration-300', materialsAccent.cardHover)}
                onClick={() => trackCta('project_life_os')}
              >
                Life OS / Recruiter Graph
              </Link>
            </div>
          </CareerPacketSection>

          <CareerPacketSection id="resume" accent={resumeAccent} className="!mt-12 !pt-10">
            <h2 className={opp.h2}>Email footer</h2>
            <div className={cn(opp.callout, resumeAccent.mediaBorder, 'mt-4 max-w-3xl transition duration-300', resumeAccent.cardHover)}>
              <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                {p.recruiterEmailFooter}
              </pre>
              <CopyBlurbButton text={p.recruiterEmailFooter} className="mt-3" onCopy={() => trackCta('copy_footer')} />
            </div>
            <ul className={cn(opp.body, 'mt-6 space-y-2')}>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-stone-500" aria-hidden />
                <a href={`mailto:${p.email}`} className={opp.linkAccent}>
                  {p.email}
                </a>
              </li>
              <li>{p.availability.location}</li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 shrink-0 text-stone-500" aria-hidden />
                <a href={p.availability.linkedin} target="_blank" rel="noopener noreferrer" className={opp.linkAccent}>
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 shrink-0 text-stone-500" aria-hidden />
                <a href={p.availability.github} target="_blank" rel="noopener noreferrer" className={opp.linkAccent}>
                  GitHub
                </a>
              </li>
            </ul>
          </CareerPacketSection>

          <ResumeCTA opportunity={dossier} />
        </main>
      </>
    </OpportunityShell>
  );
}
