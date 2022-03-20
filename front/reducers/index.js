import { HYDRATE } from 'next-redux-wrapper';

import user from './user'; // userReducer
import post from './post';
import { combineReducers } from 'redux';
//
// const initialState = {
//     user: {
//
//     },
//     post: {
//     }
// }

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    // 원래 없어도되는데, 서버사이드렌더링을위해서 작성
    switch (action.type) {
      // getInitialProps가 요즘에 거의 안쓰이고 getStaticProps, getServersideProps
      // 이 2개를 쓰는걸로 ssr이 완전히 바뀌면서 새로 생김
      case HYDRATE:
        console.log('HYDRATE', HYDRATE);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
