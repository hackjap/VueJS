import axios from 'axios';
// import store from '@/store/index';
import { setInterceptors } from './common/interceptors';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
		// headers: {
		// 	Authorization: store.state.token,
		// },
	});
	return setInterceptors(instance);
}
const instance = createInstance();

function registerUser(userData) {
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}
export { registerUser, loginUser };
