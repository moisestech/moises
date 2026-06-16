type Credit = {
  name: string;
  role: string;
};

type ArtworkDossierCreditsProps = {
  credits: Credit[];
};

export function ArtworkDossierCredits({ credits }: ArtworkDossierCreditsProps) {
  if (!credits.length) return null;

  return (
    <ul className="mt-6 max-w-3xl divide-y divide-black/10 border border-black/10 dark:divide-white/10 dark:border-white/10">
      {credits.map(({ name, role }) => (
        <li
          key={`${name}-${role}`}
          className="grid gap-1 px-4 py-4 sm:grid-cols-[minmax(10rem,14rem)_1fr] sm:gap-4 sm:px-5"
        >
          <span className="text-sm font-bold text-neutral-900 dark:text-neutral-50">{name}</span>
          <span className="text-sm text-neutral-700 dark:text-neutral-300">{role}</span>
        </li>
      ))}
    </ul>
  );
}
