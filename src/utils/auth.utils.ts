import { axiosAuth, axiosUser } from './api-config.utils';

import { RegisterFormData } from '../types/index.types';
import { fetchUserData } from './user.utils';

// import { getUser } from './user.utils';

export const setTokens = (access: string, refresh: string) => {
  localStorage.setItem('access', access);
  localStorage.setItem('refresh', refresh);
  axiosUser.defaults.headers.common.authorization = `Bearer ${access}`;
  axiosAuth.defaults.headers.common.authorization = `Bearer ${refresh}`;
};

const clearTokens = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  axiosUser.defaults.headers.common.authorization = null;
  axiosAuth.defaults.headers.common.authorization = null;
};

type GetLocalTokenProps = 'access' | 'refresh';

export const getLocalToken = (tokenType: GetLocalTokenProps) => {
  const token = localStorage.getItem(tokenType);

  return token;
};

/**
 * auth api calls
 **/

export const registerUser = async (formData: RegisterFormData) => {
  try {
    const res = await axiosAuth.post('register/', formData);
    const data = await res.data;

    return data;
  } catch (err) {
    console.log('~ err', err);
    console.log('~ err.request.headers', err.request.headers);
  }
};

export const loginUser = async (formData: {}) => {
  try {
    const { data } = await axiosAuth.post('login/', formData);
    const { access, refresh } = await data;

    setTokens(access, refresh);

    return data;
  } catch (err) {
    console.log('~ err loginUser', err);
  }
};

export const logoutUser = async () => {
  try {
    const refreshToken = localStorage.getItem('refresh');

    clearTokens();

    const { status, statusText } = await axiosAuth.post('logout/', {
      refresh: refreshToken,
    });

    return { status, statusText };
  } catch (err) {
    console.log('~ err logoutUser', err);
  }
};

export const refreshAccessToken = async (refresh: string) => {
  try {
    const { data } = await axiosAuth.post('refresh/', { refresh });

    return data.access;
  } catch (err) {
    console.log('~ err', err);
  }
};

/**
 * persist login status on refresh
 **/
export const checkLoginStatus = () => {
  const accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refresh');

  return accessToken || refreshToken ? true : false;
};

export const checkUser = async () => {
  try {
    const accessToken = localStorage.getItem('access');
    const { data } = await axiosUser.post('getuser/', { access: accessToken });

    return data;
  } catch (err) {
    console.log('~ err', err);
    // return null;
  }
};

/**
 * get user data with access token
 **/

// export const verifyUser = async () => {
export const authenticateUser = async () => {
  const accessToken = localStorage.getItem('access');

  if (accessToken) return await fetchUserData(accessToken);

  // if (!accessToken) return null;
  // const user = await fetchUserData(accessToken);
  // return user;
};

/**
 * authenticate access token or get new token with refresh token
 **/

export const verifyAccessToken = async (accessToken: string) => {
  try {
    //
  } catch (err) {
    console.log('~ err', err);
  }
};
