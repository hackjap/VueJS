# 목차

- Vue.js로 구현하는 TodoApp
- Vue.js를 위한 ES6
- 복잡한 애플리케이션 구현을 위한 Vuex

## 요약 정리

컴포넌트의 html 루트 요소는 한 개이어야 함

[ 리펙토링]

- app.vue 에서 데이터를 관리하고 나머지 컴포넌트에서는 최소한의 기능만 제공 ( 중앙집권화)
- 데이터를 효율적으로 사용하고 데이터 동기화에 적절함

### 명령어

cd vue-todo
npm run serve
vue create vue-todo : vue cli 프로젝트 생성
JSON.stringfy(obj); : JSON객체 -> 문자열
JSON.parse : 문자열 -> JSON 객체

scoped : 해당 컴포넌트에만 스타일 적용

v-bind:내려보낼 프롭스 속성 이름 : v-bind:propsdata="todoItems"
v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 ="현재 컴포넌트의 메서드 명 " :

### 사이트

https://fontawesome.com/icons/check?style=solid 아이콘
