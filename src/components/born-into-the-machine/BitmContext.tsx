'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { BitmChapterId } from '@/config/born-into-the-machine-theme';
import { bitmMediaConfig } from '@/config/born-into-the-machine-theme';
import { bitmDefaultTraceCaseStudyId } from '@/content/born-into-the-machine/bitm-pipeline-traces';

type BitmContextValue = {
  activeChapterId: BitmChapterId;
  setActiveChapterId: (id: BitmChapterId) => void;
  showLabor: boolean;
  setShowLabor: (v: boolean) => void;
  reducedMotion: boolean;
  audioEnabled: boolean;
  setAudioEnabled: (v: boolean) => void;
  isMobile: boolean;
  interactionIntensity: 'experimental' | 'restrained';
  activeTraceCaseStudyId: string;
  setActiveTraceCaseStudyId: (id: string) => void;
  showSecondaryChrome: boolean;
};

const BitmContext = createContext<BitmContextValue | null>(null);

export function BitmProvider({ children }: { children: React.ReactNode }) {
  const [activeChapterId, setActiveChapterId] = useState<BitmChapterId>('boot');
  const [showLabor, setShowLabor] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTraceCaseStudyId, setActiveTraceCaseStudyId] = useState(bitmDefaultTraceCaseStudyId);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(mq.matches);
    updateMotion();
    mq.addEventListener('change', updateMotion);

    const mqMobile = window.matchMedia('(max-width: 767px)');
    const updateMobile = () => setIsMobile(mqMobile.matches);
    updateMobile();
    mqMobile.addEventListener('change', updateMobile);

    return () => {
      mq.removeEventListener('change', updateMotion);
      mqMobile.removeEventListener('change', updateMobile);
    };
  }, []);

  const interactionIntensity = isMobile
    ? bitmMediaConfig.mobileInteractionIntensity
    : bitmMediaConfig.interactionIntensity;

  const showSecondaryChrome = interactionIntensity === 'experimental' && !isMobile;

  const value = useMemo(
    () => ({
      activeChapterId,
      setActiveChapterId,
      showLabor,
      setShowLabor,
      reducedMotion,
      audioEnabled,
      setAudioEnabled,
      isMobile,
      interactionIntensity,
      activeTraceCaseStudyId,
      setActiveTraceCaseStudyId,
      showSecondaryChrome,
    }),
    [
      activeChapterId,
      showLabor,
      reducedMotion,
      audioEnabled,
      isMobile,
      interactionIntensity,
      activeTraceCaseStudyId,
      showSecondaryChrome,
    ],
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
