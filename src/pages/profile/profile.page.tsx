import { useUserContext } from '../../contexts/user.context';

import { Profile } from '../../components/users/profile.component';

const ProfilePage = () => {
  const { user } = useUserContext();
  console.log('~ user from profile page', user);

  return <>{user && <Profile user={user} />}</>;
};

export default ProfilePage;
