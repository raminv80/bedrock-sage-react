import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
//import { persistStore, persistReducer } from 'redux-persist';
import rootSaga from '../sagas/index.jsx';
import * as reducers from "../reducers";

const reducer = combineReducers(reducers);

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
  compose(applyMiddleware(sagaMiddleware, logger), reduxDevTools));

sagaMiddleware.run(rootSaga);

export default store;
