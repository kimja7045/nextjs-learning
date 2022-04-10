import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
} from '../actions/post';
import shortId from 'shortid';
import produce from 'immer';

export const initialState = {
  mainPosts: [
    {
      id: '1',
      User: {
        id: 1,
        nickname: '루크',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        { id: shortId.generate(), src: 'https://picsum.photos/800/800' },
        { id: shortId.generate(), src: 'https://picsum.photos/900/700' },
        { id: shortId.generate(), src: 'https://picsum.photos/700/500' },
      ],
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'nero',
          },
          content: '댓글내용11',
        },
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: 'nero',
          },
          content: '댓글내용12',
        },
      ],
    },
  ],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: data.id,
  User: {
    id: 1,
    nickname: '루크',
  },
  content: data.content,
  Images: [
    { src: 'https://picsum.photos/200/300' },
    { src: 'https://picsum.photos/200/300' },
    { src: 'https://picsum.photos/200/300' },
  ],
  Comments: [],
});

const dummyComment = (content) => ({
  id: shortId.generate(),
  User: {
    id: '1',
    nickname: 'nero',
  },
  content,
});

// reducer = 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(단, 불변성은 지키면서)
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data), ...state.mainPosts);
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        // const postIndex = state.mainPosts.findIndex(
        //   (post) => post.id === action.data.postId
        // );
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // // const post = state.mainPosts[postIndex];
        // // const Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // // mainPosts[postIndex] = {...post, Comments};
        //
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
      // return state;
    }
  });
};
export default reducer;
