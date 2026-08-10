'use client';

type Props = {
  disabled?: boolean;
  onSubmit: (brief: string) => void;
  onReplay: () => void;
};

export function TaskInput({ disabled, onSubmit, onReplay }: Props) {
  return (
    <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
      <label style={{ fontSize: 13, fontWeight: 600 }}>Organizational brief</label>
      <textarea
        id="brief"
        defaultValue="Prepare a six-week creative technology program under a $2,000 budget."
        rows={3}
        style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #d6d3d1', font: 'inherit' }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <button
          type="button"
          disabled={disabled}
          onClick={() => {
            const el = document.getElementById('brief') as HTMLTextAreaElement | null;
            onSubmit(el?.value || '');
          }}
          style={{
            padding: '10px 14px',
            borderRadius: 8,
            border: 0,
            background: '#1c1917',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Run workflow
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={onReplay}
          style={{
            padding: '10px 14px',
            borderRadius: 8,
            border: '1px solid #d6d3d1',
            background: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Replay sample workflow
        </button>
      </div>
    </div>
  );
}
