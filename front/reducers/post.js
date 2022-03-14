export const initialState = {
  mainPosts: [
    {
      id: 1,
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
          User: {
            nickname: 'nero',
          },
          content: '댓글내용11',
        },
        {
          User: {
            nickname: 'nero',
          },
          content: '댓글내용12',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: '루크',
  },
  Images: [
    { src: 'https://picsum.photos/200/300' },
    { src: 'https://picsum.photos/200/300' },
    { src: 'https://picsum.photos/200/300' },
  ],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};
export default reducer;
