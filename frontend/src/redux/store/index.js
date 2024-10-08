import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import sagas from 'src/redux/sagas';
import redusers from 'src/redux/redusers';
import truetype from 'src/utils/truetype';
import mode from 'src/utils/mode';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  mode.isDevelopment() && createLogger({collapsed: true}),
  sagaMiddleware
].filter(Boolean);


export const store = createStore(
    combineReducers(redusers),
    {},
    mode({
      development: composeWithDevTools(applyMiddleware(...middlewares)),
      production: applyMiddleware(...middlewares),
    }),
);

sagaMiddleware.run(sagas);
