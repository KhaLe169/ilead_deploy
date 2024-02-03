import { OPEN_CHAT_BOX_REQUEST, OPEN_CHAT_BOX_SUCCESS, OPEN_CHAT_BOX_FAILURE } from "./actionTypes";

export interface ChatBoxState {
  pending: boolean;
  isOpenChatBox: boolean;
  error: string | null;
}

export interface OpenChatBoxSuccessPayload {
  isOpenChatBox: boolean;
}

export interface OpenChatBoxFailurePayload {
  error: string;
}

export interface OpenChatBoxRequest {
  type: typeof OPEN_CHAT_BOX_REQUEST;
}

export type OpenChatBoxSuccess = {
  type: typeof OPEN_CHAT_BOX_SUCCESS;
  payload: OpenChatBoxSuccessPayload;
};

export type OpenChatBoxFailure = {
  type: typeof OPEN_CHAT_BOX_FAILURE;
  payload: OpenChatBoxFailurePayload;
};

export type ChatBoxActions = OpenChatBoxRequest | OpenChatBoxSuccess | OpenChatBoxFailure;
