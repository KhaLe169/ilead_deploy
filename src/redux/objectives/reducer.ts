import {
  OPEN_OBJECTIVES_SUCCESS,
  CLOSE_OBJECTIVES_SUCCESS,
  GET_COMPANY_REQUEST,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILURE,
  GET_MAP_SUCCESS,
  GET_MAP_FAILURE,
  GET_TOOB_BY_OBJECTIVES_FAILURE,
  GET_TOOB_BY_OBJECTIVES_SUCCESS,
} from './actionTypes';
import { ObjectiveState } from './types';

const initialState: ObjectiveState = {
  pending: false,
  isOpenObjectives: '',
  listCompany: [],
  listMap: [],
  listToob: [],
  error: '',
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_OBJECTIVES_SUCCESS:
      return {
        ...state,
        isOpenObjectives: action.payload,
      };
    case CLOSE_OBJECTIVES_SUCCESS:
      return {
        ...state,
        isOpenObjectives: '',
      };

    case GET_COMPANY_SUCCESS:
      return {
        ...state,
        listCompany: action.payload,
      };
    case GET_COMPANY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_MAP_SUCCESS:
      return {
        ...state,
        listMap: action.payload,
      };
    case GET_MAP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_TOOB_BY_OBJECTIVES_SUCCESS:
      return {
        ...state,
        listToob: action.payload,
      };
    case GET_TOOB_BY_OBJECTIVES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
