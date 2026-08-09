import { compoundingSteps } from '@/content/research/the-internet-is-other-ai/projectData';

export function CompoundingFlow() {
  return (
    <section
      id="materialization"
      className="scroll-mt-28 border-b border-[#f0eee5]/15"
      aria-labelledby="compounding-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8d9088]">
          Compounding and materialization
        </p>
        <h2
          id="compounding-heading"
          className="max-w-3xl text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.03em]"
        >
          Session n rewrites the powers available at session n+1
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#f0eee5]/85">
          Refusals and revocations are not decorative feedback. Each intervention
          updates a local constitution that conditions the next negotiation. Selected
          unresolved exchanges may cross into physical space as Post-AI Readymades—only
          after human authorization.
        </p>

        <ol className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {compoundingSteps.map((step, index) => (
            <li
              key={step}
              className="border border-[#f0eee5]/20 p-4 sm:-ml-px sm:-mt-px"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-3 text-sm font-semibold tracking-[-0.01em] md:text-base">
                {step}
              </p>
              {index < compoundingSteps.length - 1 ? (
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b6e2ba]">
                  →
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
