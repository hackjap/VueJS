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
