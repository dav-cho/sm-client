import { useState, useEffect } from 'react';

import { User } from '../../types/index.types';
import { fetchUsers } from '../../utils/user.utils';

import { CardList } from '../../components/card-list/card-list.component';
import { AccessDenied } from '../../components/access-denied/access-denied.component';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then(usersData => {
      console.log('~ usersData', usersData);

      setUsers(usersData);
    });
  }, []);

  return (
    <div className="users-page-container">
      {users ? (
        <CardList
          listData={users}
          properties={['email', 'username', 'last_login', 'date_joined']}
        />
      ) : (
        <AccessDenied />
      )}
    </div>
  );
};

export default UsersPage;
