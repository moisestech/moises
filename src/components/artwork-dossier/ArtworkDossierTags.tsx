type ArtworkDossierTagsProps = {
  tags: string[];
};

/** Theme-safe tag pills — legible in light and dark mode. */
export function ArtworkDossierTags({ tags }: ArtworkDossierTagsProps) {
  if (!tags.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-800 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
