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
    <nav className="flex-col animate-slide h-auto fixed top-0 bg-black flex items-start gap-4 h-12 rounded-xl w-full p-4">
      <Link href="/" className="hover:opacity-50 flex">
        <div className="flex-row">
          <h1 className="text-7xl mt-4 font-bold">Moises Sanabria</h1>
          <Home />
        </div>
        <h2 className="ml-14 mt-8 w-1/3">
          is an interdisciplinary artist exploring machine philosophy, memetics,
          and branding in social media life.
        </h2>
      </Link>

      <div className="flex"></div>

      <div className="flex">
        <Link href="/visit" className="hover:opacity-50 mr-16">
          <span className="font-bold text-3xl">Visit</span>
          <CircleUserRound />
        </Link>
        <Link href="/exhibitions" className="hover:opacity-50 mr-16">
          <span className="font-bold text-3xl">Exhibitions and events</span>
          <NotebookPen />
        </Link>
        <Link href="/exhibitions" className="hover:opacity-50 mr-16">
          <span className="font-bold text-3xl">Art and bio</span>
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
      </div>
    </nav>
  );
}
