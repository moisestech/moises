'use client';

import { useState } from 'react';
import { TaskInput } from '../components/task-input';
import { RunTimeline } from '../components/run-timeline';
import { ApprovalCard } from '../components/approval-card';
import { SourceCardList } from '../components/source-card';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

type Run = {
  id: string;
  brief: string;
  status: string;
  events: { kind: string; message: string; tool?: string | null; sources?: any[] }[];
  pending_write?: { name: string; arguments: Record<string, unknown> } | null;
  artifact?: Record<string, unknown> | null;
};

export default function Page() {
  const [run, setRun] = useState<Run | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function start(brief: string, demo: boolean) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/runs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brief, demo, scenario: 'creative-program' }),
      });
      if (!res.ok) throw new Error(`API ${res.status}`);
      setRun(await res.json());
    } catch (e) {
      setError(
        e instanceof Error
          ? `${e.message}. Start the API or use the static demo fixture from the README.`
          : 'Request failed',
      );
    } finally {
      setLoading(false);
    }
  }

  async function approve(ok: boolean) {
    if (!run) return;
    setLoading(true);
    try {
      const res = await fetch(`${API}/runs/${run.id}/approval`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ run_id: run.id, approve: ok }),
      });
      if (!res.ok) throw new Error(`API ${res.status}`);
      setRun(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Approval failed');
    } finally {
      setLoading(false);
    }
  }

  const sources =
    run?.events.flatMap((e) => e.sources || []).filter(Boolean) ?? [];

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1.25rem 4rem' }}>
      <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#78716c' }}>
        Agentic Ops · Demo
      </p>
      <h1 style={{ fontSize: '1.75rem', margin: '0.35rem 0 0.5rem' }}>
        Auditable multi-tool agent runtime
      </h1>
      <p style={{ color: '#57534e', lineHeight: 1.5 }}>
        Not a chatbot. Planner → tools → retrieval → human approval → execute. Domain: Creative
        Institution Program Launch.
      </p>

      <TaskInput
        disabled={loading}
        onSubmit={(brief) => start(brief, false)}
        onReplay={() =>
          start('Prepare a six-week creative technology program under a $2,000 budget.', true)
        }
      />

      {error ? (
        <p style={{ marginTop: 16, color: '#b91c1c', fontSize: 14 }}>{error}</p>
      ) : null}

      {run ? (
        <div style={{ marginTop: 28 }}>
          <RunTimeline runId={run.id} status={run.status} events={run.events} />
          <SourceCardList sources={sources} />
          {run.status === 'awaiting_approval' && run.pending_write ? (
            <ApprovalCard
              toolName={run.pending_write.name}
              disabled={loading}
              onApprove={() => approve(true)}
              onRevise={() => approve(false)}
            />
          ) : null}
          {run.artifact ? (
            <pre
              style={{
                marginTop: 16,
                padding: 12,
                background: '#f5f5f4',
                borderRadius: 8,
                fontSize: 13,
                overflow: 'auto',
              }}
            >
              {JSON.stringify(run.artifact, null, 2)}
            </pre>
          ) : null}
        </div>
      ) : null}
    </main>
  );
}
