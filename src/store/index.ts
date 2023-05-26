import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {composeWithDevTools} from 'redux-devtools-extension';
import reducers, {RootState} from './redux/index';
import rootSaga from "./saga";

export const configureStore = (preloadedState?: RootState) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(reducers, preloadedState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return {
    store,
  }
}