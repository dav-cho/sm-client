import axios from 'axios';

const BASE_URL = process.env.REACT_APP_LOCAL_URL;

export const fetchData = async (endPoint: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/${endPoint}`);
    const data = await res.data;

    return data;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const fetchPosts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/posts`);
    const data = await res.data;

    return data;
  } catch (err) {
    console.log('~ err', err);
  }
};

export const postNewPost = async (data: any) => {
  try {
    await axios.post(`${BASE_URL}/posts`, data);
  } catch (err) {
    console.log('~ err', err);
  }
};
