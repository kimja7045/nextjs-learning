import { fork, all, call } from 'redux-saga/effects';

function loginAPI(data, a, b) {
  return axios.post('/api/login', data);
}
function* logIn(action) {
  // const {type, data} = action
  try {
    // const result = yield call(loginAPI, action.data, 'a', 'b');
    yield delay(1000);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
      // data: result.data,
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

function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
  //   yield takeEvery('LOG_IN_REQUEST', logIn);
  //   while (true) {
  //     yield take('LOG_IN_REQUEST', logIn);
  //   }
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
