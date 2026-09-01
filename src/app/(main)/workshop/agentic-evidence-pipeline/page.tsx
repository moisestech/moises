import type { Metadata } from 'next';
import { AgenticEvidencePipelineClient } from '@/components/workshops/AgenticEvidencePipelineClient';
import { AEP_CARD_V2 } from '@/content/evidence/projects';
import { aepWorkshopSeo } from '@/content/workshops/aepHarness';

export const metadata: Metadata = {
  title: aepWorkshopSeo.title,
  description: aepWorkshopSeo.description,
  keywords: [
    'Agentic Evidence Pipeline',
    'AI harness',
    'human review',
    'citation fail-closed',
    'forward-deployed',
    'Moises Sanabria',
  ],
  openGraph: {
    title: aepWorkshopSeo.title,
    description: aepWorkshopSeo.description,
    type: 'website',
    images: [
      {
        url: AEP_CARD_V2,
        alt: 'Conceptual cover for a governed evidence workflow — reference implementation, not a hosted product UI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: aepWorkshopSeo.title,
    description: aepWorkshopSeo.description,
    images: [AEP_CARD_V2],
  },
};

export default function AgenticEvidencePipelineWorkshopPage() {
  return <AgenticEvidencePipelineClient />;
}
