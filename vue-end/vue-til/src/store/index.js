import Vue from 'vue';
import Vuex from 'vuex';
import {
	getAuthFromCookie,
	getUserFromCookie,
	saveAuthToCookie,
	saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api/auth';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
	},
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
		clearToken(state) {
			state.token = '';
		},
		setToken(state, token) {
			state.token = token;
		},
	},
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
});
