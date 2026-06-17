import type { ReactNode } from 'react';
import { CvViewSwitcher } from '@/components/cv/CvViewSwitcher';
import { CV_MAIN_PADDING_TOP } from '@/config/cv-layout';
import { cn } from '@/lib/utils';

export default function CvLayout({ children }: { children: ReactNode }) {
  return (
    <div className={cn('min-h-screen print:pt-0', CV_MAIN_PADDING_TOP)}>
      <CvViewSwitcher />
      {children}
    </div>
  );
}
