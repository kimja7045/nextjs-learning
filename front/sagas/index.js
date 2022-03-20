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

import userSaga from './user';
import postSaga from './post';

export default function* rootSaga() {
  yield all([
      fork(userSaga),
    fork(postSaga)
  ]);
}

// const gen = function* () {
//   console.log(1);
//   yield;
//   console.log(2);
//   yield;
//   console.log(3);
//   yield;
// };

// const g = gen()
// const gen2 = function* () {
//   while (true) {
//     yield '무한';
//   }
// };
// const g = gen2();
// g.next();
