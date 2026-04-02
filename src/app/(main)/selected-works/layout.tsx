import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Works – Moises Sanabria',
  description:
    'A curated selection of works for curators, grant panels, residencies, and institutional partners.',
};

export default function SelectedWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
