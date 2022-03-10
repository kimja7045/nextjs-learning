import {HYDRATE} from 'next-redux-wrapper'

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
        name: 'zerocho',
        age: 27,
    },
    post: {
        mainPosts: [],
    }
}

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

// async action creator

// action creator
export const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data
    }
}

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        // getInitialProps가 요즘에 거의 안쓰이고 getStaticProps, getServersideProps
        // 이 2개를 쓰는걸로 ssr이 완전히 바뀌면서 새로 생김
        case HYDRATE:
            console.log('HYDRATE', HYDRATE)
            return {...state, ...action.payload}
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name: action.data
            }
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data
                }
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null
                }
            }
        default:
            return state;
    }
}

export default rootReducer
