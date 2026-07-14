export function SubmissionChecklist({ items }: { items: readonly string[] }) {
  return (
    <ol className="list-decimal pl-5 space-y-2 text-sm text-stone-700 dark:text-stone-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}
