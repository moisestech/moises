'use client';

import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showLink?: boolean;
}

export default function Logo({ size = 'md', className = '', showLink = true }: LogoProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-4xl md:text-7xl',
    lg: 'text-5xl md:text-8xl',
    xl: 'text-6xl md:text-9xl'
  };

  const logoContent = (
    <span className={`font-['MoMA_Sans'] font-bold tracking-[0.01em] ${sizeClasses[size]} ${className}`}>
      <span className={isDark ? 'text-white' : 'text-black'}>M</span>
      <span className={`${isDark ? 'text-white' : 'text-black'} text-[0.85em] relative`}>o</span>
      <span className={isDark ? 'text-white' : 'text-black'}>ises</span>
    </span>
  );

  if (showLink) {
    return (
      <Link href="/" className="flex items-baseline hover:opacity-80 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
} 