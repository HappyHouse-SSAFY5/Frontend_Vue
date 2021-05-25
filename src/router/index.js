import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Apt from '@/views/Apt.vue';
import Mypage from '@/views/MyPage.vue';
import Qna from '@/views/Qna.vue';
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';
import FindInfo from '@/views/FindInfo.vue';
import Notice from '@/views/Notice.vue';
// import { LayoutPlugin } from 'bootstrap-vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/vuetest/',
  },
  {
    path: '/vuetest/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vuetest/apt',
    name: 'Apt',
    component: Apt,
  },
  {
    path: '/vuetest/about',
    name: 'About',
    component: About,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage,
  },
  {
    path: '/findinfo',
    name: 'FindInfo',
    component: FindInfo,
  },
  {
    path: '/qna',
    name: 'Qna',
    component: Qna,
    redirect: '/qna/list',
    children: [
      {
        path: 'list',
        name: 'qna-list',
        component: () => import('@/views/qna/list.vue'),
      },
      {
        path: 'regist',
        name: 'qna-regist',
        component: () => import('@/views/qna/register.vue'),
      },
      {
        path: 'modify/:id',
        name: 'qna-modify',
        component: () => import('@/views/qna/modify.vue'),
      },
    ],
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice,
    redirect: '/notice/list',
    children: [
      {
        path: 'list',
        name: 'notice-list',
        component: () => import('@/views/notice/list.vue'),
      },
      {
        path: 'regist',
        name: 'notice-regist',
        component: () => import('@/views/notice/register.vue'),
      },
      {
        path: 'modify/:articleno',
        name: 'notice-modify',
        component: () => import('@/views/notice/modify.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
