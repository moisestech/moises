import Image from 'next/image';
import Link from 'next/link';
import {
  bornIntoTheMachineDeeperLinks,
  bornIntoTheMachineSprint,
  bornIntoTheMachineSprintLinks,
  ideaCenterLogos,
  ideaCenterProgram,
} from '@/content/research/born-into-the-machine-sprint';

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function BornIntoTheMachineSprintPage() {
  const project = bornIntoTheMachineSprint;

  return (
    <article className="max-w-3xl mx-auto pb-16 sm:pb-24">
      <div className="mb-10 rounded-xl border border-gray-200 bg-white px-6 py-8 dark:border-gray-700 dark:bg-white">
        <Image
          src={ideaCenterLogos.horizontal}
          alt={`${ideaCenterProgram.name} at ${ideaCenterProgram.institution} — ${ideaCenterProgram.program}`}
          width={640}
          height={160}
          className="mx-auto h-auto w-full max-w-lg object-contain"
          priority
        />
      </div>

      <header className="mb-10 sm:mb-14">
        <div className="mb-6 flex items-start gap-4">
          <Image
            src={ideaCenterLogos.square}
            alt={`${ideaCenterProgram.name} logo`}
            width={72}
            height={72}
            className="h-[72px] w-[72px] shrink-0 rounded-md border border-gray-200 object-cover dark:border-gray-600"
          />
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
              {ideaCenterProgram.program} · {ideaCenterProgram.name} / {ideaCenterProgram.institution} ·{' '}
              {project.year}
            </p>
            <span className="inline-flex items-center rounded-full bg-violet-100 dark:bg-violet-900/40 px-3 py-1 text-xs font-medium text-violet-800 dark:text-violet-200">
              {project.status}
            </span>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {project.title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">{project.subtitle}</p>
      </header>

      <p className="text-lg sm:text-xl leading-relaxed text-gray-800 dark:text-gray-200 border-l-2 border-gray-300 dark:border-gray-600 pl-4 sm:pl-6 mb-12">
        {project.lede}
      </p>

      <section className="prose prose-lg dark:prose-invert max-w-none mb-14">
        <h2>Who I am</h2>
        <p>{project.positioning}</p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sprint focus</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.sprintFocus}</p>
      </section>

      <section className="mb-14 rounded-xl border border-violet-200 dark:border-violet-800/60 bg-violet-50/60 dark:bg-violet-950/20 px-5 sm:px-6 py-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{project.noVacancy.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.noVacancy.body}</p>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Sprint goals</h2>
        <BulletList items={project.sprintGoals} />
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Three project engines</h2>
        <ul className="space-y-6">
          {project.engines.map((engine) => (
            <li key={engine.title}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{engine.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{engine.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          What I&apos;m building during the sprint
        </h2>
        <BulletList items={project.building} />
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What I&apos;m looking for</h2>
        <BulletList items={project.lookingFor} />
      </section>

      <section className="mb-14 border-t border-gray-200 dark:border-gray-700 pt-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">The deeper project</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{project.funnel}</p>
        <ul className="space-y-4">
          {bornIntoTheMachineDeeperLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group block rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white group-hover:underline">
                  {link.label}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{link.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Links</h2>
        <div className="flex flex-wrap gap-3">
          {bornIntoTheMachineSprintLinks.map((link) =>
            'external' in link && link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </section>

      <section className="border-t border-gray-200 dark:border-gray-700 pt-10">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Moises Sanabria · Miami, Florida ·{' '}
          <Link href="/contact" className="underline underline-offset-4 hover:no-underline">
            Contact
          </Link>
        </p>
        <Link
          href="/research"
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline underline-offset-4"
        >
          ← Back to Research
        </Link>
      </section>
    </article>
  );
}
