import {
  projectInformation,
  projectMeta,
} from '@/content/research/the-internet-is-other-ai/projectData';

export function ProjectInformation() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-b border-[#f0eee5]/15"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8d9088]">
          Project information
        </p>
        <h2
          id="about-heading"
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.03em]"
        >
          {projectMeta.shortTitle}
        </h2>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8d9088]">
          {projectMeta.positioning}
        </p>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[#f0eee5]/85">
          {projectInformation.shortConcept.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 max-w-3xl border border-[#f0eee5]/20 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8d9088]">
            Format
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#f0eee5]/85 md:text-base">
            {projectInformation.formatDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
