export function ToolCallRow({ name, detail }: { name: string; detail?: string }) {
  return (
    <div style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 13 }}>
      <strong>→ {name}</strong>
      {detail ? <span style={{ marginLeft: 8, color: '#57534e' }}>{detail}</span> : null}
    </div>
  );
}
