import axios from 'axios';
const BASE_URL = 'https://1ab8-171-239-141-239.ngrok-free.app/api';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});


