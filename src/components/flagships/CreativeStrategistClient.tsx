'use client';

import { CreativeSystemsFlagshipClient } from '@/components/flagships/CreativeSystemsFlagshipClient';
import { creativeStrategistFlagship } from '@/content/flagships/creative-strategist';

export function CreativeStrategistClient() {
  const data = creativeStrategistFlagship;
  return (
    <CreativeSystemsFlagshipClient
      data={{
        flagshipId: 'creative-strategist',
        eyebrow: data.eyebrow,
        title: data.title,
        subtitle: data.subtitle,
        intro: data.intro,
        primaryCta: data.primaryCta,
        secondaryCta: data.secondaryCta,
        tertiaryCta: data.tertiaryCta,
        logoBand: data.logoBand,
        navItems: data.navItems,
        capabilitiesTitle: data.capabilitiesTitle,
        capabilitiesIntro: data.capabilitiesIntro,
        capabilities: data.capabilities,
        caseStudiesTitle: data.caseStudiesTitle,
        caseStudiesIntro: data.caseStudiesIntro,
        caseStudies: data.caseStudies,
        workflow: data.workflow,
        motionSection: data.motionSection,
        stack: data.stack,
        digilabBridge: data.digilabBridge,
        relatedFlagships: data.relatedFlagships,
      }}
    />
  );
}
