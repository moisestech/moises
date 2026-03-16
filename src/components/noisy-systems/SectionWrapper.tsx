import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  withBorder?: boolean;
  className?: string;
}

export function SectionWrapper({
  children,
  withBorder = false,
  className = '',
}: SectionWrapperProps) {
  return (
    <section
      className={`mb-16 sm:mb-24 ${withBorder ? 'border-t border-current/10 pt-16 sm:pt-24' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
