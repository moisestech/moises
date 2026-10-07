import { imageTo3dPaths } from '@/content/workshops/moonlighter-ai-3d-printing'

export function ImageTo3dPaths({ compact = false }: { compact?: boolean }) {
  return (
    <section className="border border-[var(--ml-soft-gray)] bg-white/60 p-4">
      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-digital)]">
        Meshy or Tripo
      </p>
      <h2 className="mt-1 text-base font-medium">Same method, two tools</h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ml-ink)]/75">{imageTo3dPaths.stillNote}</p>
      {!compact && (
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-[var(--ml-ink)]/85">
          {imageTo3dPaths.shared.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      )}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {[imageTo3dPaths.meshy, imageTo3dPaths.tripo].map((path) => (
          <div key={path.name} className="border border-[var(--ml-soft-gray)] p-3">
            <p className="text-sm font-medium">{path.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--ml-ink)]/80">{path.steps}</p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--ml-ink)]/55">{path.reference}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-[var(--ml-verified)]">Pass check: {imageTo3dPaths.passCheck}</p>
    </section>
  )
}
