import {
  Home,
  CircleUserRound,
  NotebookPen,
  Scroll,
  Bot,
  Skull,
  ShoppingCart,
} from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <nav className="animate-slide bg-secondary flex items-center gap-4 h-12 rounded-xl p-4">
      <Link href="/" className="hover:opacity-50">
        <Home />
      </Link>
      <Link href="/about" className="hover:opacity-50">
        <CircleUserRound />
      </Link>
      <Link href="/contact" className="hover:opacity-50">
        <NotebookPen />
      </Link>
      <Link href="/cv" className="hover:opacity-50">
        <Scroll />
      </Link>
      <Link href="/art/baby-agi" className="hover:opacity-50">
        <Bot />
      </Link>
      <Link href="/art/cost-of-living" className="hover:opacity-50">
        <Skull />
      </Link>
      <Link href="/art/smartshoppers" className="hover:opacity-50">
        <ShoppingCart />
      </Link>
    </nav>
  );
}
