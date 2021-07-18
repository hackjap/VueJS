// ** 로그인, 회원가입 ( 사용자 계정 관련 API )

import { instance } from './index';
// 로그인 API
function registerUser(userData) {
  return instance.post('signup', userData);
}
// 회원가입 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
