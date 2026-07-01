'use client';

type WolfsonianInteractHintProps = {
  touch: string;
  hover: string;
};

/** Renders touch-oriented copy on coarse pointers; hover copy on fine-pointer devices. */
export function WolfsonianInteractHint({ touch, hover }: WolfsonianInteractHintProps) {
  return (
    <>
      <span className="[@media(hover:hover)]:hidden">{touch}</span>
      <span className="hidden [@media(hover:hover)]:inline">{hover}</span>
    </>
  );
}
