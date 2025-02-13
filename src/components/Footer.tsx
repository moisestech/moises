'use client';

import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    toast({
      title: 'Coming Soon',
      description: 'This section is under construction.',
    });
  };

  return (
    <footer className="bg-[#444444] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Navigation */}
        <nav className="pt-16 mb-16">
          <ul className="flex flex-col md:flex-row gap-6 md:gap-16">
            <li>
              <Link
                href="/about"
                onClick={(e) => handleNavClick(e, '/about')}
                className="hover:underline text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                onClick={(e) => handleNavClick(e, '/support')}
                className="hover:underline text-lg"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                onClick={(e) => handleNavClick(e, '/research')}
                className="hover:underline text-lg"
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                href="/teaching"
                onClick={(e) => handleNavClick(e, '/teaching')}
                className="hover:underline text-lg"
              >
                Teaching
              </Link>
            </li>
          </ul>
        </nav>

        {/* Location Info */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4">Moises Studio</h2>
          <p className="text-gray-300">
            Bakehouse Art Complex
            <br />
            561 NW 32nd St, Miami, FL 33127
          </p>
          <p className="text-gray-300 mt-2">
            Open today, 10:30 a.m. - 5:30 p.m.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-300">
          <Link
            href="/privacy"
            onClick={(e) => handleNavClick(e, '/privacy')}
            className="hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            onClick={(e) => handleNavClick(e, '/terms')}
            className="hover:underline"
          >
            Terms of Use
          </Link>
          <Link
            href="/guidelines"
            onClick={(e) => handleNavClick(e, '/guidelines')}
            className="hover:underline"
          >
            Visitor Guidelines
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-300">
          © {currentYear} Moises Sanabria. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
