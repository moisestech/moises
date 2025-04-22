import { Metadata } from 'next';
import GithubPlatformClient from '@/components/workshop/github/GithubPlatformClient';

export const metadata: Metadata = {
  title: 'GitHub Platform Guide | Digital Presence Workshop',
  description: 'Learn how to effectively use GitHub for your artist website. Comprehensive guide to GitHub setup, repository management, and deployment.',
  keywords: 'GitHub, version control, website hosting, GitHub Pages, repository setup, digital presence',
  openGraph: {
    title: 'GitHub Platform Guide',
    description: 'Master GitHub for your artist website with this comprehensive guide.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/platforms/github',
    images: [
      {
        url: '/images/github-platform.jpg',
        width: 1200,
        height: 630,
        alt: 'GitHub Platform Guide'
      }
    ]
  }
};

export default function GithubPlatformPage() {
  return <GithubPlatformClient />;
} 