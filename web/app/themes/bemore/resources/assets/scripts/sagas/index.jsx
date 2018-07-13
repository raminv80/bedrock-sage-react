import { all, fork } from 'redux-saga/effects';
import postSaga from './postSaga.jsx';

/**
 * rootSaga
 * combines all sagas into one
 */
export default function* root() {
  yield all([
    fork(postSaga),
    //fork(otherSage),...
  ]);
}
