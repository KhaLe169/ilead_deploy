// import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";

import { CLOSE_CHAT_BOX_REQUEST, OPEN_CHAT_BOX_REQUEST } from "./actionTypes";
import { closeChatBoxSuccess, openChatBoxSuccess } from "./action";

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/

function* openChatBoxSaga() {
  yield put(openChatBoxSuccess(true));
}
function* closeChatBoxSaga(action: any): any {
  yield put(closeChatBoxSuccess(false));
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* chatBoxSaga() {
  yield all([takeLatest(OPEN_CHAT_BOX_REQUEST, openChatBoxSaga)]);
  yield all([takeLatest(CLOSE_CHAT_BOX_REQUEST, closeChatBoxSaga)]);
}

export default chatBoxSaga;
