/**
 * Neutral placeholders for reading covers and avatars (no rights claims).
 * Replace with licensed assets when available.
 */

export function readingCoverPlaceholderUrl(shortLabel: string, isDark: boolean): string {
  const bg = isDark ? '1e293b' : 'e2e8f0';
  const fg = isDark ? 'cbd5e1' : '475569';
  const text = encodeURIComponent(shortLabel.replace(/\s+/g, ' ').slice(0, 32));
  return `https://placehold.co/960x720/${bg}/${fg}/png?text=${text}`;
}

export function personAvatarPlaceholderUrl(name: string, isDark: boolean): string {
  const bg = isDark ? '334155' : 'e2e8f0';
  const color = isDark ? 'f8fafc' : '334155';
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=256&background=${bg}&color=${color}&bold=true&format=png`;
}
