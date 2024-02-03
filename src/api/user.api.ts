import queryString from 'query-string';
import axiosClient from './http-common';

export const getUser = async () => {
  const result = await axiosClient.get('/admin/user/get-data');
  return result;
};

export const getActiveUserApi = async ({ userType }: { userType: string }) => {
  const url = queryString.stringifyUrl({
    url: '/user/get-active',
    query: { userType },
  });
  const result = await axiosClient.post(url);
  return result;
};
