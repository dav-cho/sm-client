import { Link, useHistory } from 'react-router-dom';

import { useUserContext } from '../../contexts/user.context';
import { logoutUser } from '../../utils/auth.utils';

import loginSvg from '../../assets/login.svg';
import logoutSvg from '../../assets/logout.svg';
import './styles/login-logout-button.styles.scss';

export const LoginLogoutButton = () => {
  const { setUser, loggedIn, setLoggedIn } = useUserContext();
  const { push } = useHistory();

  const loginIcon = (
    <img src={loginSvg} alt="light mode button" className="toggle-theme-icon" />
  );
  const logoutIcon = (
    <img src={logoutSvg} alt="dark mode button" className="toggle-theme-icon" />
  );

  const handleClick = async () => {
    const res = await logoutUser();

    if (!res) return;

    setUser(null);
    setLoggedIn(false);
    push('/accounts/login');
  };

  return loggedIn ? (
    <Link to="/accounts/login" onClick={handleClick}>
      <div className="login-logout-button">
        <span>logout</span>
        {logoutIcon}
      </div>
    </Link>
  ) : (
    <Link to="/accounts/login">
      <div className="login-logout-button">
        <span>login</span>
        {loginIcon}
      </div>
    </Link>
  );
};
