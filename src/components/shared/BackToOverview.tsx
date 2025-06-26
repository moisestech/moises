import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Loader2 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface BackToOverviewProps {
  href?: string;
  className?: string;
}

export const BackToOverview: React.FC<BackToOverviewProps> = ({ 
  href = "/grant/knight-foundation",
  className = ""
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const primaryColor = isDark ? '#A4FF4E' : '#22C55E';
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // The loading state will be cleared when the navigation completes
    // or when the component unmounts
  };

  return (
    <div className={`fixed top-32 left-4 z-30 ${className}`}>
      <Link
        href={href}
        onClick={handleClick}
        className={`group relative inline-flex items-center justify-center w-12 h-12 rounded-lg border transition-all duration-300 shadow-neon ${
          isDark 
            ? 'bg-[#18181b] hover:bg-[#232323] border-[#A4FF4E] hover:border-white' 
            : 'bg-white hover:bg-gray-50 border-[#22C55E] hover:border-gray-800'
        } ${isLoading ? 'cursor-wait' : ''}`}
      >
        {isLoading ? (
          <Loader2 className={`w-5 h-5 animate-spin transition-colors duration-300 ${
            isDark 
              ? 'text-white' 
              : 'text-gray-800'
          }`} />
        ) : (
          <Home className={`w-5 h-5 transition-colors duration-300 ${
            isDark 
              ? 'text-[#A4FF4E] group-hover:text-white' 
              : 'text-[#22C55E] group-hover:text-gray-800'
          }`} />
        )}
        
        {/* Tooltip */}
        <div className={`absolute left-full ml-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isDark 
            ? 'bg-[#18181b] text-white border border-[#A4FF4E]' 
            : 'bg-white text-gray-800 border border-[#22C55E] shadow-lg'
        }`}>
          {isLoading ? 'Loading...' : 'Back to Overview'}
          {/* Arrow */}
          <div className={`absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 rotate-45 ${
            isDark 
              ? 'bg-[#18181b] border-l border-t border-[#A4FF4E]' 
              : 'bg-white border-l border-t border-[#22C55E]'
          }`} />
        </div>
      </Link>
    </div>
  );
}; 