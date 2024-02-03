import {
  BACK_TABS_MAKE,
  CLOSE_CREATE_SA_SUCCESS,
  CLOSE_MASSAGE_SUBMIT,
  COUNT_SLIDE,
  GET_OUTPUT_BY_USER_FAILURE,
  GET_OUTPUT_BY_USER_SUCCESS,
  LIST_TOOB,
  GET_DETAIL_SA_SUCCES,
  OPEN_CREATE_SA_SUCCESS,
  SHOW_MASSAGE_SUBMIT_SUCCESS,
  STATUS_STATE,
  SWITCH_TABS,
  OPEN_MVC_SCREEN_SUCCESS,
  CLOSE_MVC_SCREEN_SUCCESS,
} from './actionTypes';
import { ToobState } from './types';

const initialState: ToobState = {
  isOpenCreateSa: false,
  isOpenShowMessageSubmit: false,
  isCountSlide: 1,
  outputByUser: null,
  dataToobUser: {
    listToob: [],
  },
  isSwitchTabs: false,
  isBackTabMake: false,
  dataSA: null,
  visibleMCVScreen: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_CREATE_SA_SUCCESS:
      return {
        ...state,
        isOpenCreateSa: true,
      };
    case CLOSE_CREATE_SA_SUCCESS:
      return {
        ...state,
        isOpenCreateSa: false,
      };
    case SHOW_MASSAGE_SUBMIT_SUCCESS:
      return {
        ...state,
        isOpenShowMessageSubmit: true,
      };
    case CLOSE_MASSAGE_SUBMIT:
      return {
        ...state,
        isOpenShowMessageSubmit: false,
      };
    case COUNT_SLIDE:
      return {
        ...state,
        isCountSlide: action.payload,
      };
    case GET_OUTPUT_BY_USER_SUCCESS:
      return {
        ...state,
        outputByUser: action.payload,
      };
    case GET_OUTPUT_BY_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LIST_TOOB: {
      const { payload } = action;
      return {
        ...state,
        dataToobUser: {
          ...state.dataToobUser,
          listToob: payload,
        },
      };
    }
    case SWITCH_TABS:
      return {
        ...state,
        isSwitchTabs: true,
      };
    case BACK_TABS_MAKE:
      return {
        ...state,
        isBackTabMake: true,
      };
    case STATUS_STATE:
      return {
        ...state,
        statusState: action.payload,
      };
    case GET_DETAIL_SA_SUCCES:
      return {
        ...state,
        dataSA: action.payload,
      };
    case OPEN_MVC_SCREEN_SUCCESS:
      return {
        ...state,
        visibleMCVScreen: true,
      };
    case CLOSE_MVC_SCREEN_SUCCESS:
      return {
        ...state,
        visibleMCVScreen: false,
      };
    default:
      return {
        ...state,
      };
  }
};
