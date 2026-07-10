'use client';

export function BitmCableTransition() {
  return (
    <div className="relative my-4 h-8" aria-hidden>
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#c4c4c4] to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#c4c4c4] bg-[#faf8f4] dark:bg-neutral-950" />
    </div>
  );
}
