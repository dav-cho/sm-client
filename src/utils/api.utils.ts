import { axiosAPI } from './api-config.utils';

export type apiEndPoints = 'user' | 'users' | 'posts' | 'reactions' | 'comments';

export const fetchApiData = async (endPoint: apiEndPoints) => {
  try {
    const { data: apiData } = await axiosAPI.get(`${endPoint}/`);

    return apiData;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const postApiData = async (endPoint: apiEndPoints, formData: {}) => {
  try {
    await axiosAPI.post(`${endPoint}/`, formData);
  } catch (err) {
    console.log('~ err', err);
  }
};
