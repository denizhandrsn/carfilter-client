import axios from 'axios';

const BASE_URL = 'https://localhost:7298/api';

export const getCars = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getcars`);
    return response.data;
  } catch (error) {
    console.error('Error fetching car data:', error);
    return [];
  }
};