'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import {
  MOONLIGHTER_SLUG,
  getModule,
  workshopPromise,
} from '@/content/workshops/moonlighter-ai-3d-printing'
import { MoonlighterShell } from '@/components/workshop/moonlighter/MoonlighterShell'
import { ModuleShell } from '@/components/workshop/moonlighter/ModuleShell'
import { ParticipantTopBar } from '@/components/workshop/moonlighter/ParticipantTopBar'
import {
  participantStorageKey,
  useMoonlighterSession,
} from '@/lib/workshop/moonlighter/useMoonlighterSession'

const base = `/workshop/${MOONLIGHTER_SLUG}`

export default function ParticipantModulePage() {
  const params = useParams()
  const router = useRouter()
  const code = String(params.code ?? '').toUpperCase()
  const moduleId = Number(params.module)
  const module = getModule(moduleId)
  const { bundle, error, markReady, setPace, setHelpFlag, ackPolicy, participantId } =
    useMoonlighterSession(code)

  const me = useMemo(
    () => bundle?.participants.find((p) => p.id === participantId),
    [bundle, participantId],
  )

  useEffect(() => {
    if (!localStorage.getItem(participantStorageKey(code))) {
      router.replace(`${base}/join`)
    }
  }, [code, router])

  useEffect(() => {
    if (!bundle || !me || me.pace !== 'follow') return
    if (bundle.session.mode === 'hold') return
    if (bundle.session.current_module !== moduleId && Number.isFinite(bundle.session.current_module)) {
      router.push(`${base}/session/${code}/m/${bundle.session.current_module}`)
    }
  }, [bundle, me, moduleId, code, router])

  if (!module) {
    return (
      <MoonlighterShell>
        <p className="p-8">Module not found.</p>
      </MoonlighterShell>
    )
  }

  const checkpoint = bundle?.checkpoints.find(
    (c) => c.participant_id === participantId && c.module_id === moduleId,
  )

  return (
    <MoonlighterShell>
      <ParticipantTopBar
        title={workshopPromise.title}
        sessionCode={code}
        moduleLabel={`Module ${module.id} · ${module.phase}`}
        pace={me?.pace ?? 'follow'}
        onPaceChange={(p) => void setPace(p)}
        progress={`${module.id + 1} / 10`}
        saveStatus={bundle?.offline ? 'Local save' : 'Synced'}
        onHelpFlag={(c) => void setHelpFlag(c)}
      />
      {bundle?.session.mode === 'hold' && (
        <div className="bg-[var(--ml-controlled)] px-4 py-2 text-center text-sm text-white">
          Class on hold — continue your current task; shared progression is paused.
        </div>
      )}
      {bundle?.session.warning_minutes != null && (
        <div className="bg-[var(--ml-diagnose)] px-4 py-2 text-center text-sm text-white">
          {bundle.session.warning_minutes}-minute warning
        </div>
      )}
      {error && <p className="px-4 py-2 text-sm text-[var(--ml-diagnose)]">{error}</p>}
      <ModuleShell
        module={module}
        sessionCode={code}
        hrefForModule={(id) => `${base}/session/${code}/m/${id}`}
        onMarkReady={() => void markReady(moduleId)}
        onPolicyAck={() => void ackPolicy()}
        checkpointStatus={checkpoint?.state ?? me?.status ?? 'working'}
        responseNote={
          checkpoint?.note ??
          (me?.policy_acked ? 'Recovery policy acknowledged' : undefined)
        }
      />
    </MoonlighterShell>
  )
}
