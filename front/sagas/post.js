import { call, fork, throttle, all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
} from '../actions/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../actions/user';
import shortId from 'shortid';
import { generateDummyPost } from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}
function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);

    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: { id, content: action.data },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (error) {
    yield put({
      type: ADD_POST_FAILURE,
      error: error.response.data,
    });
  }
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
  // yield throttle('ADD_POST_REQUEST', addPost, 10000);
}

function removePostAPI(data) {
  return axios.delete('/api/post', data);
}
function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);

    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (error) {
    console.log('removePost err', error);
    yield put({
      type: REMOVE_POST_FAILURE,
      error: error.response.data,
    });
  }
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
  // yield throttle('ADD_POST_REQUEST', addPost, 10000);
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}
function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
      // data: result.data,
    });
  } catch (error) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: error.response.data,
    });
  }
}
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
  // yield throttle(2000, 'ADD_POST_REQUEST', addPost);
}

function loadPostsAPI(data) {
  return axios.get('/api/posts', data);
}
function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10),
      // data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: error.response.data,
    });
  }
}
function* watchLoadPosts() {
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
  // yield throttle(2000, 'ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
    fork(watchLoadPosts),
  ]);
}
