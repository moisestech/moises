import type { Opportunity } from '@/content/opportunities/types';
import type { WorkSite } from './types';

/** Map a work microsite config into the shared Opportunity shape for recruiting components. */
export function workSiteToOpportunity(work: WorkSite): Opportunity {
  return {
    slug: work.slug,
    status: 'active',
    variant: 'compact',
    seo: work.seo,
    audienceKeywords: work.audienceKeywords,
    roleTitle: work.roleTitle,
    applicationBanner: work.applicationBanner,
    hero: work.hero,
    roleMatchRows: [],
    featuredProjectIds: work.caseStudies.map((c) => c.evidenceId),
    caseStudyOverrides: work.caseStudies,
    caseStudyColumns: 3,
    caseStudiesSectionTitle: work.caseStudiesSectionTitle,
    caseStudiesIntro: work.caseStudiesIntro,
    skillsMatrixRows: [],
    processSectionTitle: work.approachSectionTitle,
    processIntro: work.approachIntro,
    processSteps: work.approachSteps,
    ctas: work.ctas,
    techLogoIds: [],
    navItems: work.navItems,
    resumeSectionTitle: work.resumeSectionTitle,
    resumeSectionNote: work.resumeSectionNote,
  };
}
