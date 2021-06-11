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