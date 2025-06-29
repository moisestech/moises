'use client';

import ThemeToggle from './ThemeToggle';
import VisitButton from './VisitButton';

interface HeaderControlsProps {
  className?: string;
}

export default function HeaderControls({ className = '' }: HeaderControlsProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <ThemeToggle />
      <VisitButton />
    </div>
  );
} 