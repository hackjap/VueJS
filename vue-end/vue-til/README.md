

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


# 실무 환경을 위한 프로젝트 설정

## API 설정 공통화 

    const instance = axios.create({
        baseURL: 'http://localhost:3000/',
    });

    function registerUser(userData) {
        // const url = 'http://localhost:3000/signup';
        // return axios.post(url, userData);
        return instance.post('signup', userData);
    }


## env 파일과 설정 방법
    // .env
    VUE_APP_API_URL=http://localhost:3000/

    // index.js
    const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
    });

    vue cli env 파일 규칙 문서 
    https://cli.vuejs.org/guide/mode-and-env.html#modes

# 로그인 페이지 개발 

## 로그인 에러처리 
async-wait의 try-catch 문을 이용
    methods: {
		async submitForm() {
			try {
				// 비즈니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				console.log(data.user.username);
				this.logMessage = `${data.user.username} 님 환영합니다`;
				// this.initForm();
			} catch (error) {
				// 에러 핸들링할 코드
				console.log(error.response.data);
				this.logMessage = error.response.data;
				// this.initForm();
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},


## 사용자 폼 유효성 검사

    // src/utils/validate.js
        function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    export { validateEmail };

    // .vue
    computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},

    <button
        :disabled="!isUsernameValid || !password"
        type="submit"
        class="btn"
	>


# 로그인 상태 관리와 스토어 

## Programmatic Navigation 
- 공식문서 : https://router.vuejs.org/guide/essentials/navigation.html#programmatic-navigation

        // submitFrom()
    	this.$router.push('/main');

## 컴포넌트 간 데이터 전달 방법 3가지 ( 로그인 이후 동작 )
LoginFrom -> AppHeader
1. event -> event -> props
2. event bus
3. store (vuex)

## 스토어 구현 

    npm vuex : vuex 설치
    
    src / store / index.js 생성

    // index.js
    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex);

    export default new Vuex.Store({
	state: {
		username: '',
	},
    });

    // main.js
    import Vue from 'vue';
    import App from './App.vue';
    import router from '@/routes/index';
    import store from '@/store/index';

    Vue.config.productionTip = false;

    new Vue({
        render: h => h(App),
        router,
        store,s
    }).$mount('#app');


## 로그아웃 기능 

    // store/index.js
    getters: {
		// comupted와 유사
		isLogin(state) {
			// 로그인 된 경우
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
	},
    
    //AppHeader.vue
    methods: {
		logoutUser() {
			this.$store.commit('clearUsername');
			this.$router.push('/login');
		},
	},

# 

# 토큰을 이용한 API 인증 처리 

- Json Web 토큰 문서  : https://jwt.io/

## 엑시오스 인터셉터 

- 엑시오스 인터셉터 문서 : https://github.com/axios/axios#interceptors



## 브라우저 저장소를 통한 인증 값 관리 

 기존 state를 통해 로그인 세션을 관리할 시 새로고침을 하면 세션을 유지할 수 없었다.
 따라서 브라우저 저장소 중 쿠키를 이용하여 데이터(토큰,username)을 저장 

// utils/cookes.js 

    function saveAuthToCookie(value) {
        document.cookie = `til_auth=${value}`;
    }

// loginForm.vue

    const { data } = await loginUser(userData);
            console.log(data.token);
            this.$store.commit('setToken', data.token);
            this.$store.commit('setUsername', data.user.username);
            saveAuthToCookie(data.token);
            saveUserToCookie(data.user.username);

### Action 속성을 이용한 로그인 기능 구현과 비동기 처리 

 //loginForm.vue

	    await this.$store.dispatch('LOGIN', userData);

 //store/index.js

        actions: {
        async LOGIN({ commit }, userData) {
            const { data } = await loginUser(userData);
            console.log(data.token);
            commit('setToken', data.token);
            commit('setUsername', data.user.username);
            saveAuthToCookie(data.token);
            saveUserToCookie(data.user.username);
            return data;
        },
    },


## 학습 노트 데이터 생성

### 에러처리 

    		async submitForm() {
			try {
				const response = await createPost({
					title: this.title,
					contents: this.contents,
				});
				console.log(response);
			} catch (error) {
				console.log(error.response.data.message);
				this.logMessage = error.response.data.message;
			}
		},

        <p class="log">{{ logMessage }}</p>


 ### 유효성 검사
    
    computed: {
		isContentsValid() {
			return this.contents.length <= 200;
		},
	},

    <p class="validation-text warning" v-if="!isContentsValid">
						Contents length must be less than 200
					</p>



## API 함수 모듈화

// api/index.js

    function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

export const instance = createInstance();

// api/auth.js

    // 로그인, 회원가입, 회원 탈퇴
    import { instance } from '@/api/index';

    // 회원가입 API
    function registerUser(userData) {
        return instance.post('signup', userData);
    }

    export { registerUser, loginUser };




## 학습 노트 삭제


### 삭제 기능 UX 개선 

 - refersh를 통하여 fetchData를 한번 더 리로드 
 -  ItemPost 객체 업데이트
 
// MainPage.vue

    <PostListItem
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"
        @refresh="fetchData"
    ></PostListItem>

// postListItem.vue

	methods: {
		async deleteItem() {
			if (confirm('You want to delete it?')) {
				await deletePost(this.postItem._id);
				this.$emit('refresh');
			}
		},
	},

### 학습 노트 데이터 수정 

## Dynamic Route Matching(동적 라우트 매칭)

https://github.com/joshua1988/vue-til/blob/complete/src/components/common/ToastPopup.vue

## 데이터 포맷팅

## 뷰 필터 소개 

- 공식문서 : https://vuejs.org/v2/guide/filters.html#ad

    {{ postItem.createdAt | formatDate }}

    filters: {
		formatDate(value) {
			return new Date(value);
		},
	},

## 라우팅 심화

### 라우터 네비게이션 가드

- 공식문서 : https://router.vuejs.org/guide/advanced/navigation-guards.html

- 강의영상 : https://www.inflearn.com/course/vue-js/lecture/17055


    // export default new VueRouter
    const router = new VueRouter({})

    export default router;

- router 변수로 만들어 export 하여 전역으로 사용할 수 있도록 한다.

### 페이지별 인증 권한 설정 

// route/index.js

    	{
			path: '/main',
			component: () => import('@/views/Mainpage.vue'),
			meta: { auth: true },
		},

    
    // 이동할 페이지 , 현재 페이지, 다음 페이지로 넘거가도록 호출
    router.beforeEach((to, from, next) => {
        if (to.meta.auth && !store.getters.isLogin) {
            console.log('인증이 필요합니다.');
            next('/login');
            return; // 다음 next 호출을 막기위해
        }

        next();
    });