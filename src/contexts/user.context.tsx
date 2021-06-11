import { createContext, useContext, useState, useEffect } from 'react';

import { User } from '../types/index.types';
import { authenticateUser, checkLoginStatus } from '../utils/auth.utils';

type UserContextProps = {
  user: User | null;
  setUser: React.Dispatch<User | null>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<boolean>;
};

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  loggedIn: false,
  setLoggedIn: () => {},
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(checkLoginStatus());

  const checkUserStatus = async () => {
    const user = await authenticateUser();

    if (user) setUser(user);
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  useEffect(() => {
    console.log('~ user from user context', user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
