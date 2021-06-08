import axios from 'axios';

const BASE_URL = process.env.REACT_APP_LOCAL_URL;

type userEndPoint =
  | 'register'
  | 'login'
  | 'logout'
  | 'auth/login'
  | 'auth/refresh';

export const fetchUserData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/accounts/`);
    const usersData = await res.data;

    return usersData;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const postUserData = async (endPoint: userEndPoint, formData: {}) => {
  try {
    const res = await axios.post(`${BASE_URL}/accounts/${endPoint}/`, formData);
    const data = await res.data;

    return data;
  } catch (err) {
    console.log('~ err', err);
  }
};

type apiEndPoint = 'users' | 'posts' | 'reactions' | 'comments';

export const fetchApiData = async (endPoint: apiEndPoint) => {
  try {
    const res = await axios.get(`${BASE_URL}/${endPoint}/`);
    const apiData = await res.data;

    return apiData;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const postApiData = async (endPoint: apiEndPoint, formData: {}) => {
  try {
    await axios.post(`${BASE_URL}/${endPoint}/`, formData);
    // await axios({
    //   method: 'POST',
    //   url: `${BASE_URL}/${endPoint}/`,
    //   data: data,
    // });
  } catch (err) {
    console.log('~ err', err);
  }
};
