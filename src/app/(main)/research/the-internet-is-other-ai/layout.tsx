import type { ReactNode } from 'react';

/**
 * Escape the shared research layout padding so this net-art page can run full-bleed.
 * Parent still wraps with max-w-7xl; the client breaks out with w-screen.
 */
export default function TheInternetIsOtherAiLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="relative w-full overflow-x-clip">{children}</div>;
}
