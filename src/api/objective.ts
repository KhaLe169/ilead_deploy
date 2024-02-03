import axiosClient from './http-common';

export const getListObj = async () => {
  const result = await axiosClient.get('objective/get-data');
  return result;
};
