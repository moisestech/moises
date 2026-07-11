import type { ReactNode } from 'react';
import { CvLayoutClient } from '@/components/cv/CvLayoutClient';

export default function CvLayout({ children }: { children: ReactNode }) {
  return <CvLayoutClient>{children}</CvLayoutClient>;
}
