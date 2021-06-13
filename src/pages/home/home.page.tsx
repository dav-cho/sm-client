import { useUserContext } from '../../contexts/user.context';

const HomePage = () => {
  const { user } = useUserContext();
  console.log('~ USER FROM HOME', user);

  return (
    <>
      {user ? (
        <>
          <h1>hello {user.username}</h1>
          <h3>{user.email}</h3>
          <h4>logged in: {new Date(user.last_login).toLocaleString()}</h4>
          <h4>account created: {new Date(user.created).toLocaleString()}</h4>
        </>
      ) : (
        <h1>welcome page</h1>
      )}
    </>
  );
};

export default HomePage;
