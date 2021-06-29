export default {
	// getter -> computed 와 유사 ( calculate )
	isLogin(state) {
		return state.auth.token !== '';
	},
};
