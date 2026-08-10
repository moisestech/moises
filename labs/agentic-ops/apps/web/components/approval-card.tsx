export function ApprovalCard({
  toolName,
  disabled,
  onApprove,
  onRevise,
}: {
  toolName: string;
  disabled?: boolean;
  onApprove: () => void;
  onRevise: () => void;
}) {
  return (
    <div
      style={{
        marginTop: 16,
        padding: 16,
        borderRadius: 10,
        border: '1px solid #fbbf24',
        background: '#fffbeb',
      }}
    >
      <p style={{ margin: 0, fontWeight: 700 }}>Human approval required</p>
      <p style={{ margin: '6px 0 12px', fontSize: 14, color: '#78716c' }}>
        WRITE tool <code>{toolName}</code> is blocked until you approve.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="button"
          disabled={disabled}
          onClick={onApprove}
          style={{
            padding: '8px 12px',
            borderRadius: 8,
            border: 0,
            background: '#166534',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Approve execute
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={onRevise}
          style={{
            padding: '8px 12px',
            borderRadius: 8,
            border: '1px solid #d6d3d1',
            background: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Revise
        </button>
      </div>
    </div>
  );
}
