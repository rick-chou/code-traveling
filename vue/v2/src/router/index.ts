import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/index.vue';
import base from './base';
import v from './v';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  ...v,
  ...base,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
