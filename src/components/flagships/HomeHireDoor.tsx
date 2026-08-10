'use client';

import Link from 'next/link';
import { listFlagships } from '@/content/evidence/flagships';
import { track } from '@/lib/analytics';

/**
 * Hire-aware proof strip for the artist homepage — dual door without killing art identity.
 */
export function HomeHireDoor() {
  const flagships = listFlagships();

  return (
    <section
      className="w-full px-6 py-10 md:py-12 border-y border-black/10 dark:border-white/10 bg-stone-50 dark:bg-stone-950"
      aria-labelledby="hire-door-heading"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
          Also for hiring managers
        </p>
        <h2
          id="hire-door-heading"
          className="mt-2 font-['MoMA_Sans'] text-2xl sm:text-3xl font-bold text-stone-950 dark:text-stone-50"
        >
          Technical proof without leaving the studio
        </h2>
        <p className="mt-2 max-w-2xl text-base text-stone-600 dark:text-stone-400">
          Full-stack AI systems, forward-deployed institutional work, and creative AI production —
          same practice, recruiter-legible doors.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" role="list">
          <li>
            <Link
              href="/capabilities"
              className="block h-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-4 py-4 hover:border-stone-900 dark:hover:border-stone-300 transition-colors"
              onClick={() => track('home_hire_door_click', { target: 'capabilities' })}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">Skills</span>
              <span className="mt-1 block font-semibold text-stone-950 dark:text-stone-50">
                Technical capabilities
              </span>
            </Link>
          </li>
          {flagships.map((f) => (
            <li key={f.id}>
              <Link
                href={f.href}
                className="block h-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-4 py-4 hover:border-stone-900 dark:hover:border-stone-300 transition-colors"
                onClick={() => track('home_hire_door_click', { target: f.id })}
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  {f.status === 'building' ? 'Building' : 'Flagship'}
                </span>
                <span className="mt-1 block font-semibold text-stone-950 dark:text-stone-50">
                  {f.title}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/artist-infrastructure"
              className="block h-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-4 py-4 hover:border-stone-900 dark:hover:border-stone-300 transition-colors"
              onClick={() => track('home_hire_door_click', { target: 'institutions' })}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Institutions
              </span>
              <span className="mt-1 block font-semibold text-stone-950 dark:text-stone-50">
                Institutional work
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
