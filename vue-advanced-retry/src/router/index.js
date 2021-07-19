import Vue from 'vue';
import VueRouter from 'vue-router';
// import createListView from '@/views/CreateListView';
Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/news',
			name: 'news',
			component: () => import('@/views/NewsView'),
			// component: createListView('NewsView'),
		},
		{
			path: '/ask',
			name: 'ask',
			component: () => import('@/views/AskView'),
			// component: createListView('AskView'),
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: () => import('@/views/JobsView'),
			// component: createListView('JobsView'),
		},
		{
			path: '/user/:id',

			component: () => import('@/views/UserView'),
		},
		{
			path: '/item/:id',
			component: () => import('@/views/ItemView'),
		},
	],
});
