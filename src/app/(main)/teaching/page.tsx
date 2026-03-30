import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Teaching | Art & Technology Workshops — Moises Sanabria',
  description:
    'Automation workshop + partnerships. Artist task automation, institutional consulting, and workshops by Moises Sanabria and Fabiola Larios.',
};

export default function TeachingPage() {
  redirect('/workshops');
}
