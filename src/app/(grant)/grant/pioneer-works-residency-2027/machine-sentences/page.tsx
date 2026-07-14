import type { Metadata } from 'next';
import { MachineSentencesProposalPage } from '@/components/grant/pioneer-works-residency-2027/MachineSentencesProposalPage';
import { pioneerWorksMeta } from '@/content/grants/pioneer-works-residency-2027/meta';
import { machineSentencesSeo } from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

const SITE = 'https://moises.tech';

export const metadata: Metadata = {
  title: machineSentencesSeo.title,
  description: machineSentencesSeo.description,
  robots: { index: true, follow: true },
  keywords: [
    'MACHINE SENTENCES',
    'Pioneer Works',
    'Machine Sentence No. 1',
    'Born into the Machine',
    'Moises Sanabria',
  ],
  alternates: { canonical: `${SITE}${pioneerWorksMeta.proposalRoute}` },
  openGraph: {
    title: machineSentencesSeo.title,
    description: machineSentencesSeo.description,
    type: 'website',
    url: `${SITE}${pioneerWorksMeta.proposalRoute}`,
    siteName: 'Moises Sanabria',
  },
  twitter: {
    card: 'summary_large_image',
    title: machineSentencesSeo.title,
    description: machineSentencesSeo.description,
  },
};

export default function MachineSentencesRoute() {
  return <MachineSentencesProposalPage />;
}
