import { Link } from 'react-router-dom';

import { useThemeContext } from '../../contexts/theme.context';
import { useUserContext } from '../../contexts/user.context';

import { LoginLogoutButton } from '../loginin-logout-button/login-logout-button.component';
import { ToggleThemeButton } from '../toggle-theme-button/toggle-theme-button.components';

import './header.styles.scss';

export const Header = () => {
  const { headerTheme } = useThemeContext();
  const { loggedIn } = useUserContext();

  /**
   * TODO: change checking with loggedIn to user
   * change from loggedIn to user from user context?
   **/
  const checkUser = () => {
    const existingUser = { path: '/profile', name: 'profile' };
    const newUser = { path: '/register', name: 'register' };

    return loggedIn ? existingUser : newUser;
  };

  const navLinks = [
    { path: '/users', name: 'users' },
    { path: '/posts', name: 'posts' },
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    checkUser(),
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
        <ToggleThemeButton />
      </div>
    </div>
  );
};
