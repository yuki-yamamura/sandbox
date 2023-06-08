import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

type ContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ContextType | null>(null);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light');
  const value = {
    theme,
    toggleTheme: () =>
      setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light')),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return { ...context };
};
