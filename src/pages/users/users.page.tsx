import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import { User } from '../../types/index.types';
// import { useUserContext } from '../../contexts/user.context';
import { fetchUsers } from '../../utils/user.utils';

import { CardList } from '../../components/card-list/card-list.component';
import { AccessDenied } from '../../components/access-denied/access-denied.component';

import './users.styles.scss';

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
    // return new Date(isoDate).toString();
    return new Date(isoDate).toLocaleString();
  };

  return (
    <div className="users-page-container">
      {/* {users.length && */}
      <div className="users-container">
        {users &&
          users.map(user => (
            <div key={user.id} className="user-container">
              <h2 className="user-title">{user.username}</h2>
              <div className="user-info">
                <p>email: {user.email}</p>
                <p>last login: {formatDate(user.last_login)}</p>
                <p>created: {formatDate(user.created)}</p>
              </div>
              <div className="user-posts">
                <strong>posts:</strong>
                {user.posts?.map(post => (
                  <ul key={post.id}>
                    <li>
                      <strong>{post.title}</strong>
                    </li>
                    <li>id: {post.id}</li>
                    <li>body: {post.body}</li>
                    <li>author: {post.author}</li>
                    <li>author id: {post.author_id}</li>
                    <li>published: {formatDate(post.published)}</li>
                  </ul>
                ))}
              </div>
              <div className="user-posts">
                <strong>comments:</strong>
                {user.comments?.map(comment => (
                  <ul key={comment.id}>
                    <li>
                      <strong>{comment.title}</strong>
                    </li>
                    <li>id: {comment.id}</li>
                    <li>body: {comment.body}</li>
                    <li>author: {comment.author}</li>
                    <li>author id: {comment.author_id}</li>
                    <li>published: {formatDate(comment.published)}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
      </div>
      <h2>list users with card list:</h2>
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
