# Feature Strategy Document

## Overview
This document outlines the feature organization strategy for the Moises Sanabria website, breaking down the application into distinct, manageable features.

## Feature Organization

### 1. Landing ✅
**Purpose**: Main entry point and hero section
**Components**: 
- Hero section with artist introduction
- Featured content showcase
- Navigation to other features
- Promoted events section

**Files**:
- `src/app/(main)/page.tsx` - Main landing page
- `src/app/(main)/layout.tsx` - Main layout with Header
- `src/features/landing/components/Header.tsx` - Main navigation header (refactored)
- `src/features/landing/components/Logo.tsx` - Stylized "Moises" logo with smaller "o"
- `src/features/landing/components/ThemeToggle.tsx` - Reusable theme toggle component
- `src/features/landing/components/VisitButton.tsx` - Reusable visit button component
- `src/features/landing/components/HeaderControls.tsx` - Combined theme + visit controls
- `src/features/landing/components/MobileMenu.tsx` - Mobile menu logic
- `src/features/landing/components/DesktopNavigation.tsx` - Desktop navigation logic
- `src/features/landing/components/LandingPromotedEvent.tsx` - Promoted events section
- `src/features/landing/index.ts` - Feature exports

**Status**: ✅ Implemented with proper feature organization and component refactoring

**Refactoring Benefits**:
- ✅ Eliminated duplicate theme toggle buttons (was 3, now 1 reusable component)
- ✅ Separated concerns into focused components
- ✅ Improved maintainability and reusability
- ✅ Cleaner business logic separation
- ✅ Created stylized Logo component with MoMA-inspired design
- ✅ Consistent branding across Header and Footer

**Logo Design**:
- Stylized "Moises" with smaller "o" (like MoMA logo)
- Responsive sizing (sm, md, lg, xl)
- Theme-aware (dark/light mode)
- Optional link functionality
- Used in Header and Footer for consistency

### 2. Events
**Purpose**: Showcase and manage events, workshops, and performances
**Components**:
- Events listing and filtering
- Event detail pages
- Event registration/RSVP
- Event calendar view

**Files**:
- `src/app/(events)/events/page.tsx` - Events listing
- `src/app/(events)/events/[slug]/page.tsx` - Event detail pages
- Event-related components

**Current Events**:
- Bakehouse Open Studios (March 2025)
- Performance in Flux (February 2025)
- DMINTI Attendant Engagements

### 3. Exhibitions
**Purpose**: Display past and current art exhibitions
**Components**:
- Exhibition gallery
- Exhibition details
- Artist statements
- Installation photos

**Files**:
- `src/app/(main)/exhibitions/page.tsx` - Exhibitions listing

### 4. Art & Artist
**Purpose**: Showcase individual artworks and artist portfolio
**Components**:
- Artwork gallery
- Individual artwork pages
- Artist bio and statement
- Artwork categories and filtering

**Files**:
- `src/app/(main)/art/page.tsx` - Art gallery
- `src/app/(main)/art/[slug]/page.tsx` - Individual artwork pages
- `src/app/(main)/art/price-of-existence/page.tsx` - Special exhibition

### 5. Bio
**Purpose**: Artist biography and background information
**Components**:
- Artist biography
- Education and experience
- Awards and recognition
- Artist statement

**Files**:
- `src/app/(main)/bio/page.tsx` - Biography page

### 6. Store
**Purpose**: E-commerce functionality for art sales
**Components**:
- Product catalog
- Shopping cart
- Checkout process
- Order management

**Files**:
- `src/app/(main)/store/page.tsx` - Store page

## Implementation Strategy

### Phase 1: Landing Feature ✅ (Completed)
1. **✅ Created features/landing directory structure**
2. **✅ Moved Header component to features/landing/components/**
3. **✅ Moved LandingPromotedEvent to features/landing/components/**
4. **✅ Updated imports in main layout and page**
5. **✅ Added proper vertical centering for theme/visit buttons**
6. **✅ Created feature index exports**
7. **✅ Refactored Header into smaller, focused components**
8. **✅ Eliminated duplicate theme toggle buttons**
9. **✅ Separated mobile and desktop navigation logic**
10. **✅ Created stylized Logo component with MoMA-inspired design**
11. **✅ Updated Footer to use Logo component for consistency**

### Phase 2: Events Feature (Current Focus)
1. **✅ Update LandingPromotedEvent** ✅
   - Link to Bakehouse Open Studios event
   - Dynamic event promotion

2. **Events Listing Page**
   - Create comprehensive events listing
   - Add filtering and search
   - Implement event categories

3. **Event Detail Pages**
   - Individual event pages with full details
   - RSVP functionality
   - Event sharing

### Phase 3: Content Organization
1. **Move existing content into feature folders**
2. **Create shared components for each feature**
3. **Implement consistent navigation between features**

### Phase 4: Enhanced Functionality
1. **Add CMS integration for content management**
2. **Implement user authentication for event registration**
3. **Add analytics and tracking**

## Current File Structure

```
src/
├── features/
│   └── landing/ ✅
│       ├── components/
│       │   ├── Header.tsx ✅ (refactored)
│       │   ├── Logo.tsx ✅ (new - stylized)
│       │   ├── ThemeToggle.tsx ✅ (new)
│       │   ├── VisitButton.tsx ✅ (new)
│       │   ├── HeaderControls.tsx ✅ (new)
│       │   ├── MobileMenu.tsx ✅ (new)
│       │   ├── DesktopNavigation.tsx ✅ (new)
│       │   └── LandingPromotedEvent.tsx ✅
│       └── index.ts ✅
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── types/
└── app/
    └── (features)/
        ├── landing/ ✅
        ├── events/
        ├── exhibitions/
        ├── art/
        ├── bio/
        └── store/
```

## Component Architecture

### Header Component Structure
```
Header (main container)
├── HeaderControls (fixed position)
│   ├── ThemeToggle
│   └── VisitButton
├── Logo (stylized "Moises")
├── Desktop Theme Toggle (first row)
├── MobileMenu
│   ├── Menu Toggle Button
│   ├── Mobile Menu Overlay
│   └── ThemeToggle (mobile)
└── DesktopNavigation (second row)
```

### Logo Component Features
- **Stylized Design**: Smaller "o" like MoMA logo
- **Responsive Sizing**: sm, md, lg, xl variants
- **Theme Aware**: Adapts to dark/light mode
- **Flexible Usage**: Can be with or without link
- **Consistent Branding**: Used across Header and Footer

### Benefits of Refactoring
- **Single Responsibility**: Each component has one clear purpose
- **Reusability**: ThemeToggle, VisitButton, and Logo can be used elsewhere
- **Maintainability**: Easier to modify individual parts
- **Testability**: Smaller components are easier to test
- **No Duplication**: Theme toggle logic is centralized
- **Brand Consistency**: Logo component ensures consistent styling

## Next Steps

1. ✅ **Landing Feature Organization & Refactoring** - Complete
2. **Events Feature Development**
   - Create `src/features/events/` directory
   - Move event-related components
   - Implement events listing page
   - Create individual event detail pages
3. **Exhibitions Feature**
   - Create `src/features/exhibitions/` directory
   - Move exhibition-related components
4. **Art Feature**
   - Create `src/features/art/` directory
   - Move artwork-related components
5. **Bio Feature**
   - Create `src/features/bio/` directory
   - Move bio-related components
6. **Store Feature**
   - Create `src/features/store/` directory
   - Move store-related components

## Notes

- Each feature should be self-contained with its own components, hooks, and types
- Shared components should be moved to the shared folder
- Navigation should be consistent across all features
- Consider implementing a design system for consistent UI/UX
- The Header component is now properly organized and refactored
- Theme toggle and Visit buttons are now reusable components
- No more duplicate theme toggle buttons - single source of truth
- Logo component provides consistent branding with MoMA-inspired design 