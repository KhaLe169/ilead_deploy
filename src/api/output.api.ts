import { OutputModel } from 'types/toob.interface';
import axiosClient from './http-common';

export type outputParams = {
  actId: string;
  pageNumber: number;
  rowsPerPage: number;
};
export const getOutputList = async (params: outputParams): Promise<OutputModel> => {
  const result = await axiosClient.get('/output/get-data', {
    params,
  });
  return result.data;
};

export type outputInfoParams = {
  id: string;
};

export const getInfoOutput = async (params: outputInfoParams): Promise<OutputModel> => {
  const result = await axiosClient.get('/output/get-all', {
    params,
  });

  return result;
};
