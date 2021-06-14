import { axios } from './axios-config.utils';

export type apiEndPoint = 'posts' | 'comments' | 'reactions';

export const getApiList = async (endPoint: apiEndPoint) => {
  try {
    const { data } = await axios.get(`${endPoint}/`);

    return data;
  } catch (err) {
    console.log('~ GET API LIST ERROR', err);
  }
};

export const getApiDetail = async (endPoint: apiEndPoint, id: number) => {
  try {
    const { data } = await axios.get(`${endPoint}/${id}/`);

    return data;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const postApi = async (endPoint: apiEndPoint, formData: {}) => {
  try {
    await axios.post(`${endPoint}/`, formData);
    console.log('~ api.utils formData', formData);
  } catch (err) {
    console.log('~ POST API ERROR', err);
  }
};

interface PutPatchApiProps {
  url: string;
  method: 'put' | 'patch';
  formData: {};
}

export const putPatchApi = async ({
  url,
  method,
  formData,
}: PutPatchApiProps) => {
  try {
    const res = await axios({ url, method, data: formData });

    return res.status;
  } catch (err) {
    console.log('~ PUT / PATCH API ERROR', err);

    return err.response.status;
  }
};

export const deleteApi = async (endPoint: apiEndPoint, id: number) => {
  try {
    const res = await axios.delete(`${endPoint}/${id}/`);

    return res;
  } catch (err) {
    console.log('~ DELETE API ERROR', err);
  }
};
