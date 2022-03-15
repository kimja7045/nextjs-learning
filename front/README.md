## nextJs learning

#

next@9, react, react-dom, styled-component 5,
antd 4, prop-types

eslint // .eslintrc  
eslint-plugin-import  
eslint-plugin-react-hooks

xs: 모바일  
sm: 태블릿  
md: 작은 데스크탑

useCallback - 함수를 캐싱

useMemo - 값을 캐싱

#

## antd

gutter - Row props, 컬럼 사이의 간격  
e.g. gutter={8} : 양쪽 컬럼 간 마진 4씩 주어짐

#

## redux-saga

all - 동시 실행

fork - 함수를 실행(비동기함수 호출)

call - 함수를 실행(동기함수 호출)

put - dispatch

takeLatest - 연속적인 호출(e.g. 생성)했을 때 당시에 마지막 하나의 응답만 받음

takeLeading - 연속적인 호출했을 때 당시에 첫 하나의 응답만 받음

throttle - 시간을 설정하면 설정한 시간안에서는 한번만 호출가능하도록 해줌
