import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ExternalLink, FileText, Mail, Briefcase } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { aiEngineeringPacket } from '@/content/ai-engineering/packet';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Career Packet — Moises Sanabria',
  description: 'Quick links to AI engineering packet, resume, portfolio, and contact.',
  robots: { index: false, follow: true },
};

const links = [
  {
    label: 'AI Engineering packet',
    href: '/ai-engineering',
    description: 'Main recruiter landing page — roles, stack, proof, and blurb.',
    icon: Briefcase,
  },
  {
    label: 'Resume (web)',
    href: aiEngineeringPacket.resumeWebPath,
    description: 'Technology CV — scannable web version.',
    icon: FileText,
  },
  {
    label: aiEngineeringPacket.downloads.resumePdf.label,
    href: aiEngineeringPacket.downloads.resumePdf.path,
    description: 'PDF download for forwarding to hiring managers.',
    icon: Download,
    download: true,
  },
  {
    label: 'Portfolio',
    href: '/',
    description: 'Selected works and art practice.',
    icon: ExternalLink,
  },
  {
    label: aiEngineeringPacket.email,
    href: `mailto:${aiEngineeringPacket.email}`,
    description: 'Direct email for roles and inquiries.',
    icon: Mail,
    external: true,
  },
] as const;

export default function CareerPacketPage() {
  return (
    <div className={opp.shell}>
      <main className={cn(opp.main, 'pt-8 sm:pt-10')}>
        <p className={opp.accent}>Career packet</p>
        <h1 className={cn(opp.h1, 'mt-3')}>Moises Sanabria — quick links</h1>
        <p className={cn(opp.bodyLg, 'mt-4 max-w-2xl')}>
          One page to paste into recruiter replies. For the full packet, start with AI Engineering.
        </p>
        <ul className="mt-8 space-y-3" role="list">
          {links.map((item) => {
            const Icon = item.icon;
            const className = cn(
              opp.cardInteractive,
              'flex items-start gap-4 p-5'
            );
            const content = (
              <>
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500 dark:text-cyan-400" aria-hidden />
                <div>
                  <span className={opp.matrixPrimary}>{item.label}</span>
                  <p className={cn(opp.muted, 'mt-1')}>{item.description}</p>
                </div>
              </>
            );
            if ('download' in item && item.download) {
              return (
                <li key={item.href}>
                  <a href={item.href} download className={className}>
                    {content}
                  </a>
                </li>
              );
            }
            if ('external' in item && item.external) {
              return (
                <li key={item.href}>
                  <a href={item.href} className={className}>
                    {content}
                  </a>
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link href={item.href} className={className}>
                  {content}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
