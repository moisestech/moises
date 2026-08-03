/**
 * Color-categorized section accents for compact + role-portfolio opportunity dossiers.
 * Static Tailwind strings so JIT can see every class.
 */
export type OpportunityCompactSectionAccent = {
  navActive: string;
  navActiveText: string;
  navIdle: string;
  mediaBorder?: string;
  rail: string;
  eyebrow: string;
  softBg: string;
};

const hero: OpportunityCompactSectionAccent = {
  navActive: 'border-sky-700 bg-sky-800/95 dark:border-sky-300 dark:bg-sky-200',
  navActiveText: 'text-white dark:text-sky-950',
  navIdle: 'border-stone-300 hover:border-sky-600 dark:border-stone-600 dark:hover:border-sky-400',
  mediaBorder: 'border-b-sky-600/40 dark:border-b-sky-400/35',
  rail: 'border-l-sky-600 dark:border-l-sky-400',
  eyebrow: 'text-sky-800 dark:text-sky-300',
  softBg: 'bg-gradient-to-br from-sky-500/8 via-transparent to-transparent',
};

const fit: OpportunityCompactSectionAccent = {
  navActive: 'border-emerald-700 bg-emerald-800/95 dark:border-emerald-300 dark:bg-emerald-200',
  navActiveText: 'text-white dark:text-emerald-950',
  navIdle: 'border-stone-300 hover:border-emerald-600 dark:border-stone-600 dark:hover:border-emerald-400',
  mediaBorder: 'border-b-emerald-600/40 dark:border-b-emerald-400/35',
  rail: 'border-l-emerald-600 dark:border-l-emerald-400',
  eyebrow: 'text-emerald-800 dark:text-emerald-300',
  softBg: 'bg-gradient-to-br from-emerald-500/8 via-transparent to-transparent',
};

const caseStudies: OpportunityCompactSectionAccent = {
  navActive: 'border-violet-700 bg-violet-800/95 dark:border-violet-300 dark:bg-violet-200',
  navActiveText: 'text-white dark:text-violet-950',
  navIdle: 'border-stone-300 hover:border-violet-600 dark:border-stone-600 dark:hover:border-violet-400',
  mediaBorder: 'border-b-violet-600/40 dark:border-b-violet-400/35',
  rail: 'border-l-violet-600 dark:border-l-violet-400',
  eyebrow: 'text-violet-800 dark:text-violet-300',
  softBg: 'bg-gradient-to-br from-violet-500/8 via-transparent to-transparent',
};

const skills: OpportunityCompactSectionAccent = {
  navActive: 'border-amber-700 bg-amber-700/95 dark:border-amber-300 dark:bg-amber-200',
  navActiveText: 'text-white dark:text-amber-950',
  navIdle: 'border-stone-300 hover:border-amber-600 dark:border-stone-600 dark:hover:border-amber-400',
  mediaBorder: 'border-b-amber-600/40 dark:border-b-amber-400/35',
  rail: 'border-l-amber-600 dark:border-l-amber-400',
  eyebrow: 'text-amber-900 dark:text-amber-300',
  softBg: 'bg-gradient-to-br from-amber-500/8 via-transparent to-transparent',
};

const process: OpportunityCompactSectionAccent = {
  navActive: 'border-teal-700 bg-teal-800/95 dark:border-teal-300 dark:bg-teal-200',
  navActiveText: 'text-white dark:text-teal-950',
  navIdle: 'border-stone-300 hover:border-teal-600 dark:border-stone-600 dark:hover:border-teal-400',
  mediaBorder: 'border-b-teal-600/40 dark:border-b-teal-400/35',
  rail: 'border-l-teal-600 dark:border-l-teal-400',
  eyebrow: 'text-teal-800 dark:text-teal-300',
  softBg: 'bg-gradient-to-br from-teal-500/8 via-transparent to-transparent',
};

const resume: OpportunityCompactSectionAccent = {
  navActive: 'border-cyan-700 bg-cyan-700/95 dark:border-cyan-300 dark:bg-cyan-200',
  navActiveText: 'text-white dark:text-cyan-950',
  navIdle: 'border-stone-300 hover:border-cyan-600 dark:border-stone-600 dark:hover:border-cyan-400',
  mediaBorder: 'border-b-cyan-600/40 dark:border-b-cyan-400/35',
  rail: 'border-l-cyan-600 dark:border-l-cyan-400',
  eyebrow: 'text-cyan-800 dark:text-cyan-300',
  softBg: 'bg-gradient-to-br from-cyan-500/8 via-transparent to-transparent',
};

/** Role-portfolio: evidence roadmap */
const evidence: OpportunityCompactSectionAccent = {
  navActive: 'border-cyan-700 bg-cyan-800/95 dark:border-cyan-300 dark:bg-cyan-200',
  navActiveText: 'text-white dark:text-cyan-950',
  navIdle: 'border-stone-300 hover:border-cyan-600 dark:border-stone-600 dark:hover:border-cyan-400',
  mediaBorder: 'border-b-cyan-600/40 dark:border-b-cyan-400/35',
  rail: 'border-l-cyan-600 dark:border-l-cyan-400',
  eyebrow: 'text-cyan-800 dark:text-cyan-300',
  softBg: 'bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent',
};

/** Role-portfolio: coming-soon / growth track */
const comingSoon: OpportunityCompactSectionAccent = {
  navActive: 'border-amber-700 bg-amber-700/95 dark:border-amber-200 dark:bg-amber-200',
  navActiveText: 'text-white dark:text-amber-950',
  navIdle: 'border-stone-300 hover:border-amber-600 dark:border-stone-600 dark:hover:border-amber-400',
  mediaBorder: 'border-b-amber-600/40 dark:border-b-amber-400/35',
  rail: 'border-l-amber-500 dark:border-l-amber-400',
  eyebrow: 'text-amber-900 dark:text-amber-300',
  softBg: 'bg-gradient-to-br from-amber-500/10 via-transparent to-transparent',
};

const capabilities: OpportunityCompactSectionAccent = {
  navActive: 'border-violet-700 bg-violet-800/95 dark:border-violet-300 dark:bg-violet-200',
  navActiveText: 'text-white dark:text-violet-950',
  navIdle: 'border-stone-300 hover:border-violet-600 dark:border-stone-600 dark:hover:border-violet-400',
  mediaBorder: 'border-b-violet-600/40 dark:border-b-violet-400/35',
  rail: 'border-l-violet-600 dark:border-l-violet-400',
  eyebrow: 'text-violet-800 dark:text-violet-300',
  softBg: 'bg-gradient-to-br from-violet-500/8 via-transparent to-transparent',
};

const experience: OpportunityCompactSectionAccent = {
  navActive: 'border-sky-700 bg-sky-800/95 dark:border-sky-300 dark:bg-sky-200',
  navActiveText: 'text-white dark:text-sky-950',
  navIdle: 'border-stone-300 hover:border-sky-600 dark:border-stone-600 dark:hover:border-sky-400',
  mediaBorder: 'border-b-sky-600/40 dark:border-b-sky-400/35',
  rail: 'border-l-sky-600 dark:border-l-sky-400',
  eyebrow: 'text-sky-800 dark:text-sky-300',
  softBg: 'bg-gradient-to-br from-sky-500/8 via-transparent to-transparent',
};

const selectedProject: OpportunityCompactSectionAccent = {
  navActive: 'border-emerald-700 bg-emerald-800/95 dark:border-emerald-300 dark:bg-emerald-200',
  navActiveText: 'text-white dark:text-emerald-950',
  navIdle: 'border-stone-300 hover:border-emerald-600 dark:border-stone-600 dark:hover:border-emerald-400',
  mediaBorder: 'border-b-emerald-600/40 dark:border-b-emerald-400/35',
  rail: 'border-l-emerald-600 dark:border-l-emerald-400',
  eyebrow: 'text-emerald-800 dark:text-emerald-300',
  softBg: 'bg-gradient-to-br from-emerald-500/8 via-transparent to-transparent',
};

const technologies: OpportunityCompactSectionAccent = {
  navActive: 'border-teal-700 bg-teal-800/95 dark:border-teal-300 dark:bg-teal-200',
  navActiveText: 'text-white dark:text-teal-950',
  navIdle: 'border-stone-300 hover:border-teal-600 dark:border-stone-600 dark:hover:border-teal-400',
  mediaBorder: 'border-b-teal-600/40 dark:border-b-teal-400/35',
  rail: 'border-l-teal-600 dark:border-l-teal-400',
  eyebrow: 'text-teal-800 dark:text-teal-300',
  softBg: 'bg-gradient-to-br from-teal-500/8 via-transparent to-transparent',
};

const principles: OpportunityCompactSectionAccent = {
  navActive: 'border-stone-700 bg-stone-800/95 dark:border-stone-300 dark:bg-stone-200',
  navActiveText: 'text-white dark:text-stone-950',
  navIdle: 'border-stone-300 hover:border-stone-500 dark:border-stone-600 dark:hover:border-stone-400',
  mediaBorder: 'border-b-stone-500/40 dark:border-b-stone-400/35',
  rail: 'border-l-stone-500 dark:border-l-stone-400',
  eyebrow: 'text-stone-800 dark:text-stone-300',
  softBg: 'bg-gradient-to-br from-stone-500/8 via-transparent to-transparent',
};

const byId: Record<string, OpportunityCompactSectionAccent> = {
  hero,
  fit,
  'case-studies': caseStudies,
  skills,
  process,
  resume,
  contact: resume,
  evidence,
  'coming-soon': comingSoon,
  capabilities,
  experience,
  'selected-project': selectedProject,
  technologies,
  principles,
  work: caseStudies,
  education: skills,
  creative: caseStudies,
  credibility: fit,
  'comfyui-experience': selectedProject,
  'work-sample': evidence,
  'provenance-explorer': comingSoon,
  'selected-work': caseStudies,
  'role-fit': fit,
  engineering: principles,
  ramp: comingSoon,
};

export function getOpportunityCompactAccent(sectionId: string): OpportunityCompactSectionAccent {
  return byId[sectionId] ?? hero;
}
