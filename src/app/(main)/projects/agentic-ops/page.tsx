import type { Metadata } from 'next';
import { AgenticOpsClient } from '@/components/flagships/AgenticOpsClient';
import { agenticOpsProject } from '@/content/flagships/agentic-ops';

const { seo } = agenticOpsProject;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    url: 'https://moises.tech/projects/agentic-ops',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export default function AgenticOpsPage() {
  return <AgenticOpsClient />;
}
