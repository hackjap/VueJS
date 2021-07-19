import Vue from 'vue';
import Vuex from 'vuex';
import state from './Sidemenu/index';
import mutations from './mutations.js';
import actions from './actions.js';

//import ES6Promise from 'es6-promise';

//ES6Promise.polyfill();
Vue.use(Vuex);

export const store = new Vuex.Store({
	mutations,
	actions,
	state,

	// category,
	// goods,
});

export default store;
