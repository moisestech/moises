'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { opp } from '@/components/opportunities/opportunityTheme';
import { cn } from '@/lib/utils';

type CopyBlurbButtonProps = {
  text: string;
  className?: string;
  onCopy?: () => void;
};

export function CopyBlurbButton({ text, className, onCopy }: CopyBlurbButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy?.();
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      onCopy?.();
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(opp.btnSecondary, 'mt-4', className)}
      aria-live="polite"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 shrink-0" aria-hidden />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 shrink-0" aria-hidden />
          Copy blurb
        </>
      )}
    </button>
  );
}
