import axios from 'axios';

import { setTokens, getLocalToken, refreshAccessToken } from './auth.utils';

const environment = process.env.REACT_APP_ENVIRONMENT;

let BASE_URL;

switch (environment) {
  case 'development':
    BASE_URL = process.env.REACT_APP_LOCAL_URL;
    break;
  case 'production':
    BASE_URL = process.env.REACT_APP_DB_URL;
    break;
  default:
    console.log('~ invalid environment label');
}

export const axiosAuth = axios.create({
  baseURL: `${BASE_URL}/auth/`,
});

export const axiosUser = axios.create({
  baseURL: `${BASE_URL}/accounts/`,
  // headers: {
  //   authorization: `Bearer ${localStorage.getItem('access')}`,
  // },
});

export const axiosAPI = axios.create({
  baseURL: `${BASE_URL}/api/`,
});

/**
 * config default header auth with access token
 **/
// export const userAuthHeaderInterceptor = axiosUser.interceptors.request.use(
axiosUser.interceptors.request.use(config => {
  const accessToken = getLocalToken('access');

  if (accessToken) config.headers.authorization = `Bearer ${accessToken}`;

  return config;
});

/**
 * config response to handle invalid access token
 * if expired or invalid, request new token using refresh token
 * if refresh token expired or invalid, redirect to login
 **/
axiosUser.interceptors.response.use(
  res => res,
  err => {
    const originalReq = err.config;
    console.log('~ originalReq', originalReq);
    console.log('~ err req headers', originalReq.headers);
    const status = err.response.status;
    console.log('~ ERR REPONSE STATUS', err.response.status);
    console.log('~ ERR RESPONSE STATUS TYPE', typeof err.response.status);

    // if (status !== 401)
    //   return console.log('~ ERROR axiosUser, status:', status);

    if (status === 401) {
      const refreshToken = getLocalToken('refresh');

      if (!refreshToken) return err;

      refreshAccessToken(refreshToken).then(newAccessToken => {
        console.log('~ newAccessToken from interceptor', newAccessToken);
        setTokens(newAccessToken, refreshToken);
      });
    }
  }
);

// console.log(
//   '~ axiosUser.defaults.headers.common.authorization',
//   axiosUser.defaults.headers.common.authorization
// );
