import { Link } from 'react-router-dom';

import { useThemeContext } from '../../contexts/theme.context';

import { LoginLogoutButton } from '../loginin-logout-button/login-logout-button.component';
import { ToggleThemeButton } from '../toggle-theme-button/toggle-theme-button.components';

import './header.styles.scss';

export const Header = () => {
  const { headerTheme } = useThemeContext();

  const navLinks = [
    { path: '/users', name: 'users' },
    { path: '/posts', name: 'posts' },
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/register', name: 'register' },
  ];

  return (
    <div className="header-container" style={headerTheme}>
      <div className="header-title">
        <h3>project 4</h3>
      </div>
      <div className="nav-links" style={headerTheme}>
        {navLinks.map(({ path, name }) => {
          return (
            <Link to={path} key={name}>
              {name}
            </Link>
          );
        })}
        <LoginLogoutButton />
        {/* <button onClick={toggleTheme}>toggle theme</button> */}
        <ToggleThemeButton />
      </div>
    </div>
  );
};
