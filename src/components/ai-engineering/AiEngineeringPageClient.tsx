'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, FileText, Mail, Briefcase, Github, Linkedin } from 'lucide-react';
import { CopyBlurbButton } from '@/components/ai-engineering/CopyBlurbButton';
import { TechStackLogoRow } from '@/components/ai-engineering/TechStackLogoRow';
import { AnimatedLogoBand } from '@/components/opportunities/AnimatedLogoBand';
import { OpportunityApplicationBanner } from '@/components/opportunities/OpportunityApplicationBanner';
import { opp } from '@/components/opportunities/opportunityTheme';
import { opportunitySocialIconClass } from '@/components/opportunities/opportunitySocialStyles';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';
import { aiEngineeringVisuals } from '@/content/ai-engineering/visualAssets';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

function trackCta(kind: string) {
  track('ai_engineering_cta_click', { kind });
}

export function AiEngineeringPageClient() {
  const {
    hero,
    recruiterSnapshot,
    agenticFit,
    stackMatch,
    recruiterBlurb,
    shortBio,
    technicalSummary150,
    howIWork,
    proofProjects,
    availability,
    downloads,
    resumeWebPath,
    careerPacketPath,
    fullDossierPath,
    email,
    recruiterLinksBlock,
  } = aiEngineeringPacket;

  return (
    <div className={opp.shell}>
      <OpportunityApplicationBanner banner={aiEngineeringVisuals.heroBanner} />
      <main className={cn(opp.main, 'pt-4 sm:pt-6')}>
        {/* 1. Hero */}
        <section id="hero" aria-labelledby="ai-eng-hero-heading">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className={opp.accent}>AI Engineering · Recruiter conversion page</p>
              <h1 id="ai-eng-hero-heading" className={cn(opp.h1, 'mt-3')}>
                {hero.headline}
              </h1>
              <p className={cn(opp.h2Bold, 'mt-2 text-cyan-600 dark:text-cyan-400')}>{hero.headlineStack}</p>
              <p className={cn(opp.bodyLg, 'mt-4 max-w-3xl')}>{hero.subheadline}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={resumeWebPath} className={opp.btnPrimary} onClick={() => trackCta('resume_web')}>
                  <FileText className="h-4 w-4 shrink-0" aria-hidden />
                  View Resume
                </Link>
                <Link
                  href={careerPacketPath}
                  className={opp.btnSecondary}
                  onClick={() => trackCta('career_packet')}
                >
                  <Briefcase className="h-4 w-4 shrink-0" aria-hidden />
                  View Career Packet
                </Link>
                <a href={`mailto:${email}`} className={opp.btnSecondary} onClick={() => trackCta('email')}>
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  Email Me
                </a>
              </div>
              <div className={opp.profilesBorder}>
                <span className={`w-full sm:w-auto sm:pr-2 ${opp.label}`}>Profiles</span>
                <a
                  href={availability.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={opportunitySocialIconClass('linkedin')}
                  aria-label="LinkedIn"
                  onClick={() => trackCta('linkedin_hero')}
                >
                  <Linkedin className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href={availability.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={opportunitySocialIconClass('github')}
                  aria-label="GitHub"
                  onClick={() => trackCta('github_hero')}
                >
                  <Github className="h-5 w-5" aria-hidden />
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
          {aiEngineeringVisuals.logoBand.length ? (
            <div className="mt-10">
              <AnimatedLogoBand
                logos={aiEngineeringVisuals.logoBand}
                bleed
                ariaLabel="Core AI engineering stack and platforms"
              />
            </div>
          ) : null}
          <TechStackLogoRow logoIds={[...aiEngineeringVisuals.techLogoIds]} />
        </section>

        {/* 2. Recruiter Snapshot */}
        <section className={opp.section} id="snapshot" aria-labelledby="snapshot-heading">
          <h2 id="snapshot-heading" className={opp.h2}>
            Recruiter snapshot
          </h2>
          <div className={cn(opp.tableWrap, 'mt-4')}>
            <table className="w-full text-sm">
              <tbody className={opp.divide}>
                {recruiterSnapshot.map((row) => (
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

        {/* 3. Claude Code / Agentic fit */}
        <section className={opp.section} id="agentic-fit" aria-labelledby="agentic-fit-heading">
          <h2 id="agentic-fit-heading" className={opp.h2}>
            {agenticFit.title}
          </h2>
          <p className={cn(opp.muted, 'mt-2 max-w-3xl')}>{agenticFit.intro}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2" role="list">
            {agenticFit.items.map((item) => (
              <li key={item} className={cn(opp.card, 'p-3 text-sm')}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Stack Match */}
        <section className={opp.section} id="stack-match" aria-labelledby="stack-match-heading">
          <h2 id="stack-match-heading" className={opp.h2}>
            Stack match
          </h2>
          <div className={cn(opp.tableWrap, 'mt-4')}>
            <table className="w-full text-sm">
              <thead>
                <tr className={opp.tableHead}>
                  <th className="px-4 py-2.5 text-left">Platform</th>
                  <th className="px-4 py-2.5 text-left">Proof angle</th>
                </tr>
              </thead>
              <tbody className={opp.divide}>
                {stackMatch.map((row) => (
                  <tr
                    key={row.platform}
                    className="border-b border-stone-100 dark:border-stone-800 last:border-0"
                  >
                    <td className={opp.tableCellStrong}>{row.platform}</td>
                    <td className={opp.tableCell}>{row.proofAngle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Proof Projects */}
        <section className={opp.section} id="proof" aria-labelledby="proof-heading">
          <h2 id="proof-heading" className={opp.h2}>
            Proof projects
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {proofProjects.map((project) => (
              <article key={project.slug} id={`proof-${project.slug}`} className={opp.card}>
                <div className={opp.cardMedia}>
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={opp.cardPad}>
                  <h3 className={opp.h3MoMA}>{project.title}</h3>
                  <dl className="mt-3 space-y-3 text-sm">
                    <div>
                      <dt className={opp.label}>Problem</dt>
                      <dd className={cn(opp.body, 'mt-1')}>{project.problem}</dd>
                    </div>
                    <div>
                      <dt className={opp.label}>System built</dt>
                      <dd className={cn(opp.body, 'mt-1')}>{project.systemBuilt}</dd>
                    </div>
                    <div>
                      <dt className={opp.label}>Stack</dt>
                      <dd className="mt-1 flex flex-wrap gap-1.5">
                        {project.stack.map((tag) => (
                          <span key={tag} className={opp.pill}>
                            {tag}
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className={opp.label}>Users / stakeholders</dt>
                      <dd className={cn(opp.body, 'mt-1')}>{project.users}</dd>
                    </div>
                    <div>
                      <dt className={opp.label}>Outcome</dt>
                      <dd className={cn(opp.body, 'mt-1')}>{project.outcome}</dd>
                    </div>
                    <div>
                      <dt className={opp.label}>Why it maps to AI engineering</dt>
                      <dd className={cn(opp.body, 'mt-1')}>{project.whyItMatters}</dd>
                    </div>
                  </dl>
                  {project.href ? (
                    <Link
                      href={project.href}
                      className={cn(opp.linkAccent, 'mt-4 inline-flex items-center gap-1.5 text-sm')}
                      onClick={() => trackCta(`project_${project.slug}`)}
                    >
                      View project
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 6. How I Work */}
        <section className={opp.section} id="how-i-work" aria-labelledby="how-i-work-heading">
          <h2 id="how-i-work-heading" className={opp.h2}>
            How I work
          </h2>
          <p className={cn(opp.body, 'mt-3 max-w-3xl font-medium')}>{howIWork.lead}</p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {howIWork.steps.map((step, i) => (
              <li key={step.title} className={cn(opp.card, 'p-4')}>
                <p className={opp.accent}>{String(i + 1).padStart(2, '0')}</p>
                <h3 className={cn(opp.h3, 'mt-1')}>{step.title}</h3>
                <p className={cn(opp.muted, 'mt-2')}>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 7. Career Packet / Resume + copy blocks */}
        <section className={opp.section} id="packet" aria-labelledby="packet-heading">
          <h2 id="packet-heading" className={opp.h2}>
            Career packet &amp; resume
          </h2>
          <p className={cn(opp.muted, 'mt-2 max-w-3xl')}>{shortBio}</p>
          <p className={cn(opp.body, 'mt-4 max-w-3xl')}>{technicalSummary150}</p>
          <blockquote className={cn(opp.callout, 'mt-6 max-w-3xl')}>
            <p className={opp.body}>{recruiterBlurb}</p>
          </blockquote>
          <CopyBlurbButton text={recruiterBlurb} onCopy={() => trackCta('copy_blurb')} />
          <div className={cn(opp.callout, 'mt-6 max-w-3xl')}>
            <p className={opp.label}>Send-ready link block</p>
            <pre className="mt-2 whitespace-pre-wrap font-mono text-xs leading-relaxed text-stone-700 dark:text-stone-300">
              {recruiterLinksBlock}
            </pre>
            <CopyBlurbButton
              text={recruiterLinksBlock}
              className="mt-3"
              onCopy={() => trackCta('copy_links')}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {downloads.resumePdf.available ? (
              <a
                href={downloads.resumePdf.path}
                download
                className={opp.btnPrimary}
                onClick={() => trackCta('resume_pdf')}
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden />
                {downloads.resumePdf.label}
              </a>
            ) : null}
            {downloads.resumePrint.available ? (
              <Link
                href={downloads.resumePrint.path}
                target="_blank"
                className={opp.btnSecondary}
                onClick={() => trackCta('resume_print')}
              >
                <FileText className="h-4 w-4 shrink-0" aria-hidden />
                {downloads.resumePrint.label}
              </Link>
            ) : null}
            <Link href={careerPacketPath} className={opp.btnSecondary} onClick={() => trackCta('career_packet_footer')}>
              <Briefcase className="h-4 w-4 shrink-0" aria-hidden />
              Career Packet
            </Link>
            <Link href={fullDossierPath} className={opp.btnSecondary} onClick={() => trackCta('full_dossier')}>
              Full GenAI dossier
            </Link>
          </div>
        </section>

        {/* 8. Contact */}
        <section className={opp.section} id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={opp.h2}>
            Contact
          </h2>
          <p className={cn(opp.body, 'mt-4 max-w-3xl')}>{availability.summary}</p>
          <ul className={cn(opp.body, 'mt-4 space-y-2')}>
            <li>
              <span className="font-medium text-stone-900 dark:text-stone-100">Email: </span>
              <a href={`mailto:${availability.email}`} className={opp.linkAccent} onClick={() => trackCta('email_footer')}>
                {availability.email}
              </a>
            </li>
            <li>
              <span className="font-medium text-stone-900 dark:text-stone-100">Location: </span>
              {availability.location}
            </li>
            <li>
              <span className="font-medium text-stone-900 dark:text-stone-100">LinkedIn: </span>
              <a
                href={availability.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={opp.linkAccent}
                onClick={() => trackCta('linkedin')}
              >
                linkedin.com/in/moisesdsanabria
              </a>
            </li>
            <li>
              <span className="font-medium text-stone-900 dark:text-stone-100">GitHub: </span>
              <a
                href={availability.github}
                target="_blank"
                rel="noopener noreferrer"
                className={opp.linkAccent}
                onClick={() => trackCta('github')}
              >
                github.com/moisestech
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
