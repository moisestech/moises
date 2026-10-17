import { printerAssumption } from '@/content/workshops/moonlighter-ai-3d-printing'

export function PrinterAssumption() {
  return (
    <section className="border border-[var(--ml-controlled)]/50 bg-[var(--ml-controlled)]/10 p-4">
      <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--ml-controlled)]">
        {printerAssumption.status}
      </p>
      <h2 className="mt-2 text-base font-medium">Printers for this pilot</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="text-sm font-medium">{printerAssumption.primary.name}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ml-ink)]/50">
            {printerAssumption.primary.role}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--ml-ink)]/75">
            {printerAssumption.primary.note}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">{printerAssumption.alternate.name}</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ml-ink)]/50">
            {printerAssumption.alternate.role}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--ml-ink)]/75">
            {printerAssumption.alternate.note}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[var(--ml-ink)]/70">{printerAssumption.stationNote}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ml-ink)]/70">{printerAssumption.settingsNote}</p>
    </section>
  )
}
