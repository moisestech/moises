'use client';

import type { BitmConceptualIconKey } from '@/config/born-into-the-machine-theme';
import { cn } from '@/lib/utils';

type IconProps = { className?: string; animate?: boolean };

function BaseIcon({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-5 w-5', className)}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function BitmIconBirthBoot({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M6 14h12v6H6z" />
      <path d="M9 14V10a3 3 0 0 1 6 0v4" />
      <circle cx="12" cy="7" r="2" />
      <path d="M12 4V2" />
    </BaseIcon>
  );
}

export function BitmIconHumanMachine({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M8 12h3v6H8z" />
      <path d="M9.5 12V8a2 2 0 1 1 3 0v4" />
      <rect x="14" y="10" width="6" height="4" rx="1" />
      <path d="M17 10V7" />
    </BaseIcon>
  );
}

export function BitmIconModel({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="9" r="4" />
      <path d="M6 20c0-3 2.5-5 6-5s6 2 6 5" />
      <circle cx="12" cy="9" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="10" cy="8" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="14" cy="8" r="0.5" fill="currentColor" stroke="none" />
    </BaseIcon>
  );
}

export function BitmIconDataset({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <ellipse cx="12" cy="6" rx="7" ry="2" />
      <path d="M5 6v6c0 1.1 3.1 2 7 2s7-.9 7-2V6" />
      <path d="M5 12v6c0 1.1 3.1 2 7 2s7-.9 7-2v-6" />
      <rect x="8" y="3" width="3" height="2" rx="0.5" />
      <rect x="12" y="3" width="3" height="2" rx="0.5" />
    </BaseIcon>
  );
}

export function BitmIconLatentSpace({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M4 18L12 4l8 14" />
      <path d="M7 14h10" />
      <path d="M8.5 11h7" />
      <path d="M10 8h4" />
    </BaseIcon>
  );
}

export function BitmIconStudio({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="3" y="14" width="10" height="6" rx="1" />
      <path d="M5 14V10h6v4" />
      <rect x="15" y="8" width="6" height="12" rx="1" />
      <path d="M17 11h2M17 14h2M17 17h2" />
    </BaseIcon>
  );
}

export function BitmIconPublicSpace({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="4" y="6" width="16" height="10" rx="1" />
      <circle cx="8" cy="18" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
      <circle cx="16" cy="18" r="1.5" />
      <path d="M8 16v-1M12 16v-1M16 16v-1" />
    </BaseIcon>
  );
}

export function BitmIconInstitution({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M4 20h16" />
      <path d="M6 20V10l6-4 6 4v10" />
      <rect x="10" y="12" width="4" height="3" rx="0.5" />
      <path d="M12 12V9" />
    </BaseIcon>
  );
}

export function BitmIconWorkshop({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M6 14c2-2 4-2 6 0s4 2 6 0" />
      <path d="M8 10l-2-2M16 10l2-2" />
      <path d="M12 8v4" />
      <rect x="10" y="14" width="4" height="2" rx="0.5" />
    </BaseIcon>
  );
}

export function BitmIconConsent({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 5c-3 0-5 2-5 4.5S9 14 12 17s5-2.5 5-4.5S15 5 12 5z" />
      <path d="M9 12l2 2 4-4" />
    </BaseIcon>
  );
}

export function BitmIconMaintenance({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M14 4l2 2-6 6-3 1 1-3 6-6z" />
      <path d="M4 20h16" />
      <path d="M6 16h4" />
    </BaseIcon>
  );
}

export function BitmIconEnergy({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M8 10h6l-3 8 5-7H10l3-8z" />
      <rect x="16" y="8" width="4" height="8" rx="1" />
      <path d="M17 11h2" />
    </BaseIcon>
  );
}

export function BitmIconArchive({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="5" y="5" width="14" height="10" rx="1" />
      <rect x="7" y="8" width="10" height="8" rx="1" />
      <path d="M9 11h6M9 13h4" />
    </BaseIcon>
  );
}

export function BitmIconIteration({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M17 8a5 5 0 0 0-8.5 3.5" />
      <path d="M7 16a5 5 0 0 0 8.5-3.5" />
      <path d="M7 8V5H4M17 16v3h3" />
      <text x="9" y="14" fontSize="4" fill="currentColor" stroke="none">V.01</text>
    </BaseIcon>
  );
}

export function BitmIconAccess({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M6 20V10l6-6 6 6v10" />
      <path d="M10 20v-6h4v6" />
      <path d="M18 6c1 0 2 1 2 2" />
      <path d="M20 5v3" />
    </BaseIcon>
  );
}

export function BitmIconGovernance({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <line x1="6" y1="8" x2="6" y2="18" />
      <line x1="12" y1="6" x2="12" y2="18" />
      <line x1="18" y1="10" x2="18" y2="18" />
      <circle cx="6" cy="11" r="2" />
      <circle cx="12" cy="9" r="2" />
      <circle cx="18" cy="13" r="2" />
    </BaseIcon>
  );
}

const iconMap: Record<BitmConceptualIconKey, React.ComponentType<IconProps>> = {
  'birth-boot': BitmIconBirthBoot,
  'human-machine': BitmIconHumanMachine,
  model: BitmIconModel,
  dataset: BitmIconDataset,
  'latent-space': BitmIconLatentSpace,
  studio: BitmIconStudio,
  'public-space': BitmIconPublicSpace,
  institution: BitmIconInstitution,
  workshop: BitmIconWorkshop,
  consent: BitmIconConsent,
  maintenance: BitmIconMaintenance,
  energy: BitmIconEnergy,
  archive: BitmIconArchive,
  iteration: BitmIconIteration,
  access: BitmIconAccess,
  governance: BitmIconGovernance,
};

export function BitmConceptualIcon({
  iconKey,
  className,
}: {
  iconKey: BitmConceptualIconKey;
  className?: string;
}) {
  const Icon = iconMap[iconKey];
  return <Icon className={className} />;
}
