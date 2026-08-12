/**
 * In-memory + localStorage session store for rehearsal when Supabase is unavailable.
 * Server APIs use this as fallback; browser also mirrors participant token locally.
 */

import { randomUUID } from 'crypto'
import type {
  CheckpointState,
  MoonlighterCheckpoint,
  MoonlighterHandoff,
  MoonlighterParticipant,
  MoonlighterPrinter,
  MoonlighterRecovery,
  MoonlighterSession,
  SessionBundle,
  SessionMode,
} from './types'

type Store = {
  sessions: Map<string, MoonlighterSession>
  byCode: Map<string, string>
  participants: Map<string, MoonlighterParticipant>
  checkpoints: Map<string, MoonlighterCheckpoint>
  printers: Map<string, MoonlighterPrinter>
  handoffs: Map<string, MoonlighterHandoff>
  recovery: Map<string, MoonlighterRecovery>
}

const globalForStore = globalThis as unknown as { __moonlighterStore?: Store }

function store(): Store {
  if (!globalForStore.__moonlighterStore) {
    globalForStore.__moonlighterStore = {
      sessions: new Map(),
      byCode: new Map(),
      participants: new Map(),
      checkpoints: new Map(),
      printers: new Map(),
      handoffs: new Map(),
      recovery: new Map(),
    }
  }
  return globalForStore.__moonlighterStore
}

function now() {
  return new Date().toISOString()
}

function makeCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)]
  return code
}

export function createOfflineSession(): MoonlighterSession {
  const s = store()
  let code = makeCode()
  while (s.byCode.has(code)) code = makeCode()
  const session: MoonlighterSession = {
    id: randomUUID(),
    code,
    current_module: 0,
    mode: 'running',
    warning_minutes: null,
    facilitator_notes: '',
    started_at: now(),
    updated_at: now(),
  }
  s.sessions.set(session.id, session)
  s.byCode.set(code, session.id)
  for (let i = 1; i <= 4; i++) {
    const printer: MoonlighterPrinter = {
      id: randomUUID(),
      session_id: session.id,
      unit: `Printer ${i}`,
      color: i === 1 ? 'black' : i === 2 ? 'white' : i === 3 ? 'accent' : 'black',
      job: null,
      participant_id: null,
      estimate_min: null,
      state: 'idle',
    }
    s.printers.set(printer.id, printer)
  }
  return session
}

export function getSessionByCode(code: string): MoonlighterSession | null {
  const s = store()
  const id = s.byCode.get(code.toUpperCase())
  if (!id) return null
  return s.sessions.get(id) ?? null
}

export function joinOfflineSession(
  code: string,
  displayName: string,
): { session: MoonlighterSession; participant: MoonlighterParticipant } | null {
  const session = getSessionByCode(code)
  if (!session) return null
  const s = store()
  const participant: MoonlighterParticipant = {
    id: randomUUID(),
    session_id: session.id,
    display_name: displayName.trim() || 'Participant',
    token: randomUUID(),
    pace: 'follow',
    pla_color: null,
    tier: null,
    status: 'working',
    help_flag: null,
    policy_acked: false,
    created_at: now(),
    updated_at: now(),
  }
  s.participants.set(participant.id, participant)
  return { session, participant }
}

export function getBundleByCode(code: string): SessionBundle | null {
  const session = getSessionByCode(code)
  if (!session) return null
  const s = store()
  const participants = [...s.participants.values()].filter((p) => p.session_id === session.id)
  const participantIds = new Set(participants.map((p) => p.id))
  return {
    session,
    participants,
    checkpoints: [...s.checkpoints.values()].filter((c) => participantIds.has(c.participant_id)),
    printers: [...s.printers.values()].filter((p) => p.session_id === session.id),
    handoffs: [...s.handoffs.values()].filter((h) => h.session_id === session.id),
    recovery: [...s.recovery.values()].filter((r) => r.session_id === session.id),
    offline: true,
  }
}

export function updateSessionControl(
  code: string,
  patch: Partial<Pick<MoonlighterSession, 'current_module' | 'mode' | 'warning_minutes' | 'facilitator_notes'>>,
): MoonlighterSession | null {
  const session = getSessionByCode(code)
  if (!session) return null
  const cleaned: Partial<MoonlighterSession> = {}
  for (const [k, v] of Object.entries(patch)) {
    if (v !== undefined) (cleaned as Record<string, unknown>)[k] = v
  }
  const next = { ...session, ...cleaned, updated_at: now() }
  store().sessions.set(session.id, next)
  return next
}

export function upsertCheckpoint(
  participantId: string,
  moduleId: number,
  state: CheckpointState,
  note?: string,
): MoonlighterCheckpoint | null {
  const s = store()
  const participant = s.participants.get(participantId)
  if (!participant) return null
  const existing = [...s.checkpoints.values()].find(
    (c) => c.participant_id === participantId && c.module_id === moduleId,
  )
  const row: MoonlighterCheckpoint = {
    id: existing?.id ?? randomUUID(),
    participant_id: participantId,
    module_id: moduleId,
    state,
    note: note ?? existing?.note ?? null,
    updated_at: now(),
  }
  s.checkpoints.set(row.id, row)
  s.participants.set(participantId, {
    ...participant,
    status: state,
    updated_at: now(),
  })
  return row
}

export function updateParticipant(
  participantId: string,
  patch: Partial<MoonlighterParticipant>,
): MoonlighterParticipant | null {
  const s = store()
  const p = s.participants.get(participantId)
  if (!p) return null
  const next = { ...p, ...patch, updated_at: now() }
  s.participants.set(participantId, next)
  return next
}

export function findParticipantByToken(token: string): MoonlighterParticipant | null {
  return [...store().participants.values()].find((p) => p.token === token) ?? null
}

export function updatePrinter(
  printerId: string,
  patch: Partial<MoonlighterPrinter>,
): MoonlighterPrinter | null {
  const s = store()
  const p = s.printers.get(printerId)
  if (!p) return null
  const next = { ...p, ...patch }
  s.printers.set(printerId, next)
  return next
}

export function upsertHandoff(
  input: Omit<MoonlighterHandoff, 'id' | 'updated_at'> & { id?: string },
): MoonlighterHandoff {
  const s = store()
  const existing = [...s.handoffs.values()].find(
    (h) => h.participant_id === input.participant_id && h.session_id === input.session_id,
  )
  const row: MoonlighterHandoff = {
    ...input,
    id: input.id ?? existing?.id ?? randomUUID(),
    updated_at: now(),
  }
  s.handoffs.set(row.id, row)
  return row
}

export function addRecovery(
  input: Omit<MoonlighterRecovery, 'id' | 'created_at'>,
): MoonlighterRecovery {
  const row: MoonlighterRecovery = {
    ...input,
    id: randomUUID(),
    created_at: now(),
  }
  store().recovery.set(row.id, row)
  return row
}

export type { SessionMode }
