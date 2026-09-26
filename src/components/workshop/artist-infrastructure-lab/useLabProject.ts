'use client'

import { useCallback, useEffect, useState } from 'react'
import type { LabChapterId, LabProject } from '@/content/workshops/artist-infrastructure-lab'

export const LAB_PROJECT_KEY = 'artist-infrastructure-lab:v1'
const LAB_PROJECT_EVENT = 'artist-infrastructure-lab-change'

export const EMPTY_LAB_PROJECT: LabProject = {
  observe: null,
  structure: null,
  automate: null,
  judge: null,
  relate: null,
  publish: null,
  preserve: null,
  'hand-off': null,
}

function readProject(): LabProject {
  try {
    const raw = window.localStorage.getItem(LAB_PROJECT_KEY)
    if (!raw) return EMPTY_LAB_PROJECT
    const parsed = JSON.parse(raw) as Partial<LabProject>
    return { ...EMPTY_LAB_PROJECT, ...parsed }
  } catch {
    return EMPTY_LAB_PROJECT
  }
}

function writeProject(next: LabProject) {
  window.localStorage.setItem(LAB_PROJECT_KEY, JSON.stringify(next))
  window.dispatchEvent(new Event(LAB_PROJECT_EVENT))
}

export function useLabProject() {
  const [project, setProject] = useState<LabProject>(EMPTY_LAB_PROJECT)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setProject(readProject())
    setHydrated(true)
    const sync = () => setProject(readProject())
    window.addEventListener(LAB_PROJECT_EVENT, sync)
    return () => window.removeEventListener(LAB_PROJECT_EVENT, sync)
  }, [])

  const commit = useCallback(<K extends LabChapterId>(key: K, value: NonNullable<LabProject[K]>) => {
    setProject((current) => {
      const next = { ...current, [key]: value }
      writeProject(next)
      return next
    })
  }, [])

  const reset = useCallback(() => {
    window.localStorage.removeItem(LAB_PROJECT_KEY)
    window.dispatchEvent(new Event(LAB_PROJECT_EVENT))
    setProject(EMPTY_LAB_PROJECT)
  }, [])

  return { project, hydrated, commit, reset }
}
