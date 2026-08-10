type Source = {
  document: string;
  page?: string | null;
  confidence?: number | null;
  excerpt?: string | null;
};

export function SourceCardList({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <section style={{ marginTop: 16 }}>
      <h3 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#78716c' }}>
        Sources
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
        {sources.map((s, i) => (
          <li
            key={`${s.document}-${i}`}
            style={{ padding: 12, background: '#fff', border: '1px solid #e7e5e4', borderRadius: 8 }}
          >
            <strong style={{ fontSize: 14 }}>{s.document}</strong>
            {s.page ? <span style={{ marginLeft: 8, fontSize: 13 }}>Page {s.page}</span> : null}
            {s.confidence != null ? (
              <span style={{ marginLeft: 8, fontSize: 13, color: '#57534e' }}>
                Confidence: {s.confidence}
              </span>
            ) : null}
            {s.excerpt ? (
              <p style={{ margin: '6px 0 0', fontSize: 13, color: '#44403c' }}>{s.excerpt}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
