import axios from 'axios';

import { userEndPoints, apiEndPoints } from '../types/api.types';

const BASE_URL = process.env.REACT_APP_LOCAL_URL;

export const fetchUserData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/accounts/`);
    const usersData = await res.data;

    return usersData;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const postUserData = async (endPoint: userEndPoints, formData: {}) => {
  try {
    const res = await axios.post(`${BASE_URL}/accounts/${endPoint}/`, formData);
    const data = await res.data;

    return data;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const fetchApiData = async (endPoint: apiEndPoints) => {
  try {
    const res = await axios.get(`${BASE_URL}/${endPoint}/`);
    const apiData = await res.data;

    return apiData;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const postApiData = async (endPoint: apiEndPoints, formData: {}) => {
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
