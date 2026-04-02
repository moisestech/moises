# Oolite Tech-Nonprofit Page - Component Dependencies

Here's a comprehensive list of all the important components and files you'll need to copy to your new repo to recreate the Oolite tech-nonprofit page:

## 🎯 Main Page Files

### Core Page Structure
```
src/app/(tech-nonprofit)/tech-nonprofit/
├── page.tsx                                    # Main page wrapper
└── TechNonprofitClientPage.tsx                 # Client-side wrapper
```

### Main Component
```
src/components/page/
└── TechNonprofitClient.tsx                     # Main page component (large file)
```

## 🧩 UI Components

### Base UI Components
```
src/components/ui/
├── button.tsx                                  # Button component with variants
└── popover.tsx                                 # Popover component (Radix UI)
```

### Common Components
```
src/components/common/
├── ThemeToggle.tsx                             # Theme toggle button
├── DecorativeDivider.tsx                       # Animated section dividers
├── LargeIconCarousel.tsx                       # Icon carousel with animations
├── LanguageSelector.tsx                        # Language selection dropdown
└── DarkLightThemeSelector.tsx                  # Theme selector (alternative)
```

### Navigation
```
src/components/workshop/
└── TechNonprofitNavLeCube.tsx                  # Navigation component
```

## 🎨 Contexts & State Management

### Theme Context
```
src/contexts/
├── ThemeContext.tsx                            # Dark/light theme management
└── LanguageContext.tsx                         # Multi-language support
```

## 🌐 Translations

### Translation Files
```
src/lib/translations/
└── tech-nonprofit-oolite.ts                    # Complete translations (EN/ES/FR/HT)
```

## 🛠️ Utilities

### Utility Functions
```
src/lib/
└── utils.ts                                    # Class name utility (clsx + tailwind-merge)
```

## 📦 Dependencies

### Required NPM Packages
```json
{
  "framer-motion": "^10.x.x",                   // Animations
  "react-intersection-observer": "^9.x.x",      // Scroll animations
  "lucide-react": "^0.x.x",                     // Icons
  "@radix-ui/react-popover": "^1.x.x",          // Popover component
  "clsx": "^2.x.x",                             // Class name utility
  "tailwind-merge": "^2.x.x",                   // Tailwind class merging
  "class-variance-authority": "^0.x.x"          // Component variants
}
```

## 🎯 Key Features

### What Each Component Does:

1. **TechNonprofitClient.tsx** - Main page with:
   - Hero section with animated background
   - Services grid with hover effects
   - Workshops section
   - Case studies/impact section
   - Contact modal
   - Responsive design
   - Theme switching
   - Multi-language support

2. **TechNonprofitNavLeCube.tsx** - Navigation with:
   - Smooth scrolling to sections
   - Mobile menu
   - Language selector
   - Theme toggle

3. **LargeIconCarousel.tsx** - Animated icon carousel with:
   - Auto-rotating icons
   - Framer Motion animations
   - Reduced motion support
   - Customizable icons and labels

4. **DecorativeDivider.tsx** - Section dividers with:
   - Gradient backgrounds
   - Icon overlays
   - Smooth animations

5. **ThemeContext.tsx** - Theme management with:
   - Dark/light mode switching
   - Local storage persistence
   - System preference detection
   - Smooth transitions

6. **LanguageContext.tsx** - Multi-language support with:
   - 4 languages (EN/ES/FR/HT)
   - Local storage persistence
   - Context-based state management

## 🚀 Quick Setup Steps

1. **Copy all the files listed above**
2. **Install the required dependencies**
3. **Set up your Tailwind config** (ensure dark mode is enabled)
4. **Add the contexts to your app layout**
5. **Update import paths** to match your new repo structure

## 🎨 Styling Notes

- Uses Tailwind CSS with dark mode
- Custom gradients and animations
- Responsive design (mobile-first)
- Glassmorphism effects
- Smooth transitions and hover states

## 🔧 Customization Points

- **Icons**: Update `carouselIcons` array in TechNonprofitClient.tsx
- **Services**: Modify `services` array for your content
- **Workshops**: Update `workshops` array
- **Translations**: Edit the translation file for your content
- **Colors**: Update gradient colors in the component
- **Branding**: Change "Artist Tech Initiative" to your brand name

This should give you everything you need to recreate the Oolite tech-nonprofit page in your new repo!

