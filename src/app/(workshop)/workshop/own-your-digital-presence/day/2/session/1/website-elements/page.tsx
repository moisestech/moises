import { Metadata } from 'next';
import WebsiteElementsClient from '@/components/workshop/WebsiteElementsClient';

export const metadata: Metadata = {
  title: 'Essential Website Elements | Digital Presence Workshop',
  description: 'Learn about key website components and how to implement them across different platforms including Wix, Squarespace, and GitHub Pages.',
  keywords: 'website elements, CTA, navigation, media integration, privacy policy, core pages, blog, domain, branding',
  openGraph: {
    title: 'Essential Website Elements | Digital Presence Workshop',
    description: 'Master the essential components of a professional website and learn how to implement them across different platforms.',
    images: [
      {
        url: '/images/workshop/website-elements.jpg',
        width: 1200,
        height: 630,
        alt: 'Essential Website Elements'
      }
    ]
  }
};

export default function WebsiteElementsPage() {
  return <WebsiteElementsClient />;
} 