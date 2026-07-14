export function SafetyControlDiagram() {
  const steps = [
    { title: 'Model interprets', body: 'Language → structured body scores (never motors).' },
    { title: 'Artist-authored vocabulary', body: 'Finite states: Cube, Aperture, Witness, Refusal…' },
    { title: 'Deterministic controller', body: 'Clamps, soft limits, safe combinations only.' },
    { title: 'Physical / digital pose', body: 'Sculpture occupies a permitted body.' },
  ];

  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4 items-start">
          <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-stone-900 dark:border-stone-100 text-xs font-semibold">
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold text-stone-900 dark:text-stone-100">{step.title}</h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
