type Event = { kind: string; message: string; tool?: string | null };

export function RunTimeline({
  runId,
  status,
  events,
}: {
  runId: string;
  status: string;
  events: Event[];
}) {
  return (
    <section>
      <h2 style={{ fontSize: '1.1rem', marginBottom: 8 }}>
        RUN {runId.toUpperCase()} · {status}
      </h2>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
        {events.map((e, i) => (
          <li
            key={`${e.message}-${i}`}
            style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: 13,
              padding: '8px 10px',
              background: '#fff',
              border: '1px solid #e7e5e4',
              borderRadius: 6,
            }}
          >
            {e.message}
          </li>
        ))}
      </ol>
    </section>
  );
}
