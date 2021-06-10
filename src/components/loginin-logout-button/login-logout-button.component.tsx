import { Link, useHistory } from 'react-router-dom';

import { useUserContext } from '../../contexts/user.context';
// import { postUserAuth, logoutUser } from '../../utils/auth.utils';
import { logoutUser } from '../../utils/auth.utils';

import {} from '../flash-error/flash-error.component';

export const LoginLogoutButton = () => {
  const { loggedIn, setLoggedIn } = useUserContext();
  const { push } = useHistory();

  const handleClick = async () => {
    const res = await logoutUser();

    if (!res) return;

    console.log('~ res from logout component', res);
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
