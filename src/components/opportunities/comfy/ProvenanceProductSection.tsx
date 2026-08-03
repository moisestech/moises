'use client';

import { ExternalLink, FlaskConical, GitBranch, Layers, ShieldCheck } from 'lucide-react';
import {
  comfyWorkSample,
  provenanceBrand,
  provenanceLinks,
  type MilestoneStatus,
} from '@/content/opportunities/comfy/workSample';
import { cn } from '@/lib/utils';

const STATUS_STYLE: Record<
  MilestoneStatus,
  { label: string; color: string; bg: string }
> = {
  done: { label: 'Done', color: provenanceBrand.done, bg: 'rgba(34,197,94,0.12)' },
  active: { label: 'Active', color: provenanceBrand.active, bg: 'rgba(240,201,75,0.12)' },
  next: { label: 'Next', color: provenanceBrand.next, bg: 'rgba(59,130,246,0.14)' },
  later: { label: 'Later', color: provenanceBrand.later, bg: 'rgba(100,116,139,0.18)' },
};

export function ProvenanceProductSection() {
  const p = comfyWorkSample.product;

  return (
    <section
      id={p.sectionId}
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 scroll-mt-28 py-12 sm:scroll-mt-32 sm:py-16"
      style={{ backgroundColor: provenanceBrand.surface, color: provenanceBrand.text }}
      aria-labelledby="work-sample-heading"
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={provenanceLinks.mark} alt="" className="h-9 w-9 rounded-md" aria-hidden />
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: provenanceBrand.accent }}
            >
              {p.eyebrow}
            </p>
            <p className="mt-1 text-xs" style={{ color: provenanceBrand.textMuted }}>
              {p.disclaimer}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span
            className="rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide"
            style={{ backgroundColor: provenanceBrand.accentSubtle, color: provenanceBrand.accent }}
          >
            {p.statusChip}
          </span>
          <span className="text-xs" style={{ color: provenanceBrand.textMuted }}>
            {p.statusLine}
          </span>
        </div>

        <h2
          id="work-sample-heading"
          className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: provenanceBrand.text }}
        >
          {p.title}
        </h2>
        <p className="mt-2 max-w-3xl text-base sm:text-lg" style={{ color: provenanceBrand.textMuted }}>
          {p.subtitle}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed sm:text-[15px]" style={{ color: provenanceBrand.text }}>
          {p.definition}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed" style={{ color: provenanceBrand.textMuted }}>
          {p.blurb90}
        </p>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          {p.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                cta.primary
                  ? 'text-[#11110f] hover:brightness-110'
                  : 'border hover:bg-white/5',
              )}
              style={
                cta.primary
                  ? { backgroundColor: provenanceBrand.accent, outlineColor: provenanceBrand.focus }
                  : {
                      borderColor: provenanceBrand.border,
                      color: provenanceBrand.text,
                      outlineColor: provenanceBrand.focus,
                    }
              }
            >
              {cta.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          ))}
        </div>

        <figure
          className="mt-8 overflow-hidden rounded-xl border"
          style={{ borderColor: provenanceBrand.border, backgroundColor: provenanceBrand.canvas }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={provenanceLinks.heroSvg}
            alt="Architecture preview for Output Provenance Explorer — label as preview until a product screenshot ships"
            className="h-auto w-full"
            loading="lazy"
          />
          <figcaption
            className="border-t px-4 py-2.5 text-xs"
            style={{ borderColor: provenanceBrand.border, color: provenanceBrand.textMuted }}
          >
            Architecture preview SVG from the repo docs — not a live product screenshot.
          </figcaption>
        </figure>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {p.panels.map((panel) => (
            <div
              key={panel.id}
              className="rounded-xl border p-4"
              style={{
                borderColor: provenanceBrand.border,
                backgroundColor: provenanceBrand.surfaceElevated,
              }}
            >
              <Layers className="h-4 w-4" style={{ color: provenanceBrand.accent }} aria-hidden />
              <p className="mt-2 text-sm font-semibold">{panel.label}</p>
              <p className="mt-1 text-xs" style={{ color: provenanceBrand.textMuted }}>
                {panel.job}
              </p>
            </div>
          ))}
        </div>

        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Documentation links"
        >
          {p.docLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  borderColor: provenanceBrand.border,
                  color: provenanceBrand.text,
                  outlineColor: provenanceBrand.focus,
                }}
              >
                {link.label}
                <ExternalLink className="h-3 w-3 opacity-70" aria-hidden />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
              <GitBranch className="h-4 w-4" style={{ color: provenanceBrand.accent }} aria-hidden />
              Goals
            </h3>
            <ul className="mt-3 space-y-2">
              {p.goals.map((g) => (
                <li
                  key={g}
                  className="rounded-lg border px-3 py-2 text-sm"
                  style={{
                    borderColor: provenanceBrand.border,
                    backgroundColor: provenanceBrand.surfaceElevated,
                    color: provenanceBrand.text,
                  }}
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
              <ShieldCheck className="h-4 w-4" style={{ color: provenanceBrand.blocked }} aria-hidden />
              Non-goals
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.nonGoals.map((g) => (
                <li
                  key={g}
                  className="rounded-md border px-2.5 py-1 text-xs line-through decoration-red-400/80"
                  style={{
                    borderColor: 'rgba(239,68,68,0.45)',
                    color: provenanceBrand.textMuted,
                    backgroundColor: 'rgba(239,68,68,0.08)',
                  }}
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-bold uppercase tracking-wide">What’s shipped vs next</h3>
          <div className="mt-4 overflow-x-auto rounded-xl border" style={{ borderColor: provenanceBrand.border }}>
            <table className="min-w-full text-left text-sm">
              <thead style={{ backgroundColor: provenanceBrand.surfaceElevated }}>
                <tr className="text-[11px] uppercase tracking-wide" style={{ color: provenanceBrand.textMuted }}>
                  <th className="px-3 py-2.5 font-semibold">ID</th>
                  <th className="px-3 py-2.5 font-semibold">Theme</th>
                  <th className="px-3 py-2.5 font-semibold">Progress</th>
                  <th className="px-3 py-2.5 font-semibold">Status</th>
                  <th className="px-3 py-2.5 font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody>
                {p.milestones.map((m) => {
                  const s = STATUS_STYLE[m.status];
                  return (
                    <tr key={m.id} className="border-t" style={{ borderColor: provenanceBrand.border }}>
                      <td className="px-3 py-2.5 font-mono text-xs">{m.id}</td>
                      <td className="px-3 py-2.5 font-medium">{m.theme}</td>
                      <td className="px-3 py-2.5 font-mono text-xs" style={{ color: provenanceBrand.textMuted }}>
                        {m.progress}
                      </td>
                      <td className="px-3 py-2.5">
                        <span
                          className="inline-flex rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                          style={{ color: s.color, backgroundColor: s.bg }}
                        >
                          {s.label}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-xs" style={{ color: provenanceBrand.textMuted }}>
                        {m.detail}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
            <FlaskConical className="h-4 w-4" style={{ color: provenanceBrand.accent }} aria-hidden />
            What’s in the repo
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {p.categorySnapshot.map((row) => (
              <li
                key={row.category}
                className="rounded-xl border p-4"
                style={{
                  borderColor: provenanceBrand.border,
                  backgroundColor: provenanceBrand.surfaceElevated,
                }}
              >
                <p className="text-sm font-semibold">{row.category}</p>
                <p className="mt-2 text-xs">
                  <span style={{ color: provenanceBrand.done }}>Done: </span>
                  <span style={{ color: provenanceBrand.textMuted }}>{row.done}</span>
                </p>
                <p className="mt-1 text-xs">
                  <span style={{ color: provenanceBrand.next }}>Left: </span>
                  <span style={{ color: provenanceBrand.textMuted }}>{row.left}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            className="rounded-xl border p-4"
            style={{ borderColor: provenanceBrand.border, backgroundColor: provenanceBrand.surfaceElevated }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wide">Architecture rule</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: provenanceBrand.textMuted }}>
              {p.architectureRule}
            </p>
            <dl className="mt-4 space-y-2">
              {p.stack.map((row) => (
                <div key={row.layer} className="grid grid-cols-[7rem_1fr] gap-2 text-xs">
                  <dt className="font-semibold" style={{ color: provenanceBrand.accent }}>
                    {row.layer}
                  </dt>
                  <dd className="font-mono" style={{ color: provenanceBrand.textMuted }}>
                    {row.choice}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className="rounded-xl border p-4"
            style={{ borderColor: provenanceBrand.border, backgroundColor: provenanceBrand.surfaceElevated }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wide">QA / performance honesty</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: provenanceBrand.textMuted }}>
              {p.qaHonesty}
            </p>
            <p className="mt-3 text-xs" style={{ color: provenanceBrand.textMuted }}>
              Extension package = architecture stubs (not installable). Real Comfy workflow fixtures =
              Milestone 1. Accessibility = baseline skip link + text summary; full keyboard model incomplete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
