import {
  OPEN_CHAT_BOX_REQUEST,
  OPEN_CHAT_BOX_FAILURE,
  OPEN_CHAT_BOX_SUCCESS,
  CLOSE_CHAT_BOX_REQUEST,
  CLOSE_CHAT_BOX_SUCCESS,
  CLOSE_CHAT_BOX_FAILURE,
} from "./actionTypes";

export const openChatBoxRequest = (): any => ({
  type: OPEN_CHAT_BOX_REQUEST,
  //   payload,
  //   onSuccess,
  //   onFailed,
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
  //   payload,
  //   onSuccess,
  //   onFailed,
});

export const closeChatBoxSuccess = (payload: any): any => ({
  type: CLOSE_CHAT_BOX_SUCCESS,
  payload,
});

export const closeChatBoxFailure = (payload: any): any => ({
  type: CLOSE_CHAT_BOX_FAILURE,
  payload,
});
