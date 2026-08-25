import EmailSorterShareClient from './EmailSorterShareClient';

export const metadata = {
  title: 'Email Inbox Organizer | The Art of AI Agents — Moises Sanabria',
  description:
    'Public workshop artifact: how to design a reviewable email-intelligence workflow with classification, structured labels, and human control over outbound actions.',
  openGraph: {
    title: 'Email Inbox Organizer | The Art of AI Agents',
    description:
      'n8n workflow diagram and copy-paste prompts for the artist email sorter build.',
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786386766/dccmiami/workshops/the-art-of-ai-agents/n8n-diagram-email-inbox-organizer_nqwn9r.png',
        alt: 'n8n Email Inbox Organizer workflow diagram',
      },
    ],
  },
};

export default function EmailSorterSharePage() {
  return <EmailSorterShareClient />;
}
