'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { resumeData } from '@/constants/resume';
import { moisesSanabriaHeadshot } from '@/content/evidence/recruitingLogoBand';
import { technologyCvPdfPath, technologyCvPrint } from '@/content/technologyCvPrint';
import { CvCollapsibleSection } from '@/components/cv/CvCollapsibleSection';
import { TechnologyCvSkillsGrid } from '@/components/cv/TechnologyCvSkillsGrid';

function CompanyName({ company, url }: { company: string; url?: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:text-blue-600 dark:hover:text-[#67e8f9]"
      >
        {company}
      </a>
    );
  }
  return <>{company}</>;
}

export default function TechnologyCvView() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 md:px-11 md:pt-12 print:py-4">
      <header className="scroll-mt-40 mb-6 border-b border-gray-200 pb-6 dark:border-gray-700 print:mb-2">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Technology CV</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white print:text-2xl">{resumeData.name}</h1>
        <p className="mt-1 text-xl text-gray-700 dark:text-gray-300 print:text-lg">{technologyCvPrint.titleLine}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{technologyCvPrint.location}</p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
          <a
            href={moisesSanabriaHeadshot}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            <Image src={moisesSanabriaHeadshot} alt="Moises Sanabria" fill className="object-cover" sizes="96px" />
          </a>
          <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {resumeData.phone ? (
              <p>
                <span className="font-medium text-gray-900 dark:text-white">Phone: </span>
                <Link href={`tel:${resumeData.phone.replace(/\D/g, '')}`} className="underline underline-offset-4">
                  {resumeData.phone}
                </Link>
              </p>
            ) : null}
            <p>
              <span className="font-medium text-gray-900 dark:text-white">Email: </span>
              <Link href={`mailto:${resumeData.email}`} className="underline underline-offset-4">
                {resumeData.email}
              </Link>
            </p>
            <p>
              <span className="font-medium text-gray-900 dark:text-white">Site: </span>
              <Link href="https://moises.tech" className="underline underline-offset-4">
                moises.tech
              </Link>
            </p>
            <p>
              <span className="font-medium text-gray-900 dark:text-white">LinkedIn: </span>
              <Link
                href={`https://www.linkedin.com${resumeData.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                linkedin.com{resumeData.linkedin}
              </Link>
            </p>
            <p>
              <span className="font-medium text-gray-900 dark:text-white">GitHub: </span>
              <Link
                href={`https://${resumeData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {resumeData.github}
              </Link>
            </p>
          </div>
        </div>
      </header>

      <CvCollapsibleSection id="summary" title="Summary" defaultOpen>
        <div className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {technologyCvPrint.summary.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
      </CvCollapsibleSection>

      <CvCollapsibleSection id="experience" title="Professional Experience" defaultOpen>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{technologyCvPrint.experienceIntro}</p>
        <ul className="space-y-5">
          {resumeData.experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div className="w-full shrink-0 text-sm font-medium text-gray-900 dark:text-gray-100 sm:w-36">
                {job.period}
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <div className="min-w-0 flex-1 text-sm">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {job.title},{' '}
                    <CompanyName company={job.company} url={job.companyUrl} />
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">{job.location}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-gray-700 dark:text-gray-300">
                    {job.description.map((line) => (
                      <li key={line.slice(0, 48)}>{line}</li>
                    ))}
                  </ul>
                  {job.technologies?.length ? (
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{job.technologies.join(' · ')}</p>
                  ) : null}
                </div>
                {job.imageSrc ? (
                  job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 sm:w-40 md:w-48 lg:w-52"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={job.imageSrc}
                        alt={job.imageAlt ?? `${job.company} — ${job.title}`}
                        className="aspect-[4/3] h-full w-full object-cover object-top"
                      />
                    </a>
                  ) : (
                    <div className="w-full shrink-0 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 sm:w-40 md:w-48 lg:w-52">
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
          ))}
        </ul>
      </CvCollapsibleSection>

      <CvCollapsibleSection id="education" title="Education" defaultOpen={false}>
        <ul className="space-y-3">
          {resumeData.education.map((edu) => (
            <li key={edu.institution} className="flex flex-col gap-1 text-sm sm:flex-row sm:gap-4">
              <div className="w-full font-medium sm:w-36">{edu.period}</div>
              <div>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.institution}, {edu.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CvCollapsibleSection>

      <CvCollapsibleSection id="skills" title="Technical Skills" defaultOpen={false}>
        <TechnologyCvSkillsGrid skills={resumeData.skills} />
      </CvCollapsibleSection>

      {resumeData.projects.length > 0 ? (
        <CvCollapsibleSection id="projects" title="Selected Projects" defaultOpen={false}>
          <ul className="space-y-4">
            {resumeData.projects.map((project) => (
              <li key={project.name} className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-blue-600 dark:hover:text-[#67e8f9]"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </p>
                <p className="mt-1 text-gray-700 dark:text-gray-300">{project.description}</p>
                <p className="mt-1 text-xs text-gray-500">{project.technologies.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </CvCollapsibleSection>
      ) : null}

      {resumeData.interests.length > 0 ? (
        <CvCollapsibleSection id="interests" title="Interests" defaultOpen={false}>
          <p className="text-sm text-gray-700 dark:text-gray-300">{resumeData.interests.join(' · ')}</p>
        </CvCollapsibleSection>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3 print:hidden">
        <a
          href={technologyCvPdfPath}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white"
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden />
          Download PDF
        </a>
        <Link
          href="/cv/tech/print"
          className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          Open print view (Save as PDF)
        </Link>
        <Link
          href="/cv/artist"
          className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          View artist CV
        </Link>
      </div>
    </div>
  );
}
