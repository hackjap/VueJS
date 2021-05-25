<div style="color:#42b983;" >

# 목차

</div>

## Chapter 1 : Vue.js로 구현하는 TodoApp

    1. vue cli 이용한 프로젝트 구성 방법

    2. 컴포넌트 기반 설계 방법

    3. 컴포넌트 구조화 및 컴포넌트 통신 방법

## Chapter 2 : Vue.js를 위한 ES6

    4. ES6를 이용한 효율적이고 간결한 뷰 코딩 방법

## Chapter 3 : 복잡한 애플리케이션 구현을 위한 Vuex

    5. Vuex를 이용한 상태 관리의 이해 및 적용 방법

   <br/>
   <br/>

<div style="color:#42b983;" >

# 요약 정리

</div>

## Vue.js로 구현하는 TodoApp

| 리펙토링

- 컴포넌트의 html 루트 요소는 한 개이어야 함
- app.vue 에서 데이터를 관리하고 나머지 컴포넌트에서는 최소한의 기능만 제공 ( 중앙집권화)
- 데이터를 효율적으로 사용하고 데이터 동기화에 적절함

| 사용자 경험 개선

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

     | const
        - 한번 선언한 값에 대해서 변경 X (상수 개념)
        - 하지만, 객체의 배열의 내부에는 변경할 수 있음

     | let
         한번 선언한 값에 대해서 다시 선언할 수 없음(값 변경은 가능)

     | example
        function f(){
            {
                let x;
                {
                    // 새로운 블록 안에 새로운 x 스코프가 생김
                    const x = "sneaky";
                    x = "foo"; // 위에 이미 const로 x를 선언했으므로 다시 값을 대입하면 에러 발생
                }
                // 이전 블록 범위로 돌아왔기 떄문에 'let x'에 해당하는 메모리 값을 대입
                x = "bar";
                let x = "inner"; // Uncaught SyntaxError : 한번 더 선언 x
            }
        }

### ES5 특징

    | 변수의 Scope
        - 기존 자바스크립트(ES5)는 { }에 상관없이 스코프가 설정됨

    | Hoisting
        - Hoisting 이란 선언한 함수와 변수를 해석기가 가장 상단에 있는 것처럼 인식되는 것.
        - js 해석기는 코드와 라인 순서와 관계 없이 함수선언식과 변수를 위한 메모리 공간을 먼저 확보.
        - 따라서, function a()와 var는 코드의 최상단으로 끌어 올려진 것(hoisted)처럼 보인다.
             ( 함수 표현식은 해당 x ,  ex) var = function() ... )

    | example
        var sum = 5;
        sum = sum + i;
        function sumAllNumbers() {
            // ...
        }
        var i =  10;

        => 자바스크립트는 다음과 같이 hoisitng 되어짐.

        // #1 함수 선언식과 변수 선언을 hosting
        var sum = 5;
        function() sumALlNumbers(){

        }
        var i;

        // #2 - 변수 대입 및 할당
        sum = 5;
        sum += i;
        i = 10;

### Arrow Function

    - 함수를 정의할 때 function 이라는 키워드를 사용하지 않고 => 로 대체
    - 흔히 사용하는 콜백 함수의 문법을 간결화




    | example

        // * 예시 1
        // ES5 함수 정의 방식
        var sum = function(a,b){
            return a + b;
        };
        // ES6 함수 정의 방식
        var sum = (a,b)=> {
            return a + b;
        }

        sum(10,20);

        // * 예시 2
        // ES5
        var arr = ["a","b","c"];
        arr.forEach(function(value){
            console.log(value); // a, b, c
        });
        //ES6
        var arr = ["a","b","c"];
        arr.forEach(value=> console.log(value)); // a, b, c

### Enhanced Object Literals - 향상된 객체 리터럴

    - 객체의 속성을 메서드로 사용할 때 function 예약어를 생략하고 생성 가능
    | example
        var dictionary = {
            words : 100,
            // ES5
            lookup : function(){
                console.log("find words");
            },
            // ES6
            lookup(){
                 console.log("find words");
            }
        }

    - 객체의 속성명과 값이 동일할 때 아래와 같이 축약 가능
    | example
        var figures = 10;
        var dictionary = {
            // figures :  figures,
            figures
        }

### Modules - 자바스크립트 모듈화 방법

    - 자바스크립트 모듈 로더 라이브러리(AMD, Commons JS) 기능을 js 언어 자체에서 지원
    - 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있음

    | 모듈화를 하는 이유는 ?
        - 재사용성이 뛰어난 어떤 기능들을 묶어서 필요할때만 가져다 쓸 수 있도록
        - java는 class나 package를 나눠지지만 기존 ES5 JS는 파일을 나누어도 Scope가 달라지지 않기 떄문에
          ES6애서 파일별로 Scope를 나누어 효율적으로 관리
        - 유효범위 차원에서 좀 더 안정성있는 코딩을 하기위해

    | example - default export
        // util.js
        export default function(x){
            return console.log(x);
        }
        // main.js
        import util from 'util.js';
        console.log(util); // function (x) {return console.log(x); }

        // app.js
        import log from 'util.js';
        console.log(log);
        log("hi");

<br/>

## Chapter 3 : 복잡한 애플리케이션 구현을 위한 Vuex

### 개요

    - 복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 Vuex 라이브러리 소개
    - Vuex 라이브러리의 등장배경인 Flux 패턴 소개
    - Vuex 라이브러리의 주요 속성인 stage, getters, mutations, actions 학습
    - Vuex를 더 쉽게 코딩할 수 있는 방법인 Helper 기능 소개
    - Vuex로 프로젝트를 구조화하는 방법과 모듈 구조화 방법 소개

### 목차

    - Vuex 라이브러리 소개
    - Flux 패턴 소개
    - Vuex 컨셉과 구조
    - Vuex 설치 및 시작하기
    - Vuex 기술 요소(state, getters, mutations, actions)
    - Vuex Helpers
    - Vuex로 프로젝트 구조화 및 모듈화하는 방법

### Vuex란?

- 무수히 많은 컴포넌트 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
- React의 Flux 패턴에서 기인함
- Vue.js 중고급 개발자로 성장하기 위한 필수 관문

### Flux란?

    - MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴 - Unidirectional data flow(일방향)

    Action -> Dispatcher -> Model -> View
    1. action : 화면에서 발생하는 이벤트 또는 사용자의 입력
    2. dispatcher : 데이터를 변경하는 방법, 메서드
    3. model : 화면에 표시할 데이터
    4. view : 사용자에게 비춰지는 화면

    | 1. MVC 패턴
        Controller ->   Model   <-->    View

        MVC 패턴의 문제점
            - 기능 추가 및 변경에 따라 생기는 문제점을 예축할 수가 없음 ex) facebook 채팅 화면
            - 앱이 복잡해지면서 생기는 업데이트 루프

    | 2. Flux 패턴
        Action  ->   Dispatcher   ->  Model   ->  View

        Flux 패턴의 단방향 데이터 흐름
            데이터의 흐름이 여러 갈래로 나뉘지 않고 단방향으로만 처리

### Vuex가 왜 필요한가?

    - 복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트 간에 데이터 전달이 어려워진다.

    | 이벤트 버스로 해결?
        - 어디서 이벤트를 보냈는지 혹은 어디서 이벤트를 받았는지 알기 어려움
        - 컴포넌트 간 데이터 전달이 명시적이지 않음

### Vuex로 해결할 수 있는 문제

    1. MVC 패턴에서 발생하는 구조적 오류
    2. 컴포넌트 간 데이터 전달 명시
    3. 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제

### Vuex 컨셉

    - State : 컴포넌트 간에 공유하는 데이터 ->  data()
    - View : 데이터를 표시하는 화면 -> template
    - Action : 사용자의 입력에 따라 데이터를 변경하는 -> methods
     State -> View -> Action -> State -> View -> Action -> State ...

### Vuex 구조

    - 컴포넌트(view) -> 비동기 로직(Action) -> 동기 로직(Mutations) -> 상태(State)

### Vuex 설치하기

- Vuex는 싱글 파일 컴포넌트 체계에서 NPM 방식으로 라이브러리를 설치하는게 좋다.

        // vuex 설치
        npm install vuex --save

        // Vuex 등록 - ./store/store.js에 작성
        import Vue from 'vue'
        import Vuex from 'vuex'

        Vue.use(Vuex)   // vuex를 전역으로 사용하고 싶을 때
        export const store = new Vuex.Store({

        });
        // main.js
        import {store} from './store/store'
        new Vue({
        el: '#app',
        store,
        render: h => h(App)
        })

  ※ ES6와 함께 사용해야 더많은 기능과 이점을 제공받을 수 있음

### Vuex 기술요소

    state : 여러 컴포넌트에 공유되는 데이터 data
    getter : 연산된 state 값을 접근하는 속성 computed
    mutations : state 값을 변경하는 이벤트 로직. 메서드 methods
    actions : 비동기 로직 처리를 선언하는 메서드 async methods

### state란?

- 여러 컴포넌트 간에 공유할 데이터 = 상태

        // Vue
        data : {
        message : 'Hello '
        }
        // Vuex
        state : {
        message : 'Hello'
        }

        // Vue
        <p>{{message}}</p>
        // Vuex
        <p>{{this.$store.state.message}}</p>

### getter란?

- state 값을 접근하는 속성이자 computed()처럼 미리 연산된 값을 접근하는 속성

        // store.js
        state : {
            num : 10
        },
        getters : {
            getNumber(state){
                return state.num;
            }
        }
        <p>{{this.$store.getters.getNumber}}</p>
        // 추후 helper함수에 의해 축약하여 사용됨

### mutations란?

- state의 값을 변경할 수 있는 '유일한 방법'이자 메소드
- mutation은 'commit()' 으로 동작시킨다.

        // store.js
        state : {num:10},
        mutations : {
            printNumbers(state){
                return state.num
            },
            sumNumbers(state, anotherNum){
                return state.num + anotherNum;
            }
        }
        // App.vue
        this.$store.commit('printNumbers');     //10
        this.$store.commit('sumNumbers',20);    //30 -> 첫번째 인자는 state

### mutation의 commit() 형식

- state를 변경하기 위해 mutations를 동작시킬 때 인자(payload)를 전달할 수 있음

        // store.js
        state : {storeNum : 10},
        mutations : {
            modifyState(state,payload){
                console.log(payload.str);
                return state.storeNum += payload.num;
            }
        }
        // App.vue
        this.$store.commit('modifyState',{
            str : 'passed from payload',
            num : 20    // key,value 형태로 전달도 가능
        });

### state는 왜 직접 변경하지 않고 mutations로 변경할까?

---

- 여러 개의 컴포넌트에서 아래와 같이 state 값을 변경하는 경우 어느 컴포넌트에서 해당 state를 변경했는지 추적하기가 어렵다

        methods:{
            increaseCounter(){this.$store.state.counter++}
        }

- 특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한 건지 확인하기 어렵기 때문
- 따라서, 뷰의 반응성을 거스르지 않게 명시적으로 상태 변화를 수행. " 반응성, 디버깅, 테스팅 혜택 ".

<br/>

### actions란?

---

- 비동기 처리 로직을 선언하는 메서드. 비동기 로직을 담당하는 mutations
- 데이터 요청, Promise, ES6 async과 같은 비동기 처리는 모두 actions에 선언

        // store.js
        state : {
            num : 10
        },
        mutations: {
            doubleNumber(state){
                state.num * 2;
            }
        },
        actions : {
            delayDoubleNumber(context){ // context로 store의 메서드와 속성 접근
                context.commit('doubleNumber);
            }
        }
        // App.vue
        this.$store.dispatch('delayDoubleNumber');

- actions 비동기 코드 예제 1

        // store.js
        mutations: {
            addCounter(state){
                state.counter++
            }
        },
        actions : {
            delayedAddCounter(context){ // context로 store의 메서드와 속성 접근
                setTimeout( () => context.commit('addCounter'),2000);
            }
        }
        // App.vue
        methods:{
            incrementCounter(){
                this.$store.dispatch('delayedAddCounter');
            }
        }
        this.$store.dispatch('delayDoubleNumber');

- actions 비동기 코드 예제 2

        // store.js
        mutations : {
            setDate(state,fetchedData){
                state.product = fetchedData;
            }
        },
        actions : {
            fetchProductData(context){
                return axios.get('http://domain.com/products/1')
                            .then(response => context.commit('setData',response));
            }
        }
        // App.vue
        methods: {
            getProduct(){
                this.$store.dispatch('fetchProductData');
            }
        }

### 왜 비동기 처리 로직은 actions에 선언해야 할까?

- 언제 어느 컴포넌트에서 해당 state를 호출하고, 변경했는지 확인하기가 어려움
- 결론 : state 값의 변화를 추적하기 어렵기 때문에 mutations 속성에는 동기 처리 로직만 넣어야 한다.

## 각 속성들을 더 쉽게 사용하는 방법 - Helper

Store에 있는 아래 4가지 속성들을 간편하게 코딩하는 방법

- state -> mapState
- getters -> mapGetters
- mutations -> mapMutations
- actions -> mapActions

### 헬퍼의 사용법

- 헬퍼를 사용하고자 하는 vue파일에서 아래와 같이 해당 헬퍼를 코딩

        //App.vue
        import{mapState} from 'vuex'
        import{mapGetters} from 'vuex'
        import{mapMutations} from 'vuex'
        import{mapActions from 'vuex'

        export default {
        computed() { ... mapState(['num']), ...mapGetters(['countedNum']) },
        methods : { ...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn']) }
        }

- ' ... ' 는 ES6의 Object Spread Operator
  let josh = {
  field: 'web',
  language: 'js'
  };
  let developer = {
  nation:'korea',
  ...josh
  };

        console.log(developer);

### mapState

- Vuex에 선언한 state 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

  //App.vue
  import { mapState } from 'vuex'

  computed(){
  ...mapState(['num'])
  // num() { return this.$store.state.num;}
  }

  // store.js
  state : {
  num : 10
  }

    <!-- <p>{{ this.$store.state.num }} </p>  -->
    <p> {{this.num}} </p>

### mapGetters

- Vuex에 선언한 getter 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

         // App.vue
        import { mapGetters } from 'vuex'

        computed() { ...mapGetters(['reverseMessage'])}

        // store.js
        getters : {
            reverseMesage(state){
                return  state.msg.split('').reverse().join(');
            }
        }

        <!-- <p>{{ this.$store.getters.reverseMessage }}</p> -->
        <p> {{ this.reverseMessage }} </p>

- Spread Operator를 사용하는 이유는 기존의 컴포넌트의 존재하는 cumputed 속성과 mapGetter를 함께 사용하기 위해서이다.

| 뷰에서 권고하는 스타일 가이드

    - 템플릿안에서는 최대한 깔끔하게 정의하고 필요한 연산들은 스크립트 안(컴포넌트의 내부로직)에서 함

### mapMutations

- Vuex에서 선언한 mutations 속성을 뷰 컴포넌트애 더 쉽게 연결해주는 헬퍼

        // App.vue
        methods: {
            ...mapMutations(['clickBtn']),
            authLogin(){},
            displayTable(){}
        }

        // store.js
        mutations : {
            clickBtn(state){
                alert(state.msg);
            }
        }

        <button @click="clickBtn">popup message </button>

### mapActions

- Vuex에 선언한 actions 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
  //App.vue
  import { mapActions } from 'vuex'

        methods : {
            ...mapActions(['delayChickBtn']),
        }

        // store.js
        actions : {
            delayClickBtn(context){
                setTimeout(() => context.commit('clickBtn'),2000)
            }
        }

        <button @click="delayClickBtn"> deloay popop message </button>

### 헬퍼의 유연한 문법

- Vuex에 선언된 속성을 그대로 컴포넌트에 연결하는 문법

        // 배열 리터럴
        ... mapMutations([
            'clickBtn', // 'clickBtn' : clickBtn
            'addNumber' // addNumber(인자)
        ])

- Vuex에 선언한 속성을 컴포넌트의 특정 메서드에다가 연결하는 문법

        // 객체 리터럴
        ... mapMutatinos({
            popMsg : 'clickBtn' // 컴포넌트 메서드 명 : Store의 뮤테이션 명
        })

- 컴포넌트의 메서드명과 뮤테이션 명이 같을 경우 배열로 , 다를 경우 객체로 연결

## 프로젝트 구조화와 모듈화

### 프로젝트 구조화와 모듈화 방법 1

---

- 아래와 같은 store 구조를 어떻게 모듈화 할 수 있을까?

        // store.js
        import Vue from 'vue'
        import Vuex from 'vuex'

        export const sotre = new Vuex.Store({
        state : {},
        getters : {}.
        mutations : {},
        actions : {}
        });
        // 힌트! Vuex.Store({})의 속성을 모듈로 연결

        | ES6의 Import & Export를 이용하여 속성별로 모듈화
        import Vue from 'vue'
        import Vuex from 'vuex'
        import * as getters from 'store/getter.js'
        import * as mutations from 'store/mutations.js'
        import * as actions from 'store/actions.js'

        export const sotre = new Vuex.Store({
        state : {},
        getters : getters,
        mutations : mutations,
        actions : actions
        });

## 프로젝트 구조화와 모듈화 방법 2

- 앱이 비대해져서 1개의 store로는 관리가 힘들 떄 mudules 속성 사용

        // store.js
        import Vue from 'vue'
        import Vuex from 'vuex'
        import todo from 'modules/todo.js'

        export const store = new Vuex.Store({
            modules : {
                moduleA : todo, // 모듈 명칭 : 모듈 파일명
                todo // todo:todo
            }
        })

        // todo.js
        const state = {}
        const getters = {}
        const mutations = {}
        const actions = {}

| export default의 차이?

        default는 한개의 파일에서 하나만 추출되는 것을 의미

  <br/>

<div style="color:#42b983;" >

# 명령어

</div>

### vue CLI

    cd vue-todo
    npm run serve
    vue create vue-todo : vue cli 프로젝트 생성

    JSON.stringfy(obj); : JSON객체 -> 문자열
    JSON.parse : 문자열 -> JSON 객체
    scoped : 해당 컴포넌트에만 스타일 적용

    v-bind:내려보낼 프롭스 속성 이름 : v-bind:propsdata="todoItems"
    v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 ="현재 컴포넌트의 메서드 명 " :

### VSC

    ctrl + shift + p : palete
    ctrl + d : 동일한 문자 선택

<br/>
<div style="color:#42b983;" >

# 참고 사이트

</div>

- https://fontawesome.com/icons/check?style=solid 아이콘 라이브러리 제공
- https://babeljs.io/docs/en/ : js es6 document
- vuejs.org : vueJS document
- JSbin : 웹에서 자바스크립트를 실습
