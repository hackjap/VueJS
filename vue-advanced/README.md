# Vue.js 완벽 가이드

Vue.js 완벽 가이드 인프런 강의 리포지토리입니다.

![vue.js 완벽 가이드 강의 썸네일](https://joshua1988.github.io/images/posts/web/inflearn/lv3.png)

## ESLint 끄는 방법

    /* eslint-disable */ : 컴포넌트 마다 라인을 추가해주어야 함

    // vue.config.js    : 전체에서 eslint를 끔
    module.exports = {
    lintOnSave : false

## 라우터 구현

    라우터 설치
        npm i vue-router --save
