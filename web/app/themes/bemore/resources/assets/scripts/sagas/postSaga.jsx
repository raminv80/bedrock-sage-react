import { takeLatest, call, put } from "redux-saga/effects";
import ActionTypes from '../constants/action-types';
import Action from '../actions';

import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(ActionTypes.POST_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchPost() {
  return axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts/1",
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchPost);
    const post = response.data;

    // dispatch a success action to the store with the new dog
    yield put(Action.post.success(post));

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(Action.post.error(error));
  }
}
