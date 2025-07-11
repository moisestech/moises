"use client";

import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Header from './Header';

const menuItems = [
  { label: 'Visit', path: '/visit' },
  { label: 'Exhibitions', path: '/exhibitions' },
  { label: 'Events', path: '/events' },
  { label: 'Art and Artist', path: '/portfolio', enabled: true },
  { label: 'Bio', path: '/bio', enabled: true },
  { label: 'Store', path: 'https://www.artsy.net/artist/moises-sanabria', external: true },
];

export default function MobileMenuOverlayClient({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        mobileMenuOpen={mobileMenuOpen}
      />
      <MobileMenu
        menuItems={menuItems}
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen((v) => !v)}
      />
      {children}
    </>
  );
} 