import {
  GET_LIST_HUMAN_RESOURCES_FAILURE,
  GET_LIST_HUMAN_RESOURCES_REQUEST,
  GET_LIST_HUMAN_RESOURCES_SUCCESS,
  GET_LIST_USER_ACTIVE_FAILURE,
  GET_LIST_USER_ACTIVE_REQUEST,
  GET_LIST_USER_ACTIVE_SUCCESS,
} from './actionTypes';

export const getListHumanResourcesRequest = (payload?: any, onSuccess?: any, onFailed?: any): any => ({
  type: GET_LIST_HUMAN_RESOURCES_REQUEST,
  payload,
  onSuccess,
  onFailed,
});

export const getListHumanResourcesSuccess = (payload: any): any => ({
  type: GET_LIST_HUMAN_RESOURCES_SUCCESS,
  payload,
});

export const getListHumanResourcesFailure = (payload: any): any => ({
  type: GET_LIST_HUMAN_RESOURCES_FAILURE,
  payload,
});

export const getUserActiveRequest = (payload?: any, onSuccess?: any, onFailed?: any): any => ({
  type: GET_LIST_USER_ACTIVE_REQUEST,
  payload,
  onSuccess,
  onFailed,
});

export const getUserActiveSuccess = (payload: any): any => ({
  type: GET_LIST_USER_ACTIVE_SUCCESS,
  payload,
});

export const getUserActiveFailure = (payload: any): any => ({
  type: GET_LIST_USER_ACTIVE_FAILURE,
  payload,
});
