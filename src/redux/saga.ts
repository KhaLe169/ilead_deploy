import { all, fork } from 'redux-saga/effects';
import chatBoxSaga from './chatBox/saga';
import objectivesSaga from './objectives/saga';
import objectiveSaga from './objective/saga';
import toobSaga from './toob/saga';
import authSaga from './auth/saga';
import humanResourcesSaga from './humanResources/saga';
import userSaga from './user/saga';

export function* rootSaga() {
  yield all([
    fork(chatBoxSaga),
    fork(toobSaga),
    fork(objectivesSaga),
    fork(objectiveSaga),
    authSaga,
    fork(humanResourcesSaga),
    fork(userSaga)
  ]);
}
