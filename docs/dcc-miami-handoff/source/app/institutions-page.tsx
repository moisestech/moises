import type { Metadata } from 'next';
import { InstitutionsHubClient } from '@/components/institutions/InstitutionsHubClient';
import { institutionsHub } from '@/content/institutions/hub';

const { meta } = institutionsHub;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'website',
    url: meta.url,
    images: [
      {
        url: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1786123448/oolite-arts/oolite-arts-digital-lab-360-photo_uaguwe.jpg',
        alt: 'Oolite Arts Digital Lab — workstations and production room',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Moises Sanabria',
      url: 'https://moises.tech',
      jobTitle: 'Interdisciplinary artist and institutional technologist',
      email: 'm@moises.tech',
    },
    {
      '@type': 'ItemList',
      name: 'Institutional technology practice lanes',
      itemListElement: institutionsHub.lanes.map((lane, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: lane.title,
          description: lane.description,
          url: `https://moises.tech/institutions#${lane.id}`,
        },
      })),
    },
    {
      '@type': 'ItemList',
      name: 'Flagship institutional case studies',
      itemListElement: institutionsHub.flagship.map((study, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: `${study.institution}: ${study.headline}`,
          url: `https://moises.tech${study.href}`,
        },
      })),
    },
  ],
};

export default function InstitutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InstitutionsHubClient />
    </>
  );
}
