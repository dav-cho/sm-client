import axios from 'axios';

const environment = process.env.REACT_APP_ENVIRONMENT;
console.log('environment', environment);

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

// const accessToken = localStorage.getItem('access');

export const axiosUser = axios.create({
  baseURL: `${BASE_URL}/accounts/`,
  headers: {
    // Authorization: `Bearer ${accessToken}`,
    Authorization: `Bearer ${localStorage.getItem('access')}`,
  },
});

/**
 * TODO:
 * - config default header auth with access token
 * - use axios interceptors to handle token errors and replace with refresh token
 **/

axiosUser.interceptors.response.use(
  res => res,
  async err => {
    // test access token - if invalid, use refresh token
    // test refresh token - if invalid, get new refresh token
    // (need to setup backend endpoint to generate new refresh token)
  }
);

export const axiosAPI = axios.create({
  baseURL: `${BASE_URL}/api/`,
});
