'use client';

import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InstSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 sm:text-xs">
      {children}
    </p>
  );
}

export function InstPlaceholder({
  label,
  note,
}: {
  label: string;
  note: string;
}) {
  return (
    <div
      role="status"
      className="border border-dashed border-amber-700/45 bg-amber-50 p-3 text-left text-amber-950 sm:p-4"
    >
      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-amber-800 sm:text-[11px]">
        Placeholder
      </p>
      <p className="text-sm font-medium">{label}</p>
      <p className="mt-1 text-xs leading-relaxed text-amber-900/80">{note}</p>
    </div>
  );
}

export function InstPrimaryCta({
  href,
  label,
  external,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const className =
    'inline-flex min-h-11 items-center justify-center gap-2 bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        <Calendar className="h-4 w-4 shrink-0" aria-hidden />
        {label}
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  );
}

export function InstSecondaryCta({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    'inline-flex min-h-11 items-center justify-center border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950';

  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a
        href={href}
        {...(href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function InstPageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        'min-h-screen bg-[#f7f6f3] text-neutral-950 antialiased',
        className,
      )}
    >
      {children}
    </main>
  );
}

export function InstContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
