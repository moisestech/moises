import Image from 'next/image';
import Link from 'next/link';

/** Shared media placeholder for grant proposal dossiers */
export type GrantPlaceholderMedia = {
  label: string;
  caption: string;
  src?: string;
  alt: string;
};

export type GrantBudgetLine = { category: string; amount: number };

export type GrantRelatedWork = {
  slug: string;
  title: string;
  year: number;
  image: string;
  blurb: string;
};

export function GrantSection({
  id,
  title,
  children,
  className = '',
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mb-16 sm:mb-20 ${className}`}>
      {title ? (
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 mb-6">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}

export function GrantPlaceholderFigure({
  media,
  aspectClass = 'aspect-[16/10]',
  priority = false,
  className = '',
}: {
  media: GrantPlaceholderMedia;
  aspectClass?: string;
  priority?: boolean;
  className?: string;
}) {
  const isPlaceholder = !media.src || media.label.startsWith('[PLACEHOLDER]');

  return (
    <figure className={`w-full ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200/90 mb-2">
        {media.label}
      </p>
      {media.src ? (
        <div
          className={`relative w-full ${aspectClass} overflow-hidden bg-stone-200 dark:bg-stone-900 ${
            isPlaceholder ? 'ring-1 ring-amber-300/80 dark:ring-amber-700/50' : ''
          }`}
        >
          <Image
            src={media.src}
            alt={media.alt}
            fill
            className="object-cover"
            priority={priority}
            sizes="(max-width: 768px) 100vw, 56rem"
          />
          {isPlaceholder ? (
            <div className="absolute top-3 left-3 rounded bg-black/75 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
              Placeholder — replace
            </div>
          ) : null}
        </div>
      ) : (
        <div
          className={`relative w-full ${aspectClass} overflow-hidden border border-dashed border-stone-400 dark:border-stone-600 bg-stone-100 dark:bg-stone-900 flex items-center justify-center px-6`}
          role="img"
          aria-label={media.alt}
        >
          <p className="text-sm text-stone-500 dark:text-stone-400 text-center max-w-md">{media.label}</p>
        </div>
      )}
      {media.caption ? (
        <figcaption className="mt-2 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function GrantBudgetTable({ lines, total }: { lines: GrantBudgetLine[]; total: number }) {
  return (
    <div className="overflow-x-auto border border-stone-200 dark:border-stone-700">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/50">
            <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">Category</th>
            <th className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100 text-right">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line) => (
            <tr key={line.category} className="border-b border-stone-100 dark:border-stone-800">
              <td className="px-4 py-2.5 text-stone-700 dark:text-stone-300">{line.category}</td>
              <td className="px-4 py-2.5 text-stone-700 dark:text-stone-300 text-right tabular-nums">
                ${line.amount.toLocaleString()}
              </td>
            </tr>
          ))}
          <tr className="bg-stone-50 dark:bg-stone-900/50">
            <td className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100">Total</td>
            <td className="px-4 py-3 font-semibold text-stone-900 dark:text-stone-100 text-right tabular-nums">
              ${total.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function GrantExperienceBeats({
  beats,
}: {
  beats: readonly { number: string; title: string; body: string }[];
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {beats.map((beat) => (
        <div key={beat.number} className="border-t-2 border-stone-900 dark:border-stone-100 pt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-2">{beat.number}</p>
          <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">{beat.title}</h3>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm sm:text-base">
            {beat.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export function GrantVisitorJourney({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-0 sm:items-center">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2 sm:gap-3">
          <span className="inline-flex items-center border border-stone-800 dark:border-stone-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-stone-900 dark:text-stone-100">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span className="text-stone-400 hidden sm:inline" aria-hidden>
              →
            </span>
          ) : null}
          {i < steps.length - 1 ? (
            <span className="text-stone-400 sm:hidden pl-3" aria-hidden>
              ↓
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function GrantRelatedWorks({ works }: { works: readonly GrantRelatedWork[] }) {
  return (
    <ul className="space-y-10">
      {works.map((work) => (
        <li key={work.slug}>
          <Link href={`/art/${work.slug}`} className="group flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="relative w-full sm:w-44 shrink-0 aspect-[4/3] overflow-hidden bg-stone-200 dark:bg-stone-900">
              <Image
                src={work.image}
                alt={`${work.title} — related work`}
                fill
                className="object-cover transition group-hover:opacity-90"
                sizes="(max-width: 640px) 100vw, 11rem"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 group-hover:underline">
                {work.title} <span className="text-stone-500 font-normal">({work.year})</span>
              </h3>
              <p className="text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">{work.blurb}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function GrantPageChrome({
  children,
  backHref,
  backLabel,
  bgClassName = 'bg-[#f7f4ef] dark:bg-neutral-950',
}: {
  children: React.ReactNode;
  backHref: string;
  backLabel: string;
  bgClassName?: string;
}) {
  return (
    <div className={`min-h-screen text-stone-900 dark:text-stone-100 ${bgClassName}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-28">
        <nav className="mb-8">
          <Link
            href={backHref}
            className="text-sm font-medium text-stone-600 dark:text-stone-400 underline underline-offset-4 hover:text-stone-900 dark:hover:text-stone-100"
          >
            {backLabel}
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
