import { OPEN_OBJECTIVES_REQUEST, OPEN_OBJECTIVES_SUCCESS, OPEN_OBJECTIVES_FAILURE } from './actionTypes';

export interface ObjectiveState {
  pending: boolean;
  isOpenObjectives: string;
  listCompany: string[];
  listMap: string[];
  listToob: string[];
  error: string | null;
}

export interface OpenChatBoxSuccessPayload {
  isOpenChatBox: boolean;
}

export interface OpenChatBoxFailurePayload {
  error: string;
}

export interface OpenChatBoxRequest {
  type: typeof OPEN_OBJECTIVES_REQUEST;
}

export type OpenChatBoxSuccess = {
  type: typeof OPEN_OBJECTIVES_SUCCESS;
  payload: OpenChatBoxSuccessPayload;
};

export type OpenChatBoxFailure = {
  type: typeof OPEN_OBJECTIVES_FAILURE;
  payload: OpenChatBoxFailurePayload;
};

export type ChatBoxActions = OpenChatBoxRequest | OpenChatBoxSuccess | OpenChatBoxFailure;
