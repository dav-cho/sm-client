import { useUserContext } from '../../contexts/user.context';

const ProfilePage = () => {
  const { user } = useUserContext();
  console.log('~ user from profile page', user)

  return <h1>profile page</h1>;
};

export default ProfilePage;
