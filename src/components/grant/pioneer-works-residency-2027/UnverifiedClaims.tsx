export function UnverifiedClaims({ claims }: { claims: readonly string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-sm text-stone-600 dark:text-stone-400">
      {claims.map((claim) => (
        <li key={claim}>{claim}</li>
      ))}
    </ul>
  );
}
