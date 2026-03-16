'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

interface LinkItem {
  label: string;
  href: string;
}

interface LinkListProps {
  links: readonly LinkItem[];
  className?: string;
}

export function LinkList({ links, className = '' }: LinkListProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const linkClass = isDark
    ? 'text-gray-400 hover:text-gray-300 underline underline-offset-4'
    : 'text-gray-600 hover:text-gray-900 underline underline-offset-4';

  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className={linkClass}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
