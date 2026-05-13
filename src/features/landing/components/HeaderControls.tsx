'use client';

import ThemeToggle from './ThemeToggle';
import VisitButton from './VisitButton';

interface HeaderControlsProps {
  className?: string;
  /** Recruiting dossier header: theme only (no Visit CTA). */
  variant?: 'default' | 'recruiting';
}

export default function HeaderControls({ className = '', variant = 'default' }: HeaderControlsProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <ThemeToggle />
      {variant === 'default' ? <VisitButton /> : null}
    </div>
  );
} 