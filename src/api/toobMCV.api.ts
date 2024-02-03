import axiosClient from './http-common';

export const getDetailSA = async (payload: any) => {
  const { id } = payload;
  const result = await axiosClient.get(`/sa/get-all?id=${id}`);
  return result;
};
