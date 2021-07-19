import {
	fetchNewList,
	fetchJobsList,
	fetchAskList,
	fetchUserInfo,
	fetchItemInfo,
} from '@/api/index';
export default {
	async FETCH_NEWS({ commit }) {
		const { data } = await fetchNewList();
		commit('SET_NEWS', data);
		console.log(data);
		// return data;
	},
	async FETCH_ASK({ commit }) {
		const { data } = await fetchAskList();
		commit('SET_ASK', data);
	},
	async FETCH_JOBS({ commit }) {
		const { data } = await fetchJobsList();
		commit('SET_JOBS', data);
	},
	async FETCH_USER({ commit }, name) {
		const { data } = await fetchUserInfo(name);
		commit('SET_USER', data);
	},
	async FETCH_ITEM({ commit }, itemId) {
		const { data } = await fetchItemInfo(itemId);
		commit('SET_ITEM', data);
	},
};
