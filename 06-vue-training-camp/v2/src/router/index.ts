import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './home';
import base from './base';
import v from './v';
import vuex from './vuex';
import routers from './vue-router';

Vue.use(VueRouter);

const routes = [...home, ...v, ...base, ...vuex, ...routers];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
