/**
 * Custom stroke icons for Machine Sentence No. 1 — cube / screen / void grammar.
 * Use currentColor. Pale green only when parent sets text color for active state.
 */

type IconProps = {
  className?: string;
  title?: string;
  decorative?: boolean;
};

function Svg({
  children,
  className = 'h-6 w-6',
  title,
  decorative = true,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      role={decorative && !title ? 'presentation' : 'img'}
      aria-hidden={decorative && !title ? true : undefined}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconApproach(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 22 L16 10 L26 22" />
      <path d="M16 12 V26" />
    </Svg>
  );
}

export function IconSentenceInput(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="6" y="10" width="20" height="12" />
      <path d="M10 16 H22" />
    </Svg>
  );
}

export function IconInfer(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="16" cy="16" r="3" />
      <path d="M16 6 V10 M16 22 V26 M6 16 H10 M22 16 H26" />
      <path d="M9 9 L12 12 M20 20 L23 23 M23 9 L20 12 M12 20 L9 23" />
    </Svg>
  );
}

export function IconReflex(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="10" y="8" width="10" height="14" />
      <path d="M20 12 L26 10 L26 22 L20 20" />
    </Svg>
  );
}

export function IconMetabolization(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="4" y="10" width="7" height="12" />
      <rect x="13" y="8" width="6" height="10" />
      <rect x="21" y="12" width="7" height="11" />
      <path d="M15 20 H17" opacity={0.5} />
    </Svg>
  );
}

export function IconRest(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="7" y="7" width="18" height="18" />
      <rect x="11" y="11" width="4" height="6" />
      <rect x="17" y="12" width="5" height="4" />
    </Svg>
  );
}

export function IconSyntaxCube(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="6" y="6" width="20" height="20" />
      <path d="M6 16 H26 M16 6 V26" opacity={0.45} />
    </Svg>
  );
}

export function IconClauseCluster(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="5" y="8" width="8" height="12" />
      <rect x="14" y="10" width="6" height="8" />
      <rect x="21" y="9" width="6" height="10" />
    </Svg>
  );
}

export function IconPivot(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="16" cy="16" r="2.5" />
      <path d="M16 8 V13 M16 19 V24" />
      <path d="M10 12 L14 15 M18 17 L22 20" />
    </Svg>
  );
}

export function IconLatentVoid(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="6" y="6" width="20" height="20" />
      <path d="M13 8 L19 8 L22 24 L10 24 Z" />
    </Svg>
  );
}

export function IconFastPath(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 16 H22" />
      <path d="M18 10 L24 16 L18 22" />
    </Svg>
  );
}

export function IconSlowPath(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 16 H18" />
      <path d="M14 12 L18 16 L14 20" />
      <circle cx="23" cy="16" r="2" />
    </Svg>
  );
}

export function IconSafetyController(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="7" y="8" width="18" height="16" />
      <path d="M11 14 H21 M11 18 H17" />
    </Svg>
  );
}

export function IconCachedFallback(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="16" height="16" />
      <path d="M12 16 H20" />
      <path d="M16 12 V20" opacity={0.4} />
    </Svg>
  );
}

export function IconPhysicalMovement(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="10" width="10" height="12" />
      <path d="M18 12 L24 14 V22 L18 20" />
    </Svg>
  );
}

export function IconDistributedSurface(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="4" y="10" width="7" height="10" />
      <rect x="12.5" y="8" width="7" height="12" />
      <rect x="21" y="11" width="7" height="9" />
    </Svg>
  );
}

export function IconScopeMin(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="10" y="10" width="12" height="12" />
      <rect x="13" y="13" width="3" height="5" />
      <rect x="17" y="14" width="3" height="4" />
    </Svg>
  );
}

export function IconScopePreferred(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="7" y="7" width="18" height="18" />
      <rect x="10" y="10" width="4" height="6" />
      <rect x="15" y="11" width="5" height="4" />
      <rect x="21" y="12" width="2" height="7" />
    </Svg>
  );
}

export function IconScopeStretch(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="5" y="5" width="22" height="22" />
      <path d="M5 16 H27 M16 5 V27" opacity={0.35} />
      <rect x="8" y="9" width="4" height="5" />
      <rect x="14" y="10" width="5" height="4" />
      <rect x="21" y="9" width="3" height="8" />
    </Svg>
  );
}

/** Authored-state icons — same cube, different orientation/spacing */
export function IconStateCube(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="16" height="16" />
      <rect x="11" y="11" width="4" height="6" />
      <rect x="17" y="12" width="4" height="4" />
    </Svg>
  );
}

export function IconStateAperture(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="16" height="16" />
      <rect x="6" y="11" width="5" height="7" transform="rotate(-12 8.5 14.5)" />
      <rect x="21" y="11" width="5" height="7" transform="rotate(12 23.5 14.5)" />
      <path d="M14 12 L18 12 L19 22 L13 22 Z" opacity={0.5} />
    </Svg>
  );
}

export function IconStateWitness(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="16" height="16" />
      <rect x="11" y="11" width="10" height="7" />
      <path d="M16 18 V24" />
    </Svg>
  );
}

export function IconStateRefusal(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="16" height="16" />
      <rect x="10" y="11" width="5" height="7" transform="rotate(18 12.5 14.5)" />
      <rect x="17" y="12" width="5" height="5" transform="rotate(-10 19.5 14.5)" />
    </Svg>
  );
}

export function IconStateCompression(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="16" height="16" />
      <rect x="13" y="11" width="6" height="10" />
    </Svg>
  );
}

export function IconStateChorus(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="16" height="16" />
      <rect x="9" y="10" width="4" height="6" transform="rotate(-20 11 13)" />
      <rect x="14" y="11" width="4" height="5" />
      <rect x="19" y="10" width="4" height="7" transform="rotate(25 21 13.5)" />
    </Svg>
  );
}

export function IconStateFaultLine(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="8" y="8" width="16" height="16" />
      <path d="M12 9 L20 23" />
      <rect x="9" y="11" width="4" height="5" />
      <rect x="18" y="14" width="4" height="6" />
    </Svg>
  );
}

export const encounterStageIcons = {
  Reflex: IconReflex,
  Metabolization: IconMetabolization,
  Rest: IconRest,
} as const;

export const authoredStateIcons = {
  column: IconStateCube,
  sentence: IconStateWitness,
  aperture: IconStateAperture,
  witness: IconStateWitness,
  refusal: IconStateRefusal,
  compression: IconStateCompression,
  chorus: IconStateChorus,
  fault_line: IconStateFaultLine,
} as const;
