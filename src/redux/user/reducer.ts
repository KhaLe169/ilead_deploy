import { GET_ACTIVE_USER_SUCCESS } from './actionTypes';
import { UserState } from './types';

const initialState: UserState = {
  userActive: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ACTIVE_USER_SUCCESS:
      return {
        ...state,
        userActive: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
