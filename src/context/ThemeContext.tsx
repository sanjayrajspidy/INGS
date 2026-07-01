/* eslint-disable react/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'midnight' | 'frost' | 'neon';

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // 1. Check local storage preference
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    if (savedTheme === 'midnight' || savedTheme === 'frost' || savedTheme === 'neon') {
      return savedTheme;
    }
    
    // 2. Fallback to system preference
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'midnight' : 'frost';
    }
    
    return 'midnight';
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  useEffect(() => {
    // Sync theme to document html data-theme attribute
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
