import { Metadata } from 'next';
import VocabularyClient from '@/components/workshop/VocabularyClient';

export const metadata: Metadata = {
  title: 'Web Development Vocabulary | Digital Presence Workshop',
  description: 'Learn essential web development terms and concepts for artists. Understand the vocabulary needed to build and maintain your digital presence.',
  keywords: 'web development, vocabulary, terms, concepts, digital presence, artists, website building',
  openGraph: {
    title: 'Web Development Vocabulary',
    description: 'Master the essential terms and concepts needed to build your digital presence.',
    type: 'website',
    url: 'https://moises.works/workshop/own-your-digital-presence/day/1/session/1/introduction/vocabulary',
    images: [
      {
        url: '/images/vocabulary-fundamentals.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Development Vocabulary'
      }
    ]
  }
};

export default function VocabularyPage() {
  return <VocabularyClient />;
} 