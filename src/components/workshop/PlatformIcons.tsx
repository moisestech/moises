import { FaSquarespace } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type PlatformStyle = {
  icon?: IconType;
  color: string;
  bgColor: string;
  borderColor: string;
};

export const PLATFORM_STYLES: Record<string, PlatformStyle> = {
  squarespace: {
    icon: FaSquarespace,
    color: "text-gray-700",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-200",
  },
  wix: {
    icon: FaWix,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  github: {
    icon: FaGithub,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  webflow: {
    icon: FaWebflow,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  coding: {
    icon: FaGithub,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  ai: {
    icon: BsStars,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  productivity: {
    color: "text-lime-600",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-200",
  },
} as const;

interface PlatformIconProps {
  platform: keyof typeof PLATFORM_STYLES;
  size?: number;
  className?: string;
}

export function PlatformIcon({ platform, size = 24, className }: PlatformIconProps) {
  const Icon = PLATFORM_STYLES[platform]?.icon;
  if (!Icon) return null;
  
  return (
    <Icon 
      className={cn(PLATFORM_STYLES[platform].color, className)} 
      size={size} 
    />
  );
}

interface PlatformBadgeProps {
  platform: keyof typeof PLATFORM_STYLES;
  children: React.ReactNode;
  className?: string;
}

export function PlatformBadge({ platform, children, className }: PlatformBadgeProps) {
  const styles = PLATFORM_STYLES[platform];
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full",
      styles.bgColor,
      styles.borderColor,
      "border",
      className
    )}>
      {styles.icon && <PlatformIcon platform={platform} size={16} />}
      <span className={cn("text-sm font-medium", styles.color)}>
        {children}
      </span>
    </div>
  );
} 