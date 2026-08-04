/** Shared hash scroll for creative-agency dossier jump links. */
export function scrollToDossierSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}
