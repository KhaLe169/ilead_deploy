// import axios from "axios";
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CLOSE_CHAT_BOX_REQUEST, GET_LIST_OBJ_REQUEST, OPEN_CHAT_BOX_REQUEST } from './actionTypes';
import { closeChatBoxSuccess, openChatBoxSuccess } from './action';
import { getObjectiveByUser } from 'api/objectives.api';

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/

function* openChatBoxSaga() {
  yield put(openChatBoxSuccess(true));
}
function* closeChatBoxSaga(action: any): any {
  yield put(closeChatBoxSuccess(false));
}

function* getListObjSaga(action: any): any {
  const { payload, onSuccess, onFailed } = action;
  console.log('payload', payload);
  try {
    const response = yield call(getObjectiveByUser, payload);
    console.log('response getListObjSaga', response);
    onSuccess?.(response);
  } catch (e: any) {
    onFailed?.(e);
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* chatBoxSaga() {
  yield all([takeLatest(OPEN_CHAT_BOX_REQUEST, openChatBoxSaga)]);
  yield all([takeLatest(CLOSE_CHAT_BOX_REQUEST, closeChatBoxSaga)]);
  yield all([takeLatest(GET_LIST_OBJ_REQUEST, getListObjSaga)]);
}

export default chatBoxSaga;
