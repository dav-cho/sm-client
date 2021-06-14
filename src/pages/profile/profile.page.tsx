import { useUserContext } from '../../contexts/user.context';

import { Profile } from '../../components/users/profile.component';

const ProfilePage = () => {
  const { user } = useUserContext();

  return user && <Profile user={user} />;
};

export default ProfilePage;
