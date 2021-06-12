import { axios } from './axios-config.utils';
// import { axiosAPI } from './api-config.utils';

export type apiEndPoint = 'posts' | 'reactions' | 'comments';

export const getApiData = async (endPoint: apiEndPoint) => {
  try {
    const { data } = await axios.get(`${endPoint}/`);

    return data;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const postApiData = async (endPoint: apiEndPoint, formData: {}) => {
  try {
    await axios.post(`api/${endPoint}/`, formData);
  } catch (err) {
    console.log('~ err', err);
  }
};
