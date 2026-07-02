'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ExternalLink, FileText, Mail } from 'lucide-react';
import { CopyBlurbButton } from '@/components/ai-engineering/CopyBlurbButton';
import { opp } from '@/components/opportunities/opportunityTheme';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';
import { track } from '@/lib/analytics';
import { cn } from '@/lib/utils';

function trackCta(kind: string) {
  track('ai_engineering_cta_click', { kind });
}

export function AiEngineeringPageClient() {
  const {
    hero,
    bestFitRoles,
    bestFitNote,
    stackGroups,
    recruiterBlurb,
    proofProjects,
    availability,
    downloads,
    resumeWebPath,
    email,
  } = aiEngineeringPacket;

  return (
    <div className={opp.shell}>
      <main className={cn(opp.main, 'pt-8 sm:pt-10')}>
        {/* Hero */}
        <section id="hero" aria-labelledby="ai-eng-hero-heading">
          <p className={opp.accent}>AI Engineering · Recruiter packet</p>
          <h1 id="ai-eng-hero-heading" className={cn(opp.h1, 'mt-3')}>
            {hero.headline}
          </h1>
          <p className={cn(opp.bodyLg, 'mt-4 max-w-3xl')}>{hero.subheadline}</p>
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
            <Link
              href={resumeWebPath}
              className={opp.btnSecondary}
              onClick={() => trackCta('resume_web')}
            >
              <FileText className="h-4 w-4 shrink-0" aria-hidden />
              View Resume
            </Link>
            <a
              href={`mailto:${email}`}
              className={opp.btnSecondary}
              onClick={() => trackCta('email')}
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              {email}
            </a>
          </div>
        </section>

        {/* Best-fit roles */}
        <section className={opp.section} id="roles" aria-labelledby="roles-heading">
          <h2 id="roles-heading" className={opp.h2}>
            Best-fit roles
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2" role="list">
            {bestFitRoles.map((role) => (
              <li key={role}>
                <span className={opp.pillTag}>{role}</span>
              </li>
            ))}
          </ul>
          <p className={cn(opp.muted, 'mt-4 max-w-3xl')}>{bestFitNote}</p>
        </section>

        {/* Stack */}
        <section className={opp.section} id="stack" aria-labelledby="stack-heading">
          <h2 id="stack-heading" className={opp.h2}>
            Stack
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {stackGroups.map((group) => (
              <div key={group.area} className={cn(opp.card, 'p-4')}>
                <h3 className={opp.accent}>{group.area}</h3>
                <p className={cn(opp.body, 'mt-2')}>{group.tools}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recruiter blurb */}
        <section className={opp.section} id="blurb" aria-labelledby="blurb-heading">
          <h2 id="blurb-heading" className={opp.h2}>
            Recruiter blurb
          </h2>
          <blockquote className={cn(opp.callout, 'mt-4 max-w-3xl')}>
            <p className={opp.body}>{recruiterBlurb}</p>
          </blockquote>
          <CopyBlurbButton text={recruiterBlurb} onCopy={() => trackCta('copy_blurb')} />
        </section>

        {/* Proof cards */}
        <section className={opp.section} id="proof" aria-labelledby="proof-heading">
          <h2 id="proof-heading" className={opp.h2}>
            Selected proof
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {proofProjects.map((project) => (
              <article key={project.slug} className={opp.card}>
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
                      <dt className={opp.label}>What it is</dt>
                      <dd className={cn(opp.body, 'mt-1')}>{project.whatItIs}</dd>
                    </div>
                    <div>
                      <dt className={opp.label}>What I built</dt>
                      <dd className={cn(opp.body, 'mt-1')}>{project.whatIBuilt}</dd>
                    </div>
                    <div>
                      <dt className={opp.label}>Relevant stack</dt>
                      <dd className="mt-1 flex flex-wrap gap-1.5">
                        {project.stack.map((tag) => (
                          <span key={tag} className={opp.pill}>
                            {tag}
                          </span>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className={opp.label}>Why it matters</dt>
                      <dd className={cn(opp.body, 'mt-1')}>{project.whyItMatters}</dd>
                    </div>
                  </dl>
                  <Link
                    href={project.href}
                    className={cn(opp.linkAccent, 'mt-4 inline-flex items-center gap-1.5 text-sm')}
                    onClick={() => trackCta(`project_${project.slug}`)}
                  >
                    View project
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Availability */}
        <section className={opp.section} id="availability" aria-labelledby="availability-heading">
          <h2 id="availability-heading" className={opp.h2}>
            Availability
          </h2>
          <p className={cn(opp.body, 'mt-4 max-w-3xl')}>{availability.summary}</p>
          <ul className={cn(opp.body, 'mt-4 space-y-2')}>
            <li>
              <span className="font-medium text-stone-900 dark:text-stone-100">Email: </span>
              <a
                href={`mailto:${availability.email}`}
                className={opp.linkAccent}
                onClick={() => trackCta('email_footer')}
              >
                {availability.email}
              </a>
            </li>
            <li>
              <span className="font-medium text-stone-900 dark:text-stone-100">Location: </span>
              {availability.location}
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            {downloads.resumePdf.available ? (
              <a
                href={downloads.resumePdf.path}
                download
                className={opp.btnPrimary}
                onClick={() => trackCta('resume_pdf_footer')}
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden />
                {downloads.resumePdf.label}
              </a>
            ) : null}
            <Link
              href={resumeWebPath}
              className={opp.btnSecondary}
              onClick={() => trackCta('resume_web_footer')}
            >
              <FileText className="h-4 w-4 shrink-0" aria-hidden />
              View Resume
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
