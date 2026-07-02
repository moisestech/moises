'use client';

import Link from 'next/link';
import { Download, ExternalLink, FileText, Mail, Briefcase, Github, Linkedin } from 'lucide-react';
import { CopyBlurbButton } from '@/components/ai-engineering/CopyBlurbButton';
import { opp } from '@/components/opportunities/opportunityTheme';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

function trackCta(kind: string) {
  track('career_packet_cta_click', { kind });
}

export function CareerPacketClient() {
  const p = aiEngineeringPacket;

  return (
    <div className={opp.shell}>
      <main className={cn(opp.main, 'pt-8 sm:pt-10')}>
        <p className={opp.accent}>Career packet · Forward to recruiters</p>
        <h1 className={cn(opp.h1, 'mt-3')}>Moises Sanabria — AI Engineering Career Packet</h1>
        <p className={cn(opp.bodyLg, 'mt-4 max-w-3xl')}>{p.careerPacketIntro}</p>

        {/* Send-ready links */}
        <div className={cn(opp.callout, 'mt-8 max-w-3xl')}>
          <p className={opp.label}>Send-ready recruiter links</p>
          <pre className="mt-2 whitespace-pre-wrap font-mono text-xs leading-relaxed text-stone-700 dark:text-stone-300">
            {p.recruiterLinksBlock}
          </pre>
          <CopyBlurbButton text={p.recruiterLinksBlock} className="mt-3" onCopy={() => trackCta('copy_links')} />
        </div>

        {/* Claude Code fit block */}
        <section className={opp.section} aria-labelledby="claude-fit-heading">
          <h2 id="claude-fit-heading" className={opp.h2}>
            Current fit: Claude Code / Agentic AI Engineering
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2" role="list">
            {p.agenticFit.items.map((item) => (
              <li key={item} className={cn(opp.card, 'p-3 text-sm')}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Snapshot */}
        <section className={opp.sectionSm} aria-labelledby="cp-snapshot-heading">
          <h2 id="cp-snapshot-heading" className={opp.h2}>
            At a glance
          </h2>
          <div className={cn(opp.tableWrap, 'mt-4')}>
            <table className="w-full text-sm">
              <tbody className={opp.divide}>
                {p.recruiterSnapshot.map((row) => (
                  <tr key={row.label} className="border-b border-stone-100 dark:border-stone-800 last:border-0">
                    <th scope="row" className={cn(opp.tableCellStrong, 'w-36 align-top sm:w-44')}>
                      {row.label}
                    </th>
                    <td className={opp.tableCell}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Short bio + technical summary */}
        <section className={opp.sectionSm} aria-labelledby="cp-bio-heading">
          <h2 id="cp-bio-heading" className={opp.h2}>
            Short bio
          </h2>
          <p className={cn(opp.body, 'mt-3 max-w-3xl')}>{p.shortBio}</p>
          <h3 className={cn(opp.h2Bold, 'mt-6')}>150-word technical summary</h3>
          <p className={cn(opp.body, 'mt-2 max-w-3xl')}>{p.technicalSummary150}</p>
          <CopyBlurbButton text={p.recruiterBlurb} className="mt-4" onCopy={() => trackCta('copy_blurb')} />
        </section>

        {/* Assets */}
        <section className={opp.sectionSm} aria-labelledby="cp-assets-heading">
          <h2 id="cp-assets-heading" className={opp.h2}>
            Resume &amp; materials
          </h2>
          <ul className="mt-4 space-y-3" role="list">
            <li>
              <Link
                href={p.resumeWebPath}
                className={cn(opp.cardInteractive, 'flex items-start gap-4 p-5')}
                onClick={() => trackCta('resume_web')}
              >
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500 dark:text-cyan-400" aria-hidden />
                <div>
                  <span className={opp.matrixPrimary}>Resume (web)</span>
                  <p className={cn(opp.muted, 'mt-1')}>Formal technology CV — experience, stack, links.</p>
                </div>
              </Link>
            </li>
            {p.downloads.resumePdf.available ? (
              <li>
                <a
                  href={p.downloads.resumePdf.path}
                  download
                  className={cn(opp.cardInteractive, 'flex items-start gap-4 p-5')}
                  onClick={() => trackCta('resume_pdf')}
                >
                  <Download className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500 dark:text-cyan-400" aria-hidden />
                  <div>
                    <span className={opp.matrixPrimary}>{p.downloads.resumePdf.label}</span>
                    <p className={cn(opp.muted, 'mt-1')}>GenAI-tailored PDF for recruiter forwarding.</p>
                  </div>
                </a>
              </li>
            ) : null}
            {p.downloads.resumePrint.available ? (
              <li>
                <Link
                  href={p.downloads.resumePrint.path}
                  target="_blank"
                  className={cn(opp.cardInteractive, 'flex items-start gap-4 p-5')}
                  onClick={() => trackCta('resume_print')}
                >
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500 dark:text-cyan-400" aria-hidden />
                  <div>
                    <span className={opp.matrixPrimary}>{p.downloads.resumePrint.label}</span>
                    <p className={cn(opp.muted, 'mt-1')}>Browser print → Save as PDF.</p>
                  </div>
                </Link>
              </li>
            ) : null}
            <li>
              <Link
                href="/ai-engineering"
                className={cn(opp.cardInteractive, 'flex items-start gap-4 p-5')}
                onClick={() => trackCta('ai_engineering')}
              >
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500 dark:text-cyan-400" aria-hidden />
                <div>
                  <span className={opp.matrixPrimary}>AI Engineering page</span>
                  <p className={cn(opp.muted, 'mt-1')}>Full proof, stack match, and project case studies.</p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href={p.fullDossierPath}
                className={cn(opp.cardInteractive, 'flex items-start gap-4 p-5')}
                onClick={() => trackCta('full_dossier')}
              >
                <ExternalLink className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500 dark:text-cyan-400" aria-hidden />
                <div>
                  <span className={opp.matrixPrimary}>Full GenAI engineering dossier</span>
                  <p className={cn(opp.muted, 'mt-1')}>Role-match matrix, teaching, and deeper case studies.</p>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/" className={cn(opp.cardInteractive, 'flex items-start gap-4 p-5')} onClick={() => trackCta('portfolio')}>
                <ExternalLink className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500 dark:text-cyan-400" aria-hidden />
                <div>
                  <span className={opp.matrixPrimary}>Portfolio</span>
                  <p className={cn(opp.muted, 'mt-1')}>Selected works and art practice.</p>
                </div>
              </Link>
            </li>
          </ul>
        </section>

        {/* Proof project links */}
        <section className={opp.sectionSm} aria-labelledby="cp-proof-heading">
          <h2 id="cp-proof-heading" className={opp.h2}>
            Relevant project case studies
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2" role="list">
            {p.proofProjects
              .filter((proj) => proj.href)
              .map((proj) => (
                <li key={proj.slug}>
                  <Link href={proj.href!} className={opp.pillTag} onClick={() => trackCta(`project_${proj.slug}`)}>
                    {proj.title}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/ai-engineering#proof-life-os" className={opp.pillTag} onClick={() => trackCta('project_life_os')}>
                Life OS / Recruiter Graph
              </Link>
            </li>
          </ul>
        </section>

        {/* Contact + email footer */}
        <section className={opp.sectionSm} aria-labelledby="cp-contact-heading">
          <h2 id="cp-contact-heading" className={opp.h2}>
            Contact &amp; availability
          </h2>
          <p className={cn(opp.body, 'mt-3')}>{p.availability.summary}</p>
          <ul className={cn(opp.body, 'mt-4 space-y-2')}>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-stone-500" aria-hidden />
              <a href={`mailto:${p.email}`} className={opp.linkAccent} onClick={() => trackCta('email')}>
                {p.email}
              </a>
            </li>
            <li>{p.availability.location}</li>
            <li className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 shrink-0 text-stone-500" aria-hidden />
              <a
                href={p.availability.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={opp.linkAccent}
                onClick={() => trackCta('linkedin')}
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="h-4 w-4 shrink-0 text-stone-500" aria-hidden />
              <a
                href={p.availability.github}
                target="_blank"
                rel="noopener noreferrer"
                className={opp.linkAccent}
                onClick={() => trackCta('github')}
              >
                GitHub
              </a>
            </li>
          </ul>
          <div className={cn(opp.callout, 'mt-6 max-w-3xl')}>
            <p className={opp.label}>Reusable email footer</p>
            <pre className="mt-2 whitespace-pre-wrap font-mono text-xs leading-relaxed text-stone-700 dark:text-stone-300">
              {p.recruiterEmailFooter}
            </pre>
            <CopyBlurbButton text={p.recruiterEmailFooter} className="mt-3" onCopy={() => trackCta('copy_footer')} />
          </div>
        </section>
      </main>
    </div>
  );
}
