import { Link } from 'react-router-dom';

import { useThemeContext } from '../../contexts/theme.context';
import { useUserContext } from '../../contexts/user.context';
import { postUserData } from '../../utils/api.utils';

import './header.styles.scss';

export const Header = () => {
  const { headerTheme, toggleTheme } = useThemeContext();
  const { loggedIn, setLoggedIn } = useUserContext();

  const handleClick = () => {
    postUserData('logout', {});
    setLoggedIn(false);
    localStorage.clear();
  };

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
        {loggedIn ? (
          <Link to="/login" onClick={handleClick}>
            logout
          </Link>
        ) : (
          <Link to="/login">login</Link>
        )}
        <button onClick={toggleTheme}>toggle theme</button>
      </div>
    </div>
  );
};
