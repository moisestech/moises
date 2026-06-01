'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import {
  wolfsonianApiHighlight,
  wolfsonianDownloads,
  wolfsonianImages,
  wolfsonianInstitutionalRoles,
  wolfsonianVisualEssaySections,
} from '@/content/grants/wolfsonian-fellowship';

function roleById(roleId: string) {
  return wolfsonianInstitutionalRoles.find((role) => role.id === roleId);
}

export default function WolfsonianFellowshipProposalPage() {
  const [activeRoleId, setActiveRoleId] = useState(wolfsonianInstitutionalRoles[0]?.id ?? '');
  const [activeSectionId, setActiveSectionId] = useState('overview');
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'api-highlight', label: 'API' },
    { id: 'visual-essay', label: 'Visual essay' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'institutional-roles', label: 'Institutional roles' },
    { id: 'proposal-notes', label: 'Notes' },
  ];
  const bannerImage = wolfsonianImages.find((image) => image.role === 'banner');
  const galleryImages = wolfsonianImages.filter((image) => image.role === 'gallery');
  const activeRole = useMemo(
    () => wolfsonianInstitutionalRoles.find((role) => role.id === activeRoleId) ?? wolfsonianInstitutionalRoles[0],
    [activeRoleId],
  );

  const navIds = useMemo(() => navItems.map((item) => item.id), [navItems]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && navIds.includes(hash)) {
      setActiveSectionId(hash);
    }
  }, [navIds]);

  useEffect(() => {
    const updateActiveSection = () => {
      let current = navIds[0] ?? 'overview';
      for (const id of navIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 190) current = id;
      }
      setActiveSectionId((prev) => (prev === current ? prev : current));
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [navIds]);

  const scrollToSection = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
    setActiveSectionId(id);
  }, []);

  if (!activeRole) return null;

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <section id="overview" className="mx-auto w-[min(96vw,1200px)] px-4 pb-14 pt-28 sm:px-8 sm:pt-32">
        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            Wolfsonian Fellowship Proposal
          </p>
          <ThemeToggle />
        </div>

        <nav
          aria-label="Wolfsonian section navigation"
          className="sticky top-20 z-20 mb-8 overflow-x-auto border border-stone-300 bg-white/95 px-3 py-3 backdrop-blur dark:border-stone-700 dark:bg-neutral-900/95"
        >
          <div className="flex min-w-max gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide transition',
                  activeSectionId === item.id
                    ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
                    : 'border-stone-300 hover:border-stone-600 dark:border-stone-600 dark:hover:border-stone-300',
                )}
                aria-current={activeSectionId === item.id ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Institutional Roles in the Life of an Archive
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-stone-300 sm:text-lg">
          A public but unlisted fellowship proposal that combines a polished visual essay with a lightweight
          interactive layer. This first build emphasizes contemplative navigation, citation logic, and
          relationship-driven meaning.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {wolfsonianDownloads.map((download) => (
            <Link
              key={download.href}
              href={download.href}
              className="inline-flex items-center justify-center border border-stone-800 px-4 py-2 text-sm font-medium transition hover:bg-stone-900 hover:text-white dark:border-stone-200 dark:hover:bg-stone-100 dark:hover:text-black"
            >
              {download.label}
            </Link>
          ))}
        </div>

        {bannerImage ? (
          <figure className="mt-10 overflow-hidden border border-stone-300 bg-white dark:border-stone-700 dark:bg-neutral-900">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={bannerImage.src}
                alt={bannerImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
            <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-700 dark:border-stone-700 dark:text-stone-300">
              {bannerImage.caption}
            </figcaption>
          </figure>
        ) : null}
      </section>

      <article className="mx-auto w-[min(96vw,1200px)] space-y-16 px-4 pb-20 sm:px-8">
        <section
          id="api-highlight"
          aria-labelledby="api-highlight-heading"
          className="border border-sky-400/50 bg-sky-50 p-6 dark:bg-sky-950/30"
        >
          <h2 id="api-highlight-heading" className="text-xl font-semibold">
            Highlighted research infrastructure
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-700 dark:text-stone-300 sm:text-base">
            {wolfsonianApiHighlight.summary}
          </p>
          <p className="mt-4">
            <a
              href={wolfsonianApiHighlight.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-sky-700 px-4 py-2 text-sm font-semibold text-sky-900 transition hover:bg-sky-100 dark:border-sky-300 dark:text-sky-200 dark:hover:bg-sky-900/50"
            >
              Explore the Wolfsonian API
            </a>
          </p>
        </section>

        <section id="visual-essay" aria-labelledby="visual-essay-heading">
          <h2 id="visual-essay-heading" className="border-b border-stone-300 pb-4 text-2xl font-semibold dark:border-stone-700">
            Visual essay
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {wolfsonianVisualEssaySections.map((entry) => (
              <div
                key={entry.title}
                className="border border-stone-300 bg-white p-5 dark:border-stone-700 dark:bg-neutral-900"
              >
                <h3 className="text-base font-semibold">{entry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{entry.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="border-b border-stone-300 pb-4 text-2xl font-semibold dark:border-stone-700">
            Project image gallery
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-stone-600 dark:text-stone-400 sm:text-base">
            Key frames for proposal review and institutional presentation contexts.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden border border-stone-300 bg-white dark:border-stone-700 dark:bg-neutral-900"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-700 dark:border-stone-700 dark:text-stone-300">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="institutional-roles" aria-labelledby="institutional-roles">
          <h2
            id="institutional-roles"
            className="border-b border-stone-300 pb-4 text-2xl font-semibold dark:border-stone-700"
          >
            Institutional Roles
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-stone-600 dark:text-stone-400 sm:text-base">
            Hover, focus, or select a role to activate its relationships. The network remains calm by default and
            becomes more active only on interaction.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div className="border border-stone-300 bg-white p-3 dark:border-stone-700 dark:bg-neutral-900">
              <ul className="space-y-2" role="list">
                {wolfsonianInstitutionalRoles.map((role) => {
                  const active = role.id === activeRole.id;
                  return (
                    <li key={role.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveRoleId(role.id)}
                        onFocus={() => setActiveRoleId(role.id)}
                        onClick={() => setActiveRoleId(role.id)}
                        className={cn(
                          'w-full border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500',
                          active
                            ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-black'
                            : 'border-stone-300 bg-white hover:border-stone-500 dark:border-stone-700 dark:bg-neutral-900 dark:hover:border-stone-400',
                        )}
                        aria-current={active ? 'true' : undefined}
                      >
                        <p className="text-sm font-semibold">{role.title}</p>
                        <p
                          className={cn(
                            'mt-1 text-sm',
                            active ? 'text-stone-100 dark:text-stone-900' : 'text-stone-600 dark:text-stone-400',
                          )}
                        >
                          {role.description}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden border border-stone-300 bg-white p-5 dark:border-stone-700 dark:bg-neutral-900">
                <h3 className="text-lg font-semibold">{activeRole.title}</h3>
                <p className="mt-2 text-sm text-stone-700 dark:text-stone-300">{activeRole.description}</p>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                    Related themes
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeRole.themes.map((theme) => (
                      <span
                        key={theme}
                        className="border border-stone-400/60 px-2 py-1 text-xs dark:border-stone-500"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                    Connected archive objects
                  </p>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {activeRole.archiveObjects.map((objectName) => (
                      <li
                        key={objectName}
                        className="border border-stone-300 bg-stone-50 px-3 py-2 text-sm motion-safe:animate-pulse dark:border-stone-700 dark:bg-neutral-950"
                      >
                        {objectName}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 border-t border-stone-200 pt-4 dark:border-stone-700">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                    Relationship paths
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeRole.connectedRoleIds.map((connectedRoleId) => {
                      const connectedRole = roleById(connectedRoleId);
                      if (!connectedRole) return null;
                      return (
                        <span
                          key={connectedRoleId}
                          className="inline-flex items-center gap-2 border border-sky-500/40 bg-sky-500/10 px-2 py-1 text-xs text-sky-800 motion-safe:animate-[pulse_2s_ease-in-out_infinite] dark:text-sky-300"
                        >
                          {activeRole.title} → {connectedRole.title}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <aside className="border border-stone-300 bg-white p-5 dark:border-stone-700 dark:bg-neutral-900">
                <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                  Source logic
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{activeRole.sourceLogic}</p>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="proposal-notes"
          aria-labelledby="proposal-notes-heading"
          className="border border-stone-300 bg-white p-6 dark:border-stone-700 dark:bg-neutral-900"
        >
          <h2 id="proposal-notes-heading" className="text-xl font-semibold">
            Access and flow notes
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-700 dark:text-stone-300">
            <li>Public URL with unlisted SEO posture for fellowship circulation.</li>
            <li>No quiz and no personal-data form requirements.</li>
            <li>Interaction supports keyboard focus and reduced-motion preferences.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
