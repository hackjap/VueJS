# learn-vue-js

[ 내용 정리 ]

- Reactivity
  - vueJS가 추구하는 중심사상이자 핵심기능
  - 데이터에 대한 변화를 뷰에서 감지해서 화면에 반영하는 것
  - 화면 조작에 대한 api,속성을 뷰에서 제공
  - 웹 개발에 대한 동작들을 라이브러리에서 많이 제공하고 관리하는 것이 reactivity에 핵심
- 인스턴스
  - vue로 개발을 할떄 필수로 생성해야 하는 단위
  - 실제로 인스턴스 안에 내용을 추가함으로써 화면을 조작
- 컴포넌트
  - 화면에 영역을 구분해서 개발하는 방식
  - 컴포넌트 개발이 현대 웹 프론트 프레임워크에서 가장 중요한 개념
  - 컴포넌트로 개발했을때의 재 사용성(코드의 반복을 줄임)이 핵심
- 컴포넌트 통신 - 컴포넌트로 개발을 했을때 데이터의 흐름을 제어하기 위한 데이터의 규칙들을 제한을 하면서 - 제한을 했을때의 생기는 이점들은 여러명이 개발을 하더라도 서로 같이 데이터의 흐름을 예측할 수 있음
  -props - 상위에서 하위로 데이터를 내리는 것
  -event emit - 하위에서 상위로 이벤트로 올리는 것
  HTTP 통신 라이브러리(Axios) - axios 공식 사이트 참고
  템플릿 문법
  : 화면을 조작하기 위한 뷰의 문법 - 데이터 바인딩 - reactivity와 비슷한 개념. 데이터의 변화에 따라 화면에 반영, - 뷰 디렉티브 - 화면을 조작하기 위해서 뷰가 추가적으로 제공하는 문법 ( v-on , v-bind)
  Vue CLI - 프로젝트를 생성을 할 떄 명령어를 이용하여 생성하는 방식 - Vue CLI에서 제공하는 싱글파일 컴포넌트 .vue 파일을 사용 - vue 파일이 실제로 내부적으로 어떻게 돌아가는지는 webpack에 공식문서 참고
  싱글 파일 컴포넌트 - 웹 팩의 기능 중 뷰 로더 부분은 싱글 파일 컴포넌트의 내용을 찢어서 브라우저가 이해할 수 있는 형태로 바꿔줌

[ 앞으로 .. ]

- 공식문서를 한 번 전부 정독을 해보자!.
- 한국어로 보는 것보다 원문을 보는 것을 추천(원문의 내용을 훼손할 수 있음, 빠른 업데이트로 번역에 퀄리티 문제가 있음 )
- Vuejs.org > learn > guide : 정독
- Vuejs.org > learn > api : 실제 기술을 적용할 때
- Vuejs.org > learn > Style Guide : 올바른 코드 작성법(규칙), 정독 추천
  Style guide > CookBook : 공식문서이외에 실제로 구현하면서 실제로 부딪히는 실용적인 문제를 다룸

Vue 생태계 관련 내용들을 읽어보면서 구현을 해보자.
Vuex
Vue Router
Vue Cli

## CSS Grammer

[ flex ]
MDN flex : https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
flexbox game : https://flexboxfroggy.com/#ko

flex

- container
- items
- main axis(중심축)
- cross axis

flex-direcition : row;
flex-wrap:nowrap;
flex-flex : column nowrap;

/_ main axis 중심축 _/
justify-content:space-between;'

/_ 반대축 _ /
align-items:center;
basline
align-content :

/_ item property _ /
flex-grow : 1 ( weight와 비슷한 개념 )
flex-shrink : 1 //
flex-basis : auto(기본 값) | 60 % // 아이템의 기본 비율을 조정
align-self : center // 아이템 하나의 위치를 배치
