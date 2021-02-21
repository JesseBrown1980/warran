import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const getUserStatement = async (id, skip, limit, order_by) => {
  try {
    const response = await axios.get(
      `${baseUrl}/wallet/${id}?skip=${skip}&limit=${limit}&order_by=${order_by}`
    );

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getUserDetails = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/user/${id}`);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const handleTransaction = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/wallet`, body);
    return response.data;
  } catch (error) {
    return error;
  }
};
