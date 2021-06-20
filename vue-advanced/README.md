### ESLint 끄는 방법

    /* eslint-disable */ : 컴포넌트 마다 라인을 추가해주어야 함

    // vue.config.js    : 전체에서 eslint를 끔
    module.exports = {
    lintOnSave : false

### 라우터 구현

    라우터 설치
        npm i vue-router --save

    axios 설치
        npm i axios -- save

### 라이프사이클 훅

    데이터를 넣을 떄는 주로
    created()
    beforeMount ()

### this

다른 언어에서는 지역을 scoped로 잡는 방면
js는 전역을 scoped로 한다.

### 비동기 처리

    callback -> callback hell -> promise
                ( 코드 복잡 )

    promise(resoleve, reject)

    then 은 promise 객체만 받을 수 있음

### Vuex 설치

    npm i vuex


### 동적 라우트 매칭 실습
1. ItemView 생성
2. 라우터에 ItemView로 갈 수 있는 라우터 정보 등록
{
    path : ' ',
    component : ,

}

3. 해당 페이지 컴포넌트로 이동했을 때 받아온 params(id)를 이용해서 페이지에 데이터를 표시
created(){
    this.$store.dispatch('');
}


### 데이터 처리 흐름 
1. computed ( vuex )
2. props 

### export defualt 차이

        // bus.js
        export const bus  = new Vue();

        //App.vue
        import {bus} from './bus.js';

        // bus.js 
        export default new Vue();
        //App.vue
        import Bus from './bus.js';


### 컴포넌트의 코드마저 재사용하는 하이오더 컴포넌트

- 리액트의 하이오더 컴포넌트에서 기원
- 컴포넌트의 로직을 재사용하는 기술


### Mixsins

- 믹스인은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법
- 믹스인에 정의할 수 있는 재사용 로직은
data, methods, created 등과 같은 컴포넌 트 옵션 

    
        // mixin
        export default {
            // 재사용할 컴포넌트 옵션 & 로직 
        }
        // hoc
        export default  function create(){
            // 재사용할 컴포넌트 옵션
            
        }

### 데이터 호출 시점

1. 라우터 네비게이션 가드 
    - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)

2. 컴포넌트 라이프 사이클 훅
    - created : (컴포넌트가 생성)되자마자 호출되는 로직 

### async_await 
 
 형식
 async + 함수
 await + 프로미스 객체 

         async loginUser1() {
        try {
          var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
          if (response.data.id === 1) {
            console.log("사용자가 인증되었습니다.");
            var list = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
            this.items = list.data;
          }
        } catch (error) {
          console.log(error);
          handleException(error); // 예외처리 함수 

        }

      },

async_await 에서 예외처리는
try-catch 문으로함 ( 네트워크 오류뿐만아니라 다양한 예외처리를 할 수 있음)


### 외부 라이브러리 모듈화
- 이유
    1) Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함
- 종류 
    1) 차트
    2) 데이트 피커
    3) 스피너
    4) 테이블 
    

### 컴포넌트 디자인 패턴
1. Common - 기본적인 컴포넌트 등록과 컴포넌트 통신
2. Slot - 마크업 확장이 가능한 컴포넌트
3. Controlled - 결합력이 높은 컴포넌트
4. Renderless - 데이터 처리 컴포넌트 
