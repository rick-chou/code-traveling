import Vue from 'vue';
import VueRouter from 'vue-router';

import AddToDo from '../components/AddToDo.vue';
import ToDoList from '../components/ToDoList.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/add',
      component: AddToDo,
      name: 'AddToDo',
    },
    {
      path: '/list',
      component: ToDoList,
      name: 'ToDoList',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/add' || to.path === '/list') {
    next();
  } else {
    next('/add');
  }
});

export default router;
