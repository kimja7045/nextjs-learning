import axios from 'axios';
import {
  all,
  fork,
  call,
  take,
  put,
  delay,
  debounce,
  throttle,
  takeLatest,
  takeEvery,
  takeLeading,
  takeMaybe,
} from 'redux-saga/effects';

function loginAPI(data, a, b) {
  return axios.post('/api/login', data);
}
function* logIn(action) {
  // const {type, data} = action
  try {
    const result = yield call(loginAPI, action.data, 'a', 'b');
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}
function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: error.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data);
}
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: error.response.data,
    });
  }
}

function* watchLogin() {
  yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logOut);
}
function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchAddPost)]);
}

// const gen = function* () {
//   console.log(1);
//   yield;
//   console.log(2);
//   yield;
//   console.log(3);
//   yield;
// };
// const gen2 = function* () {
//   while (true) {
//     yield '무한';
//   }
// };
// const g = gen2();
// g.next();
