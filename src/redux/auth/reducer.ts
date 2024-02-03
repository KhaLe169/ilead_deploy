import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';
import { AuthState } from './types';

const initialState: AuthState = {
  token: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        // token: action.payload.token,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
      };
    default:
      return {
        ...state,
      };
  }
};
