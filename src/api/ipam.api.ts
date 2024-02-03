import axiosClient from './http-common';

type IpamPayload = {
  userType: string;
  companyId: number;
  mapFlowId: number;
  statep: number;
  pageNumber: number;
  rowsPerPage: number;
};

export const getIpamByUser = async ({
  companyId,
  mapFlowId,
  pageNumber,
  rowsPerPage,
  statep,
  userType,
}: IpamPayload) => {
  const result = await axiosClient.get('/ipam/get-data', {
    params: {
      companyId,
      mapFlowId,
      pageNumber,
      rowsPerPage,
      statep,
      userType,
    },
  });
  return result;
};
