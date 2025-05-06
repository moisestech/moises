'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Check } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
] as const;

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-white hover:text-blue-400 transition-colors"
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">Select language</span>
          <span className="absolute -top-1 -right-1 text-xs font-medium bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {language.toUpperCase()}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2">
        <div className="grid gap-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              className="w-full justify-start gap-2 font-normal"
              onClick={() => setLanguage(lang.code)}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && (
                <Check className="h-4 w-4 ml-auto" />
              )}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
} 