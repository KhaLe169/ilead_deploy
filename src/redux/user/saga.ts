import { getActiveUserApi } from 'api/user.api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET_ACTIVE_USER_REQUEST } from './actionTypes';
import { getActiveUserFailure, getActiveUserSuccess } from './action';

function* getActiveUserRequest(action: { type: string; payload: { userType: string } }) {
  try {
    const response = yield call(getActiveUserApi, action.payload);
    yield put(getActiveUserSuccess(response));
  } catch (e: any) {
    yield put(getActiveUserFailure(e));
  }
}

function* userSaga() {
  yield all([takeLatest(GET_ACTIVE_USER_REQUEST, getActiveUserRequest)]);
}

export default userSaga;
