import { seoKeywordsAlpha } from '../../../../lib/seoKeywords';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Convert slug to phrase (replace dashes with spaces)
  const phrase = params.slug.replace(/-/g, ' ');
  // Try to find the exact keyword/phrase in the bank
  const keyword = seoKeywordsAlpha.find((kw: string) => kw === phrase) || phrase;
  const capitalized = keyword.charAt(0).toUpperCase() + keyword.slice(1);

  return {
    title: `${capitalized} | Moises Sanabria`,
    description: `Explore works, essays, and resources on ${keyword} by Moises Sanabria, new media artist in Miami.`,
    keywords: `${keyword}, moises sanabria, new media art, miami artist`,
    alternates: { canonical: `/topics/${params.slug}` },
    openGraph: {
      title: `${capitalized} | Moises Sanabria`,
      description: `Explore works, essays, and resources on ${keyword} by Moises Sanabria, new media artist in Miami.`,
      images: [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${capitalized} | Moises Sanabria`,
      description: `Explore works, essays, and resources on ${keyword} by Moises Sanabria, new media artist in Miami.`,
      images: [],
    },
  };
}

export default async function TopicPage({ params }: { params: { slug: string } }) {
  const phrase = params.slug.replace(/-/g, ' ');
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Topic: {phrase}</h1>
    </main>
  );
} 