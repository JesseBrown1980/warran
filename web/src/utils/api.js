import axios from 'axios';

const baseUrl = 'https://localhost:3000';

export const getStatement = async (id) => {


  try {
    const response = await axios.get(`${baseUrl}/api/users?since=0`);

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getUserDetails = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}user/${id}`);

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getUserRepos = async (username) => {
  try {
    const response = await axios.get(`${baseUrl}/api/users/${username}/repos`);

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getUserNextPage = async (url) => {
  try {
    const response = await axios.get(baseUrl + '/api/users?' + url);

    return response.data;
  } catch (error) {
    return undefined;
  }
};
export const getUserPreviousPage = async (sinceNumber) => {
  try {
    const response = await axios.get(
      baseUrl + '/api/users?since=' + sinceNumber
    );

    return response.data;
  } catch (error) {
    return undefined;
  }
};
