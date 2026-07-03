'use client';

import { cn } from '@/lib/utils';
import type { CareerPacketSectionAccent } from '@/config/career-packet-section-theme';

type CareerPacketSectionProps = {
  id: string;
  accent: CareerPacketSectionAccent;
  isFirst?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function CareerPacketSection({
  id,
  accent,
  isFirst = false,
  className,
  children,
}: CareerPacketSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-32 -mx-4 border-t px-4 pt-12 sm:-mx-6 sm:px-6',
        !isFirst && 'mt-16',
        accent.sectionBorder,
        'bg-gradient-to-b',
        accent.sectionGradient,
        className,
      )}
    >
      {children}
    </section>
  );
}
