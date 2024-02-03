import axiosClient from './http-common';

export const getDetailToobs = async (payload: any) => {
  const { id } = payload;
  const result = await axiosClient.get(`/toob/get-all?id=${id}`);
  return result;
};

export const postCreateToobs = async (payload: any) => {
  const result = await axiosClient.post(`/toob/update`, payload);
  return result;
};
