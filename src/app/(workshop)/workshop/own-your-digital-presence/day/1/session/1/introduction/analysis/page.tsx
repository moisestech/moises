import { Metadata } from 'next';
import { Day1Session1IntroAnalysisClient } from '@/components/workshop/Day1Session1IntroAnalysisClient'

export const metadata: Metadata = {
  title: 'Website Analysis & Best Practices | Digital Presence Workshop',
  description: 'Learn how to analyze and evaluate websites effectively. Understand web vitals, navigation patterns, and best practices for optimal user experience.',
  keywords: 'website analysis, web vitals, user experience, navigation, best practices, performance metrics, accessibility',
  openGraph: {
    title: 'Website Analysis & Best Practices',
    description: 'Master the art of website analysis and evaluation for optimal user experience.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/analysis',
    images: [
      {
        url: '/images/analysis-fundamentals.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Analysis & Best Practices'
      }
    ]
  }
};

export default function AnalysisPage() {
  return <Day1Session1IntroAnalysisClient />;
} 