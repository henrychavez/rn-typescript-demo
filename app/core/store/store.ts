import {
  applyMiddleware,
  createStore,
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(sagas);

export default store;
