import { axios, axiosAuth } from './axios-config.utils';
import { requestInterceptor, responseInterceptor } from './axios-config.utils';

type RegisterFormData = {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
};

export const registerUser = async (formData: RegisterFormData) => {
  try {
    const { data } = await axiosAuth.post('register/', formData);

    return data;
  } catch (err) {
    console.log('~ REGISTER USER ERROR', err);
  }
};

export const loginUser = async (formData: {}) => {
  try {
    const { data } = await axiosAuth.post('login/', formData);
    const { access, refresh } = await data;

    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
    axios.defaults.headers.common.authorization = `Bearer ${access}`;

    return data;
  } catch (err) {
    console.log('~ LOGIN USER ERROR', err);
  }
};

export const logoutUser = async () => {
  try {
    const refreshToken = localStorage.getItem('refresh');

    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    axios.interceptors.request.eject(requestInterceptor);
    axios.interceptors.response.eject(responseInterceptor);

    const { status, statusText } = await axiosAuth.post('logout/', {
      refresh: refreshToken,
    });

    return { status, statusText };
  } catch (err) {
    console.log('~ LOGOUT USER ERROR', err);
  }
};

export const refreshAccessToken = async () => {
  try {
    const { data } = await axiosAuth.post('refresh/', {
      refresh: localStorage.getItem('refresh'),
    });

    return data.access;
  } catch (err) {
    console.log('~ REFRESH ACCESS TOKEN ERROR', err);
  }
};

export const authenticateUser = async () => {
  try {
    const { data } = await axiosAuth.post('refresh/', {
      refresh: localStorage.getItem('refresh'),
    });

    if (!data) return Promise.reject();

    return data;
  } catch (err) {
    console.log('~ AUTHENTICATE USER ERROR', err);
  }
};
