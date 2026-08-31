import type { Metadata } from 'next';
import { OpportunityPageClient } from '@/components/opportunities/OpportunityPageClient';
import { forwardDeployedInterviewOpportunity } from '@/content/opportunities/deloitte-ai-design-facilitator-fde';

const { seo, applicationBanner } = forwardDeployedInterviewOpportunity;
const ogImage = applicationBanner?.src;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  ...(seo.keywords?.length ? { keywords: seo.keywords } : {}),
  robots: { index: true, follow: true },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
    url: 'https://moises.tech/forward-deployed',
    ...(ogImage ? { images: [{ url: ogImage, alt: applicationBanner?.alt }] } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    ...(ogImage ? { images: [ogImage] } : {}),
  },
};

export default function ForwardDeployedPage() {
  return <OpportunityPageClient opportunity={forwardDeployedInterviewOpportunity} />;
}
