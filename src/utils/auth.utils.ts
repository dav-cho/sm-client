import { axiosAuth, axiosUser } from './api-config.utils';

import { RegisterFormData } from '../types/index.types';

type Token = 'access' | 'refresh';

const getToken = (tokenType: Token) => {
  const token = localStorage.getItem(tokenType);

  return { [tokenType]: token };
};

const getTokens = () => {
  const access = localStorage.getItem('access');
  const refresh = localStorage.getItem('refresh');

  return { access, refresh };
};

const clearTokens = () => {
  axiosAuth.defaults.headers.common.authorization = null;
  axiosUser.defaults.headers.common.authorization = null;

  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
};

export const registerUser = async (formData: RegisterFormData) => {
  console.log('registerUser ~ formData', formData);
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
    const { data: tokens } = await axiosAuth.post('login/', formData);

    localStorage.setItem('access', tokens.access);
    localStorage.setItem('refresh', tokens.refresh);
    axiosAuth.defaults.headers.common.authorization = `Bearer ${tokens.refresh}`;
    axiosUser.defaults.headers.common.authorization = `Bearer ${tokens.access}`;
    // console.log(
    //   '~ axiosUser.defaults.headers.common.authorization',
    //   axiosUser.defaults.headers.common.authorization
    // );

    return tokens;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const logoutUser = async () => {
  try {
    // axiosAuth.defaults.headers.common.authorization = null;
    // axiosUser.defaults.headers.common.authorization = null;

    const refreshToken = localStorage.getItem('refresh');

    clearTokens();

    const { status, statusText } = await axiosAuth.post('logout/', {
      refresh: refreshToken,
    });

    // localStorage.removeItem('access');
    // localStorage.removeItem('refresh');

    return { status, statusText };
  } catch (err) {
    console.log('~ err', err);
    console.log('~ err.response.data', err.response.data);
    console.log('~ err.request', err.request);
  }
};

export const refreshAccessToken = async () => {
  try {
    //
  } catch (err) {
    console.log('~ err', err);
  }
};

export const checkSignInStatus = () => {
  const token = localStorage.getItem('refresh');

  return token ? true : false;
};

export const authenticateUser = async () => {
  const accessToken = localStorage.getItem('access');
};

// export const authenticatedUser = async () => {
//   const refreshToken = localStorage.getItem('refresh');

//   if (!refreshToken) return false;

//   const res = await axiosAuth.post('refresh', { refresh: refreshToken });
//   const newAccessToken = res.data.access;
//   console.log('authenticateUser ~ newAccessToken', newAccessToken);
//   // axiosUser.defaults.headers.common.authorization = `Bearer ${newAccessToken}`;
//   // axiosUser.interceptors.request.use(config => {
//   //   config.headers.authorization = `Bearer ${newAccessToken}`;
//   //   return config;
//   // });

//   return true;
// };
