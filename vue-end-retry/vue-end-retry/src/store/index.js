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
    isLogin(state) {
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
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },

  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      // Commit -> mutation - store 값 변경하기
      commit('setUsername', data.user.username);
      commit('setToken', data.token);
      // 쿠키에 값 저장
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);

      return data;
    },
  },
});
