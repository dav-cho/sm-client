import { Link, useHistory } from 'react-router-dom';

import { useUserContext } from '../../contexts/user.context';
import { postUserAuth, clearTokens } from '../../utils/auth.utils';

export const LoginLogoutButton = () => {
  const { loggedIn, setLoggedIn } = useUserContext();
  const { push } = useHistory();

  const handleClick = async () => {
    const refreshToken = localStorage.getItem('refresh');
    await postUserAuth('blacklist', { refresh: refreshToken });
    await postUserAuth('logout', {});
    await clearTokens();
    setLoggedIn(false);
    push('/login');
  };

  return loggedIn ? (
    <Link to="/login" onClick={handleClick}>
      logout
    </Link>
  ) : (
    <Link to="/login">login</Link>
  );
};
