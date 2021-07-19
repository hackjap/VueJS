import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
// import LoginPage from '../views/LoginPage.vue';
// import SignupPage from '../views/SignupPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
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
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage'),
      meta: { auth: true },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    return; // 다음 next() 호출을 방지
  }
  next();
});
export default router;
