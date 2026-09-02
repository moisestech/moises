'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isTechCvSitePath } from '@/config/recruiting-navigation';
import Footer from '@/features/landing/components/Footer';

function TechCvFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-8 font-['MoMA_Sans'] print:hidden dark:border-stone-700 dark:bg-stone-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-stone-600 dark:text-stone-400 md:flex-row md:items-center md:justify-between md:px-11">
        <p>
          <Link href="mailto:m@moises.tech" className="font-medium text-stone-800 hover:underline dark:text-stone-200">
            m@moises.tech
          </Link>
          <span className="mx-2">·</span>
          Miami Beach, FL
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
        </div>
        <p className="text-stone-500 dark:text-stone-500">© {new Date().getFullYear()} Moises Sanabria</p>
      </div>
    </footer>
  );
}

export function ConditionalFooter() {
  const pathname = usePathname();
  if (isTechCvSitePath(pathname)) {
    return <TechCvFooter />;
  }
  return <Footer />;
}
