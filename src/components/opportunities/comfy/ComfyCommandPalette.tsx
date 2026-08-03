'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { comfyWorkSample } from '@/content/opportunities/comfy/workSample';

export function ComfyCommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [...comfyWorkSample.commandItems];
    return comfyWorkSample.commandItems.filter((item) => item.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery('');
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  if (!open) return null;

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.location.href = href;
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-stone-950/55 px-3 pt-[12vh] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-stone-300 bg-white shadow-2xl dark:border-stone-600 dark:bg-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-stone-200 px-3 py-2.5 dark:border-stone-700">
          <Search className="h-4 w-4 text-stone-400" aria-hidden />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActive((i) => Math.min(i + 1, Math.max(items.length - 1, 0)));
              }
              if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActive((i) => Math.max(i - 1, 0));
              }
              if (e.key === 'Enter' && items[active]) {
                e.preventDefault();
                go(items[active].href);
              }
            }}
            placeholder="Jump to evidence…"
            className="w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400 dark:text-stone-50"
            aria-label="Filter commands"
          />
          <kbd className="hidden rounded border border-stone-300 px-1.5 py-0.5 text-[10px] text-stone-500 sm:inline dark:border-stone-600">
            esc
          </kbd>
        </div>
        <ul className="max-h-72 overflow-y-auto p-1.5" role="listbox">
          {items.length === 0 ? (
            <li className="px-3 py-4 text-sm text-stone-500">No matches</li>
          ) : (
            items.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={index === active}
                  className={cn(
                    'flex w-full rounded-lg px-3 py-2.5 text-left text-sm',
                    index === active
                      ? 'bg-yellow-100 text-stone-950 dark:bg-yellow-400/20 dark:text-yellow-50'
                      : 'text-stone-700 hover:bg-stone-100 dark:text-stone-200 dark:hover:bg-stone-800',
                  )}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => go(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export function ComfyInspectToggle({
  enabled,
  onToggle,
}: {
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={enabled}
      className={cn(
        'fixed bottom-4 right-4 z-[70] inline-flex min-h-10 items-center rounded-full border px-3 py-2 text-xs font-semibold shadow-lg backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 sm:bottom-6 sm:right-6',
        enabled
          ? 'border-yellow-500 bg-yellow-400 text-stone-950'
          : 'border-stone-300 bg-white/90 text-stone-800 dark:border-stone-600 dark:bg-stone-900/90 dark:text-stone-100',
      )}
    >
      {enabled ? 'Exit inspect' : 'Inspect this page'}
    </button>
  );
}

export function ComfyInspectAnnotations({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;
  return (
    <ul className="pointer-events-none fixed inset-0 z-[65] p-3 sm:p-6" aria-live="polite">
      {comfyWorkSample.inspectAnnotations.map((ann, index) => (
        <li
          key={ann.id}
          className="pointer-events-auto absolute max-w-[16rem] rounded-xl border border-yellow-500/70 bg-stone-950/90 p-3 text-xs text-stone-100 shadow-xl"
          style={{
            top: `${12 + index * 22}%`,
            left: index % 2 === 0 ? '4%' : 'auto',
            right: index % 2 === 1 ? '4%' : 'auto',
          }}
        >
          <p className="font-semibold text-yellow-300">{ann.label}</p>
          <ul className="mt-1.5 list-disc space-y-1 pl-4 text-stone-300">
            {ann.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <a href={ann.target} className="mt-2 inline-flex text-cyan-300 underline-offset-2 hover:underline">
            Jump to section
          </a>
        </li>
      ))}
    </ul>
  );
}
