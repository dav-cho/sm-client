import axios from 'axios';

const BASE_URL = process.env.REACT_APP_LOCAL_URL;

type userAuthEndPoint = 'login' | 'logout' | 'token' | 'refresh' | 'blacklist';

export const postUserAuth = async (
  endPoint: userAuthEndPoint,
  clientData: {}
) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/${endPoint}/`, clientData);
    const data = await res.data;

    return data;
  } catch (err) {
    console.log('~ err', err);
  }
};

type tokens = { access: string; refresh: string };

export const storeTokens = (tokens: tokens) => {
  localStorage.setItem('access', tokens.access);
  localStorage.setItem('refresh', tokens.refresh);
};

export const clearTokens = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
};

export const checkSignInStatus = () => {
  const token = localStorage.getItem('access');

  return token ? true : false;
};

export const authenticateUser = async () => {
  const token = localStorage.getItem('refresh');

  if (!token) return null;

  const res = await axios.get(`${BASE_URL}/auth/`);
  const data = await res.data;

  return data;
};
