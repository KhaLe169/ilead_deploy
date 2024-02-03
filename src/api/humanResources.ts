import axiosClient from './http-common';

export const getListHumanResources = async () => {
  const result = await axiosClient.get('/human-res/get-active');
  return result;
};

export const getListUserActive = async () => {
  const result = await axiosClient.post(`/user/get-active?userType=MAKE&withEmail=false`);
  return result;
};
