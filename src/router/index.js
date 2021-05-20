import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Apt from '@/views/Apt.vue';
import Qna from '@/views/Qna.vue';
import Login from '@/views/Login.vue';
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
    path: '/login',
    name: 'Login',
    component: Login,
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
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
