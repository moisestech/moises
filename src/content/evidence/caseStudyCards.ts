import { getEvidenceProject } from './projects';

/** Per-role copy/image/link overrides on shared evidence projects. */
export type CaseStudyOverride = {
  evidenceId: string;
  title?: string;
  category?: string;
  summary?: string;
  skillTags?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageLocal?: boolean;
  href?: string;
  linkLabel?: string;
};

export type ResolvedCaseStudyCard = {
  id: string;
  title: string;
  category: string;
  summary: string;
  skillTags: string[];
  imageSrc: string;
  imageAlt: string;
  imageLocal?: boolean;
  href?: string;
  linkLabel?: string;
};

export function resolveCaseStudyCards(
  ids: string[],
  overrides: CaseStudyOverride[] = [],
): ResolvedCaseStudyCard[] {
  const byId = new Map(overrides.map((o) => [o.evidenceId, o]));

  const cards: ResolvedCaseStudyCard[] = [];
  for (const evidenceId of ids) {
    const base = getEvidenceProject(evidenceId);
    if (!base) continue;
    const o = byId.get(evidenceId);
    cards.push({
      id: evidenceId,
      title: o?.title ?? base.title,
      category: o?.category ?? base.category,
      summary: o?.summary ?? base.summary,
      skillTags: o?.skillTags ?? base.skillTags,
      imageSrc: o?.imageSrc ?? base.imageSrc,
      imageAlt: o?.imageAlt ?? base.imageAlt,
      imageLocal: o?.imageLocal ?? base.imageLocal,
      href: o?.href ?? base.href,
      linkLabel: o?.linkLabel,
    });
  }
  return cards;
}
