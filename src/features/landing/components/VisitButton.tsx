'use client';

interface VisitButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'mobile';
}

export default function VisitButton({ 
  className = '', 
  size = 'md', 
  variant = 'default' 
}: VisitButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-6 py-2 text-lg',
    lg: 'px-8 py-3 text-xl'
  };

  const baseClasses = "font-['MoMA_Sans'] font-bold transition-transform transition-shadow duration-200 shadow-md hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(34,211,238,0.5)] focus:scale-105 focus:shadow-[0_0_24px_4px_rgba(34,211,238,0.5)] relative overflow-hidden group";
  const variantClasses = variant === 'mobile' ? 'rounded' : '';

  return (
    <a
      href="http://calendly.com/moisestech"
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-cyan-400 text-black ${sizeClasses[size]} ${baseClasses} ${variantClasses} ${className}`}
      style={{
        background: 'linear-gradient(90deg, #22d3ee 0%, #67e8f9 100%)',
      }}
    >
      <span className="relative z-10">Visit</span>
      {/* Animated gradient overlay */}
      <span 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" 
        style={{
          background: 'linear-gradient(270deg, #67e8f9, #22d3ee, #67e8f9)',
          animation: 'visit-gradient-move 2s linear infinite',
        }} 
      />
      <style jsx>{`
        @keyframes visit-gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </a>
  );
} 