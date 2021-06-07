import {useState, useEffect} from 'react';

import { User } from '../../models/api.models';
import { fetchUserData } from '../../utils/api.utils';

import { CardList } from '../../components/card-list/card-list.component';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUserData().then(usersData => {
      setUsers(usersData);
    });
  }, []);

  return (
    <div className="login-page-container">
      <CardList
        listData={users}
        properties={['email', 'username', 'password']}
      />
    </div>
  );
}

export default UsersPage;