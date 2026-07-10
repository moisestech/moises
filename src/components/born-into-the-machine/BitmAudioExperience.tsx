'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { bitmAssets } from '@/content/born-into-the-machine/bitm-assets';
import { bitmMediaConfig } from '@/config/born-into-the-machine-theme';
import { useBitm } from '@/components/born-into-the-machine/BitmContext';
import { cn } from '@/lib/utils';

export function BitmAudioExperience({ className }: { className?: string }) {
  if (bitmMediaConfig.audioExperienceStatus === 'planned') {
    return null;
  }

  return <BitmAudioExperienceActive className={className} />;
}

function BitmAudioExperienceActive({ className }: { className?: string }) {
  const { audioEnabled, setAudioEnabled } = useBitm();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [audioAvailable, setAudioAvailable] = useState(false);

  useEffect(() => {
    fetch(bitmAssets.audio.transcript)
      .then((r) => r.text())
      .then(setTranscript)
      .catch(() => null);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onCanPlay = () => setAudioAvailable(true);
    const onError = () => setAudioAvailable(false);
    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('error', onError);
    return () => {
      audio.removeEventListener('canplay', onCanPlay);
      audio.removeEventListener('error', onError);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audioEnabled && audioAvailable) {
      audio.play().catch(() => setAudioEnabled(false));
    } else {
      audio.pause();
    }
  }, [audioEnabled, audioAvailable, setAudioEnabled]);

  return (
    <div className={cn('fixed bottom-4 left-4 z-50 max-w-xs', className)}>
      <audio ref={audioRef} src={bitmAssets.audio.ambience} loop preload="none" />
      <button
        type="button"
        onClick={() => setAudioEnabled(!audioEnabled)}
        className="flex items-center gap-2 border border-[#dedede] bg-[#faf8f4]/95 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#111111] backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-950/95 dark:text-neutral-200"
        aria-pressed={audioEnabled}
      >
        {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        Listen to the Machine
      </button>
      {audioEnabled && transcript ? (
        <pre className="mt-2 max-h-32 overflow-auto border border-[#dedede] bg-white/95 p-2 text-[9px] leading-relaxed text-[#777777] dark:border-neutral-700 dark:bg-neutral-900">
          {transcript}
        </pre>
      ) : null}
    </div>
  );
}
