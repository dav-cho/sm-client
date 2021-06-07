import { createContext, useContext, useState } from 'react';

type Theme = React.CSSProperties;

type Themes = {
  dark: Theme;
  light: Theme;
};

const themes: Themes = {
  light: {
    color: '#2c2c2c',
    backgroundColor: '#ddd',
  },
  dark: {
    color: '#ddd',
    backgroundColor: '#2c2c2c',
  },
};

type ThemeContextProps = {
  theme: Theme;
  toggleTheme?: () => void;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.light,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
