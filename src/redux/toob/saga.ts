// import axios from "axios";
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getOutputList, outputParams } from 'api/output.api';
import { listToobUser } from 'api/toob.api';
import { getDetailSA } from 'api/toobMCV.api';
import { PayloadListToobUserRequest, ResponseToobUser } from 'types/toob.interface';
import {
  backTabsMake,
  closeCreateSaSuccess,
  closeMVCScreenSuccess,
  closeMessageSubmit,
  getDetailSASuccess,
  getOutputsByUserFailure,
  getOutputsByUserSuccess,
  listToob,
  openCreateSaSuccess,
  openMVCScreenSuccess,
  openShowMessageSubmit,
  showCountSlide,
  swichTabs,
} from './action';

import {
  BACK_TABS_MAKE_REQUEST,
  CLOSE_CREATE_SA_REQUEST,
  CLOSE_MASSAGE_SUBMIT_REQUEST,
  CLOSE_MVC_SCREEN_REQUEST,
  COUNT_SLIDE_REQUEST,
  GET_DETAIL_SA_REQUEST,
  GET_LIST_TOOB_USER_REQUEST,
  GET_OUTPUT_BY_USER_REQUEST,
  OPEN_CREATE_SA_REQUEST,
  OPEN_MVC_SCREEN_REQUEST,
  SHOW_MASSAGE_SUBMIT_REQUEST,
  SWITCH_TABS_REQUEST,
} from './actionTypes';

function* openCreateSaSaga() {
  yield put(openCreateSaSuccess());
}
function* openShowMassageSuccess() {
  yield put(openShowMessageSubmit());
}
function* closeMassageSuccess() {
  yield put(closeMessageSubmit());
}
function* closeCreateSaSaga() {
  yield put(closeCreateSaSuccess());
}

function* swichTabsSubmit() {
  yield put(swichTabs());
}
function* showCount({ type, payload }: { type: string; payload: number }) {
  yield put(showCountSlide(payload));
}

function* backTabsMakeSubmit() {
  yield put(backTabsMake());
}

function* getDetailSARequest(action: any): any {
  const { payload, onFailed } = action;
  try {
    const response = yield call(getDetailSA, payload);
    yield put(getDetailSASuccess(response));
  } catch (e: any) {
    onFailed?.(e);
  }
}

function* getOutputListRequest({ payload }: { payload: outputParams }): any {
  try {
    const response = yield call(getOutputList, payload);
    yield put(getOutputsByUserSuccess(response));
  } catch (e: any) {
    yield put(getOutputsByUserFailure(e));
  }
}

function* getListToobUserRequest({ payload }: PayloadListToobUserRequest): Generator<any, void, ResponseToobUser> {
  try {
    const response = yield call(listToobUser, payload);
    yield put(listToob(response.acts));
  } catch (error) {
    console.log(error);
  }
}

function* openMVCScreen() {
  yield put(openMVCScreenSuccess());
}

function* closeMVCScreen() {
  yield put(closeMVCScreenSuccess());
}

function* toobSaga() {
  yield all([takeLatest(OPEN_CREATE_SA_REQUEST, openCreateSaSaga)]);
  yield all([takeLatest(CLOSE_CREATE_SA_REQUEST, closeCreateSaSaga)]);
  yield all([takeLatest(SHOW_MASSAGE_SUBMIT_REQUEST, openShowMassageSuccess)]);
  yield all([takeLatest(COUNT_SLIDE_REQUEST, showCount)]);

  yield all([takeLatest(CLOSE_MASSAGE_SUBMIT_REQUEST, closeMassageSuccess)]);
  yield all([takeLatest(GET_LIST_TOOB_USER_REQUEST, getListToobUserRequest)]);

  yield all([takeLatest(GET_OUTPUT_BY_USER_REQUEST, getOutputListRequest)]);
  yield all([takeLatest(SWITCH_TABS_REQUEST, swichTabsSubmit)]);
  yield all([takeLatest(BACK_TABS_MAKE_REQUEST, backTabsMakeSubmit)]);
  yield all([takeLatest(GET_DETAIL_SA_REQUEST, getDetailSARequest)]);
  yield all([takeLatest(OPEN_MVC_SCREEN_REQUEST, openMVCScreen)]);
  yield all([takeLatest(CLOSE_MVC_SCREEN_REQUEST, closeMVCScreen)]);
}

export default toobSaga;
