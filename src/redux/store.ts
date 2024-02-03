import { TypedUseSelectorHook, useSelector as useAppSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import { rootSaga } from './saga';
import { composeWithDevTools } from '@redux-devtools/extension';

// Create the saga middleware
let middlewares: any = [];
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
middlewares = [...middlewares, sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)), // @ts-ignore
);

// Run the saga
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
const { dispatch } = store;
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
export { dispatch, store, useSelector };
