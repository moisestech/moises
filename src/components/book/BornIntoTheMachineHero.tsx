'use client';

import { GlitchDisplayHero, type GlitchDisplayHeroProps } from '@/components/common/GlitchDisplayHero';

export type BornIntoTheMachineHeroProps = {
  title?: string;
  variant?: GlitchDisplayHeroProps['variant'];
  palette?: GlitchDisplayHeroProps['palette'];
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
};

/** Book / chapter hero using the shared glitch display treatment. */
export function BornIntoTheMachineHero({
  title = 'Born into the Machine',
  variant = 'massive',
  palette = 'gray',
  className,
  containerClassName,
  titleClassName,
}: BornIntoTheMachineHeroProps) {
  return (
    <GlitchDisplayHero
      variant={variant}
      palette={palette}
      className={className}
      containerClassName={containerClassName}
      titleClassName={titleClassName}
    >
      {title}
    </GlitchDisplayHero>
  );
}
