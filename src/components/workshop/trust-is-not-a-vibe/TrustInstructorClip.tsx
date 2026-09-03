'use client'

import Image from 'next/image'
import { useReducedMotion } from 'framer-motion'
import {
  getTrustInstructorClip,
  trustClipIsComplete,
  type TrustChapterId,
  type TrustClipMediaStatus,
} from '@/content/workshops/trust-is-not-a-vibe'
import { cn } from '@/lib/utils'
import { TRUST_MISSING_HATCH } from './TrustMissingStill'

const CLIP_STATUS_LABEL: Record<TrustClipMediaStatus, string> = {
  missing: 'Missing recording',
  'poster-ready': 'Poster ready · recording pending',
  'recording-ready': 'Recording ready · captions pending',
  captioned: 'Captioned · awaiting final poster frame',
  complete: 'Complete',
}

export function TrustInstructorClip({ chapterId }: { chapterId: TrustChapterId }) {
  const clip = getTrustInstructorClip(chapterId)
  const reduceMotion = useReducedMotion()
  const complete = trustClipIsComplete(clip)

  return (
    <figure className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-700">
      <div className="relative aspect-video bg-stone-950">
        {clip.videoSrc ? (
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={clip.posterSrc}
            controlsList="nodownload"
          >
            {clip.captionSrc ? (
              <track kind="captions" srcLang="en" src={clip.captionSrc} label="English" default />
            ) : null}
            Your browser cannot play this clip.
          </video>
        ) : (
          <>
            {clip.posterSrc ? (
              <Image
                src={clip.posterSrc}
                alt=""
                aria-hidden
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            ) : (
              <div className={cn('absolute inset-0', TRUST_MISSING_HATCH)} />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" aria-hidden />
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:w-[42%] sm:justify-center sm:p-8">
              <p className="font-space-mono text-[10px] uppercase tracking-[0.18em] text-amber-200">
                Instructor clip · {clip.durationHint}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{clip.title}</h3>
              <p className="mt-2 text-xs text-white/80">Captions will ship with the recording.</p>
              <p
                className={cn(
                  'mt-4 inline-flex w-fit items-center rounded-full border border-white/40 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white',
                  reduceMotion ? '' : 'motion-safe:transition-transform'
                )}
              >
                Play when recorded
              </p>
            </div>
          </>
        )}
      </div>
      <figcaption className="border-t border-stone-200 bg-white px-4 py-3 dark:border-stone-700 dark:bg-stone-900">
        <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">{clip.title}</p>
        <p className="mt-1 text-xs text-stone-500">
          {clip.filename}
          {complete ? '.mp4 + .vtt' : ''} · {CLIP_STATUS_LABEL[clip.mediaStatus]}
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-wide text-amber-800 dark:text-amber-200">
          Facilitator status · {CLIP_STATUS_LABEL[clip.mediaStatus]}
        </p>
        <p className="mt-2 text-xs text-stone-500">{clip.sourceNote}</p>
      </figcaption>
    </figure>
  )
}
