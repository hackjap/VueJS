import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/news',
			name: 'news',
			component: () => import('@/views/NewsView'),
		},
		{
			path: '/ask',
			name: 'ask',
			component: () => import('@/views/AskView'),
		},
		{
			path: '/jobs',
			name: 'jobs',

			component: () => import('@/views/JobsView'),
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
