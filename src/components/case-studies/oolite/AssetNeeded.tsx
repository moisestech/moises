import type { NeededAsset } from '@/content/oolite-arts/case-study';

export function AssetNeeded({
  asset,
  tone = 'light',
}: {
  asset: NeededAsset;
  tone?: 'light' | 'dark';
}) {
  const dark = tone === 'dark';
  return (
    <div
      role="status"
      className={
        dark
          ? 'border border-dashed border-white/35 bg-white/10 text-white p-3 sm:p-4 text-left'
          : 'border border-dashed border-amber-700/50 bg-amber-50 text-amber-950 p-3 sm:p-4 text-left'
      }
    >
      <p
        className={`font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase mb-1.5 ${
          dark ? 'text-[#E10600]' : 'text-amber-800'
        }`}
      >
        Asset needed
      </p>
      <p className="text-sm font-medium mb-2">{asset.name}</p>
      <dl className={`space-y-1 text-xs ${dark ? 'text-white/75' : 'text-amber-900/80'}`}>
        <div className="grid grid-cols-[5.5rem_1fr] gap-2">
          <dt className="font-mono uppercase tracking-wider">Format</dt>
          <dd>{asset.preferred}</dd>
        </div>
        <div className="grid grid-cols-[5.5rem_1fr] gap-2">
          <dt className="font-mono uppercase tracking-wider">Folder</dt>
          <dd className="font-mono break-all">{asset.folder}</dd>
        </div>
        <div className="grid grid-cols-[5.5rem_1fr] gap-2">
          <dt className="font-mono uppercase tracking-wider">Record</dt>
          <dd className="font-mono break-all">{asset.record}</dd>
        </div>
      </dl>
    </div>
  );
}
