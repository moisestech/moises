'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { BitmChapterId } from '@/config/born-into-the-machine-theme';

type BitmContextValue = {
  activeChapterId: BitmChapterId;
  setActiveChapterId: (id: BitmChapterId) => void;
  showLabor: boolean;
  setShowLabor: (v: boolean) => void;
  reducedMotion: boolean;
  audioEnabled: boolean;
  setAudioEnabled: (v: boolean) => void;
};

const BitmContext = createContext<BitmContextValue | null>(null);

export function BitmProvider({ children }: { children: React.ReactNode }) {
  const [activeChapterId, setActiveChapterId] = useState<BitmChapterId>('boot');
  const [showLabor, setShowLabor] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const value = useMemo(
    () => ({
      activeChapterId,
      setActiveChapterId,
      showLabor,
      setShowLabor,
      reducedMotion,
      audioEnabled,
      setAudioEnabled,
    }),
    [activeChapterId, showLabor, reducedMotion, audioEnabled],
  );

  return <BitmContext.Provider value={value}>{children}</BitmContext.Provider>;
}

export function useBitm() {
  const ctx = useContext(BitmContext);
  if (!ctx) throw new Error('useBitm must be used within BitmProvider');
  return ctx;
}

export function useBitmOptional() {
  return useContext(BitmContext);
}

export function useBitmChapterObserver(
  chapterId: BitmChapterId,
  ref: React.RefObject<HTMLElement | null>,
) {
  const { setActiveChapterId } = useBitm();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActiveChapterId(chapterId);
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [chapterId, ref, setActiveChapterId]);
}
