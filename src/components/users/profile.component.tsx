import { User } from '../../types/index.types';

import './styles/profile.styles.scss';

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => {
  return (
    <div className="profile-container">
      {user && (
        <div className="profile-info-container">
          <h1>hello {user.username}</h1>
          <h3>{user.email}</h3>
          <h4>logged in: {new Date(user.last_login).toLocaleString()}</h4>
          <h4>account created: {new Date(user.created).toLocaleString()}</h4>
        </div>
      )}
    </div>
  );
};
