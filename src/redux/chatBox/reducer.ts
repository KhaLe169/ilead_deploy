import { OPEN_CHAT_BOX_SUCCESS, CLOSE_CHAT_BOX_SUCCESS } from './actionTypes';
import { ChatBoxState } from './types';

const initialState: ChatBoxState = {
  pending: false,
  isOpenChatBox: false,
  error: '',
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_CHAT_BOX_SUCCESS:
      return {
        ...state,
        isOpenChatBox: true,
      };
    case CLOSE_CHAT_BOX_SUCCESS:
      return {
        ...state,
        isOpenChatBox: false,
      };
    default:
      return {
        ...state,
      };
  }
};
