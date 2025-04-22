import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
        className="relative text-white hover:text-blue-400 transition-colors"
      >
        <Globe className="h-5 w-5" />
        <span className="sr-only">Switch language</span>
        <span className="absolute -top-1 -right-1 text-xs font-medium bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {language.toUpperCase()}
        </span>
      </Button>
    </div>
  );
} 