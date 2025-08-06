'use client';

// UI
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// COMPONENTS
import { Button } from '@/components/ui/button';

// CONTEXT
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

// ICONS
import { Globe, Check } from 'lucide-react';


const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ht', label: 'Kreyòl Ayisyen', flag: '🇭🇹' },
] as const;

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`relative ${
            theme === 'dark' 
              ? 'text-white hover:text-blue-400' 
              : 'text-gray-700 hover:text-blue-600'
          } transition-colors`}
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">Select language</span>
          <span className={`absolute -top-1 -right-1 text-xs font-medium ${
            theme === 'dark'
              ? 'bg-blue-600 text-white'
              : 'bg-blue-500 text-white'
          } rounded-full w-5 h-5 flex items-center justify-center`}>
            {language.toUpperCase()}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className={`w-[200px] p-2 ${
          theme === 'dark'
            ? 'bg-gray-800 border-gray-700'
            : 'bg-white border-gray-200'
        }`}
      >
        <div className="grid gap-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              className={`w-full justify-start gap-2 font-normal ${
                theme === 'dark'
                  ? 'text-gray-200 hover:text-white hover:bg-gray-700'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              } ${language === lang.code ? 'bg-opacity-10 bg-blue-500' : ''}`}
              onClick={() => setLanguage(lang.code)}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && (
                <Check className={`h-4 w-4 ml-auto ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`} />
              )}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
