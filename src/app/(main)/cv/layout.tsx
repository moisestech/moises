import type { ReactNode } from 'react';
import { CvViewSwitcher } from '@/components/cv/CvViewSwitcher';

export default function CvLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <CvViewSwitcher />
      {children}
    </div>
  );
}
