import axios from 'axios';

// ** API 공통화 **
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

/**
 *  로그인/회원가입
 */

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
