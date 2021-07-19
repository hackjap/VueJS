import { fetchNewList, fetchJobsList, fetchAskList } from '@/api/index';
export default {
	async FETCH_NEWS({ commit }) {
		const { data } = await fetchNewList();
		commit('SET_NEWS', data);
		return data;
	},
	async FETCH_ASK({ commit }) {
		const { data } = await fetchAskList();
		commit('SET_ASK', data);
		return data;
	},
	async FETCH_JOBS({ commit }) {
		const { data } = await fetchJobsList();
		commit('SET_JOBS', data);
		return data;
	},
};
