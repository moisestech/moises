import { Metadata } from 'next';
import AIAgentsWorkshopClient from '@/components/workshop/AIAgentsWorkshopClient';

export const metadata: Metadata = {
  title: 'AI Agents and the Arts Workshop | Moisés Sanabria',
  description: 'Join our workshop on AI Agents and the Arts. Learn how to integrate AI into your creative process, automate workflows, and enhance your artistic practice.',
  keywords: 'AI Agents, Arts, Automation, Creative Process, Workshop, AI Integration',
  openGraph: {
    title: 'AI Agents and the Arts Workshop',
    description: 'Learn how to integrate AI into your creative process and automate workflows.',
    type: 'website',
    url: 'https://moises.works/workshop/ai-agents-and-the-arts',
    images: [
      {
        url: '/images/ai-agents-workshop.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Agents and the Arts Workshop'
      }
    ]
  }
};

export default function AIAgentsWorkshopPage() {
  return <AIAgentsWorkshopClient />;
} 