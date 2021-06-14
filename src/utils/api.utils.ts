import { axios } from './axios-config.utils';
// import { axiosAPI } from './api-config.utils';

export type apiEndPoint = 'posts' | 'comments' | 'reactions';

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
    await axios.post(`${endPoint}/`, formData);
    console.log('~ api.utils formData', formData);
  } catch (err) {
    console.log('~ err', err);
  }
};

// type PutPatchApiMethod = 'put' | 'patch';

interface PutPatchApiProps {
  endPoint: apiEndPoint;
  method: 'put' | 'patch';
  formData: {};
}

export const putPatchApiData = async ({
  endPoint,
  method,
  formData,
}: PutPatchApiProps) => {
  try {
    const res = await axios({ url: `${endPoint}/`, method, data: formData });

    return res;
  } catch (err) {
    console.log('~ err', err);
  }
};
