import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface BackToOverviewProps {
  href?: string;
  className?: string;
}

export const BackToOverview: React.FC<BackToOverviewProps> = ({ 
  href = "/grant/knight-foundation",
  className = ""
}) => {
  return (
    <div className={`fixed top-32 left-4 z-30 ${className}`}>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#18181b] hover:bg-[#232323] text-[#A4FF4E] border border-[#A4FF4E] transition-colors shadow-neon"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Overview
      </Link>
    </div>
  );
}; 