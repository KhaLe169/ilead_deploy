import { CONFIG } from 'constants/Config';
import cookieUtils from 'utils/cookie';
import axios, { AxiosResponse } from 'axios';

export const axiosClient = axios.create({
  baseURL: CONFIG.API_URL,
});

axiosClient.interceptors.request.use(
  async (config) => {
    // Handle token here ...
    const token = cookieUtils.get('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.log('error1', error);
    // Handle errors
    throw error;
  },
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    return Promise.reject(new Error('Lỗi khi kết nối tới server! '));
  },
  (error) => {
    if (error.response.status === 401) {
      cookieUtils.remove('token');
      window.location.href = `${CONFIG.API_LOGOUT}`;
    }
    // if (error.response.status === 500) {
    //   Message.error('Lỗi server');
    // }
    // if (error.response.status >= 400 && error.response.status < 500) {
    //   message.error(error.response.data.message);
    // }
    return Promise.reject(error);
  },
);

export default axiosClient;
