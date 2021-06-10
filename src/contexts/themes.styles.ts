export type Theme = React.CSSProperties;

export type Themes = {
  dark: Theme;
  light: Theme;
};

export const themes: Themes = {
  light: {
    color: '#2c2c2c',
    backgroundColor: '#ddd',
  },

  dark: {
    color: '#ddd',
    backgroundColor: '#2c2c2c',
  },
};
