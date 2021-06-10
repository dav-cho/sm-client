import { axiosUser } from './api-config.utils';
// import { authenticatedUser } from './auth.utils';

export const fetchUsers = async () => {
  try {
    const res = await axiosUser.get('');
    console.log('fetchUserData ~ res', res);
    const data = await res.data;

    return data;
  } catch (err) {
    console.log('fetchUserData ~ err', err);
    console.log('fetchUserData ~ err.response.headers', err.response.headers);
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
