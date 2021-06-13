import { useUserContext } from '../../contexts/user.context';

import './home.styles.scss';

const HomePage = () => {
  const { user } = useUserContext();
  console.log('~ USER FROM HOME', user);

  return (
    <>
      {user ? (
        <div className="user-info-container">
          <h1>hello {user.username}</h1>
          <h3>{user.email}</h3>
          <h4>logged in: {new Date(user.last_login).toLocaleString()}</h4>
          <h4>account created: {new Date(user.created).toLocaleString()}</h4>
          <div className="access-container">
            <p>{localStorage.getItem('access')}</p>
          </div>
        </div>
      ) : (
        <h1>welcome page</h1>
      )}
    </>
  );
};

export default HomePage;
