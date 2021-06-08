import { useThemeContext } from '../../contexts/theme.context';

import lightModeSvg from '../../assets/light-mode.svg';
import darkModeSvg from '../../assets/dark-mode.svg';

import './toggle-theme-button.styles.scss';
import { Header } from '../header/header.component';

export const ToggleThemeButton = () => {
  const { themes, theme, headerTheme, toggleTheme } = useThemeContext();

  const lightModeIcon = (
    <img
      src={lightModeSvg}
      alt="light mode button"
      className="toggle-theme-icon"
      style={headerTheme}
    />
  );
  const darkModeIcon = (
    <img
      src={darkModeSvg}
      alt="dark mode button"
      className="toggle-theme-icon"
      style={headerTheme}
    />
  );

  return (
    <button onClick={toggleTheme} className="toggle-theme-button">
      {theme === themes.light ? darkModeIcon : lightModeIcon}
    </button>
  );
};
