'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Briefcase, Building2 } from 'lucide-react';
import { resumeData } from '@/constants/resume';
import { technologyCvPrint } from '@/content/technologyCvPrint';
import {
  experienceJobId,
  experienceJobLabel,
  technologyCvHighlights,
} from '@/content/technology-cv-keywords';
import { technologyCvAccent, technologyCvText } from '@/config/technology-cv-theme';
import { CareerPacketParagraph } from '@/components/ai-engineering/career-packet/CareerPacketParagraph';
import { TechnologyCvTechPill } from '@/components/cv/TechnologyCvSkillsGrid';
import { cn } from '@/lib/utils';

function CompanyName({ company, url }: { company: string; url?: string }) {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={technologyCvText.link}>
        {company}
      </a>
    );
  }
  return <>{company}</>;
}

export function TechnologyCvExperienceSection() {
  const jobs = resumeData.experience;
  const jobIds = useMemo(
    () => jobs.map((job) => experienceJobId(job.company, job.period)),
    [jobs],
  );

  const [activeJobId, setActiveJobId] = useState<string | null>(jobIds[0] ?? null);
  const [activeParagraphKey, setActiveParagraphKey] = useState<string | null>(null);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && jobIds.includes(hash)) {
      setActiveJobId(hash);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [jobIds]);

  useEffect(() => {
    const nodes = jobIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveJobId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [jobIds]);

  const scrollToJob = useCallback((id: string) => {
    const node = document.getElementById(id);
    if (!node) return;
    setActiveJobId(id);
    node.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="relative">
      <p className={cn('mb-4 flex items-start gap-2 text-sm', technologyCvText.secondary)}>
        <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-300" aria-hidden />
        <span>{technologyCvPrint.experienceIntro}</span>
      </p>

      {jobs.length > 1 ? (
        <nav
          aria-label="Experience timeline"
          className="mb-6 hidden lg:block print:hidden"
        >
          <ol className="flex flex-wrap gap-2">
            {jobs.map((job, index) => {
              const id = jobIds[index];
              const isActive = activeJobId === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollToJob(id)}
                    className={cn(
                      'rounded-full border px-3 py-1 text-xs font-medium transition duration-200',
                      isActive
                        ? cn(technologyCvAccent.chipActive, 'shadow-sm')
                        : cn(
                            technologyCvAccent.chipIdle,
                            technologyCvText.secondary,
                            'hover:border-cyan-500/60 hover:text-cyan-800 dark:hover:border-cyan-400/60 dark:hover:text-cyan-200',
                          ),
                    )}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {experienceJobLabel(job.period, job.company)}
                    <span className="ml-1 hidden xl:inline opacity-70">· {job.company.split(' ')[0]}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}

      <ul className="space-y-6 md:space-y-5">
        {jobs.map((job, jobIndex) => {
          const id = jobIds[jobIndex];
          const isActive = activeJobId === id;

          return (
            <li
              key={`${job.company}-${job.period}`}
              id={id}
              className={cn(
                'scroll-mt-36 flex flex-col gap-2 rounded-xl border border-transparent p-3 transition-all duration-300 md:flex-row md:gap-4 md:p-4',
                isActive &&
                  cn(
                    'border-cyan-600/25 bg-gradient-to-r shadow-sm dark:border-cyan-400/25',
                    technologyCvAccent.paragraphActiveBg,
                  ),
              )}
            >
              <div
                className={cn(
                  'w-full shrink-0 text-sm font-medium md:w-36',
                  isActive
                    ? 'text-cyan-800 dark:text-cyan-200'
                    : technologyCvText.primary,
                )}
              >
                {job.period}
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4 md:flex-row md:items-start md:gap-5">
                <div className="min-w-0 flex-1 text-sm md:text-base">
                  <p className={cn('font-semibold', technologyCvText.primary)}>
                    <Building2
                      className="mr-1.5 inline h-4 w-4 -translate-y-px text-cyan-700 dark:text-cyan-300"
                      aria-hidden
                    />
                    {job.title},{' '}
                    <CompanyName company={job.company} url={job.companyUrl} />
                  </p>
                  <p className={technologyCvText.muted}>{job.location}</p>
                  <ul className="mt-2 list-disc space-y-2 pl-4">
                    {job.description.map((line, lineIndex) => {
                      const paragraphKey = `${id}-line-${lineIndex}`;
                      return (
                        <li key={paragraphKey} className={technologyCvText.secondary}>
                          <CareerPacketParagraph
                            text={line}
                            paragraphKey={paragraphKey}
                            highlights={technologyCvHighlights}
                            accent={technologyCvAccent}
                            activeParagraphKey={activeParagraphKey}
                            activeKeyword={activeKeyword}
                            onParagraphActivate={setActiveParagraphKey}
                            onKeywordActivate={setActiveKeyword}
                            className="list-none rounded-md px-2 py-1.5 -ml-2"
                          />
                        </li>
                      );
                    })}
                  </ul>
                  {job.technologies?.length ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.technologies.map((tech) => (
                        <TechnologyCvTechPill key={tech} label={tech} />
                      ))}
                    </div>
                  ) : null}
                </div>
                {job.imageSrc ? (
                  job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'mx-auto block w-full max-w-sm shrink-0 overflow-hidden rounded-lg border md:mx-0 md:max-w-none md:w-40 lg:w-48 xl:w-52',
                        'border-stone-200 dark:border-stone-700',
                        technologyCvAccent.cardHover,
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={job.imageSrc}
                        alt={job.imageAlt ?? `${job.company} — ${job.title}`}
                        className="aspect-[4/3] h-full w-full object-cover object-top"
                      />
                    </a>
                  ) : (
                    <div className="mx-auto w-full max-w-sm shrink-0 overflow-hidden rounded-lg border border-stone-200 dark:border-stone-700 md:mx-0 md:max-w-none md:w-40 lg:w-48 xl:w-52">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={job.imageSrc}
                        alt={job.imageAlt ?? `${job.company} — ${job.title}`}
                        className="aspect-[4/3] h-full w-full object-cover object-top"
                      />
                    </div>
                  )
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
