import type { LucideIcon } from 'lucide-react';
import {
  Archive,
  Baby,
  Brain,
  Building2,
  CalendarRange,
  CreditCard,
  Eye,
  Factory,
  Globe,
  ImageIcon,
  Layers,
  Link2,
  Monitor,
  Package,
  Scale,
  Scan,
  Shield,
  Smartphone,
  Sparkles,
  Stethoscope,
  Table2,
  Truck,
  Workflow,
  Zap,
} from 'lucide-react';

export type ReadymadesSectionAccent = {
  eyebrow: string;
  keywordUnderline: string;
  keywordActive: string;
  paragraphActiveBg: string;
  paragraphActiveBorder: string;
  mediaBorder: string;
  mediaGlowRgb: string;
  gradientFrom: string;
  gradientTo: string;
  iconBg: string;
  iconText: string;
};

export const readymadesAccent: ReadymadesSectionAccent = {
  eyebrow: 'text-emerald-800 dark:text-emerald-300',
  keywordUnderline: 'decoration-emerald-700/50 dark:decoration-emerald-400/50',
  keywordActive: 'text-emerald-950 dark:text-emerald-100',
  paragraphActiveBg: 'bg-emerald-50/70 dark:bg-emerald-950/20',
  paragraphActiveBorder: 'border-emerald-700 dark:border-emerald-400',
  mediaBorder: 'border-[#dedede] dark:border-neutral-700',
  mediaGlowRgb: '4, 120, 87',
  gradientFrom: 'from-emerald-500/10',
  gradientTo: 'to-sky-500/5',
  iconBg: 'bg-emerald-100 dark:bg-emerald-950/50',
  iconText: 'text-emerald-800 dark:text-emerald-300',
};

export const readymadesPageShell =
  'relative overflow-hidden bg-gradient-to-b from-[#f7f5f0] via-[#faf8f4] to-[#f0eeea] dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900';

export const readymadesRitualStepMeta: Record<
  string,
  { icon: LucideIcon; tint: string; hover: string; border: string }
> = {
  Inspiration: {
    icon: Sparkles,
    tint: 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200',
    hover: 'hover:border-amber-400/60 hover:bg-amber-50/80 dark:hover:bg-amber-950/30',
    border: 'border-amber-200/80 dark:border-amber-800/50',
  },
  'Object Relation': {
    icon: Link2,
    tint: 'bg-violet-50 text-violet-900 dark:bg-violet-950/40 dark:text-violet-200',
    hover: 'hover:border-violet-400/60 hover:bg-violet-50/80 dark:hover:bg-violet-950/30',
    border: 'border-violet-200/80 dark:border-violet-800/50',
  },
  'Plausibility Image': {
    icon: Scan,
    tint: 'bg-sky-50 text-sky-900 dark:bg-sky-950/40 dark:text-sky-200',
    hover: 'hover:border-sky-400/60 hover:bg-sky-50/80 dark:hover:bg-sky-950/30',
    border: 'border-sky-200/80 dark:border-sky-800/50',
  },
  'IG Story': {
    icon: Smartphone,
    tint: 'bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-200',
    hover: 'hover:border-rose-400/60 hover:bg-rose-50/80 dark:hover:bg-rose-950/30',
    border: 'border-rose-200/80 dark:border-rose-800/50',
  },
  'Airtable Archive': {
    icon: Table2,
    tint: 'bg-orange-50 text-orange-900 dark:bg-orange-950/40 dark:text-orange-200',
    hover: 'hover:border-orange-400/60 hover:bg-orange-50/80 dark:hover:bg-orange-950/30',
    border: 'border-orange-200/80 dark:border-orange-800/50',
  },
  '60-Day Review': {
    icon: CalendarRange,
    tint: 'bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200',
    hover: 'hover:border-emerald-400/60 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/30',
    border: 'border-emerald-200/80 dark:border-emerald-800/50',
  },
  'Website / E-book / Physical Work': {
    icon: Layers,
    tint: 'bg-stone-100 text-stone-900 dark:bg-stone-900/60 dark:text-stone-200',
    hover: 'hover:border-stone-400/60 hover:bg-stone-50/80 dark:hover:bg-stone-900/40',
    border: 'border-stone-300/80 dark:border-stone-700/50',
  },
};

export const readymadesCatalogueAnswerIcons: Record<string, LucideIcon> = {
  'What is this?': Archive,
  'How does it work?': Workflow,
  'Why does it matter?': Scale,
};

export const readymadesFamilyIcons: Record<string, LucideIcon> = {
  'screens-as-bodies': Monitor,
  'payment-transaction': CreditCard,
  'cheap-support': Package,
  'techno-spiritual': Sparkles,
  'delivery-logistics': Truck,
  'domestic-exhaustion': Zap,
  'medical-training': Stethoscope,
  'attention-economy': Eye,
  'ai-childhood': Baby,
  'migrant-memory': Globe,
  'corporate-surveillance': Shield,
  'unbuilt-infrastructure': Building2,
};

export const readymadesBucketIcons: Record<string, LucideIcon> = {
  'content-only': ImageIcon,
  'website candidate': Globe,
  'physical build candidate': Factory,
  'book/glossary candidate': Archive,
  'weak but useful': Brain,
};
