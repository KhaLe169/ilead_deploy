import { GET_LIST_USER_ACTIVE_FAILURE, GET_LIST_USER_ACTIVE_SUCCESS } from './actionTypes';
import { ChatBoxState } from './types';

const initialState: any = {
  pending: false,
  listUserActive: [],
  error: '',
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LIST_USER_ACTIVE_SUCCESS:
      return {
        ...state,
        listUserActive: action.payload,
      };
    case GET_LIST_USER_ACTIVE_FAILURE:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
