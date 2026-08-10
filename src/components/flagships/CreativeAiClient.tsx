'use client';

import { CreativeSystemsFlagshipClient } from '@/components/flagships/CreativeSystemsFlagshipClient';
import { creativeAiFlagship } from '@/content/flagships/creative-ai';

export function CreativeAiClient() {
  const data = creativeAiFlagship;
  return (
    <CreativeSystemsFlagshipClient
      data={{
        flagshipId: 'creative-ai',
        eyebrow: data.eyebrow,
        title: data.title,
        subtitle: data.subtitle,
        intro: data.intro,
        primaryCta: data.primaryCta,
        secondaryCta: data.secondaryCta,
        tertiaryCta: data.tertiaryCta,
        banner: data.banner,
        headshotSrc: data.headshotSrc,
        headshotAlt: data.headshotAlt,
        logoBand: data.logoBand,
        navItems: data.navItems,
        capabilitiesTitle: data.capabilitiesTitle,
        capabilitiesIntro: data.capabilitiesIntro,
        capabilities: data.capabilities,
        ganTitle: data.ganTitle,
        ganIntro: data.ganIntro,
        ganPillars: data.ganPillars,
        caseStudiesTitle: data.caseStudiesTitle,
        caseStudiesIntro: data.caseStudiesIntro,
        caseStudies: data.caseStudies,
        workflow: data.workflow,
        motionSection: data.motionSection,
        stack: data.stack,
        layers: data.layers,
        evidenceCases: data.evidenceCases,
        digilabBridge: data.digilabBridge,
        futureCases: data.futureCases,
        relatedFlagships: data.relatedFlagships,
      }}
    />
  );
}
