import { axios } from './axios-config.utils';

export const getUsers = async () => {
  try {
    const { data } = await axios.get('accounts/');

    return data;
  } catch (err) {
    console.log('~ GET USERS ERROR', err);
  }
};

export const getUser = async (userId: number) => {
  try {
    const { data } = await axios.get(`accounts/${userId}`);

    return data;
  } catch (err) {
    console.log('~ GET USER ERROR', err);
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await axios.post('accounts/user/');

    return data;
  } catch (err) {
    console.log('~ GET CURRENT USER ERROR', err);
    return null;
  }
};

export const checkStoredTokens = () => {
  const accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refresh');

  return accessToken || refreshToken ? true : false;
};
