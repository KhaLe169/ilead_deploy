import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actionTypes';

export const loginSuccess = (payload: { token: string }) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
