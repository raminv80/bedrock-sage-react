import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from '../sagas/index.jsx';
import * as reducers from "../reducers";

const reducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer)


const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer,
  compose(applyMiddleware(sagaMiddleware, logger), reduxDevTools));

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store)

export { store, persistor };
