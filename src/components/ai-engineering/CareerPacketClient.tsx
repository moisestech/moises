'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, FileText, Mail, Briefcase, Github, Linkedin } from 'lucide-react';
import { CopyBlurbButton } from '@/components/ai-engineering/CopyBlurbButton';
import { RecruiterSnapshotSection } from '@/components/ai-engineering/RecruiterSnapshotSection';
import { OpportunityAudienceKeywords } from '@/components/opportunities/OpportunityAudienceKeywords';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { OpportunityShell } from '@/components/opportunities/OpportunityShell';
import { ResumeCTA } from '@/components/opportunities/ResumeCTA';
import { opp } from '@/components/opportunities/opportunityTheme';
import { careerPacketDossier } from '@/content/ai-engineering/dossier';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';
import { aiEngineeringVisuals } from '@/content/ai-engineering/visualAssets';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

function trackCta(kind: string) {
  track('career_packet_cta_click', { kind });
}

export function CareerPacketClient() {
  const dossier = careerPacketDossier;
  const p = aiEngineeringPacket;

  return (
    <OpportunityShell navItems={dossier.navItems}>
      <>
        <OpportunityApplicationBanner banner={dossier.applicationBanner} />
        <main className={cn(opp.main, 'pt-4 sm:pt-6')}>
          {dossier.audienceKeywords?.terms?.length ? (
            <OpportunityAudienceKeywords data={dossier.audienceKeywords} />
          ) : null}

          {/* Hero */}
          <section id="hero" className="scroll-mt-32">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className={opp.accent}>Career packet · Forward to recruiters</p>
                <h1 className={cn(opp.h1, 'mt-2')}>{dossier.hero.headline}</h1>
                <p className={cn(opp.bodyLg, 'mt-2')}>{dossier.hero.subheadline}</p>
                {dossier.hero.trustLine ? <p className={`mt-2 ${opp.subtle}`}>{dossier.hero.trustLine}</p> : null}
                <div className={`mt-4 space-y-3 ${opp.body}`}>
                  {dossier.hero.introParagraphs.map((para) => (
                    <p key={para.slice(0, 48)}>{para}</p>
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
                <p className={opp.label}>Profile</p>
                <div className={cn(opp.headshot, 'mt-2')}>
                  <Image
                    src={aiEngineeringVisuals.headshot.src}
                    alt={aiEngineeringVisuals.headshot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Links */}
          <section id="links" className={opp.section}>
            <h2 className={opp.h2}>Send-ready recruiter links</h2>
            <p className={`mt-2 max-w-3xl ${opp.muted}`}>Paste this block into Gmail replies.</p>
            <div className={`${opp.callout} mt-4 max-w-3xl`}>
              <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                {p.recruiterLinksBlock}
              </pre>
              <CopyBlurbButton text={p.recruiterLinksBlock} className="mt-3" onCopy={() => trackCta('copy_links')} />
            </div>
            <blockquote className={`${opp.callout} mt-6 max-w-3xl`}>
              <p className={opp.label}>Recruiter blurb</p>
              <p className={`mt-2 ${opp.body}`}>{p.recruiterBlurb}</p>
            </blockquote>
            <CopyBlurbButton text={p.recruiterBlurb} onCopy={() => trackCta('copy_blurb')} />
          </section>

          <section id="fit" className={opp.section}>
            <h2 className={opp.h2}>{p.agenticFit.title}</h2>
            <p className={`mt-2 max-w-3xl ${opp.muted}`}>{p.agenticFit.intro}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2" role="list">
              {p.agenticFit.items.map((item) => (
                <li key={item} className={cn(opp.card, 'p-3 text-sm')}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <RecruiterSnapshotSection rows={[...p.recruiterSnapshot]} sectionId="snapshot" />

          {/* Materials */}
          <section id="materials" className={opp.section}>
            <h2 className={opp.h2}>Resume &amp; materials</h2>
            <p className={`mt-2 max-w-3xl ${opp.muted}`}>{p.technicalSummary150}</p>
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
                const className = cn(opp.indexCard, 'flex h-full flex-col p-5');
                const inner = (
                  <>
                    <Icon className="h-5 w-5 text-cyan-500 dark:text-cyan-400" aria-hidden />
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
                    className={opp.pillTag}
                    onClick={() => trackCta(`project_${proj.slug}`)}
                  >
                    {proj.title}
                  </Link>
                ))}
              <Link href="/ai-engineering#proof-life-os" className={opp.pillTag} onClick={() => trackCta('project_life_os')}>
                Life OS / Recruiter Graph
              </Link>
            </div>
          </section>

          <section id="resume" className={opp.sectionSm}>
            <h2 className={opp.h2}>Email footer</h2>
            <div className={`${opp.callout} mt-4 max-w-3xl`}>
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
          </section>

          <ResumeCTA opportunity={dossier} />
        </main>
      </>
    </OpportunityShell>
  );
}
