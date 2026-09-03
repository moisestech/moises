import type { TrustChapterId } from './types'

export const TRUST_MEDIA_DIR = '/images/teaching/trust-is-not-a-vibe' as const

export type TrustClipMediaStatus = 'missing' | 'poster-ready' | 'recording-ready' | 'captioned' | 'complete'

export type TrustInstructorClipRecord = {
  id: '12-01' | '12-02' | '12-03' | '12-04' | '12-05' | '12-06'
  chapterId: TrustChapterId
  filename: string
  title: string
  durationHint: string
  sourceNote: string
  posterSrc: string
  posterFilename: string
  videoSrc?: string
  captionSrc?: string
  mediaStatus: TrustClipMediaStatus
}

export const TRUST_INSTRUCTOR_CLIPS: readonly TrustInstructorClipRecord[] = [
  {
    id: '12-01',
    chapterId: 'looks-right',
    filename: '12-01-looks-right',
    title: 'The hardest part is knowing whether it works',
    durationHint: '45–90s',
    sourceNote: 'Temporary poster. Recording and captions pending. Maps to evals 0:00–3:10, rewritten in our voice.',
    posterSrc: `${TRUST_MEDIA_DIR}/12-01-looks-right-poster.webp`,
    posterFilename: '12-01-looks-right-poster',
    mediaStatus: 'poster-ready',
  },
  {
    id: '12-02',
    chapterId: 'four-lenses',
    filename: '12-02-four-lenses',
    title: 'Four seats, one case',
    durationHint: '45–90s',
    sourceNote: 'Temporary poster. Recording and captions pending. This beat is ours — no source-video mapping.',
    posterSrc: `${TRUST_MEDIA_DIR}/12-02-four-lenses-poster.webp`,
    posterFilename: '12-02-four-lenses-poster',
    mediaStatus: 'poster-ready',
  },
  {
    id: '12-03',
    chapterId: 'seeded-failures',
    filename: '12-03-seeded-failures',
    title: 'You graded the answer, not the system',
    durationHint: '45–90s',
    sourceNote: 'Temporary poster. Recording and captions pending. Maps to evals 3:10–5:46 (eval vs benchmark).',
    posterSrc: `${TRUST_MEDIA_DIR}/12-03-seeded-failures-poster.webp`,
    posterFilename: '12-03-seeded-failures-poster',
    mediaStatus: 'poster-ready',
  },
  {
    id: '12-04',
    chapterId: 'the-loop',
    filename: '12-04-the-loop',
    title: 'From multiple choice to essay',
    durationHint: '45–90s',
    sourceNote: 'Temporary poster. Recording and captions pending. Maps to evals 5:46–9:48.',
    posterSrc: `${TRUST_MEDIA_DIR}/12-04-the-loop-poster.webp`,
    posterFilename: '12-04-the-loop-poster',
    mediaStatus: 'poster-ready',
  },
  {
    id: '12-05',
    chapterId: 'the-harness',
    filename: '12-05-the-harness',
    title: 'Golden cases first, then the loop',
    durationHint: '45–90s',
    sourceNote: 'Temporary poster. Recording and captions pending. Maps to evals 13:56–21:04. Skip 9:48–12:20 sponsor block.',
    posterSrc: `${TRUST_MEDIA_DIR}/12-05-the-harness-poster.webp`,
    posterFilename: '12-05-the-harness-poster',
    mediaStatus: 'poster-ready',
  },
  {
    id: '12-06',
    chapterId: 'transfer',
    filename: '12-06-transfer',
    title: 'The one thing to remember',
    durationHint: '45–90s',
    sourceNote: 'Temporary poster. Recording and captions pending. Maps to evals 21:04–21:34. Do not use the academy pitch.',
    posterSrc: `${TRUST_MEDIA_DIR}/12-06-transfer-poster.webp`,
    posterFilename: '12-06-transfer-poster',
    mediaStatus: 'poster-ready',
  },
] as const

export function getTrustInstructorClip(chapterId: TrustChapterId): TrustInstructorClipRecord {
  const clip = TRUST_INSTRUCTOR_CLIPS.find((item) => item.chapterId === chapterId)
  if (!clip) throw new Error(`Missing instructor clip for ${chapterId}`)
  return clip
}

export function trustClipIsComplete(clip: TrustInstructorClipRecord): boolean {
  return Boolean(clip.videoSrc && clip.captionSrc && clip.mediaStatus === 'complete')
}

export function trustInstructorGroupStatus(): TrustClipMediaStatus {
  if (TRUST_INSTRUCTOR_CLIPS.every(trustClipIsComplete)) return 'complete'
  if (TRUST_INSTRUCTOR_CLIPS.every((clip) => clip.videoSrc && clip.captionSrc)) return 'captioned'
  if (TRUST_INSTRUCTOR_CLIPS.every((clip) => clip.videoSrc)) return 'recording-ready'
  if (TRUST_INSTRUCTOR_CLIPS.every((clip) => clip.posterSrc)) return 'poster-ready'
  return 'missing'
}
