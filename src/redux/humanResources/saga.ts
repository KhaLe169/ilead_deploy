// import axios from "axios";
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { GET_LIST_HUMAN_RESOURCES_REQUEST, GET_LIST_USER_ACTIVE_REQUEST } from './actionTypes';
import { getListHumanResources, getListUserActive } from 'api/humanResources';
import { getUserActiveFailure, getUserActiveSuccess } from './action';

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/

function* getListHumanResourcesSaga(action: any): any {
  const { onSuccess, onFailed } = action;

  try {
    const response = yield call(getListHumanResources);
    onSuccess?.(response);
  } catch (e: any) {
    onFailed?.(e);
  }
}

function* getListUserActiveSaga(action: any): any {
  const { payload } = action;
  try {
    const response = yield call(getListUserActive);
    yield put(getUserActiveSuccess(response));
  } catch (e: any) {
    yield put(getUserActiveFailure(e));
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* humanResourcesSaga() {
  yield all([takeLatest(GET_LIST_HUMAN_RESOURCES_REQUEST, getListHumanResourcesSaga)]);
  yield all([takeLatest(GET_LIST_USER_ACTIVE_REQUEST, getListUserActiveSaga)]);
}

export default humanResourcesSaga;
