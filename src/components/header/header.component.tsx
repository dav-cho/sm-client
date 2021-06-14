import { Link } from 'react-router-dom';

import { useThemeContext } from '../../contexts/theme.context';
import { useUserContext } from '../../contexts/user.context';

import { LoginLogoutButton } from './login-logout-button.component';
import { ToggleThemeButton } from './toggle-theme-button.components';

import profileCircleSvg from '../../assets/profile-circle.svg';
import './styles/header.styles.scss';

export const Header = () => {
  const { headerTheme } = useThemeContext();
  const { loggedIn } = useUserContext();

  const checkUser = () => {
    const existingUser = {
      path: '/profile',
      name: 'profile',
      svg: profileCircleSvg,
    };
    const newUser = { path: '/accounts/register', name: 'register' };

    return loggedIn ? existingUser : newUser;
  };

  interface NavLink {
    path: string;
    name: string;
    svg?: string;
  }

  const navLinks: NavLink[] = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/posts', name: 'posts' },
    // { path: '/users', name: 'users' },
    checkUser(),
  ];

  return (
    <div className="header-container" style={headerTheme}>
      <div className="header-title">
        <ToggleThemeButton />
        <h3>chngu</h3>
      </div>
      <div className="nav-links" style={headerTheme}>
        {navLinks.map(({ path, name, svg }) => {
          return (
            <Link to={path} key={name}>
              <div className="nav-button">
                <span>{name}</span>
                {svg && <img src={svg} alt="" />}
              </div>
            </Link>
          );
        })}
        <LoginLogoutButton />
      </div>
    </div>
  );
};
