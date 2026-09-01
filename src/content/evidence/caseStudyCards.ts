import { getEvidenceProject } from './projects';
import type { EvidenceType, TeachingMediaItem } from '@/content/opportunities/types';
import {
  flagshipEvidence,
  rankEvidenceForOpportunity,
  type FlagshipEvidenceId,
  opportunityEvidenceRecipes,
} from './flagships';

/** Per-role copy/image/link overrides on shared evidence projects. */
export type CaseStudyOverride = {
  evidenceId: string;
  title?: string;
  category?: string;
  summary?: string;
  skillTags?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageSrcDark?: string;
  imageLocal?: boolean;
  /** Inline diagram instead of a raster (Field Kit loop / AEP harness). */
  visual?: 'field-kit-loop' | 'harness' | 'thin-slice';
  evidenceType?: EvidenceType;
  href?: string;
  linkLabel?: string;
  /** Optional second outbound link (e.g. Oolite beside Lore Machine). */
  secondaryHref?: string;
  secondaryLinkLabel?: string;
  logoSrc?: string;
  logoAlt?: string;
  media?: TeachingMediaItem[];
};

export type ResolvedCaseStudyCard = {
  id: string;
  title: string;
  category: string;
  summary: string;
  skillTags: string[];
  imageSrc: string;
  imageAlt: string;
  imageSrcDark?: string;
  imageLocal?: boolean;
  visual?: 'field-kit-loop' | 'harness' | 'thin-slice';
  evidenceType?: EvidenceType;
  href?: string;
  linkLabel?: string;
  secondaryHref?: string;
  secondaryLinkLabel?: string;
  logoSrc?: string;
  logoAlt?: string;
  media?: TeachingMediaItem[];
  tier?: 'primary' | 'secondary' | 'supporting';
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
      imageSrcDark: o?.imageSrcDark ?? base.imageSrcDark,
      imageLocal: o?.imageLocal ?? base.imageLocal,
      visual: o?.visual,
      evidenceType: o?.evidenceType,
      href: o?.href ?? base.href,
      linkLabel: o?.linkLabel,
      secondaryHref: o?.secondaryHref,
      secondaryLinkLabel: o?.secondaryLinkLabel,
      logoSrc: o?.logoSrc,
      logoAlt: o?.logoAlt,
      media: o?.media,
    });
  }
  return cards;
}

/** Resolve flagship registry entries into case-study cards. */
export function resolveFlagshipCaseStudyCards(
  ids: FlagshipEvidenceId[],
  options?: { includeBuilding?: boolean },
): ResolvedCaseStudyCard[] {
  const cards: ResolvedCaseStudyCard[] = [];
  for (const id of ids) {
    const base = flagshipEvidence[id];
    if (!base) continue;
    if (base.status === 'planned') continue;
    if (!base.claimable && !options?.includeBuilding) continue;
    cards.push({
      id: base.id,
      title: base.title,
      category: base.subtitle,
      summary: base.summary,
      skillTags: base.skills.slice(0, 8),
      imageSrc: base.imageSrc,
      imageAlt: base.imageAlt,
      href: base.href,
      linkLabel: base.status === 'building' ? 'View (Building)' : 'View flagship',
    });
  }
  return cards;
}

export function resolveRecipeCaseStudyCards(
  recipeKey: keyof typeof opportunityEvidenceRecipes,
  options?: { includeBuilding?: boolean },
): ResolvedCaseStudyCard[] {
  return rankEvidenceForOpportunity(recipeKey, options).map((e) => ({
    id: e.id,
    title: e.title,
    category: `${e.tier.toUpperCase()} · ${e.subtitle}`,
    summary: e.summary,
    skillTags: e.skills.slice(0, 8),
    imageSrc: e.imageSrc,
    imageAlt: e.imageAlt,
    href: e.href,
    linkLabel: e.status === 'building' ? 'View (Building)' : 'View proof',
    tier: e.tier,
  }));
}
