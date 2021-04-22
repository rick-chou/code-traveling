import Vue from 'vue';
import VueRouter from 'vue-router';

import AddToDo from '../components/AddToDo.vue';
import ToDoList from '../components/ToDoList.vue';

Vue.use(VueRouter);

export default new VueRouter({
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
