import React from 'react'
import axios from 'axios';

const BASE_URL = 'https://localhost:7298/api/Car';
type Props = {}

export const postCar = async (props: Props) => {
  
    try {
        const response = await axios.get(`${BASE_URL}/addcar`);
        return response.data;
      } catch (error) {
        console.error('Error fetching car data:', error);
        return [];
      }
    return 
    
  
}

export default postCar