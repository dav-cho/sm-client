import { Link, useHistory } from 'react-router-dom';

import { useUserContext } from '../../contexts/user.context';
import { logoutUser } from '../../utils/auth.utils';

export const LoginLogoutButton = () => {
  const { setUser, loggedIn, setLoggedIn } = useUserContext();
  const { push } = useHistory();

  const handleClick = async () => {
    const res = await logoutUser();

    if (!res) return;

    setUser(null);
    setLoggedIn(false);
    push('/accounts/login');
    console.log('~ SUCCESSFULLY LOGGED OUT');
  };

  return loggedIn ? (
    <Link to="/accounts/login" onClick={handleClick}>
      logout
    </Link>
  ) : (
    <Link to="/accounts/login">login</Link>
  );
};
