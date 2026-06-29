'use client';

import type { Skill } from '@/constants/resume';
import { resolveSkillIcon, resolveTechLogoForLabel } from '@/lib/cv/skill-logos';

type TechnologyCvSkillsGridProps = {
  skills: Skill[];
};

function SkillIcon({ skill }: { skill: Skill }) {
  const entry = resolveSkillIcon(skill);
  if (!entry?.imageSrc) {
    return (
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xs font-bold text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
        aria-hidden
      >
        {skill.name.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={entry.imageSrc}
      alt=""
      width={40}
      height={40}
      className={`h-10 w-10 shrink-0 rounded-lg border border-gray-200 bg-white object-contain p-1.5 dark:border-gray-600 dark:bg-gray-900 ${entry.imageClassName ?? ''}`}
    />
  );
}

function TechPill({ label }: { label: string }) {
  const logo = resolveTechLogoForLabel(label);
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-300">
      {logo?.imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo.imageSrc}
          alt=""
          width={14}
          height={14}
          className={`h-3.5 w-3.5 shrink-0 object-contain ${logo.imageClassName ?? ''}`}
        />
      ) : null}
      {label}
    </span>
  );
}

export function TechnologyCvSkillsGrid({ skills }: TechnologyCvSkillsGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {skills.map((skill) => (
        <li
          key={skill.name}
          className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900/40"
        >
          <SkillIcon skill={skill} />
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-gray-900 dark:text-white">
              {skill.name}
              <span className="ml-2 font-normal text-gray-500">({skill.years}+ yrs)</span>
            </p>
            {skill.technologies?.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {skill.technologies.map((tech) => (
                  <TechPill key={tech} label={tech} />
                ))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
