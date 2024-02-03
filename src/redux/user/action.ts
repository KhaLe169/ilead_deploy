import { UserModel } from 'types/user.interface';
import { GET_ACTIVE_USER_FAILURE, GET_ACTIVE_USER_REQUEST, GET_ACTIVE_USER_SUCCESS } from './actionTypes';

export const getActiveUserRequest = (payload: { userType: string }) => ({
  type: GET_ACTIVE_USER_REQUEST,
  payload,
});

export const getActiveUserSuccess = (payload: UserModel) => ({
  type: GET_ACTIVE_USER_SUCCESS,
  payload,
});

export const getActiveUserFailure = (payload: any) => ({
  type: GET_ACTIVE_USER_FAILURE,
  payload,
});
