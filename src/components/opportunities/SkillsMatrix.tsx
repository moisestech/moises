import type { Opportunity } from '@/content/opportunities/types';

type SkillsMatrixProps = {
  opportunity: Opportunity;
};

export function SkillsMatrix({ opportunity }: SkillsMatrixProps) {
  return (
    <section id="skills" className="scroll-mt-32 mt-16 border-t border-stone-200 pt-12">
      <h2 className="font-['MoMA_Sans'] text-2xl font-semibold text-stone-950">
        {opportunity.skillsSectionTitle ?? 'Skills'}
      </h2>
      <div className="mt-6 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-100 text-xs font-semibold uppercase tracking-wide text-stone-600">
            <tr>
              <th className="px-4 py-3 sm:w-[28%]">Category</th>
              <th className="px-4 py-3">Skills</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {opportunity.skillsMatrixRows.map((row) => (
              <tr key={row.category} className="align-top">
                <td className="px-4 py-3 font-medium text-stone-900">{row.category}</td>
                <td className="px-4 py-3 text-stone-700">{row.skills}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
