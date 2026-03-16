'use client';

import { useTheme } from '@/contexts/ThemeContext';

interface MetadataItem {
  label: string;
  value: string;
}

interface MetadataRowProps {
  items: MetadataItem[];
}

export function MetadataRow({ items }: MetadataRowProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`flex flex-wrap gap-x-6 gap-y-1 text-sm mb-6 ${
        isDark ? 'text-gray-500' : 'text-gray-600'
      }`}
    >
      {items.map((item) => (
        <span key={item.label}>
          <span className="font-medium">{item.label}:</span> {item.value}
        </span>
      ))}
    </div>
  );
}
