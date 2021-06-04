import { useState, useEffect } from 'react';

import { User } from '../../models/api.models';
import { fetchData } from '../../utils/api.utils';

import { Login } from '../../components/login/login.component';
import { CardList } from '../../components/card-list/card-list.component';

export const LoginPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData('users').then(userData => {
      console.log('~ userData', userData);

      setUsers(userData);
    });
  }, []);

  return (
    <div className="login-page-container">
      <Login />
      <CardList data={users} />
    </div>
  );
};
