'use client'

import { useCallback, useEffect, useState } from 'react'
import type {
  TrustChapterId,
  TrustControlId,
  TrustLoopStage,
  TrustRoleId,
  TrustRubricKey,
  TrustRubricScore,
  TrustVerdict,
} from '@/content/workshops/trust-is-not-a-vibe'

export const TRUST_PROGRESS_KEY = 'trust-is-not-a-vibe:v1'

export type TrustRubric = Record<TrustRubricKey, TrustRubricScore | null>

export type TrustProgress = {
  role: TrustRoleId | null
  needToSee: string
  baselineVote: TrustVerdict | null
  revote: TrustVerdict | null
  namedFailures: string[]
  loopPlacements: Partial<Record<string, TrustLoopStage>>
  controlMatches: Partial<Record<string, TrustControlId>>
  teamVerdict: TrustVerdict | null
  transferVote: TrustVerdict | null
  rubric: TrustRubric
  exitTicket: string
  completedChapters: TrustChapterId[]
}

const EMPTY_RUBRIC: TrustRubric = {
  evidence: null,
  authority: null,
  impact: null,
  control: null,
}

export const EMPTY_TRUST_PROGRESS: TrustProgress = {
  role: null,
  needToSee: '',
  baselineVote: null,
  revote: null,
  namedFailures: [],
  loopPlacements: {},
  controlMatches: {},
  teamVerdict: null,
  transferVote: null,
  rubric: EMPTY_RUBRIC,
  exitTicket: '',
  completedChapters: [],
}

function isVerdict(value: unknown): value is TrustVerdict {
  return value === 'allow' || value === 'ask' || value === 'deny'
}

function parseProgress(raw: string | null): TrustProgress {
  if (!raw) return EMPTY_TRUST_PROGRESS
  try {
    const parsed = JSON.parse(raw) as Partial<TrustProgress>
    return {
      ...EMPTY_TRUST_PROGRESS,
      ...parsed,
      namedFailures: Array.isArray(parsed.namedFailures) ? parsed.namedFailures : [],
      loopPlacements: parsed.loopPlacements ?? {},
      controlMatches: parsed.controlMatches ?? {},
      rubric: { ...EMPTY_RUBRIC, ...parsed.rubric },
      completedChapters: Array.isArray(parsed.completedChapters) ? parsed.completedChapters : [],
      baselineVote: isVerdict(parsed.baselineVote) ? parsed.baselineVote : null,
      revote: isVerdict(parsed.revote) ? parsed.revote : null,
      teamVerdict: isVerdict(parsed.teamVerdict) ? parsed.teamVerdict : null,
      transferVote: isVerdict(parsed.transferVote) ? parsed.transferVote : null,
    }
  } catch {
    return EMPTY_TRUST_PROGRESS
  }
}

export function useTrustProgress() {
  const [progress, setProgress] = useState<TrustProgress>(EMPTY_TRUST_PROGRESS)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setProgress(parseProgress(window.localStorage.getItem(TRUST_PROGRESS_KEY)))
    setHydrated(true)
  }, [])

  const update = useCallback((patch: Partial<TrustProgress>) => {
    setProgress((current) => {
      const next = { ...current, ...patch }
      window.localStorage.setItem(TRUST_PROGRESS_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const markChapterComplete = useCallback((id: TrustChapterId) => {
    setProgress((current) => {
      const completedChapters = current.completedChapters.includes(id)
        ? current.completedChapters
        : [...current.completedChapters, id]
      const next = { ...current, completedChapters }
      window.localStorage.setItem(TRUST_PROGRESS_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const reset = useCallback(() => {
    window.localStorage.removeItem(TRUST_PROGRESS_KEY)
    setProgress(EMPTY_TRUST_PROGRESS)
  }, [])

  return { progress, hydrated, update, markChapterComplete, reset }
}

export function rubricTotal(rubric: TrustRubric): number {
  return (rubric.evidence ?? 0) + (rubric.authority ?? 0) + (rubric.impact ?? 0) + (rubric.control ?? 0)
}
