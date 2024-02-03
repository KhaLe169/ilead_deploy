import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes';
import { loginSuccess } from './action';

function* watchLogin({
  payload,
}: {
  payload: {
    token: string;
  };
}) {
  console.log('watchLogin', payload);
  yield put(loginSuccess(payload));
}

function* authSaga() {
  yield all([[takeLatest(LOGIN_REQUEST, watchLogin)]]);
}

export default authSaga;
