"use client";

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/features/landing/components/Header';

export default function NotFound() {
  return (
    <>
      <Header onMobileMenuToggle={() => {}} mobileMenuOpen={false} />
      <div className="min-h-screen flex flex-col items-start justify-end bg-white px-10 text-black py-16 mx-auto">
        <div className="mb-8">
          <Image
            src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1751121417/art/moisestech-website/art404-logo_rsrxu6.png"
            alt="404 OOF Logo"
            width={320}
            height={320}
            className="rounded shadow"
          />
          <div className="text-gray-500 text-sm mt-2">
              {`ART404, 404 Logo, (2012)`}
          </div>
        </div>
        <h1 className="text-6xl font-extrabold mb-6">Page not found</h1>
        <div className="text-xl font-bold mb-4 leading-relaxed line-height-0">
          We are working to improve our site and some pages have moved.<br />
          You can return to <Link href="/" className="underline">our homepage</Link> or use the navigation and search above.<br />
          You can also <Link href="/contact" className="underline">contact us</Link> if you have any questions or problems.
        </div>
        <div className="text-2xl font-extrabold text-red-600 mt-6">Error 404</div>
      </div>
    </>
  );
} 