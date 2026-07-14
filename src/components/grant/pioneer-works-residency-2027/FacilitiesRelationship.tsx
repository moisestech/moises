import { facilitiesRelationship } from '@/content/grants/pioneer-works-residency-2027/machine-sentences';

export function FacilitiesRelationship() {
  return (
    <div className="space-y-4">
      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
        Facilities support sculpture — they are not the work. Access is framed as fabrication capacity
        for housings, diagrams, joints, and safe kinetics inside a physical studio practice.
      </p>
      <dl className="divide-y divide-stone-200 dark:divide-stone-700 border border-stone-200 dark:border-stone-700">
        {facilitiesRelationship.map((row) => (
          <div key={row.facility} className="grid sm:grid-cols-3 gap-2 px-4 py-3 text-sm">
            <dt className="font-semibold text-stone-900 dark:text-stone-100">{row.facility}</dt>
            <dd className="sm:col-span-2 text-stone-700 dark:text-stone-300">{row.use}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
