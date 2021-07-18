import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '../views/LoginPage.vue';
// import SignupPage from '../views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage'),
    },
  ],
});
