import { combineReducers } from 'redux';
import chatBoxReducer from './chatBox/reducer';
import toobReducer from './toob/reducer';
import authReducer from './auth/reducer';
import objectiveReducer from './objectives/reducer';
import humanReducer from './humanResources/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
  chatBox: chatBoxReducer,
  toob: toobReducer,
  auth: authReducer,
  objectives: objectiveReducer,
  human: humanReducer,
  user: userReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
