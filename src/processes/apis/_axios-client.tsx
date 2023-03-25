import axios from 'axios';
import moment from 'moment';
import { JWT_AUTHENTICATION } from '../../constants';
import { useNavigate } from 'react-router-dom';

export const ENV = {
  BACKEND_PREFIX_URL: process.env.REACT_APP_BACKEND_PREFIX_URL,
};

const axiosClient = axios.create({
  baseURL: ENV.BACKEND_PREFIX_URL,
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  const jwt = window.localStorage.getItem(JWT_AUTHENTICATION);
  config.headers = {
    ...config.headers,
    utcoffset: moment().utcOffset(),
    authorization: jwt && !config.headers?.notAddAuthorization ? `Bearer ${jwt}` : '',
  } as any;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.localStorage.removeItem(JWT_AUTHENTICATION);
      useNavigate()('/login');
    } else {
      return Promise.reject(error);
    }
  },
);

export { axiosClient };
