import {
  OPEN_OBJECTIVES_FAILURE,
  OPEN_OBJECTIVES_REQUEST,
  OPEN_OBJECTIVES_SUCCESS,
  CLOSE_OBJECTIVES_REQUEST,
  CLOSE_OBJECTIVES_SUCCESS,
  CLOSE_OBJECTIVES_FAILURE,
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILURE,
  GET_OBJECTIVES_REQUEST,
  GET_MAP_REQUEST,
  GET_MAP_SUCCESS,
  GET_MAP_FAILURE,
  GET_TOOB_BY_OBJECTIVES_REQUEST,
  GET_DETAIL_OBJECTIVES_REQUEST,
  GET_DETAIL_TOOBS_REQUEST,
  POST_CREATE_TOOB_REQUEST,
  START_OBJECTIVE_REQUEST,
  START_OBJECTIVE_SUCCESS,
  START_OBJECTIVE_FAILURE,
  GET_INFO_OUTPUT_REQUEST,
  GET_TOOB_BY_OBJECTIVES_FAILURE,
  GET_TOOB_BY_OBJECTIVES_SUCCESS,
} from './actionTypes';

export const openObjectivesRequest = (payload: any) => ({
  type: OPEN_OBJECTIVES_REQUEST,
  payload,
});

export const openObjectivesSuccess = (payload: any) => ({
  type: OPEN_OBJECTIVES_SUCCESS,
  payload,
});

export const openObjectivesFailure = (payload: any) => ({
  type: OPEN_OBJECTIVES_FAILURE,
  payload,
});

export const closeObjectivesRequest = () => ({
  type: CLOSE_OBJECTIVES_REQUEST,
});

export const closeObjectivesSuccess = (payload: any) => ({
  type: CLOSE_OBJECTIVES_SUCCESS,
  payload,
});

export const closeObjectivesFailure = (payload: any) => ({
  type: CLOSE_OBJECTIVES_FAILURE,
  payload,
});

export const getCompanyRequest = (onSuccess?: any, onFailed?: any) => ({
  type: GET_COMPANY_REQUEST,
  onSuccess,
  onFailed,
});

export const getCompanySuccess = (payload: any) => ({
  type: GET_COMPANY_SUCCESS,
  payload,
});

export const getCompanyFailure = (payload: any) => ({
  type: GET_COMPANY_FAILURE,
  payload,
});

export const getMapRequest = () => ({
  type: GET_MAP_REQUEST,
});

export const getMapSuccess = (payload: string) => ({
  type: GET_MAP_SUCCESS,
  payload,
});

export const getMapFailure = (payload: string) => ({
  type: GET_MAP_FAILURE,
  payload,
});

export const getObjectiveRequest = (payload: any, onSuccess?: any, onFailed?: any) => ({
  type: GET_OBJECTIVES_REQUEST,
  payload,
  onSuccess,
  onFailed,
});

export const getDetailObjectiveRequest = (payload: any, onSuccess?: any, onFailed?: any) => ({
  type: GET_DETAIL_OBJECTIVES_REQUEST,
  payload,
  onSuccess,
  onFailed,
});

export const getToobByObjectiveRequest = (payload: any, onSuccess?: any, onFailed?: any) => ({
  type: GET_TOOB_BY_OBJECTIVES_REQUEST,
  payload,
  onSuccess,
  onFailed,
});

export const getToobByObjectiveSuccess = (payload: any) => ({
  type: GET_TOOB_BY_OBJECTIVES_SUCCESS,
  payload,
});

export const getToobByObjectiveFailure = (payload: any) => ({
  type: GET_TOOB_BY_OBJECTIVES_FAILURE,
  payload,
});

export const getDetailToobRequest = (payload: any, onSuccess?: any, onFailed?: any) => ({
  type: GET_DETAIL_TOOBS_REQUEST,
  payload,
  onSuccess,
  onFailed,
});

export const postCreateToobsRequest = (payload: any, onSuccess?: any, onFailed?: any) => ({
  type: POST_CREATE_TOOB_REQUEST,
  payload,
  onSuccess,
  onFailed,
});

export const startObjectiveRequest = (payload?: any, onSuccess?: any, onFailed?: any): any => ({
  type: START_OBJECTIVE_REQUEST,
  payload,
  onSuccess,
  onFailed,
});

export const startObjectiveSuccess = (payload: any): any => ({
  type: START_OBJECTIVE_SUCCESS,
  payload,
});

export const startObjectiveFailure = (payload: any): any => ({
  type: START_OBJECTIVE_FAILURE,
  payload,
});

export const getInfoOutputRequest = (payload: any, onSuccess?: any, onFailed?: any) => ({
  type: GET_INFO_OUTPUT_REQUEST,
  payload,
  onSuccess,
  onFailed,
});
