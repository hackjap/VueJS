

## ESLint 에러기 화면에 표시되지 않게 하는 방법
    //vue.config.js
    module.exports = {
        devServer: {
            overlay: false,
        },
    };


### eslint pritter 설정으로 자동 정렬
eslint settings > eslint validate > package.json 

     "eslint.validate": [
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "javascript",
            "autoFix": true
        },
        {
            "language": "javascriptreact",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        },

    ],

    "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
    },
    
    "eslint.alwaysShowStatus": true,
    "eslint.workingDirectories": [
        {
            "mode": "auto"
        }
    ],

## prettier , formatter 설정끄기
    Ctrl + , (설정)에 들어가 format on save check 해제

## 파일의 절대 경로를 설정해야하는 이유 
파일의 레벨이 깊어질수록 경로가 복잡해진다.
따라서, 절대 경로로 찾기 설정 

    jsconfig.json(vscode 기능)에 basic url 설정 

    https://github.com/joshua1988/vue-til/blob/complete/jsconfig.json
    https://code.visualstudio.com/docs/languages/jsconfig

## 에플리케이션 코딩 컨벤션 및 뷰 스타일 가이드 소개

    vue style 가이드 문서 
    https://www.color-hex.com/color-palettes/popular.phpㄴ


## 화면 구성 
로그인
회원 가입
메인 
추가 / 수정


## 코드 스플릿팅 
	routes: [
		// {
		// 	path: '/signup',
		// 	component: (SignupPage),
		// },
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},

## vue router
    - redirect
    - callback 
    - history mode 
        production 배포 시 주의사항 : https://router.vuejs.org/guide/essentials/history-mode.html
  
        export default new VueRouter({
            mode: 'history',
            routes: [
                {
                    path: '/',
                    redirect: '/login',
                },
                {
                    path: '/login',
                    component: () => import('@/views/LoginPage.vue'),
                },
                {
                    path: '/signup',
                    component: () => import('@/views/SignupPage.vue'),
                },
                {
                    path: '*',
                    component: () => import('@/views/NotFoundPage.vue'),
                },
            ],
        });


## 회원가입 페이지 개발 

- async await  : https://joshua1988.github.io/web-development/javascript/js-async-await/
- es6 템플릿 리터럴(백틱) : https://joshua1988.github.io/es6-online-book/template-literal.html
- Destructuring : https://joshua1988.github.io/es6-online-book/destructuring.html


## 실무 환경을 위한 프로젝트 설정

### API 설정 공통화 

    const instance = axios.create({
        baseURL: 'http://localhost:3000/',
    });

    function registerUser(userData) {
        // const url = 'http://localhost:3000/signup';
        // return axios.post(url, userData);
        return instance.post('signup', userData);
    }


### env 파일과 설정 방법
    // .env
    VUE_APP_API_URL=http://localhost:3000/

    // index.js
    const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
    });