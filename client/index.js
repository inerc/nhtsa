import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/root';
import {routerReducer, routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import rootReducer from './redusers/rootReduser'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({...rootReducer, routing: routerReducer}),
    compose (
        applyMiddleware(thunk, createLogger(), sagaMiddleware, routerMiddleware(browserHistory)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(rootSaga);

render(
    <Provider store = { store }>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById('app')
);