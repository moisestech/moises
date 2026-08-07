import {
  docsLinks,
  implementationSignals,
  projectMeta,
} from '@/content/research/the-internet-is-other-ai/projectData';

export function ImplementationStrip() {
  return (
    <section
      className="border-b border-[#f0eee5]/15 bg-[#e3e0d3] text-[#10110f]"
      aria-labelledby="implementation-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        <div className="flex flex-wrap gap-2">
          {implementationSignals.map((signal) => (
            <span
              key={signal}
              className="inline-flex min-h-11 items-center border border-[#10110f]/25 px-3 font-mono text-[10px] uppercase tracking-[0.14em]"
            >
              {signal}
            </span>
          ))}
        </div>
        <h2 id="implementation-heading" className="sr-only">
          Web implementation
        </h2>
        <p className="mt-5 max-w-4xl text-sm leading-relaxed md:text-base">
          {projectMeta.oneSentenceImplementation}
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {docsLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.14em] underline underline-offset-4 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10110f]"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
