'use client';

import Link from 'next/link';
import { BitmProvider } from '@/components/born-into-the-machine/BitmContext';
import { BitmSystemRail } from '@/components/born-into-the-machine/BitmSystemRail';
import { BitmChapterNav } from '@/components/born-into-the-machine/BitmChapterNav';
import { BitmShowLaborToggle } from '@/components/born-into-the-machine/BitmShowLaborToggle';
import { BitmAudioExperience } from '@/components/born-into-the-machine/BitmAudioExperience';
import { BitmHeroBoot } from '@/components/born-into-the-machine/BitmHeroBoot';
import { BitmPortraitInterpretation } from '@/components/born-into-the-machine/BitmPortraitInterpretation';
import { BitmConditionTimeline } from '@/components/born-into-the-machine/BitmConditionTimeline';
import { BitmStudioHotspots } from '@/components/born-into-the-machine/BitmStudioHotspots';
import { BitmPipelineDiagram } from '@/components/born-into-the-machine/BitmPipelineDiagram';
import { BitmCaseStudyGrid } from '@/components/born-into-the-machine/BitmCaseStudyGrid';
import { BitmPublicInfrastructure } from '@/components/born-into-the-machine/BitmPublicInfrastructure';
import { BitmEthicsMaintenance } from '@/components/born-into-the-machine/BitmEthicsMaintenance';
import { BitmAuthorOperator } from '@/components/born-into-the-machine/BitmAuthorOperator';
import { BitmSystemLog } from '@/components/born-into-the-machine/BitmSystemLog';
import { BitmCableTransition } from '@/components/born-into-the-machine/BitmCableTransition';
import { BitmChromeObject } from '@/components/born-into-the-machine/BitmChromeObject';

export function BitmPageClient() {
  return (
    <BitmProvider>
      <div className="relative min-h-screen bg-[#faf8f4] text-[#111111] dark:bg-neutral-950 dark:text-neutral-100">
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `url(/born-into-the-machine/textures/annotation-grid.svg)`,
            backgroundSize: '24px 24px',
          }}
          aria-hidden
        />

        <BitmSystemRail />
        <BitmAudioExperience />

        <article className="relative mx-auto max-w-5xl px-4 pb-24 pt-4 sm:px-6 xl:pr-44">
          <div className="mb-4 flex items-center justify-between gap-4 xl:hidden">
            <BitmShowLaborToggle />
          </div>

          <BitmChapterNav />

          <div className="relative mb-6 flex justify-end">
            <BitmChromeObject variant="usb" />
          </div>

          <BitmHeroBoot />
          <BitmSystemLog afterChapterId="boot" />
          <BitmCableTransition />

          <BitmPortraitInterpretation />
          <BitmSystemLog afterChapterId="thesis" />
          <BitmCableTransition />

          <BitmConditionTimeline />
          <BitmCableTransition />

          <BitmStudioHotspots />
          <BitmSystemLog afterChapterId="studio" />
          <BitmCableTransition />

          <BitmPipelineDiagram />
          <BitmCableTransition />

          <BitmCaseStudyGrid />
          <BitmCableTransition />

          <BitmPublicInfrastructure />
          <BitmSystemLog afterChapterId="public" />
          <BitmCableTransition />

          <BitmEthicsMaintenance />
          <BitmCableTransition />

          <BitmAuthorOperator />

          <footer className="mt-16 border-t border-[#dedede] pt-8 dark:border-neutral-800">
            <Link
              href="/research"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#777777] hover:text-[#ff5c00]"
            >
              ← Research index
            </Link>
          </footer>
        </article>
      </div>
    </BitmProvider>
  );
}
