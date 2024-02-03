// import axios from "axios";
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  CLOSE_OBJECTIVES_REQUEST,
  GET_COMPANY_REQUEST,
  GET_MAP_REQUEST,
  GET_OBJECTIVES_REQUEST,
  OPEN_OBJECTIVES_REQUEST,
  GET_TOOB_BY_OBJECTIVES_REQUEST,
  GET_DETAIL_OBJECTIVES_REQUEST,
  GET_DETAIL_TOOBS_REQUEST,
  POST_CREATE_TOOB_REQUEST,
  START_OBJECTIVE_REQUEST,
  GET_INFO_OUTPUT_REQUEST,
} from './actionTypes';
import {
  openObjectivesSuccess,
  closeObjectivesSuccess,
  getCompanySuccess,
  getMapSuccess,
  getCompanyFailure,
  getMapFailure,
  getToobByObjectiveSuccess,
  getToobByObjectiveFailure,
} from './action';
import {
  getCompany,
  getDetailObjective,
  getMap,
  getObjectiveByUser,
  getToobByObjective,
  startObjective,
} from 'api/objectives.api';
import { getDetailToobs, postCreateToobs } from 'api/toobs.api';
import { getInfoOutput } from 'api/output.api';

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/

function* openChatBoxSaga(action: any) {
  yield put(openObjectivesSuccess(action.payload));
}
function* closeChatBoxSaga() {
  yield put(closeObjectivesSuccess(''));
}

function* getCompanySaga(): any {
  try {
    const response = yield call(getCompany);
    const newRes = response.map((el: any) => {
      return { ...el, active: false };
    });
    yield put(getCompanySuccess(newRes));
  } catch (e: any) {
    yield put(getCompanyFailure(e));
  }
}

function* getMapSaga(action: any): any {
  const { payload } = action;
  try {
    const response = yield call(getMap);
    yield put(getMapSuccess(response));
  } catch (e: any) {
    yield put(getMapFailure(e));
  }
}

function* getObjectiveSaga(action: any): any {
  const { payload, onSuccess, onFailed } = action;
  try {
    const response = yield call(getObjectiveByUser, payload);

    onSuccess?.(response);
  } catch (e: any) {
    onFailed?.(e);
  }
}

function* getToobByObjectiveSaga(action: any): any {
  const { payload } = action;
  try {
    const response = yield call(getToobByObjective, payload);
    yield put(getToobByObjectiveSuccess(response));
  } catch (e: any) {
    yield put(getToobByObjectiveFailure(e.response.data.Message));
  }
}

function* getDetailObjectiveSaga(action: any): any {
  const { payload, onSuccess, onFailed } = action;
  try {
    const response = yield call(getDetailObjective, payload);
    onSuccess?.(response);
  } catch (e: any) {
    onFailed?.(e);
  }
}
function* startObjectiveSaga(action: any): any {
  const { payload, onSuccess, onFailed } = action;
  try {
    const response = yield call(startObjective, payload);
    onSuccess?.(response);
  } catch (e: any) {
    onFailed?.(e);
  }
}

function* getDetailToobSaga(action: any): any {
  const { payload, onSuccess, onFailed } = action;
  try {
    const response = yield call(getDetailToobs, payload);
    onSuccess?.(response);
  } catch (e: any) {
    onFailed?.(e);
  }
}

function* postCreateToobsSaga(action: any): any {
  const { payload, onSuccess, onFailed } = action;
  try {
    const response = yield call(postCreateToobs, payload);
    onSuccess?.(response);
  } catch (e: any) {
    onFailed?.(e.response.data);
  }
}

function* getInfoOutputSaga(action: any): any {
  const { payload, onSuccess, onFailed } = action;
  try {
    const response = yield call(getInfoOutput, payload);
    onSuccess?.(response);
  } catch (e: any) {
    onFailed?.(e);
  }
}
/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* objectiveSaga() {
  yield all([takeLatest(OPEN_OBJECTIVES_REQUEST, openChatBoxSaga)]);
  yield all([takeLatest(CLOSE_OBJECTIVES_REQUEST, closeChatBoxSaga)]);
  yield all([takeLatest(GET_COMPANY_REQUEST, getCompanySaga)]);
  yield all([takeLatest(GET_OBJECTIVES_REQUEST, getObjectiveSaga)]);
  yield all([takeLatest(GET_MAP_REQUEST, getMapSaga)]);
  yield all([takeLatest(GET_TOOB_BY_OBJECTIVES_REQUEST, getToobByObjectiveSaga)]);
  yield all([takeLatest(GET_DETAIL_OBJECTIVES_REQUEST, getDetailObjectiveSaga)]);
  yield all([takeLatest(GET_DETAIL_TOOBS_REQUEST, getDetailToobSaga)]);
  yield all([takeLatest(POST_CREATE_TOOB_REQUEST, postCreateToobsSaga)]);
  yield all([takeLatest(START_OBJECTIVE_REQUEST, startObjectiveSaga)]);
  yield all([takeLatest(GET_INFO_OUTPUT_REQUEST, getInfoOutputSaga)]);
}

export default objectiveSaga;
