'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { CvViewSwitcher } from '@/components/cv/CvViewSwitcher';
import { CV_MAIN_PADDING_TOP } from '@/config/cv-layout';
import { isTechCvSitePath } from '@/config/recruiting-navigation';
import { RECRUITING_MAIN_PADDING_TOP } from '@/config/recruiting-layout';
import { cn } from '@/lib/utils';

export function CvLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const techRecruiting = isTechCvSitePath(pathname);

  return (
    <div
      className={cn(
        'min-h-screen print:pt-0',
        techRecruiting ? RECRUITING_MAIN_PADDING_TOP : CV_MAIN_PADDING_TOP,
      )}
    >
      <CvViewSwitcher />
      {children}
    </div>
  );
}
