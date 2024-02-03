import {
  GET_LIST_HUMAN_RESOURCES_REQUEST,
  GET_LIST_HUMAN_RESOURCES_SUCCESS,
  GET_LIST_HUMAN_RESOURCES_FAILURE,
} from './actionTypes';

export interface ChatBoxState {
  pending: boolean;
  isOpenChatBox: boolean;
  error: string | null;
}

export interface GetListHumanResourcePayload {
  name: string;
  id: string;
  note: string | null;
  onum: number;
  code: string;
}

export interface getListHumanResourcesPayload {
  error: string;
}

export interface getListHumanResourcesRequest {
  type: typeof GET_LIST_HUMAN_RESOURCES_REQUEST;
}

export type getListHumanResourcesSuccess = {
  type: typeof GET_LIST_HUMAN_RESOURCES_SUCCESS;
  payload: GetListHumanResourcePayload[];
};

export type getListHumanResourcesFailure = {
  type: typeof GET_LIST_HUMAN_RESOURCES_FAILURE;
  payload: getListHumanResourcesPayload;
};

export type GetListHumanResourcesActions =
  | getListHumanResourcesRequest
  | getListHumanResourcesSuccess
  | getListHumanResourcesFailure;
