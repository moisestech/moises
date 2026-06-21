import type { Metadata } from 'next';
import SsrcJustTechFellowshipPage from '@/components/grant/SsrcJustTechFellowshipPage';
import { ssrcJustTechMeta } from '@/content/grants/ssrc-just-tech-fellowship-2027';

const description =
  'Born into the Machine — a proposed SSRC Just Tech Fellowship project by Moises Sanabria examining how AI changes labor, value, attention, authorship, and political agency when intelligence becomes infrastructure.';

export const metadata: Metadata = {
  title: `${ssrcJustTechMeta.projectTitle} | ${ssrcJustTechMeta.fellowshipLabel}`,
  description,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: ssrcJustTechMeta.route,
  },
  openGraph: {
    title: `${ssrcJustTechMeta.projectTitle} | Moises Sanabria`,
    description,
    type: 'website',
    url: ssrcJustTechMeta.route,
  },
};

export default function SsrcJustTechFellowship2027Page() {
  return <SsrcJustTechFellowshipPage />;
}
