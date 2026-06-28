import type { Metadata } from 'next';
import GrantsDirectoryGate from '@/components/grant/GrantsDirectoryGate';
import GrantsDirectoryList from '@/components/grant/GrantsDirectoryList';
import { isGrantsDirectoryAuthenticated } from '@/lib/grants-directory-auth';

export const metadata: Metadata = {
  title: 'Grant directory | Moises Sanabria',
  description: 'Password-protected index of grant application pages.',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function GrantsDirectoryPage() {
  const authenticated = await isGrantsDirectoryAuthenticated();

  if (!authenticated) {
    return <GrantsDirectoryGate />;
  }

  return <GrantsDirectoryList />;
}
