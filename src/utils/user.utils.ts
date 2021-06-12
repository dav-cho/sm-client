import { axios } from './axios-config.utils';

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get('accounts/');

    return data;
  } catch (err) {
    console.log('~ err fetchUsers from user.utils', err);
  }
};

export const fetchUser = async () => {
  try {
    const { data } = await axios.get('accounts/user');

    return data;
  } catch (err) {
    console.log('fetchUser ~ err', err);
  }
};

export const fetchUserData = async (accessToken: string) => {
  try {
    const { data } = await axios.post('accounts/getuser/', {
      access: accessToken,
    });

    return data;
  } catch (err) {
    console.log('~ err', err);
    return null;
  }
};
