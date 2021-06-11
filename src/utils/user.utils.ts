import { axiosUser } from './api-config.utils';

export const fetchUsers = async () => {
  try {
    const { data } = await axiosUser.get('');

    return data;
  } catch (err) {
    console.log('~ err fetchUsers from user.utils', err);
  }
};

export const fetchUser = async () => {
  try {
    const { data } = await axiosUser.get('user');

    return data;
  } catch (err) {
    console.log('fetchUser ~ err', err);
  }
};

export const fetchUserData = async (accessToken: string) => {
  try {
    const { data } = await axiosUser.post('getuser/', { access: accessToken });

    return data;
  } catch (err) {
    console.log('~ err', err);
    return null;
  }
};
