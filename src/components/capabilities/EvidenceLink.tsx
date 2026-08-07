import Link from 'next/link';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type EvidenceLinkProps = {
  href: string;
  label: string;
  className?: string;
};

function isExternal(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://');
}

export function EvidenceLink({ href, label, className }: EvidenceLinkProps) {
  const external = isExternal(href);
  const classNames = cn(
    'inline-flex max-w-full items-center gap-1 text-xs font-medium text-cyan-700 underline-offset-2 hover:underline dark:text-cyan-400',
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      >
        <span className="truncate">{label}</span>
        <ExternalLink className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      <span className="truncate">{label}</span>
      <ArrowUpRight className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
    </Link>
  );
}
