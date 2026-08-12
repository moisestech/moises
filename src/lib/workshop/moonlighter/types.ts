export type SessionPace = 'follow' | 'my_pace'
export type SessionMode = 'running' | 'hold' | 'open_studio'
export type CheckpointState =
  | 'not_started'
  | 'working'
  | 'ready_for_review'
  | 'needs_fix'
  | 'approved'
  | 'queued'
  | 'complete'

export type PrinterState =
  | 'idle'
  | 'assigned'
  | 'printing'
  | 'finished'
  | 'failed'
  | 'maintenance'

export type MoonlighterSession = {
  id: string
  code: string
  current_module: number
  mode: SessionMode
  warning_minutes: number | null
  facilitator_notes: string
  started_at: string
  updated_at: string
}

export type MoonlighterParticipant = {
  id: string
  session_id: string
  display_name: string
  token: string
  pace: SessionPace
  pla_color: 'black' | 'white' | 'accent' | null
  tier: 'miniature' | 'sculpture' | null
  status: CheckpointState
  help_flag: string | null
  policy_acked: boolean
  created_at: string
  updated_at: string
}

export type MoonlighterCheckpoint = {
  id: string
  participant_id: string
  module_id: number
  state: CheckpointState
  note: string | null
  updated_at: string
}

export type MoonlighterPrinter = {
  id: string
  session_id: string
  unit: string
  color: string
  job: string | null
  participant_id: string | null
  estimate_min: number | null
  state: PrinterState
}

export type MoonlighterHandoff = {
  id: string
  session_id: string
  participant_id: string
  project_title: string
  approved_filename: string
  tier: string
  dimensions: string
  pla_color: string
  printer_unit: string
  support_rating: string
  approval_status: string
  expected_pickup: string
  notes: string
  updated_at: string
}

export type MoonlighterRecovery = {
  id: string
  session_id: string
  participant_id: string
  failure_type: string
  photo_note: string
  reprint_queued: boolean
  created_at: string
}

export type SessionBundle = {
  session: MoonlighterSession
  participants: MoonlighterParticipant[]
  checkpoints: MoonlighterCheckpoint[]
  printers: MoonlighterPrinter[]
  handoffs: MoonlighterHandoff[]
  recovery: MoonlighterRecovery[]
  offline: boolean
}
