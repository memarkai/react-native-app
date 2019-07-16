import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from './ducks';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(reducers, applyMiddleware(
  sagaMiddleware,
  loggerMiddleware,
));

sagaMiddleware.run(rootSaga);

export default store;
