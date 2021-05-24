<div style="color:#42b983;" >

# 목차

</div>

Chapter 1 : Vue.js로 구현하는 TodoApp

1. vue cli 이용한 프로젝트 구성 방법
2. 컴포넌트 기반 설계 방법
3. 컴포넌트 구조화 및 컴포넌트 통신 방법

Chapter 2 : Vue.js를 위한 ES6

4. ES6를 이용한 효율적이고 간결한 뷰 코딩 방법

Chapter 3 : 복잡한 애플리케이션 구현을 위한 Vuex

5. Vuex를 이용한 상태 관리의 이해 및 적용 방법

   <br/>
   <br/>

<div style="color:#42b983;" >

# 요약 정리

</div>

## Vue.js로 구현하는 TodoApp

    [리펙토링]
    - 컴포넌트의 html 루트 요소는 한 개이어야 함
    - app.vue 에서 데이터를 관리하고 나머지 컴포넌트에서는 최소한의 기능만 제공 ( 중앙집권화)
    - 데이터를 효율적으로 사용하고 데이터 동기화에 적절함
    [사용자 경험 개선]
    - modal components 등록
        - slot : 특정 컴포넌트의 일부 UI들을 재사용 할 수 있는 기능
        - transition : vue 프레임워크의 수많은 트렌지션 클래스 제공 ( transition group, list)

<br/>

## Vue.js를 위한 ES6 4. ES6를 이용한 효율적이고 간결한 뷰 코딩 방법

### ES6

    - ECMAScript 2015와 동일한 용어
    - ES5에 비해 문법이 간결해져서 익숙해지면 코딩을 훨씬 편하게 할 수 있음
    - 최신 Front-End Framework인 React, Angular, Vue에서 권고하는 언어 형식

### Babel

    - ES6의 문법을 각 브라우저 호환 가능한 ES5로 변환하는 컴파일러 ( 구 브라우저에서 지원 x )
    - https://babeljs.io/docs/en/ : 바벨 공식사이트 참고

### const & let - 새로운 변수 선언 방식

    - 블록 단위 { } 로 변수의 범위가 제한되었음
    - const : 한번 선언한 값에 대해서 변경 X (상수 개념)
    - let : 한번 선언한 값에 대해서 다시 선언할 수 없음

### Arrow Function

### Enhanced Object Literals

### Modules

<br/>

<div style="color:#42b983;" >

# 명령어

</div>
    - cd vue-todo
    - npm run serve
    - vue create vue-todo : vue cli 프로젝트 생성
    - JSON.stringfy(obj); : JSON객체 -> 문자열
    - JSON.parse : 문자열 -> JSON 객체

    - scoped : 해당 컴포넌트에만 스타일 적용

    - v-bind:내려보낼 프롭스 속성 이름 : v-bind:propsdata="todoItems"
    - v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 ="현재 컴포넌트의 메서드 명 " :

<br/>
<div style="color:#42b983;" >

# 참고 사이트

</div>

- https://fontawesome.com/icons/check?style=solid 아이콘 라이브러리 제공
- https://babeljs.io/docs/en/ : js es6 document
- vuejs.org : vueJS document
