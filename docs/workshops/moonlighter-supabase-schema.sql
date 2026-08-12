-- Moonlighter workshop live session schema (run in Supabase SQL editor when ready).
-- App falls back to in-memory/local store if SUPABASE_* is unset.

create table if not exists moonlighter_sessions (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  current_module int not null default 0,
  mode text not null default 'running',
  warning_minutes int,
  facilitator_notes text not null default '',
  started_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists moonlighter_participants (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references moonlighter_sessions(id) on delete cascade,
  display_name text not null,
  token text unique not null,
  pace text not null default 'follow',
  pla_color text,
  tier text,
  status text not null default 'working',
  help_flag text,
  policy_acked boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists moonlighter_checkpoints (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid not null references moonlighter_participants(id) on delete cascade,
  module_id int not null,
  state text not null,
  note text,
  updated_at timestamptz not null default now(),
  unique (participant_id, module_id)
);

create table if not exists moonlighter_printers (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references moonlighter_sessions(id) on delete cascade,
  unit text not null,
  color text not null,
  job text,
  participant_id uuid references moonlighter_participants(id),
  estimate_min int,
  state text not null default 'idle'
);

create table if not exists moonlighter_handoffs (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references moonlighter_sessions(id) on delete cascade,
  participant_id uuid not null references moonlighter_participants(id) on delete cascade,
  project_title text not null default '',
  approved_filename text not null default '',
  tier text not null default '',
  dimensions text not null default '',
  pla_color text not null default '',
  printer_unit text not null default '',
  support_rating text not null default '',
  approval_status text not null default 'ready_for_review',
  expected_pickup text not null default '',
  notes text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists moonlighter_recovery_log (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references moonlighter_sessions(id) on delete cascade,
  participant_id uuid not null references moonlighter_participants(id) on delete cascade,
  failure_type text not null,
  photo_note text not null default '',
  reprint_queued boolean not null default false,
  created_at timestamptz not null default now()
);

-- Enable realtime for session sync when using Supabase.
-- alter publication supabase_realtime add table moonlighter_sessions;
-- alter publication supabase_realtime add table moonlighter_participants;
-- alter publication supabase_realtime add table moonlighter_checkpoints;
-- alter publication supabase_realtime add table moonlighter_printers;
