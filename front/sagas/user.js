import {
  fork,
  all,
  call,
  delay,
  put,
  throttle,
  takeLatest,
} from 'redux-saga/effects';

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../actions/user';
import axios from 'axios';

function loginAPI(data, a, b) {
  return axios.post('/api/login', data);
}
function* logIn(action) {
  // const {type, data} = action
  try {
    // const result = yield call(loginAPI, action.data, 'a', 'b');
    yield delay(1000);
    yield put({
      type: LOG_IN_REQUEST,
      data: action.data,
      // data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
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
      type: LOG_OUT_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: error.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/api/logout');
}
function* signUp(data) {
  try {
    // const result = yield call(signUpAPI, data);
    yield delay(1000);
    // throw new Error('')
    yield put({
      type: SIGN_UP_SUCCESS,
      // data: result.data,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
  //   yield takeEvery('LOG_IN_REQUEST', logIn);
  //   while (true) {
  //     yield take('LOG_IN_REQUEST', logIn);
  //   }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
