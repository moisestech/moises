'use client';

import React, { createContext, useContext, type ReactNode } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface AppContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

/**
 * Legacy app shell provider. Theme ownership lives in ThemeContext —
 * do not toggle `document.documentElement.classList` here (that forced light mode on mount).
 */
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppContext.Provider
      value={{
        darkMode: theme === 'dark',
        toggleDarkMode: toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
