import axiosClient from './http-common';

export const postInfoUser = async () => {
  const result = await axiosClient.post('/login/login2');
  return result;
};

export const getCompany = async () => {
  const result = await axiosClient.get('company/get-active');
  return result;
};

export const getMap = async () => {
  const result = await axiosClient.get(`map-flow/get-active`);
  return result;
};

export const getObjectiveByUser = async (payload: any) => {
  const { userType, companyId, mapFlowId, statep, pageNumber, rowsPerPage } = payload;
  const result = await axiosClient.get(
    `/objective/get-data?userType=${userType}&companyId=${companyId}&mapFlowId=${mapFlowId}&statep=${statep}&pageNumber=${pageNumber}&rowsPerPage=${rowsPerPage}`,
  );
  return result;
};

export const getToobByObjective = async (payload: any) => {
  const { userType, actId, statep, pageNumber, rowsPerPage } = payload;
  const result = await axiosClient.get(
    `/toob/get-data?userType=${userType}&actId=${actId}&statep=${statep}&pageNumber=${pageNumber}&rowsPerPage=${rowsPerPage}`,
  );
  return result;
};

export const getDetailObjective = async (payload: any) => {
  const { id } = payload;
  const result = await axiosClient.get(`/objective/get-all?id=${id}`);
  return result;
};

export const startObjective = async (payload: any) => {
  const { id } = payload;
  const result = await axiosClient.post(`act/accountable/receive?id=${id}`);
  return result;
};
