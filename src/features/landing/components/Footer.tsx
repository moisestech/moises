'use client';

import Link from 'next/link';
import { Logo } from '@/features/landing';
import {
  FaInstagram, FaFacebookF, FaXTwitter, FaTiktok, FaSpotify, FaWhatsapp, FaYoutube
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#444444] text-white min-h-[730px] py-16 md:py-[64px] font-['MoMA_Sans']">
      <div className="max-w-7xl mx-auto px-6 flex flex-col h-full justify-between">
        {/* Main Navigation */}
        <nav className="pt-8 mb-16">
          <ul className="flex flex-col md:flex-row gap-6 md:gap-16 text-2xl font-bold">
            <li><Link href="/bio" className="hover:underline">About me</Link></li>
            <li><Link href="/support" className="hover:underline">Support</Link></li>
            <li><Link href="/research" className="hover:underline">Research</Link></li>
            <li><Link href="/teaching" className="hover:underline">Teaching</Link></li>
          </ul>
        </nav>

        {/* Location & Social */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div>
            <div className="mb-4">
              <Logo size="sm" showLink={false} className="text-white" />
              <span className="text-2xl font-extrabold ml-2">Studio</span>
            </div>
            <p className="text-xl font-bold mb-2">Bakehouse Art Complex</p>
            <p className="text-lg font-bold mb-2">561 NW 32nd St, Miami, FL 33127</p>
            <p className="text-lg font-bold mb-2">Open today, 10:30 a.m. – 5:30 p.m.</p>
            <div className="flex gap-5 mt-4 text-2xl">
              <Link href="https://instagram.com/moisesdsanabria" target="_blank" aria-label="Instagram"><FaInstagram /></Link>
              <Link href="https://facebook.com/moisesdsanabria" target="_blank" aria-label="Facebook"><FaFacebookF /></Link>
              <Link href="https://x.com/moisesdsanabria" target="_blank" aria-label="X"><FaXTwitter /></Link>
              <Link href="https://tiktok.com/@moisesdsanabria" target="_blank" aria-label="TikTok"><FaTiktok /></Link>
              {/* <Link href="https://spotify.com" target="_blank" aria-label="Spotify"><FaSpotify /></Link> */}
              {/* <Link href="https://wa.me/17869999999" target="_blank" aria-label="WhatsApp"><FaWhatsapp /></Link> */}
              <Link href="https://youtube.com/@moisesdsanabria" target="_blank" aria-label="YouTube"><FaYoutube /></Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <form className="flex items-center border-b-2 border-white max-w-md">
              <input type="email" placeholder="Art and ideas in your inbox" className="flex-1 bg-transparent text-white placeholder:text-white font-bold text-xl py-2 px-0 outline-none" />
              <button type="submit" className="text-white text-2xl ml-2" aria-label="Subscribe">✉️</button>
            </form>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap gap-8 text-lg font-bold mb-8">
          <Link href="/privacy" className="hover:underline">Privacy policy</Link>
          <Link href="/terms" className="hover:underline">Terms of use</Link>
          <Link href="/guidelines" className="hover:underline">Visitor guidelines and policies</Link>
        </div>

        <div className="text-3xl font-extrabold mb-2">Moises</div>
        <div className="text-base text-gray-300">© 2026 The Studio of Moises Sanabria</div>
      </div>
    </footer>
  );
} 