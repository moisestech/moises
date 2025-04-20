import { Metadata } from 'next';
import SquarespacePlatformClientDay2 from '@/components/workshop/squarespace/SquarespacePlatformClientDay2';

export const metadata: Metadata = {
  title: "Squarespace Platform Guide - Day 2 | Digital Presence Workshop",
  description: "Learn how to create and customize your website using Squarespace's powerful tools and features, including template selection, design customization, content blocks, and subscription features.",
  keywords: "Squarespace, website builder, templates, design, content blocks, website features, subscription, platform guide",
  openGraph: {
    title: "Squarespace Platform Guide - Day 2 | Digital Presence Workshop",
    description: "Learn how to create and customize your website using Squarespace's powerful tools and features.",
    images: [
      {
        url: "/images/workshop/squarespace-day2.jpg",
        width: 1200,
        height: 630,
        alt: "Squarespace Platform Guide - Day 2"
      }
    ]
  }
};

export default function SquarespacePage() {
  return <SquarespacePlatformClientDay2 />;
} 