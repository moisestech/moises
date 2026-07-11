'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  Briefcase,
  Download,
  ExternalLink,
  FolderGit2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  User,
  Wrench,
} from 'lucide-react';
import { resumeData } from '@/constants/resume';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { technologyCvPdfPath, technologyCvPrint } from '@/content/technologyCvPrint';
import { technologyCvHighlights } from '@/content/technology-cv-keywords';
import { technologyCvAccent, technologyCvText } from '@/config/technology-cv-theme';
import { CareerPacketParagraph } from '@/components/ai-engineering/career-packet/CareerPacketParagraph';
import { CvCollapsibleSection } from '@/components/cv/CvCollapsibleSection';
import { TechnologyCvExperienceSection } from '@/components/cv/TechnologyCvExperienceSection';
import { TechnologyCvSkillsGrid, TechnologyCvTechPill } from '@/components/cv/TechnologyCvSkillsGrid';
import { cn } from '@/lib/utils';

export default function TechnologyCvView() {
  const [activeSummaryKey, setActiveSummaryKey] = useState<string | null>(null);
  const [activeSummaryKeyword, setActiveSummaryKeyword] = useState<string | null>(null);

  return (
    <div
      className={cn(
        'mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 md:px-11 md:pt-12 print:py-4',
        technologyCvText.primary,
      )}
    >
      <header className="scroll-mt-40 mb-6 border-b border-stone-200 pb-6 dark:border-stone-700 print:mb-2">
        <p className={cn('flex items-center gap-2 text-xs font-medium uppercase tracking-wide', technologyCvText.muted)}>
          <Wrench className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-300" aria-hidden />
          Technology CV
        </p>
        <h1 className="mt-2 text-3xl font-bold print:text-2xl">{resumeData.name}</h1>
        <p className={cn('mt-1 text-xl print:text-lg', technologyCvText.secondary)}>{technologyCvPrint.titleLine}</p>
        <p className={cn('mt-1 flex items-center gap-1.5 text-sm', technologyCvText.muted)}>
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {technologyCvPrint.location}
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
          <a
            href={moisesSanabriaHeadshot}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-800 sm:mx-0"
          >
            <Image src={moisesSanabriaHeadshot} alt="Moises Sanabria" fill className="object-cover" sizes="96px" />
          </a>
          <div className={cn('space-y-2 text-center text-sm sm:text-left', technologyCvText.secondary)}>
            <p className="flex items-center justify-center gap-2 sm:justify-start">
              <Mail className="h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-300" aria-hidden />
              <span className="font-medium text-stone-900 dark:text-stone-50">Email: </span>
              <Link href={`mailto:${resumeData.email}`} className={technologyCvText.link}>
                {resumeData.email}
              </Link>
            </p>
            <p className="flex items-center justify-center gap-2 sm:justify-start">
              <ExternalLink className="h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-300" aria-hidden />
              <span className="font-medium text-stone-900 dark:text-stone-50">Site: </span>
              <Link href="https://moises.tech" className={technologyCvText.link}>
                moises.tech
              </Link>
            </p>
            <p className="flex items-center justify-center gap-2 sm:justify-start">
              <Linkedin className="h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-300" aria-hidden />
              <span className="font-medium text-stone-900 dark:text-stone-50">LinkedIn: </span>
              <Link
                href={`https://www.linkedin.com${resumeData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className={technologyCvText.link}
              >
                linkedin.com{resumeData.linkedin}
              </Link>
            </p>
            <p className="flex items-center justify-center gap-2 sm:justify-start">
              <Github className="h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-300" aria-hidden />
              <span className="font-medium text-stone-900 dark:text-stone-50">GitHub: </span>
              <Link
                href={`https://${resumeData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className={technologyCvText.link}
              >
                {resumeData.github}
              </Link>
            </p>
          </div>
        </div>
      </header>

      <CvCollapsibleSection id="summary" title="Summary" icon={User} defaultOpen>
        <div className="space-y-3 text-base leading-relaxed sm:text-lg sm:leading-8">
          {technologyCvPrint.summary.map((para, index) => (
            <CareerPacketParagraph
              key={para.slice(0, 40)}
              text={para}
              paragraphKey={`summary-${index}`}
              highlights={technologyCvHighlights}
              accent={technologyCvAccent}
              activeParagraphKey={activeSummaryKey}
              activeKeyword={activeSummaryKeyword}
              onParagraphActivate={setActiveSummaryKey}
              onKeywordActivate={setActiveSummaryKeyword}
              className={technologyCvText.secondary}
            />
          ))}
        </div>
      </CvCollapsibleSection>

      <CvCollapsibleSection id="experience" title="Professional Experience" icon={Briefcase} defaultOpen>
        <TechnologyCvExperienceSection />
      </CvCollapsibleSection>

      <CvCollapsibleSection id="education" title="Education" icon={GraduationCap} defaultOpen={false}>
        <ul className="space-y-3">
          {resumeData.education.map((edu) => (
            <li key={edu.institution} className="flex flex-col gap-1 text-sm md:flex-row md:gap-4">
              <div className={cn('w-full font-medium md:w-36', technologyCvText.primary)}>{edu.period}</div>
              <div>
                <p className="font-medium text-stone-900 dark:text-stone-50">{edu.degree}</p>
                <p className={technologyCvText.secondary}>
                  {edu.institution}, {edu.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CvCollapsibleSection>

      <CvCollapsibleSection id="skills" title="Technical Skills" icon={Wrench} defaultOpen={false}>
        <TechnologyCvSkillsGrid skills={resumeData.skills} />
      </CvCollapsibleSection>

      {resumeData.projects.length > 0 ? (
        <CvCollapsibleSection id="projects" title="Selected Projects" icon={FolderGit2} defaultOpen={false}>
          <ul className="space-y-4">
            {resumeData.projects.map((project) => (
              <li key={project.name} className="text-sm">
                <p className="font-semibold text-stone-900 dark:text-stone-50">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={technologyCvText.link}
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </p>
                <p className={cn('mt-1', technologyCvText.secondary)}>{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <TechnologyCvTechPill key={tech} label={tech} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </CvCollapsibleSection>
      ) : null}

      {resumeData.interests.length > 0 ? (
        <CvCollapsibleSection id="interests" title="Interests" icon={Sparkles} defaultOpen={false}>
          <div className="flex flex-wrap gap-1.5">
            {resumeData.interests.map((interest) => (
              <TechnologyCvTechPill key={interest} label={interest} />
            ))}
          </div>
        </CvCollapsibleSection>
      ) : null}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap print:hidden">
        <a
          href={technologyCvPdfPath}
          download
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white sm:w-auto"
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden />
          Download PDF
        </a>
        <Link
          href="/cv/tech/print"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800 sm:w-auto"
        >
          <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
          Open print view (Save as PDF)
        </Link>
        <Link
          href="/cv/artist"
          className="inline-flex w-full items-center justify-center rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-medium text-stone-800 hover:bg-stone-50 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800 sm:w-auto"
        >
          View artist CV
        </Link>
      </div>
    </div>
  );
}
