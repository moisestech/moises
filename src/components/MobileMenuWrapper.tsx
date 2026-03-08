'use client';

import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

const MobileMenuOverlayClient = dynamic(
  () => import('@/features/landing/components/MobileMenuOverlayClient'),
  { ssr: false }
);

export function MobileMenuWrapper({ children }: { children: ReactNode }) {
  return <MobileMenuOverlayClient>{children}</MobileMenuOverlayClient>;
}
