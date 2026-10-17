/**
 * Session reads and writes. Supabase is the record when it is configured.
 * Otherwise the in-memory store is rehearsal only and does not survive a restart.
 * A configured store that fails does not fall back to memory.
 */

import { randomUUID } from 'crypto'
import { createSupabaseAdmin } from '@/lib/supabase'
import {
  addRecovery as addMemoryRecovery,
  createOfflineSession,
  findParticipantByToken as findMemoryParticipant,
  getBundleByCode as getMemoryBundle,
  joinOfflineSession,
  updateParticipant as updateMemoryParticipant,
  updatePrinter as updateMemoryPrinter,
  updateSessionControl as updateMemoryControl,
  upsertCheckpoint as upsertMemoryCheckpoint,
  upsertHandoff as upsertMemoryHandoff,
} from './offline-store'
import type {
  CheckpointState,
  MoonlighterCheckpoint,
  MoonlighterHandoff,
  MoonlighterParticipant,
  MoonlighterPrinter,
  MoonlighterRecovery,
  MoonlighterSession,
  PrinterState,
  SessionBundle,
  SessionMode,
  SessionPace,
} from './types'

export class DurableStoreError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DurableStoreError'
  }
}

export type HandoffWrite = Omit<
  MoonlighterHandoff,
  'id' | 'updated_at' | 'project_slug' | 'rubric_summary' | 'reference_rights'
> & {
  id?: string
  project_slug?: string
  rubric_summary?: string
  reference_rights?: boolean
}

type Row = Record<string, unknown>

function admin() {
  return createSupabaseAdmin()
}

export function sessionStoreIsDurable(): boolean {
  return admin() != null
}

function stamp() {
  return new Date().toISOString()
}

function makeCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)]
  return code
}

function asSession(row: Row): MoonlighterSession {
  return {
    id: String(row.id),
    code: String(row.code),
    current_module: Number(row.current_module ?? 0),
    mode: (row.mode as SessionMode) ?? 'running',
    warning_minutes: row.warning_minutes == null ? null : Number(row.warning_minutes),
    facilitator_notes: String(row.facilitator_notes ?? ''),
    started_at: String(row.started_at),
    updated_at: String(row.updated_at),
  }
}

function asParticipant(row: Row): MoonlighterParticipant {
  return {
    id: String(row.id),
    session_id: String(row.session_id),
    display_name: String(row.display_name),
    token: String(row.token),
    pace: (row.pace as SessionPace) ?? 'follow',
    pla_color: (row.pla_color as MoonlighterParticipant['pla_color']) ?? null,
    tier: (row.tier as MoonlighterParticipant['tier']) ?? null,
    status: (row.status as CheckpointState) ?? 'working',
    help_flag: row.help_flag == null ? null : String(row.help_flag),
    policy_acked: Boolean(row.policy_acked),
    created_at: String(row.created_at),
    updated_at: String(row.updated_at),
  }
}

function asCheckpoint(row: Row): MoonlighterCheckpoint {
  return {
    id: String(row.id),
    participant_id: String(row.participant_id),
    module_id: Number(row.module_id),
    state: row.state as CheckpointState,
    note: row.note == null ? null : String(row.note),
    updated_at: String(row.updated_at),
  }
}

function asPrinter(row: Row): MoonlighterPrinter {
  return {
    id: String(row.id),
    session_id: String(row.session_id),
    unit: String(row.unit),
    color: String(row.color),
    job: row.job == null ? null : String(row.job),
    participant_id: row.participant_id == null ? null : String(row.participant_id),
    estimate_min: row.estimate_min == null ? null : Number(row.estimate_min),
    state: (row.state as PrinterState) ?? 'idle',
  }
}

function asHandoff(row: Row): MoonlighterHandoff {
  return {
    id: String(row.id),
    session_id: String(row.session_id),
    participant_id: String(row.participant_id),
    project_title: String(row.project_title ?? ''),
    project_slug: String(row.project_slug ?? ''),
    approved_filename: String(row.approved_filename ?? ''),
    tier: String(row.tier ?? ''),
    dimensions: String(row.dimensions ?? ''),
    pla_color: String(row.pla_color ?? ''),
    printer_unit: String(row.printer_unit ?? ''),
    support_rating: String(row.support_rating ?? ''),
    approval_status: String(row.approval_status ?? 'ready_for_review'),
    expected_pickup: String(row.expected_pickup ?? ''),
    notes: String(row.notes ?? ''),
    rubric_summary: String(row.rubric_summary ?? ''),
    reference_rights: Boolean(row.reference_rights),
    updated_at: String(row.updated_at),
  }
}

function asRecovery(row: Row): MoonlighterRecovery {
  return {
    id: String(row.id),
    session_id: String(row.session_id),
    participant_id: String(row.participant_id),
    failure_type: String(row.failure_type),
    photo_note: String(row.photo_note ?? ''),
    reprint_queued: Boolean(row.reprint_queued),
    created_at: String(row.created_at),
  }
}

function throwIf(error: { message: string } | null, message: string) {
  if (error) {
    console.error('[moonlighter session]', error.message)
    throw new DurableStoreError(message)
  }
}

async function createDurableSession(): Promise<MoonlighterSession> {
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  let lastError: { message: string } | null = null
  for (let attempt = 0; attempt < 5; attempt++) {
    const id = randomUUID()
    const code = makeCode()
    const started = stamp()
    const { error } = await supabase.from('moonlighter_sessions').insert({
      id,
      code,
      current_module: 0,
      mode: 'running',
      warning_minutes: null,
      facilitator_notes: '',
      started_at: started,
      updated_at: started,
    })
    if (error) {
      lastError = error
      if (/duplicate|unique/i.test(error.message)) continue
      throwIf(error, 'Could not create the session record.')
    }
    const printers = [1, 2, 3, 4].map((i) => ({
      id: randomUUID(),
      session_id: id,
      unit: `ML-P0${i}`,
      color: i === 1 ? 'black' : i === 2 ? 'white' : i === 3 ? 'accent' : 'black',
      job: null,
      participant_id: null,
      estimate_min: null,
      state: 'idle',
    }))
    const { error: printerError } = await supabase.from('moonlighter_printers').insert(printers)
    if (printerError) {
      await supabase.from('moonlighter_sessions').delete().eq('id', id)
      throwIf(printerError, 'Could not create printer lanes.')
    }
    return {
      id,
      code,
      current_module: 0,
      mode: 'running',
      warning_minutes: null,
      facilitator_notes: '',
      started_at: started,
      updated_at: started,
    }
  }
  throwIf(lastError, 'Could not create the session record.')
  throw new DurableStoreError('Could not create the session record.')
}

export async function createWorkshopSession(): Promise<{ session: MoonlighterSession; offline: boolean }> {
  if (!sessionStoreIsDurable()) {
    return { session: createOfflineSession(), offline: true }
  }
  return { session: await createDurableSession(), offline: false }
}

export async function joinWorkshopSession(
  code: string,
  displayName: string,
): Promise<{ session: MoonlighterSession; participant: MoonlighterParticipant; offline: boolean } | null> {
  if (!sessionStoreIsDurable()) {
    const result = joinOfflineSession(code, displayName)
    return result ? { ...result, offline: true } : null
  }
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  const { data, error } = await supabase
    .from('moonlighter_sessions')
    .select('*')
    .eq('code', code.toUpperCase())
    .maybeSingle()
  throwIf(error, 'Could not read the session record.')
  if (!data) return null
  const session = asSession(data as Row)
  const created = stamp()
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
    created_at: created,
    updated_at: created,
  }
  const { error: insertError } = await supabase.from('moonlighter_participants').insert(participant)
  throwIf(insertError, 'Could not join the session record.')
  return { session, participant, offline: false }
}

export async function getWorkshopBundle(code: string): Promise<SessionBundle | null> {
  if (!sessionStoreIsDurable()) return getMemoryBundle(code)
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  const { data, error } = await supabase
    .from('moonlighter_sessions')
    .select('*')
    .eq('code', code.toUpperCase())
    .maybeSingle()
  throwIf(error, 'Could not read the session record.')
  if (!data) return null
  const session = asSession(data as Row)
  const [participantsRes, printersRes, handoffsRes, recoveryRes] = await Promise.all([
    supabase.from('moonlighter_participants').select('*').eq('session_id', session.id),
    supabase.from('moonlighter_printers').select('*').eq('session_id', session.id),
    supabase.from('moonlighter_handoffs').select('*').eq('session_id', session.id),
    supabase.from('moonlighter_recovery_log').select('*').eq('session_id', session.id),
  ])
  throwIf(participantsRes.error, 'Could not read participants.')
  throwIf(printersRes.error, 'Could not read printer lanes.')
  throwIf(handoffsRes.error, 'Could not read handoffs.')
  throwIf(recoveryRes.error, 'Could not read the recovery log.')
  const participants = ((participantsRes.data ?? []) as Row[]).map(asParticipant)
  const ids = participants.map((p) => p.id)
  let checkpoints: MoonlighterCheckpoint[] = []
  if (ids.length > 0) {
    const checkpointRes = await supabase.from('moonlighter_checkpoints').select('*').in('participant_id', ids)
    throwIf(checkpointRes.error, 'Could not read checkpoints.')
    checkpoints = ((checkpointRes.data ?? []) as Row[]).map(asCheckpoint)
  }
  return {
    session,
    participants,
    checkpoints,
    printers: ((printersRes.data ?? []) as Row[]).map(asPrinter),
    handoffs: ((handoffsRes.data ?? []) as Row[]).map(asHandoff),
    recovery: ((recoveryRes.data ?? []) as Row[]).map(asRecovery),
    offline: false,
  }
}

export async function updateWorkshopControl(
  code: string,
  patch: Partial<Pick<MoonlighterSession, 'current_module' | 'mode' | 'warning_minutes' | 'facilitator_notes'>>,
): Promise<MoonlighterSession | null> {
  if (!sessionStoreIsDurable()) return updateMemoryControl(code, patch)
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  const cleaned: Record<string, unknown> = { updated_at: stamp() }
  for (const [key, value] of Object.entries(patch)) {
    if (value !== undefined) cleaned[key] = value
  }
  const { data, error } = await supabase
    .from('moonlighter_sessions')
    .update(cleaned)
    .eq('code', code.toUpperCase())
    .select('*')
    .maybeSingle()
  throwIf(error, 'Could not update the session record.')
  return data ? asSession(data as Row) : null
}

export async function findWorkshopParticipant(token: string): Promise<MoonlighterParticipant | null> {
  if (!sessionStoreIsDurable()) return findMemoryParticipant(token)
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  const { data, error } = await supabase
    .from('moonlighter_participants')
    .select('*')
    .eq('token', token)
    .maybeSingle()
  throwIf(error, 'Could not read the participant.')
  return data ? asParticipant(data as Row) : null
}

export async function updateWorkshopParticipant(
  participantId: string,
  patch: Partial<MoonlighterParticipant>,
): Promise<MoonlighterParticipant | null> {
  if (!sessionStoreIsDurable()) return updateMemoryParticipant(participantId, patch)
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  const cleaned: Record<string, unknown> = { updated_at: stamp() }
  for (const [key, value] of Object.entries(patch)) {
    if (value !== undefined && key !== 'id' && key !== 'token' && key !== 'session_id') cleaned[key] = value
  }
  const { data, error } = await supabase
    .from('moonlighter_participants')
    .update(cleaned)
    .eq('id', participantId)
    .select('*')
    .maybeSingle()
  throwIf(error, 'Could not update the participant.')
  return data ? asParticipant(data as Row) : null
}

export async function upsertWorkshopCheckpoint(
  participantId: string,
  moduleId: number,
  state: CheckpointState,
  note?: string,
): Promise<MoonlighterCheckpoint | null> {
  if (!sessionStoreIsDurable()) return upsertMemoryCheckpoint(participantId, moduleId, state, note)
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  const { data: existing, error: readError } = await supabase
    .from('moonlighter_checkpoints')
    .select('*')
    .eq('participant_id', participantId)
    .eq('module_id', moduleId)
    .maybeSingle()
  throwIf(readError, 'Could not read the checkpoint.')
  const prior = existing ? asCheckpoint(existing as Row) : null
  const row = {
    id: prior?.id ?? randomUUID(),
    participant_id: participantId,
    module_id: moduleId,
    state,
    note: note ?? prior?.note ?? null,
    updated_at: stamp(),
  }
  const write = prior
    ? supabase.from('moonlighter_checkpoints').update(row).eq('id', prior.id)
    : supabase.from('moonlighter_checkpoints').insert(row)
  const { error } = await write
  throwIf(error, 'Could not save the checkpoint.')
  const { error: statusError } = await supabase
    .from('moonlighter_participants')
    .update({ status: state, updated_at: stamp() })
    .eq('id', participantId)
  throwIf(statusError, 'Could not update participant status.')
  return {
    id: row.id,
    participant_id: participantId,
    module_id: moduleId,
    state,
    note: row.note,
    updated_at: row.updated_at,
  }
}

export async function updateWorkshopPrinter(
  printerId: string,
  patch: Partial<MoonlighterPrinter>,
): Promise<MoonlighterPrinter | null> {
  if (!sessionStoreIsDurable()) return updateMemoryPrinter(printerId, patch)
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  const cleaned: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(patch)) {
    if (value !== undefined && key !== 'id' && key !== 'session_id') cleaned[key] = value
  }
  const { data, error } = await supabase
    .from('moonlighter_printers')
    .update(cleaned)
    .eq('id', printerId)
    .select('*')
    .maybeSingle()
  throwIf(error, 'Could not update the printer lane.')
  return data ? asPrinter(data as Row) : null
}

export async function upsertWorkshopHandoff(input: HandoffWrite): Promise<MoonlighterHandoff> {
  if (!sessionStoreIsDurable()) return upsertMemoryHandoff(input)
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  const { data: existingRows, error: readError } = await supabase
    .from('moonlighter_handoffs')
    .select('*')
    .eq('session_id', input.session_id)
    .eq('participant_id', input.participant_id)
    .order('updated_at', { ascending: false })
    .limit(1)
  throwIf(readError, 'Could not read the handoff.')
  const existing = existingRows?.[0] ? asHandoff(existingRows[0] as Row) : null
  const row: MoonlighterHandoff = {
    ...existing,
    ...input,
    project_slug: input.project_slug ?? existing?.project_slug ?? '',
    rubric_summary: input.rubric_summary ?? existing?.rubric_summary ?? '',
    reference_rights: input.reference_rights ?? existing?.reference_rights ?? false,
    id: existing?.id ?? input.id ?? randomUUID(),
    updated_at: stamp(),
  }
  const { error } = existing
    ? await supabase.from('moonlighter_handoffs').update(row).eq('id', row.id)
    : await supabase.from('moonlighter_handoffs').insert(row)
  throwIf(error, 'Could not save the handoff.')
  return row
}

export async function addWorkshopRecovery(
  input: Omit<MoonlighterRecovery, 'id' | 'created_at'>,
): Promise<MoonlighterRecovery> {
  if (!sessionStoreIsDurable()) return addMemoryRecovery(input)
  const supabase = admin()
  if (!supabase) throw new DurableStoreError('Durable session store is not configured.')
  const row: MoonlighterRecovery = { ...input, id: randomUUID(), created_at: stamp() }
  const { error } = await supabase.from('moonlighter_recovery_log').insert(row)
  throwIf(error, 'Could not save the recovery log.')
  return row
}
