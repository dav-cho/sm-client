import AXIOS from 'axios';

import { refreshAccessToken } from './auth.utils';
import { checkStoredTokens } from './user.utils';

const environment = process.env.REACT_APP_ENVIRONMENT;

let BASE_URL: string | undefined;

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

export const axios = AXIOS.create({
  baseURL: `${BASE_URL}/`,
});

export const axiosAuth = AXIOS.create({
  baseURL: `${BASE_URL}/auth/`,
});

// export const axiosApi = AXIOS.create({
//   baseURL: `${BASE_URL}/api/`,
// });

export const requestInterceptor = axios.interceptors.request.use(
  config => {
    if (checkStoredTokens()) {
      config.headers.authorization = `Bearer ${localStorage.getItem('access')}`;
    }

    return config;
  },
  err => {
    console.log('~ AXIOS REQUEST INTERCEPTOR ERR', err);

    return Promise.reject(err);
  }
);

export const responseInterceptor = axios.interceptors.response.use(
  res => res,
  async err => {
    const originalReq = err.config;
    const status = err.response.status;
    // axios.interceptors.request.eject(requestInterceptor);
    // axios.interceptors.response.eject(responseInterceptor);

    if (status === 401) {
      const newAccessToken = await refreshAccessToken();

      if (newAccessToken) {
        localStorage.setItem('access', newAccessToken);

        return axios(originalReq);
      }
    }

    return Promise.reject(err);
  }
);
