import {
  OPEN_CHAT_BOX_REQUEST,
  OPEN_CHAT_BOX_FAILURE,
  OPEN_CHAT_BOX_SUCCESS,
  GET_LIST_OBJ_REQUEST,
  GET_LIST_OBJ_SUCCESS,
  GET_LIST_OBJ_FAILURE,
  CLOSE_CHAT_BOX_REQUEST,
  CLOSE_CHAT_BOX_SUCCESS,
} from './actionTypes';

export const openChatBoxRequest = (): any => ({
  type: OPEN_CHAT_BOX_REQUEST,
  // payload,
  // onSuccess,
  // onFailed,
});

export const openChatBoxSuccess = (payload: any): any => ({
  type: OPEN_CHAT_BOX_SUCCESS,
  payload,
});

export const openChatBoxFailure = (payload: any): any => ({
  type: OPEN_CHAT_BOX_FAILURE,
  payload,
});
export const closeChatBoxRequest = (): any => ({
  type: CLOSE_CHAT_BOX_REQUEST,
  // payload,
  // onSuccess,
  // onFailed,
});

export const closeChatBoxSuccess = (payload: any): any => ({
  type: CLOSE_CHAT_BOX_SUCCESS,
  payload,
});

export const closeChatBoxFailure = (payload: any): any => ({
  type: OPEN_CHAT_BOX_FAILURE,
  payload,
});

export const getListObjRequest = (payload?: any, onSuccess?: any, onFailed?: any): any => ({
  type: GET_LIST_OBJ_REQUEST,
  payload,
  onSuccess,
  onFailed,
});

export const getListObjSuccess = (payload: any): any => ({
  type: GET_LIST_OBJ_SUCCESS,
  payload,
});

export const getListObjFailure = (payload: any): any => ({
  type: GET_LIST_OBJ_FAILURE,
  payload,
});
