import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import { User } from '../../types/index.types';
// import { useUserContext } from '../../contexts/user.context';
import { fetchUsers } from '../../utils/user.utils';

import { CardList } from '../../components/card-list/card-list.component';
import { AccessDenied } from '../../components/access-denied/access-denied.component';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  // const { user } = useUserContext();

  const getUsers = async () => {
    const usersList = await fetchUsers();
    console.log('~ usersList', usersList);

    if (usersList) setUsers(usersList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);

    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  };

  return (
    <div className="users-page-container">
      {users.length &&
        users.map(user => (
          <div key={user.id}>
            <h4>{user.username}</h4>
            <p>email: {user.email}</p>
            <p>last login: {formatDate(user.last_login)}</p>
            <p>account created: {formatDate(user.created)}</p>
          </div>
        ))}
      {users.length ? (
        <CardList
          listData={users}
          properties={['id', 'email', 'username', 'last_login', 'created']}
        />
      ) : (
        <AccessDenied />
      )}
    </div>
  );
};

export default UsersPage;
