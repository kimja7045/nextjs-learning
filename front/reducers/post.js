import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from '../actions/post';
import shortId from 'shortid';

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
        { src: 'https://picsum.photos/800/800' },
        { src: 'https://picsum.photos/900/700' },
        { src: 'https://picsum.photos/700/500' },
      ],
      Comments: [
        {
          id: '1',
          User: {
            nickname: 'nero',
          },
          content: '댓글내용11',
        },
        {
          id: '2',
          User: {
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

const dummyPost = (text) => ({
  id: shortId.generate(),
  User: {
    id: '1',
    nickname: '루크',
  },
  content: text,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };

    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        (post) => post.id === action.data.postId
      );
      const post = { ...state.mainPosts[postIndex] };
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      // const post = state.mainPosts[postIndex];
      // const Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;
      // mainPosts[postIndex] = {...post, Comments};

      return {
        ...state,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};
export default reducer;
