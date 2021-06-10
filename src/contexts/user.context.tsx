import { createContext, useContext, useState, useEffect } from 'react';

// import { checkSignInStatus, authenticatedUser } from '../utils/auth.utils';
import { checkSignInStatus } from '../utils/auth.utils';
import { User } from '../types/index.types';

type UserContextProps = {
  user?: User | null;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<boolean>;
};

const UserContext = createContext<UserContextProps>({
  user: null,
  loggedIn: false,
  setLoggedIn: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(checkSignInStatus());

  useEffect(() => {
    console.log('~ loggedIn', loggedIn);
  }, [loggedIn]);

  // useEffect(() => {
  //   authenticatedUser().then(accessToken => {
  //     console.log('authenticateUser user.context ~ accessToken', accessToken);
  //   });
  // }, []);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
