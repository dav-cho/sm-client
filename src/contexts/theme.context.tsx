import { createContext, useContext, useState } from 'react';

// import { Theme, Themes, themes } from './themes.styles';

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
  themes: Themes;
  theme: Theme;
  headerTheme: Theme;
  toggleTheme?: () => void;
};

const ThemeContext = createContext<ThemeContextProps>({
  themes,
  theme: themes.light,
  headerTheme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const [headerTheme, setHeaderTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
    setHeaderTheme(prevHeaderTheme =>
      prevHeaderTheme === themes.dark ? themes.light : themes.dark
    );
  };

  return (
    <ThemeContext.Provider value={{ themes, theme, headerTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
