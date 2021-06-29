export default {
	deleteItem: (state, payload) => {
		let arr = state.menus.filter(data => {
			return payload.id != data.id;
		});
		state.menus = arr;
	},
	childrenDeleteItem: (state, payload) => {
		let arr = payload.items.childrens.filter(data => {
			return payload.id != data.id;
		});
		let id = payload.items.id;
		let menus = state.menus;
		menus.map(data => {
			if (data.id == id) {
				if (arr.length == 0) {
					delete data.childrens;
				} else {
					data.childrens = arr;
				}
			}
		});
		state.menus = [];
		state.menus = menus;
	},
	childrenSubmit: (state, payload) => {
		let menus = state.menus;
		menus.map(data => {
			if (data.id == payload.items.id) {
				if (payload.items.childrens == undefined) {
					data.childrens = new Array();
				}
				data.childrens.push(payload.obj);
			}
		});
		state.menus = [];
		state.menus = menus;
	},

	// 로그인(auth) 관련 mutation 입니다.
	setUsername(state, username) {
		state.auth.username = username;
	},
	clearUsername(state) {
		state.auth.username = '';
	},
	setToken(state, token) {
		state.auth.token = token;
	},
};
