import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  ADD_POST_TO_ME,
  REMOVE_POST_OF_ME,
} from '../actions/user';

export const initialState = {
  loginLoading: false, // 로그인 시도중
  // loginDone: false,
  isLoggedIn: false,
  loginError: null,

  logoutLoading: false, // 로그아웃 시도중
  logoutDone: false,
  logoutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: false,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: false,
  me: null,
  signUpData: {},
  loginData: {},
};

// redux-thunk
// export const loginAction = (data) => {
//   return (dispatch, getState) => {
//     const state = getState();
//     dispatch(loginRequestAction());
//     fetch()
//       .then((res) => {
//         dispatch(loginSuccessAction(res.data));
//       })
//       .catch((err) => {
//         dispatch(loginFailureAction(err));
//       });
//   };
// };

// 동적 action creator, 액션을 그때그때 생성해주는 creator.
export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

const dummyUser = (data) => ({
  ...data,
  nickname: 'luke',
  id: 1,
  Posts: [],
  Followings: [
    { nickname: '부기초' },
    { nickname: 'Chanho Lee' },
    { nickname: 'neue zeal' },
  ],
  Followers: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginError: null,
        isLoggedIn: false,
        // isLoggedIn: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        isLoggedIn: true,
        me: dummyUser(action.data),
        // me: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logoutLoading: true,
        logoutDone: false,
        logoutError: null,
        // me: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logoutLoading: false,
        logoutDone: true,
        me: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logoutLoading: false,
        logoutError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
        // me: action.data,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    case CHANGE_NICKNAME_REQUEST:
      return {
        ...state,
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null,
      };
    case CHANGE_NICKNAME_SUCCESS:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameDone: true,
        // me: action.data,
      };
    case CHANGE_NICKNAME_FAILURE:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameError: action.error,
      };
    case ADD_POST_TO_ME:
      return {
        ...state,
        me: {
          ...state.me,
          Posts: [{ id: action.data }, ...state.me.Posts],
        },
      };
    case REMOVE_POST_OF_ME:
      return {
        ...state,
        me: {
          ...state.me,
          Posts: state.me.Posts.filter((v) => v.id !== action.data),
        },
      };
    default:
      return state;
  }
};
export default reducer;
