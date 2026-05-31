import type { WorkAbout } from '@/content/work/types';
import { opp } from '@/components/opportunities/opportunityTheme';

type WorkAboutBlockProps = {
  about: WorkAbout;
};

export function WorkAboutBlock({ about }: WorkAboutBlockProps) {
  return (
    <section id="about" className={opp.section}>
      <h2 className={opp.h2}>{about.title}</h2>
      <div className={`mt-4 max-w-3xl space-y-4 ${opp.body}`}>
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
    </section>
  );
}
