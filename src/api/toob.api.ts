import { PayloadInfoToob, PayloadListToob, ResponseInfoToob, ResponseToobUser } from 'types/toob.interface';
import axiosClient from './http-common';
import { AxiosResponse } from 'axios';

export const listToobUser: (params: PayloadListToob) => Promise<ResponseToobUser> = (params) => {
  return axiosClient.get('sa/get-data', { params });
};

export const infoToob: (params: PayloadInfoToob) => Promise<AxiosResponse<ResponseInfoToob>> = async (params) => {
  return await axiosClient.get('toob/get-all', { params });
};
