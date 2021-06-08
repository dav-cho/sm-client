import { useState, useEffect } from 'react';

import { User } from '../../types/api.types';
import { fetchUserData } from '../../utils/api.utils';

import { CardList } from '../../components/card-list/card-list.component';
import { AccessDenied } from '../../components/access-denied/access-denied.component';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUserData().then(usersData => {
      setUsers(usersData);
    });
  }, []);

  return (
    <div className="users-page-container">
      {users ? (
        <CardList
          listData={users}
          properties={['email', 'username', 'password']}
        />
      ) : (
        <AccessDenied />
      )}
    </div>
  );
};

export default UsersPage;
