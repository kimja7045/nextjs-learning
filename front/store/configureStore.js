import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';

// action이 dispatch되는것들을 logging하는 미들웨어, 삼단 고차함수
const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log(action);
    // if (typeof action === 'function'){
    // return action(dispatch, getState)
    // return action(dispatch, getState, extraArgument)
    // }

    return next(action);
  };

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [createSagaMiddleware, loggerMiddleware];
  //   const middlewares = [thunkMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer); // state와 reducer를 포함하는 게 store
//   store.sagaTask = saga
  // store.dispatch({
  //     type: 'CHANGE_NICKNAME',
  //     data: 'boogicho'
  // })
  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
