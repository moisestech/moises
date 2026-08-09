import { agents, projectInformation } from '@/content/research/the-internet-is-other-ai/projectData';

export function Proposition() {
  return (
    <section
      id="proposition"
      className="scroll-mt-28 border-b border-[#f0eee5]/15"
      aria-labelledby="proposition-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8d9088]">
          Proposition
        </p>
        <h2
          id="proposition-heading"
          className="max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
        >
          {projectInformation.propositionHeading}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#f0eee5]/85">
          {projectInformation.propositionBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {agents.map((agent) => (
            <li
              key={agent.id}
              className="border border-[#f0eee5]/20 bg-[#10110f] p-4"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#b6e2ba]">
                {agent.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#f0eee5]/85">
                {agent.mandate}
              </p>
            </li>
          ))}
        </ul>

        <blockquote className="mt-10 max-w-3xl border-l-2 border-[#b6e2ba] pl-5 text-lg leading-snug text-[#f0eee5] md:text-xl">
          {projectInformation.humanInTheLoop}
        </blockquote>
      </div>
    </section>
  );
}
