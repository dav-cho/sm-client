import { createContext, useContext, useState, useEffect } from 'react';

import { getCurrentUser, checkStoredTokens } from '../utils/user.utils';
import { User } from '../types/index.types';

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
  const [loggedIn, setLoggedIn] = useState(checkStoredTokens());

  const checkUserStatus = async () => {
    const accessToken = localStorage.getItem('access');

    if (!accessToken) return;

    const user = await getCurrentUser();
    console.log('~ USER FROM USER CONTEXT', user);

    setUser(user);
  };

  useEffect(() => {
    checkUserStatus();
  }, [setUser]);

  useEffect(() => {
    console.log('~ USER FROM USER CONTEXT', user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
