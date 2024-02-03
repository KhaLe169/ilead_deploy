import { Acts, OutputModel, PayloadListToob } from 'types/toob.interface';
import {
  BACK_TABS_MAKE,
  CLOSE_CREATE_SA_SUCCESS,
  CLOSE_MASSAGE_SUBMIT,
  CLOSE_MVC_SCREEN_SUCCESS,
  COUNT_SLIDE,
  GET_DETAIL_SA_REQUEST,
  GET_DETAIL_SA_SUCCES,
  GET_LIST_TOOB_USER_REQUEST,
  GET_OUTPUT_BY_USER_FAILURE,
  GET_OUTPUT_BY_USER_REQUEST,
  GET_OUTPUT_BY_USER_SUCCESS,
  LIST_TOOB,
  OPEN_CREATE_SA_REQUEST,
  OPEN_CREATE_SA_SUCCESS,
  OPEN_MVC_SCREEN_REQUEST,
  OPEN_MVC_SCREEN_SUCCESS,
  SHOW_MASSAGE_SUBMIT_SUCCESS,
  SWITCH_TABS,
} from './actionTypes';

export const openCreateSaRequest = () => ({
  type: OPEN_CREATE_SA_REQUEST,
});

export const openCreateSaSuccess = () => ({
  type: OPEN_CREATE_SA_SUCCESS,
});

export const closeCreateSaSuccess = () => ({
  type: CLOSE_CREATE_SA_SUCCESS,
});

export const openShowMessageSubmit = () => ({
  type: SHOW_MASSAGE_SUBMIT_SUCCESS,
});
export const closeMessageSubmit = () => ({
  type: CLOSE_MASSAGE_SUBMIT,
});
export const showCountSlide = (payload: any) => ({
  type: COUNT_SLIDE,
  payload,
});
export const getListToobUser = (payload: PayloadListToob) => ({
  type: GET_LIST_TOOB_USER_REQUEST,
  payload,
});

export const listToob = (
  payload: Acts[],
): {
  type: string;
  payload: Acts[];
} => ({
  type: LIST_TOOB,
  payload,
});

export const swichTabs = () => ({
  type: SWITCH_TABS,
});
export const backTabsMake = () => ({
  type: BACK_TABS_MAKE,
});
export const getDetailSASuccess = (payload: any) => ({
  type: GET_DETAIL_SA_SUCCES,
  payload,
});
export const getDetailSAAction = (payload: any, onSuccess?: any, onFailed?: any) => ({
  type: GET_DETAIL_SA_REQUEST,
  payload,
  onFailed,
});

export const getOutputsByUserRequest = (onSuccess?: any, onFailed?: any) => ({
  type: GET_OUTPUT_BY_USER_REQUEST,
  onSuccess,
  onFailed,
});

export const getOutputsByUserSuccess = (payload: OutputModel) => ({
  type: GET_OUTPUT_BY_USER_SUCCESS,
  payload,
});

export const getOutputsByUserFailure = (payload: any) => ({
  type: GET_OUTPUT_BY_USER_FAILURE,
  payload,
});

export const openMVCScreenSuccess = () => ({
  type: OPEN_MVC_SCREEN_SUCCESS,
});

export const openMVCScreenRequest = () => ({
  type: OPEN_MVC_SCREEN_REQUEST,
});

export const closeMVCScreenSuccess = () => ({
  type: CLOSE_MVC_SCREEN_SUCCESS,
});
